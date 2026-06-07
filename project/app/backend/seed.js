const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const DoctorProfile = require('./models/DoctorProfile');
const PatientProfile = require('./models/PatientProfile');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const pakistaniNamesFirst = ['Ali', 'Fatima', 'Muhammad', 'Ayesha', 'Ahmed', 'Zainab', 'Usman', 'Hassan', 'Hussain', 'Zahra', 'Bilal', 'Maryam', 'Omer', 'Khadija', 'Tariq', 'Sana', 'Kamran', 'Nida', 'Faisal', 'Sadia'];
const pakistaniNamesLast = ['Khan', 'Ahmed', 'Ali', 'Shah', 'Qureshi', 'Raza', 'Malik', 'Hussain', 'Bukhari', 'Tariq', 'Iqbal', 'Siddiqui', 'Javed', 'Mahmood'];

const specialties = ['Cardiology', 'Neurology', 'Orthopedics', 'General Practice', 'Dermatology', 'Pediatrics', 'Oncology', 'Psychiatry'];

const getRandomName = () => {
  const first = pakistaniNamesFirst[Math.floor(Math.random() * pakistaniNamesFirst.length)];
  const last = pakistaniNamesLast[Math.floor(Math.random() * pakistaniNamesLast.length)];
  return `${first} ${last}`;
};

const importData = async () => {
  try {
    await User.deleteMany();
    await DoctorProfile.deleteMany();
    await PatientProfile.deleteMany();

    // Create Admin
    const salt = await bcrypt.genSalt(10);
    const hashedAdminPassword = await bcrypt.hash('admin123', salt);
    await User.create({
      name: 'Admin User',
      email: 'admin@hlapp.com',
      password: hashedAdminPassword,
      role: 'Admin'
    });

    // Create 15 Doctors
    const hashedDoctorPassword = await bcrypt.hash('doctor123', salt);
    const doctorUsers = [];
    for (let i = 0; i < 15; i++) {
      const name = getRandomName();
      const user = await User.create({
        name: `Dr. ${name}`,
        email: `doctor${i + 1}@hlapp.com`,
        password: hashedDoctorPassword,
        role: 'Doctor'
      });
      doctorUsers.push(user);
      
      await DoctorProfile.create({
        user: user._id,
        specialty: specialties[Math.floor(Math.random() * specialties.length)],
        availability: 'Mon-Fri 9AM-5PM',
        contactInfo: `0300-${Math.floor(1000000 + Math.random() * 9000000)}`
      });
    }

    // Create 15 Patients
    const hashedPatientPassword = await bcrypt.hash('patient123', salt);
    for (let i = 0; i < 15; i++) {
      const user = await User.create({
        name: getRandomName(),
        email: `patient${i + 1}@hlapp.com`,
        password: hashedPatientPassword,
        role: 'Patient'
      });

      await PatientProfile.create({
        user: user._id,
        age: Math.floor(Math.random() * 60) + 18,
        medicalHistory: 'No major prior conditions.',
        assignedDoctor: doctorUsers[Math.floor(Math.random() * doctorUsers.length)]._id
      });
    }

    console.log('Data Imported successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

importData();
