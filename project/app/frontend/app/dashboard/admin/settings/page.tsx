'use client';

import DashboardLayout from '@/components/DashboardLayout';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    maintenanceMode: false,
    emailNotifications: true,
    twoFactorAuth: false,
    autoBackup: true,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    toast.success('Setting updated successfully.');
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="font-display text-display text-primary mb-2">System Settings</h1>
        <p className="font-body-md text-on-surface-variant">Manage global platform configurations.</p>
      </div>

      <div className="bg-white/70 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-sm max-w-3xl">
        <div className="space-y-6">
          
          <div className="flex items-center justify-between p-4 bg-white/50 border border-white/30 rounded-2xl">
            <div>
              <h3 className="font-headline-md text-primary">Maintenance Mode</h3>
              <p className="font-body-sm text-on-surface-variant">Disable patient access during system updates.</p>
            </div>
            <button 
              onClick={() => handleToggle('maintenanceMode')}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors ${settings.maintenanceMode ? 'bg-error' : 'bg-surface-variant'}`}
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${settings.maintenanceMode ? 'translate-x-6' : ''}`}></div>
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/50 border border-white/30 rounded-2xl">
            <div>
              <h3 className="font-headline-md text-primary">Email Notifications</h3>
              <p className="font-body-sm text-on-surface-variant">Send automated emails for appointments.</p>
            </div>
            <button 
              onClick={() => handleToggle('emailNotifications')}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors ${settings.emailNotifications ? 'bg-success' : 'bg-surface-variant'}`}
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${settings.emailNotifications ? 'translate-x-6' : ''}`}></div>
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/50 border border-white/30 rounded-2xl">
            <div>
              <h3 className="font-headline-md text-primary">Require 2FA for Staff</h3>
              <p className="font-body-sm text-on-surface-variant">Mandate two-factor authentication for all doctors and admins.</p>
            </div>
            <button 
              onClick={() => handleToggle('twoFactorAuth')}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors ${settings.twoFactorAuth ? 'bg-success' : 'bg-surface-variant'}`}
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${settings.twoFactorAuth ? 'translate-x-6' : ''}`}></div>
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/50 border border-white/30 rounded-2xl">
            <div>
              <h3 className="font-headline-md text-primary">Automated Database Backups</h3>
              <p className="font-body-sm text-on-surface-variant">Perform daily snapshots of all clinical records.</p>
            </div>
            <button 
              onClick={() => handleToggle('autoBackup')}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors ${settings.autoBackup ? 'bg-success' : 'bg-surface-variant'}`}
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${settings.autoBackup ? 'translate-x-6' : ''}`}></div>
            </button>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}
