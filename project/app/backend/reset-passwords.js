const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const MONGO_URI = 'mongodb://127.0.0.1:27017/hlapp_db';

async function updatePasswords() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    const roles = ['Admin', 'Doctor', 'Patient'];
    
    for (const role of roles) {
      const user = await User.findOne({ role });
      if (user) {
        user.password = hashedPassword;
        user.isVerified = true;
        await user.save();
        console.log(`${role} updated: ${user.email} / password123`);
      } else {
        console.log(`No user found for role: ${role}`);
      }
    }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
}

updatePasswords();
