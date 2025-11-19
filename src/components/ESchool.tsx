import { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Users, ChevronRight, Trophy, Heart, BookOpen } from 'lucide-react';

interface ESchoolProps {
  onNavigate: (page: string) => void;
}

const eventData = {
  mendatang: [
    {
      title: 'Lomba Cerdas Cermat',
      date: '25 November 2025',
      time: '08:00 - 12:00',
      location: 'Aula Utama',
      participants: 120,
      category: 'kompetisi',
      status: 'open'
    },
    {
      title: 'Kegiatan Bakti Sosial',
      date: '28 November 2025',
      time: '07:00 - 14:00',
      location: 'Desa Sleman',
      participants: 80,
      category: 'sosial',
      status: 'open'
    },
    {
      title: 'Seminar Pendidikan',
      date: '2 Desember 2025',
      time: '09:00 - 15:00',
      location: 'Auditorium',
      participants: 200,
      category: 'akademik',
      status: 'open'
    },
  ],
  selesai: [
    {
      title: 'Upacara Bendera',
      date: '18 November 2025',
      time: '07:00 - 08:00',
      location: 'Lapangan Upacara',
      participants: 450,
      category: 'akademik',
      status: 'completed'
    },
    {
      title: 'Turnamen Futsal',
      date: '15 November 2025',
      time: '13:00 - 17:00',
      location: 'Lapangan Futsal',
      participants: 96,
      category: 'kompetisi',
      status: 'completed'
    },
  ]
};

export function ESchool({ onNavigate }: ESchoolProps) {
  const [activeTab, setActiveTab] = useState<'mendatang' | 'selesai'>('mendatang');

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'akademik': return { bg: '#3B82F620', text: '#3B82F6', icon: <BookOpen size={20} /> };
      case 'kompetisi': return { bg: '#F59E0B20', text: '#F59E0B', icon: <Trophy size={20} /> };
      case 'sosial': return { bg: '#EF444420', text: '#EF4444', icon: <Heart size={20} /> };
      default: return { bg: '#64748B20', text: '#64748B', icon: <Calendar size={20} /> };
    }
  };

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
        <h1 className="text-[20px] text-white">Event Sekolah</h1>
      </div>

      {/* Tabs */}
      <div className="px-4 pt-4">
        <div className="w-full max-w-[360px] mx-auto bg-white rounded-[20px] p-1 flex gap-1">
          <button
            onClick={() => setActiveTab('mendatang')}
            className="flex-1 h-[40px] rounded-[16px] transition-all"
            style={{
              backgroundColor: activeTab === 'mendatang' ? '#0EA5A3' : 'transparent',
              color: activeTab === 'mendatang' ? 'white' : '#64748B'
            }}
          >
            Mendatang
          </button>
          <button
            onClick={() => setActiveTab('selesai')}
            className="flex-1 h-[40px] rounded-[16px] transition-all"
            style={{
              backgroundColor: activeTab === 'selesai' ? '#0EA5A3' : 'transparent',
              color: activeTab === 'selesai' ? 'white' : '#64748B'
            }}
          >
            Selesai
          </button>
        </div>
      </div>

      {/* Events List */}
      <div className="px-4 pt-4 flex flex-col gap-3">
        {eventData[activeTab].map((event, idx) => {
          const categoryStyle = getCategoryColor(event.category);
          
          return (
            <div key={idx} className="w-full max-w-[360px] mx-auto bg-white rounded-[20px] p-4 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-[17px] mb-2" style={{ color: '#1E293B' }}>{event.title}</h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} style={{ color: '#64748B' }} />
                      <span className="text-[13px]" style={{ color: '#64748B' }}>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} style={{ color: '#64748B' }} />
                      <span className="text-[13px]" style={{ color: '#64748B' }}>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} style={{ color: '#64748B' }} />
                      <span className="text-[13px]" style={{ color: '#64748B', fontVariantNumeric: 'tabular-nums' }}>{event.participants} peserta</span>
                    </div>
                  </div>
                </div>
                <div 
                  className="px-2 py-1 rounded-[10px] flex items-center gap-1 flex-shrink-0"
                  style={{ backgroundColor: categoryStyle.bg, color: categoryStyle.text }}
                >
                  {categoryStyle.icon}
                  <span className="text-[11px] capitalize leading-none">{event.category}</span>
                </div>
              </div>

              <div className="flex gap-2">
                {activeTab === 'mendatang' && (
                  <button
                    className="flex-1 h-[40px] rounded-[16px] flex items-center justify-center"
                    style={{ backgroundColor: '#0EA5A3', color: 'white', padding: '10px 12px' }}
                  >
                    <span className="text-[14px] leading-none">Daftar Sekarang</span>
                  </button>
                )}
                <button
                  className="flex-1 h-[40px] rounded-[16px] border flex items-center justify-center gap-2"
                  style={{ borderColor: '#0EA5A3', color: '#0EA5A3', padding: '10px 12px' }}
                >
                  <span className="text-[14px] leading-none">Detail</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}