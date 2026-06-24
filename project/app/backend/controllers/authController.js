const User = require('../models/User');
const DoctorProfile = require('../models/DoctorProfile');
const PatientProfile = require('../models/PatientProfile');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sendEmail = require('../utils/sendEmail');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  const { 
    name, email, password, role, 
    specialty, schedule, contactInfo, // For Doctor
    age, medicalHistory, bloodType, allergies, chronicIllnesses, pastSurgeries, familyHistory // For Patient
  } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || 'Patient',
      isVerified: false,
      otp,
      otpExpires
    });

    if (user) {
      // Create associated profile
      if (user.role === 'Doctor') {
        await DoctorProfile.create({
          user: user._id,
          specialty: specialty || 'General Practice',
          schedule: schedule && schedule.length > 0 ? schedule : [
            { day: 'Monday', slots: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'] },
            { day: 'Tuesday', slots: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'] },
            { day: 'Wednesday', slots: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'] },
            { day: 'Thursday', slots: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'] },
            { day: 'Friday', slots: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'] }
          ],
          contactInfo: contactInfo || 'Not provided'
        });
      } else if (user.role === 'Patient') {
        await PatientProfile.create({
          user: user._id,
          age: age || 18,
          medicalHistory: medicalHistory || 'No prior history provided',
          bloodType: bloodType || 'Not specified',
          allergies: Array.isArray(allergies) ? allergies : [],
          chronicIllnesses: Array.isArray(chronicIllnesses) ? chronicIllnesses : [],
          pastSurgeries: Array.isArray(pastSurgeries) ? pastSurgeries : [],
          familyHistory: familyHistory || 'Not specified'
        });
      }

      try {
        await sendEmail({
          email: user.email,
          subject: 'lifeCore Verification Code',
          message: `Your verification code is: ${otp}\nIt will expire in 10 minutes.`,
          html: `
<div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
  <div style="background: linear-gradient(135deg, #0051d5, #4fdbc8); padding: 30px 20px; text-align: center;">
    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">lifeCore</h1>
    <p style="margin: 5px 0 0; color: rgba(255,255,255,0.9); font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Concierge Medical</p>
  </div>
  
  <div style="padding: 40px 30px; background-color: #ffffff; text-align: center;">
    <h2 style="color: #1a1f36; margin: 0 0 20px; font-size: 22px; font-weight: 600;">Verify Your Email Address</h2>
    
    <p style="color: #3c4257; font-size: 16px; line-height: 1.6; margin: 0 0 30px;">
      Welcome to lifeCore! To complete your registration, please use the verification code below. This code will expire in 10 minutes.
    </p>
    
    <div style="background-color: #f7f9fb; border-radius: 8px; padding: 25px; margin-bottom: 30px; border: 2px dashed #0051d5;">
      <div style="font-size: 36px; font-weight: 700; color: #0051d5; letter-spacing: 8px;">${otp}</div>
    </div>
    
    <p style="color: #697386; font-size: 14px; line-height: 1.5; margin: 0;">
      If you did not attempt to register an account with lifeCore, please ignore this email.
    </p>
  </div>
  
  <div style="background-color: #f7f9fb; padding: 20px; text-align: center; border-top: 1px solid #eaeaea;">
    <p style="margin: 0; color: #a3acb9; font-size: 12px;">
      &copy; ${new Date().getFullYear()} lifeCore Concierge. All rights reserved.
    </p>
  </div>
</div>
          `
        });
      } catch (emailErr) {
        console.error('Email error:', emailErr);
      }

      res.status(201).json({
        message: 'Registration successful. Please verify your email with the OTP sent.',
        email: user.email,
        role: user.role
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      if (!user.isVerified) {
        return res.status(401).json({ message: 'Please verify your email first' });
      }

      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id)
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Verify OTP
// @route   POST /api/auth/verify-otp
// @access  Public
const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.isVerified) {
      return res.status(400).json({ message: 'User is already verified' });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    if (user.otpExpires < Date.now()) {
      return res.status(400).json({ message: 'OTP has expired' });
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save();
    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser, getUserProfile, verifyOTP, resetPassword };
