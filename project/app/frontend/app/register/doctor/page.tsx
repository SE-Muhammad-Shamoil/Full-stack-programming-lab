'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function DoctorRegistrationPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [registeredEmail, setRegisteredEmail] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    specialization: 'General Practice',
    experience: '',
    qualifications: ''
  });

  const allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [selectedDays, setSelectedDays] = useState<string[]>(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']);
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:00');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const toggleDay = (day: string) => {
    setSelectedDays(prev => 
      prev.includes(day) 
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const schedule = selectedDays.map(day => ({
      day,
      slots: [`${startTime} - ${endTime}`]
    }));

    if (schedule.length === 0) {
      toast.error('Please select at least one available day.');
      setIsLoading(false);
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: 'Doctor',
      specialty: formData.specialization,
      contactInfo: formData.email,
      schedule
    };

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Registration successful! Please verify your email.');
        setRegisteredEmail(formData.email);
        setShowOTPModal(true);
      } else {
        toast.error(data.message || 'Registration failed');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: registeredEmail, otp }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success('Email verified successfully! Please login.');
        router.push('/login');
      } else {
        toast.error(data.message || 'Verification failed');
      }
    } catch (error) {
      toast.error('An error occurred during verification. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface flex flex-col selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <Link href="/" className="text-headline-md font-headline-md font-bold text-primary">lifeCore</Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md active:scale-95 transition-transform duration-200">
              Secure Login
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16 flex flex-col items-center justify-center py-20 relative">
        {/* Background Image styling replacing inline CSS */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(247, 249, 251, 0.4), rgba(247, 249, 251, 0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwha5NsY5nOIZYmldmpDpbMJOoqrvD_vK85ABzbOEApgIXDT3MEZyNJRY0SBJ-BS99S2x_FmBryvBoq3KQhWWJn8slQ1pujM9d0nRmLXo7uYwyG4UXQ31L-HF5c_bkDe7gYIc31fPm9P_IGPl_yCjNmUeB16Mwgb6tKcH3Nnk6ZG_Efd6L6Wvo9t-QWYuxgbb5kbDK3cNvqRoVXI-Q7sixDMX0RbeXi26jFQs4ghOhYfoAqpwWPymLmipyrdgwrW4x5BgTWTW2-BOu')`
          }}
        />

        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full relative z-10">
          {/* Hero Content */}
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h1 className="font-display text-display text-primary leading-tight">Join our Elite Medical Network</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Partner with lifeCore Concierge to provide world-class medical care through our innovative, high-tech patient platform.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Registration Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
              
              {/* Left Card: Personal Details */}
              <div className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-sm p-10 rounded-xl animate-fade-in">
                <div className="flex items-center gap-3 mb-8">
                  <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Personal Details</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    <div className="space-y-2">
                      <label className="text-label-md font-label-md text-on-surface-variant font-semibold">Full Name</label>
                      <input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-surface-container-lowest border border-outline-variant p-3 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none" 
                        placeholder="Dr. Jane Doe" 
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-label-md font-label-md text-on-surface-variant font-semibold">Email Address</label>
                      <input 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-surface-container-lowest border border-outline-variant p-3 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none" 
                        placeholder="jane.doe@truhealth.com" 
                        type="email"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-label-md font-label-md text-on-surface-variant font-semibold">Password</label>
                    <input 
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-container-lowest border border-outline-variant p-3 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none" 
                      placeholder="••••••••" 
                      type="password"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    <div className="space-y-2">
                      <label className="text-label-md font-label-md text-on-surface-variant font-semibold">Specialization</label>
                      <select 
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant p-3 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none"
                      >
                        <option value="Cardiology">Cardiology</option>
                        <option value="Neurology">Neurology</option>
                        <option value="General Practice">General Practice</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Oncology">Oncology</option>
                        <option value="Orthopedics">Orthopedics</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-label-md font-label-md text-on-surface-variant font-semibold">Experience (Years)</label>
                      <input 
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        min="0"
                        className="w-full bg-surface-container-lowest border border-outline-variant p-3 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none" 
                        placeholder="10" 
                        type="number"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-label-md font-label-md text-on-surface-variant font-semibold">Qualifications</label>
                    <textarea 
                      name="qualifications"
                      value={formData.qualifications}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface-container-lowest border border-outline-variant p-3 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all outline-none resize-none" 
                      placeholder="MD, Ph.D. from Harvard Medical School... (comma separated)" 
                      rows={3}
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Right Card: Schedule Availability */}
              <div className="bg-white/70 backdrop-blur-xl border border-white/30 shadow-sm p-10 rounded-xl flex flex-col animate-fade-in" style={{animationDelay: '100ms'}}>
                <div className="flex items-center gap-3 mb-8">
                  <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Schedule Availability</h2>
                </div>
                
                <div className="space-y-8 flex-grow">
                  {/* Days Selector */}
                  <div className="space-y-4">
                    <p className="text-label-md font-label-md text-on-surface-variant font-semibold">Available Days</p>
                    <div className="flex flex-wrap gap-2">
                      {allDays.map(day => (
                        <button 
                          key={day}
                          type="button"
                          onClick={() => toggleDay(day)}
                          className={`px-4 py-2 rounded-full border border-outline-variant text-label-md font-semibold transition-all ${
                            selectedDays.includes(day) 
                              ? 'bg-[#0051d5] text-white' 
                              : 'bg-surface-container-lowest text-on-surface'
                          }`}
                        >
                          {day.substring(0, 3)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selector */}
                  <div className="grid grid-cols-2 gap-gutter">
                    <div className="space-y-2">
                      <label className="text-label-md font-label-md text-on-surface-variant font-semibold">Start Time</label>
                      <input 
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        required
                        className="w-full bg-surface-container-lowest border border-outline-variant p-3 rounded-lg outline-none" 
                        type="time" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-label-md font-label-md text-on-surface-variant font-semibold">End Time</label>
                      <input 
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required
                        className="w-full bg-surface-container-lowest border border-outline-variant p-3 rounded-lg outline-none" 
                        type="time" 
                      />
                    </div>
                  </div>

                  {/* Slot Visualization */}
                  <div className="space-y-4">
                    <p className="text-label-md font-label-md text-on-surface-variant font-semibold">Day Slot Visualization (1-hour blocks)</p>
                    <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
                      <div className="relative h-12 flex items-center bg-white rounded-lg border border-outline-variant/20 overflow-hidden">
                        <div className="absolute inset-y-0 left-0 bg-secondary/10 border-r border-secondary/20 w-[15%] flex items-center justify-center text-[10px] text-secondary font-bold uppercase tracking-wider">Prep</div>
                        <div className="absolute inset-y-0 left-[15%] bg-secondary w-[60%] flex items-center justify-center text-[10px] text-white font-bold uppercase tracking-wider">Active Consultation</div>
                        <div className="absolute inset-y-0 left-[75%] bg-surface-container-highest w-[25%] flex items-center justify-center text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">Break</div>
                      </div>
                      <div className="flex justify-between mt-2 px-1 text-[10px] text-outline font-medium">
                        <span>09:00 AM</span>
                        <span>11:00 AM</span>
                        <span>01:00 PM</span>
                        <span>03:00 PM</span>
                        <span>05:00 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Registration Actions */}
                  <div className="pt-6 space-y-4">
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-primary text-on-primary py-4 rounded-lg font-headline-md shadow-lg hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50"
                    >
                      {isLoading ? 'Registering...' : 'Register as Doctor'}
                    </button>
                    <p className="text-center text-label-md text-on-surface-variant">
                      Already have an account? <Link href="/login" className="text-secondary font-bold hover:underline">Login</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-surface-container-lowest border-t border-outline-variant relative z-10 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-gutter">
          <div className="font-display text-headline-md font-bold text-primary">lifeCore</div>
          <div className="flex flex-wrap justify-center gap-8 font-body-md text-label-sm font-label-sm">
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Service</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">HIPAA Compliance</a>
          </div>
          <p className="text-label-sm font-label-sm text-on-surface-variant">
            © 2026 lifeCore Concierge. All rights reserved.
          </p>
        </div>
      </footer>

      {/* OTP Modal */}
      {showOTPModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md"></div>
          <div className="relative z-10 bg-surface border border-white/20 rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">
            <h2 className="font-display text-2xl text-primary mb-4">Verify Your Email</h2>
            <p className="text-on-surface-variant mb-6">
              We've sent a 6-digit verification code to <span className="font-bold">{registeredEmail}</span>.
            </p>
            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div>
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full text-center text-2xl tracking-widest bg-surface-container-lowest border border-outline-variant p-4 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                  placeholder="------"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || otp.length !== 6}
                className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline-md shadow-lg hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {isLoading ? 'Verifying...' : 'Verify Email'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
