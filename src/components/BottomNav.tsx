import { Home, CalendarDays, GraduationCap, MessageSquare, Settings } from 'lucide-react';

interface BottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[72px] bg-white border-t border-gray-200 flex items-center justify-around px-4" style={{ maxWidth: '390px' }}>
      <button
        onClick={() => onNavigate('beranda')}
        className="flex flex-col items-center justify-center gap-1"
      >
        <Home 
          size={22} 
          style={{ color: currentPage === 'beranda' ? '#0EA5A3' : '#64748B' }}
          fill={currentPage === 'beranda' ? '#0EA5A3' : 'none'}
        />
        <span className="text-[11px] leading-none" style={{ color: currentPage === 'beranda' ? '#0EA5A3' : '#64748B' }}>
          Beranda
        </span>
      </button>

      <button
        onClick={() => onNavigate('event')}
        className="flex flex-col items-center justify-center gap-1"
      >
        <CalendarDays 
          size={22} 
          style={{ color: currentPage === 'event' ? '#0EA5A3' : '#64748B' }}
        />
        <span className="text-[11px] leading-none" style={{ color: currentPage === 'event' ? '#0EA5A3' : '#64748B' }}>
          Event
        </span>
      </button>

      <button
        onClick={() => onNavigate('event')}
        className="flex items-center justify-center w-[56px] h-[56px] rounded-full -mt-6 shadow-lg"
        style={{ backgroundColor: '#0EA5A3' }}
      >
        <GraduationCap size={28} color="white" />
      </button>

      <button
        onClick={() => onNavigate('status')}
        className="flex flex-col items-center justify-center gap-1"
      >
        <MessageSquare 
          size={22} 
          style={{ color: currentPage === 'status' ? '#0EA5A3' : '#64748B' }}
        />
        <span className="text-[11px] leading-none" style={{ color: currentPage === 'status' ? '#0EA5A3' : '#64748B' }}>
          Status
        </span>
      </button>

      <button
        onClick={() => onNavigate('settings')}
        className="flex flex-col items-center justify-center gap-1"
      >
        <Settings 
          size={22} 
          style={{ color: currentPage === 'settings' ? '#0EA5A3' : '#64748B' }}
        />
        <span className="text-[11px] leading-none" style={{ color: currentPage === 'settings' ? '#0EA5A3' : '#64748B' }}>
          Settings
        </span>
      </button>
    </div>
  );
}