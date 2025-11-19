import { useState } from 'react';
import { ArrowLeft, Book, Coffee } from 'lucide-react';

interface JadwalProps {
  onNavigate: (page: string) => void;
}

const scheduleData = {
  'Hari ini': [
    { time: '07:00 - 07:45', subject: 'Matematika', teacher: 'Bu Siti Aminah', room: 'Ruang 10E-1', type: 'lesson' },
    { time: '07:45 - 08:30', subject: 'Bahasa Indonesia', teacher: 'Pak Budi Santoso', room: 'Ruang 10E-1', type: 'lesson' },
    { time: '08:30 - 08:45', subject: 'Istirahat', teacher: '', room: '', type: 'break' },
    { time: '08:45 - 09:30', subject: 'Fisika', teacher: 'Bu Dewi Lestari', room: 'Lab Fisika', type: 'lesson' },
    { time: '09:30 - 10:15', subject: 'Kimia', teacher: 'Pak Ahmad Dahlan', room: 'Lab Kimia', type: 'lesson' },
    { time: '10:15 - 10:30', subject: 'Istirahat', teacher: '', room: '', type: 'break' },
    { time: '10:30 - 11:15', subject: 'Bahasa Inggris', teacher: 'Ms. Sarah Johnson', room: 'Ruang 10E-1', type: 'lesson' },
    { time: '11:15 - 12:00', subject: 'Sejarah', teacher: 'Pak Sukarno', room: 'Ruang 10E-1', type: 'lesson' },
  ],
  'Minggu ini': [
    { day: 'Senin', subjects: 7 },
    { day: 'Selasa', subjects: 8 },
    { day: 'Rabu', subjects: 7 },
    { day: 'Kamis', subjects: 8 },
    { day: 'Jumat', subjects: 6 },
  ]
};

export function Jadwal({ onNavigate }: JadwalProps) {
  const [activeTab, setActiveTab] = useState<'Hari ini' | 'Minggu ini'>('Hari ini');

  return (
    <div className="w-full h-full overflow-y-auto pb-[96px]" style={{ backgroundColor: '#F3F6F8' }}>
      {/* Header */}
      <div 
        className="w-full h-[120px] px-4 pt-6 pb-4 flex items-center gap-4"
        style={{ backgroundColor: '#0EA5A3', maxWidth: '390px' }}
      >
        <button onClick={() => onNavigate('beranda')} className="p-2">
          <ArrowLeft size={24} color="white" />
        </button>
        <h1 className="text-[20px] text-white">Jadwal Pelajaran</h1>
      </div>

      {/* Tabs */}
      <div className="px-4 pt-4">
        <div className="w-full max-w-[360px] mx-auto bg-white rounded-[20px] p-1 flex gap-1">
          <button
            onClick={() => setActiveTab('Hari ini')}
            className="flex-1 h-[42px] rounded-[16px] transition-all flex items-center justify-center"
            style={{
              backgroundColor: activeTab === 'Hari ini' ? '#0EA5A3' : 'transparent',
              color: activeTab === 'Hari ini' ? 'white' : '#64748B'
            }}
          >
            <span className="text-[14px] leading-none">Hari ini</span>
          </button>
          <button
            onClick={() => setActiveTab('Minggu ini')}
            className="flex-1 h-[42px] rounded-[16px] transition-all flex items-center justify-center"
            style={{
              backgroundColor: activeTab === 'Minggu ini' ? '#0EA5A3' : 'transparent',
              color: activeTab === 'Minggu ini' ? 'white' : '#64748B'
            }}
          >
            <span className="text-[14px] leading-none">Minggu ini</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-4 flex flex-col gap-3">
        {activeTab === 'Hari ini' ? (
          <div className="w-full max-w-[360px] mx-auto flex flex-col gap-3">
            {scheduleData['Hari ini'].map((item, idx) => (
              item.type === 'break' ? (
                <div key={idx} className="bg-white rounded-[20px] p-4 flex items-center gap-3 min-h-[72px]" style={{ borderLeft: '4px solid #F59E0B' }}>
                  <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FEF3C7' }}>
                    <Coffee size={22} style={{ color: '#F59E0B' }} />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <span className="text-[15px] leading-tight" style={{ color: '#1E293B' }}>{item.subject}</span>
                    <span className="text-[13px] leading-tight mt-1" style={{ color: '#64748B' }}>{item.time}</span>
                  </div>
                </div>
              ) : (
                <div key={idx} className="bg-white rounded-[20px] p-4 flex items-center gap-3 min-h-[76px]">
                  <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0EA5A320' }}>
                    <Book size={22} style={{ color: '#0EA5A3' }} />
                  </div>
                  <div className="flex flex-col justify-center flex-1">
                    <span className="text-[15px] leading-tight" style={{ color: '#1E293B' }}>{item.subject}</span>
                    <span className="text-[13px] leading-tight mt-1" style={{ color: '#64748B' }}>{item.teacher}</span>
                    <span className="text-[12px] leading-tight mt-1" style={{ color: '#94A3B8' }}>{item.time} • {item.room}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        ) : (
          <div className="w-full max-w-[360px] mx-auto flex flex-col gap-3">
            {scheduleData['Minggu ini'].map((item, idx) => (
              <div key={idx} className="bg-white rounded-[20px] p-4 flex items-center justify-between min-h-[72px]">
                <div className="flex items-center gap-3">
                  <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#0EA5A320' }}>
                    <Book size={22} style={{ color: '#0EA5A3' }} />
                  </div>
                  <span className="text-[15px]" style={{ color: '#1E293B' }}>{item.day}</span>
                </div>
                <span className="text-[13px]" style={{ color: '#64748B', fontVariantNumeric: 'tabular-nums' }}>{item.subjects} mata pelajaran</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}