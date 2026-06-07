'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';

export default function PatientRegistrationPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [registeredEmail, setRegisteredEmail] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    phone: '',
    bloodGroup: '',
    allergies: ''
  });
  
  const [chronicDiseases, setChronicDiseases] = useState<string[]>(['']);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleDiseaseChange = (index: number, value: string) => {
    const newDiseases = [...chronicDiseases];
    newDiseases[index] = value;
    setChronicDiseases(newDiseases);
  };

  const addDiseaseField = () => {
    setChronicDiseases([...chronicDiseases, '']);
  };

  const removeDiseaseField = (index: number) => {
    const newDiseases = [...chronicDiseases];
    newDiseases.splice(index, 1);
    setChronicDiseases(newDiseases);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Filter out empty disease fields
    const filteredDiseases = chronicDiseases.filter(d => d.trim() !== '');

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: 'Patient',
      age: parseInt(formData.age),
      bloodType: formData.bloodGroup,
      allergies: formData.allergies.split(',').map(a => a.trim()).filter(a => a !== ''),
      chronicIllnesses: filteredDiseases
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
    <div className="min-h-screen flex flex-col font-body-md text-on-surface bg-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <Link href="/" className="text-headline-md font-headline-md font-bold text-primary">lifeCore</Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="px-6 py-2 bg-primary text-on-primary rounded-full font-label-md hover:opacity-90 active:scale-95 transition-all duration-200">
              Secure Login
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-24 pb-12 relative overflow-hidden">
        {/* Ambient Healthcare Background */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <img 
            className="w-full h-full object-cover" 
            alt="Healthcare background" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwha5NsY5nOIZYmldmpDpbMJOoqrvD_vK85ABzbOEApgIXDT3MEZyNJRY0SBJ-BS99S2x_FmBryvBoq3KQhWWJn8slQ1pujM9d0nRmLXo7uYwyG4UXQ31L-HF5c_bkDe7gYIc31fPm9P_IGPl_yCjNmUeB16Mwgb6tKcH3Nnk6ZG_Efd6L6Wvo9t-QWYuxgbb5kbDK3cNvqRoVXI-Q7sixDMX0RbeXi26jFQs4ghOhYfoAqpwWPymLmipyrdgwrW4x5BgTWTW2-BOu" 
          />
        </div>

        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="font-display text-headline-lg md:text-display text-primary mb-2">Join lifeCore Concierge</h1>
            <p className="font-body-md text-on-surface-variant max-w-lg mx-auto">Complete your registration to access personalized health insights and world-class medical support.</p>
          </div>

          {/* Registration Form Container */}
          <form className="space-y-gutter" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              
              {/* Personal Details Card */}
              <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_4px_20px_-4px_rgba(0,81,213,0.04)] p-8 rounded-xl flex flex-col animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <h2 className="font-headline-md text-primary font-bold">Personal Details</h2>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block font-label-sm text-on-surface-variant mb-1.5 ml-1 font-semibold">Full Name</label>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary/20 rounded-lg py-3 px-4 transition-all" 
                      placeholder="John Doe" 
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-on-surface-variant mb-1.5 ml-1 font-semibold">Email Address</label>
                    <input 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary/20 rounded-lg py-3 px-4 transition-all" 
                      placeholder="john@example.com" 
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-on-surface-variant mb-1.5 ml-1 font-semibold">Password</label>
                    <input 
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary/20 rounded-lg py-3 px-4 transition-all" 
                      placeholder="••••••••" 
                      type="password"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-sm text-on-surface-variant mb-1.5 ml-1 font-semibold">Age</label>
                      <input 
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary/20 rounded-lg py-3 px-4 transition-all" 
                        placeholder="25" 
                        type="number"
                      />
                    </div>
                    <div>
                      <label className="block font-label-sm text-on-surface-variant mb-1.5 ml-1 font-semibold">Phone</label>
                      <input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary/20 rounded-lg py-3 px-4 transition-all" 
                        placeholder="+1 (555) 000-0000" 
                        type="tel"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Medical History Card */}
              <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_4px_20px_-4px_rgba(0,81,213,0.04)] p-8 rounded-xl flex flex-col animate-fade-in" style={{animationDelay: '100ms'}}>
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h2 className="font-headline-md text-primary font-bold">Medical History</h2>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block font-label-sm text-on-surface-variant mb-1.5 ml-1 font-semibold">Blood Group</label>
                    <select 
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      className="w-full bg-white border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary/20 rounded-lg py-3 px-4 transition-all"
                    >
                      <option value="">Select Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-label-sm text-on-surface-variant mb-1.5 ml-1 font-semibold">Known Allergies</label>
                    <textarea 
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleChange}
                      className="w-full bg-white border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary/20 rounded-lg py-3 px-4 transition-all resize-none" 
                      placeholder="e.g., Penicillin, Peanuts (comma separated)" 
                      rows={2}
                    ></textarea>
                  </div>
                  <div>
                    <label className="block font-label-sm text-on-surface-variant mb-1.5 ml-1 font-semibold">Chronic Diseases</label>
                    <div className="space-y-2">
                      {chronicDiseases.map((disease, index) => (
                        <div key={index} className="flex gap-2">
                          <input 
                            className="w-full bg-white border border-outline-variant focus:border-secondary focus:ring-1 focus:ring-secondary/20 rounded-lg py-3 px-4 transition-all" 
                            placeholder="e.g., Hypertension" 
                            type="text"
                            value={disease}
                            onChange={(e) => handleDiseaseChange(index, e.target.value)}
                          />
                          {index === 0 ? (
                            <button 
                              className="flex items-center justify-center p-3 bg-secondary text-white rounded-lg hover:opacity-90 active:scale-95 transition-all" 
                              onClick={addDiseaseField} 
                              type="button"
                            >
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                          ) : (
                            <button 
                              className="flex items-center justify-center p-3 bg-error-container text-on-error-container rounded-lg hover:opacity-90 active:scale-95 transition-all" 
                              onClick={() => removeDiseaseField(index)} 
                              type="button"
                            >
                              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-outline mt-2 italic font-label-sm">Add any long-term medical conditions.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer Actions */}
            <div className="flex flex-col items-center gap-6 mt-8">
              <button 
                className="w-full md:w-auto md:min-w-[300px] py-4 px-8 bg-primary text-on-primary rounded-full font-headline-md text-headline-md shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 transition-all duration-300 disabled:opacity-50" 
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Registering...' : 'Register as Patient'}
              </button>
              <p className="font-body-md text-on-surface-variant">
                Already have an account? 
                <Link className="text-secondary font-bold hover:underline ml-1" href="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </main>

      {/* Footer Component */}
      <footer className="bg-surface-container-lowest w-full py-12 border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-gutter">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="font-display text-headline-md font-bold text-primary">lifeCore</div>
            <p className="font-body-md text-label-sm font-label-sm text-on-surface-variant">© 2026 lifeCore Concierge. All rights reserved.</p>
          </div>
          <div className="flex gap-8 font-body-md text-label-sm font-label-sm mt-6 md:mt-0">
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Service</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">HIPAA Compliance</a>
          </div>
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
