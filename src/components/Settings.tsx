import { useState } from 'react';
import { ArrowLeft, User, Lock, Shield, Bell, Palette, Globe, Info, LogOut, ChevronRight, Moon, Sun } from 'lucide-react';

interface SettingsProps {
  onNavigate: (page: string) => void;
}

export function Settings({ onNavigate }: SettingsProps) {
  const [notifPresensi, setNotifPresensi] = useState(true);
  const [notifTugas, setNotifTugas] = useState(true);
  const [notifEvent, setNotifEvent] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    if (confirm('Apakah Anda yakin ingin keluar?')) {
      alert('Anda telah keluar dari aplikasi');
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto pb-[96px]" style={{ backgroundColor: '#F3F6F8' }}>
      {/* Header */}
      <div 
        className="w-full h-[180px] px-4 pt-6 pb-4 flex flex-col gap-3"
        style={{ background: 'linear-gradient(135deg, #0EA5A3 0%, #4DB8B6 100%)', maxWidth: '390px' }}
      >
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('beranda')} className="p-2">
            <ArrowLeft size={24} color="white" />
          </button>
          <h1 className="text-[20px] text-white">Pengaturan</h1>
        </div>

        {/* Profile Card */}
        <div className="bg-white/20 backdrop-blur-sm rounded-[20px] p-4 flex items-center gap-3 mt-2">
          <div className="w-[56px] h-[56px] rounded-full bg-white/30 flex-shrink-0" />
          <div className="flex flex-col flex-1">
            <span className="text-[17px] text-white leading-tight">Udin Syamsudin</span>
            <span className="text-[13px] text-white/90 leading-tight mt-1">Kelas 10E-1 • NISN: 0012345678</span>
          </div>
        </div>
      </div>

      {/* Settings Content */}
      <div className="px-4 -mt-4 flex flex-col gap-4">
        {/* Account Settings */}
        <div className="w-full max-w-[360px] mx-auto bg-white rounded-[20px] overflow-hidden">
          <button className="w-full p-4 flex items-center gap-3 border-b" style={{ borderColor: '#F1F5F9' }}>
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#0EA5A320' }}>
              <User size={20} style={{ color: '#0EA5A3' }} />
            </div>
            <span className="flex-1 text-left text-[16px]" style={{ color: '#1E293B' }}>Edit Profil</span>
            <ChevronRight size={20} style={{ color: '#64748B' }} />
          </button>

          <button className="w-full p-4 flex items-center gap-3 border-b" style={{ borderColor: '#F1F5F9' }}>
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#3B82F620' }}>
              <Lock size={20} style={{ color: '#3B82F6' }} />
            </div>
            <span className="flex-1 text-left text-[16px]" style={{ color: '#1E293B' }}>Ubah Password</span>
            <ChevronRight size={20} style={{ color: '#64748B' }} />
          </button>

          <button className="w-full p-4 flex items-center gap-3">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#F59E0B20' }}>
              <Shield size={20} style={{ color: '#F59E0B' }} />
            </div>
            <span className="flex-1 text-left text-[16px]" style={{ color: '#1E293B' }}>Keamanan & Privasi</span>
            <ChevronRight size={20} style={{ color: '#64748B' }} />
          </button>
        </div>

        {/* Notifications */}
        <div className="w-full max-w-[360px] mx-auto bg-white rounded-[20px] p-4 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#EF444420' }}>
              <Bell size={20} style={{ color: '#EF4444' }} />
            </div>
            <span className="text-[18px]" style={{ color: '#1E293B' }}>Notifikasi</span>
          </div>

          <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: '#F1F5F9' }}>
            <span className="text-[16px]" style={{ color: '#475569' }}>Notifikasi Presensi</span>
            <button
              onClick={() => setNotifPresensi(!notifPresensi)}
              className="w-[48px] h-[28px] rounded-full transition-all relative"
              style={{ backgroundColor: notifPresensi ? '#0EA5A3' : '#E2E8F0' }}
            >
              <div 
                className="w-[20px] h-[20px] rounded-full bg-white absolute top-[4px] transition-all"
                style={{ left: notifPresensi ? '24px' : '4px' }}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: '#F1F5F9' }}>
            <span className="text-[16px]" style={{ color: '#475569' }}>Notifikasi Tugas</span>
            <button
              onClick={() => setNotifTugas(!notifTugas)}
              className="w-[48px] h-[28px] rounded-full transition-all relative"
              style={{ backgroundColor: notifTugas ? '#0EA5A3' : '#E2E8F0' }}
            >
              <div 
                className="w-[20px] h-[20px] rounded-full bg-white absolute top-[4px] transition-all"
                style={{ left: notifTugas ? '24px' : '4px' }}
              />
            </button>
          </div>

          <div className="flex items-center justify-between py-2">
            <span className="text-[16px]" style={{ color: '#475569' }}>Notifikasi Event</span>
            <button
              onClick={() => setNotifEvent(!notifEvent)}
              className="w-[48px] h-[28px] rounded-full transition-all relative"
              style={{ backgroundColor: notifEvent ? '#0EA5A3' : '#E2E8F0' }}
            >
              <div 
                className="w-[20px] h-[20px] rounded-full bg-white absolute top-[4px] transition-all"
                style={{ left: notifEvent ? '24px' : '4px' }}
              />
            </button>
          </div>
        </div>

        {/* Appearance */}
        <div className="w-full max-w-[360px] mx-auto bg-white rounded-[20px] overflow-hidden">
          <div className="p-4 flex items-center justify-between border-b" style={{ borderColor: '#F1F5F9' }}>
            <div className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#8B5CF620' }}>
                <Palette size={20} style={{ color: '#8B5CF6' }} />
              </div>
              <span className="text-[16px]" style={{ color: '#1E293B' }}>Tema</span>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 px-3 py-1 rounded-[12px]"
              style={{ backgroundColor: '#F1F5F9' }}
            >
              {darkMode ? <Moon size={16} style={{ color: '#475569' }} /> : <Sun size={16} style={{ color: '#475569' }} />}
              <span className="text-[14px]" style={{ color: '#475569' }}>{darkMode ? 'Gelap' : 'Terang'}</span>
            </button>
          </div>

          <button className="w-full p-4 flex items-center gap-3">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#16A34A20' }}>
              <Globe size={20} style={{ color: '#16A34A' }} />
            </div>
            <span className="flex-1 text-left text-[16px]" style={{ color: '#1E293B' }}>Bahasa</span>
            <span className="text-[14px]" style={{ color: '#64748B' }}>Indonesia</span>
            <ChevronRight size={20} style={{ color: '#64748B' }} />
          </button>
        </div>

        {/* About */}
        <div className="w-full max-w-[360px] mx-auto bg-white rounded-[20px] overflow-hidden">
          <button className="w-full p-4 flex items-center gap-3">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#64748B20' }}>
              <Info size={20} style={{ color: '#64748B' }} />
            </div>
            <span className="flex-1 text-left text-[16px]" style={{ color: '#1E293B' }}>Tentang Aplikasi</span>
            <span className="text-[14px]" style={{ color: '#64748B' }}>v1.0.0</span>
            <ChevronRight size={20} style={{ color: '#64748B' }} />
          </button>
        </div>

        {/* Logout */}
        <div className="w-full max-w-[360px] mx-auto">
          <button
            onClick={handleLogout}
            className="w-full h-[48px] rounded-[20px] flex items-center justify-center gap-2"
            style={{ backgroundColor: '#EF4444', color: 'white', padding: '12px 16px' }}
          >
            <LogOut size={20} />
            <span className="text-[15px] leading-none">Keluar</span>
          </button>
        </div>
      </div>
    </div>
  );
}