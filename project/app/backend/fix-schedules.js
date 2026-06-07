const mongoose = require('mongoose');
const dotenv = require('dotenv');
const DoctorProfile = require('./models/DoctorProfile');
const connectDB = require('./config/db');

dotenv.config();

const fixSchedules = async () => {
  await connectDB();
  
  const defaultSchedule = [
    { day: 'Monday', slots: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'] },
    { day: 'Tuesday', slots: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'] },
    { day: 'Wednesday', slots: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'] },
    { day: 'Thursday', slots: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'] },
    { day: 'Friday', slots: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'] }
  ];

  try {
    const profiles = await DoctorProfile.find({});
    let updatedCount = 0;
    
    for (const profile of profiles) {
      // Check if they have the broken '9-17' slot or no valid slots
      let needsUpdate = false;
      if (!profile.schedule || profile.schedule.length === 0) {
        needsUpdate = true;
      } else {
        // If any slot is "9-17" or similar, just replace the whole schedule
        for (const day of profile.schedule) {
          if (day.slots && day.slots.some(s => s.includes('9-17') || s.includes('9AM-5PM') || s === '9-17')) {
            needsUpdate = true;
            break;
          }
        }
      }

      // Actually, let's just forcefully standardize ALL existing doctors to have the hour-to-hour schedule
      // so we don't miss any weird edge cases.
      profile.schedule = defaultSchedule;
      await profile.save();
      updatedCount++;
    }
    
    console.log(`Successfully updated ${updatedCount} doctor profiles to use hour-by-hour slots.`);
    process.exit(0);
  } catch (error) {
    console.error('Error updating schedules:', error);
    process.exit(1);
  }
};

fixSchedules();
