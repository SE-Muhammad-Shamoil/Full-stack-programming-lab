import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, UserPlus, Calendar, Pill, LogOut, FileText, Settings, Activity } from 'lucide-react';

export default function Sidebar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  if (!user) return null;

  // Determine role-specific styling
  const isDoctor = user.role === 'Doctor';
  const isAdmin = user.role === 'Admin';
  const isPatient = user.role === 'Patient';

  const roleConfig = {
    Doctor: {
      brandName: 'lifeCore Concierge',
      subtitle: 'Premium Healthcare Services',
      themeColor: 'text-secondary',
      borderClass: 'border-secondary',
      iconBg: 'bg-secondary'
    },
    Admin: {
      brandName: 'lifeCore Admin',
      subtitle: 'System Operations',
      themeColor: 'text-primary',
      borderClass: 'border-primary',
      iconBg: 'bg-primary'
    },
    Patient: {
      brandName: 'lifeCore Member',
      subtitle: 'Personal Health Portal',
      themeColor: 'text-[#4fdbc8]',
      borderClass: 'border-[#4fdbc8]',
      iconBg: 'bg-[#4fdbc8]'
    }
  }[user.role] || { brandName: 'lifeCore', subtitle: 'Portal', themeColor: 'text-primary', borderClass: 'border-primary', iconBg: 'bg-primary' };

  const links = [
    { name: 'Dashboard', href: `/dashboard/${user.role.toLowerCase()}`, icon: LayoutDashboard, roles: ['Admin', 'Doctor', 'Patient'] },
    { name: 'Appointments', href: '/appointments', icon: Calendar, roles: ['Admin', 'Doctor', 'Patient'] },
    { name: 'Patients', href: '/patients', icon: Users, roles: ['Admin', 'Doctor'] },
    { name: 'Doctors', href: '/doctors', icon: UserPlus, roles: ['Admin'] },
    { name: 'Treatments', href: '/dashboard/doctor/treatment', icon: Activity, roles: ['Doctor'] },
    { name: 'Prescriptions', href: '/prescriptions', icon: Pill, roles: ['Doctor', 'Patient', 'Admin'] },
    { name: 'Medical Profile', href: '/medical-history', icon: FileText, roles: ['Patient', 'Doctor'] },
    { name: 'System Settings', href: '/dashboard/admin/settings', icon: Settings, roles: ['Admin'] }
  ];

  const visibleLinks = links.filter(link => link.roles.includes(user.role));

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 border-r border-white/20 bg-surface-container-lowest/80 backdrop-blur-xl shadow-xl flex flex-col py-8 px-4 z-50 transition-all duration-300">
      
      {/* Brand Identity */}
      <div className="mb-12 px-2 flex items-center gap-3">
        {/* Abstract Logo */}
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-lg ${roleConfig.iconBg}`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <div>
          <h1 className="font-headline-md text-lg font-bold text-primary truncate leading-tight">{roleConfig.brandName}</h1>
          <p className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">{roleConfig.subtitle}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 overflow-y-auto custom-scrollbar pr-2">
        {visibleLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
          const Icon = link.icon;
          
          return (
            <Link 
              key={link.name} 
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden ${
                isActive 
                  ? `${roleConfig.themeColor} border-r-2 ${roleConfig.borderClass} font-bold bg-surface-container-high/50` 
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/30'
              }`}
            >
              <Icon size={20} className={isActive ? roleConfig.themeColor : 'text-on-surface-variant group-hover:text-on-surface transition-colors'} />
              <span className="font-label-md text-sm relative z-10">{link.name}</span>
              
              {isActive && (
                <div className={`absolute inset-0 opacity-5 bg-gradient-to-r from-transparent to-current ${roleConfig.themeColor}`}></div>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Footer Actions */}
      <div className="mt-auto border-t border-white/10 pt-6 space-y-4 px-2">
        {isPatient && (
          <Link href="/appointments" className="w-full bg-[#4fdbc8] text-[#003831] font-label-md text-sm py-3 px-4 rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(79,219,200,0.4)] transition-all flex items-center justify-center gap-2 mb-2 font-bold">
            <Calendar size={18} />
            Book Visit
          </Link>
        )}
        {isDoctor && (
          <Link href="/appointments" className="w-full bg-secondary text-white font-label-md text-sm py-3 px-4 rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(0,81,213,0.4)] transition-all flex items-center justify-center gap-2 mb-2 font-bold">
            <Calendar size={18} />
            Schedule
          </Link>
        )}

        <button 
          onClick={logout} 
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:text-error hover:bg-error/10 transition-colors group"
        >
          <LogOut size={20} className="group-hover:text-error transition-colors" />
          <span className="font-label-md text-sm font-bold">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}
