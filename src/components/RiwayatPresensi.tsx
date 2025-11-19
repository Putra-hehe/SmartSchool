import { useState } from 'react';
import { ArrowLeft, ChevronDown, Calendar, Clock } from 'lucide-react';

interface RiwayatPresensiProps {
  onNavigate: (page: string) => void;
}

const monthData = {
  'Januari': { hadir: 20, izin: 1, sakit: 2, alfa: 0, totalHari: 23 },
  'Februari': { hadir: 18, izin: 2, sakit: 1, alfa: 0, totalHari: 21 },
  'Maret': { hadir: 22, izin: 0, sakit: 1, alfa: 0, totalHari: 23 },
  'April': { hadir: 19, izin: 1, sakit: 1, alfa: 0, totalHari: 21 },
  'Mei': { hadir: 21, izin: 1, sakit: 1, alfa: 0, totalHari: 23 },
  'Juni': { hadir: 18, izin: 2, sakit: 0, alfa: 0, totalHari: 20 },
  'Juli': { hadir: 15, izin: 1, sakit: 1, alfa: 0, totalHari: 17 },
  'Agustus': { hadir: 22, izin: 0, sakit: 1, alfa: 0, totalHari: 23 },
  'September': { hadir: 20, izin: 1, sakit: 0, alfa: 0, totalHari: 21 },
  'Oktober': { hadir: 2, izin: 1, sakit: 1, alfa: 0, totalHari: 4 },
  'November': { hadir: 12, izin: 1, sakit: 0, alfa: 0, totalHari: 13 },
  'Desember': { hadir: 0, izin: 0, sakit: 0, alfa: 0, totalHari: 0 },
};

export function RiwayatPresensi({ onNavigate }: RiwayatPresensiProps) {
  const [selectedMonth, setSelectedMonth] = useState('Oktober');
  const [showDropdown, setShowDropdown] = useState(false);

  const data = monthData[selectedMonth as keyof typeof monthData];
  const persentase = data.totalHari > 0 ? Math.round((data.hadir / data.totalHari) * 100) : 0;

  const maxValue = Math.max(data.hadir, data.izin, data.sakit, data.alfa);

  return (
    <div className="w-full h-full overflow-y-auto pb-[96px]" style={{ backgroundColor: '#F3F6F8' }}>
      {/* Header */}
      <div 
        className="w-full h-[100px] px-4 pt-6 pb-4 flex items-center gap-4"
        style={{ backgroundColor: '#0EA5A3', maxWidth: '390px' }}
      >
        <button onClick={() => onNavigate('beranda')} className="p-2">
          <ArrowLeft size={24} color="white" />
        </button>
        <h1 className="text-[20px] text-white">Riwayat Presensi</h1>
      </div>

      {/* Content */}
      <div className="px-4 pt-4 flex flex-col gap-4">
        {/* Month Selector */}
        <div className="w-full max-w-[360px] mx-auto bg-white rounded-[20px] p-4">
          <label className="text-[14px] block mb-2" style={{ color: '#64748B' }}>Pilih bulan</label>
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full h-[48px] px-4 rounded-[16px] border flex items-center justify-between"
              style={{ borderColor: '#E2E8F0', color: '#1E293B' }}
            >
              <span className="text-[15px]">{selectedMonth}</span>
              <ChevronDown size={20} style={{ color: '#64748B' }} />
            </button>
            
            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-[16px] shadow-lg z-10 max-h-[280px] overflow-y-auto" style={{ borderColor: '#E2E8F0' }}>
                {Object.keys(monthData).map((month) => (
                  <button
                    key={month}
                    onClick={() => {
                      setSelectedMonth(month);
                      setShowDropdown(false);
                    }}
                    className="w-full h-[44px] px-4 text-left hover:bg-gray-50 text-[15px]"
                    style={{ color: month === selectedMonth ? '#0EA5A3' : '#1E293B' }}
                  >
                    {month}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="w-full max-w-[360px] mx-auto">
          <h3 className="text-[16px] mb-3" style={{ color: '#1E293B' }}>Riwayat Presensi Harian</h3>
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-white rounded-[16px] p-3 flex flex-col items-center justify-center gap-2 h-[80px]" style={{ borderTop: '3px solid #16A34A' }}>
              <span className="text-[12px] leading-none" style={{ color: '#64748B' }}>Hadir</span>
              <span className="text-[26px] leading-none" style={{ color: '#1E293B', fontVariantNumeric: 'tabular-nums' }}>{data.hadir}</span>
            </div>
            <div className="bg-white rounded-[16px] p-3 flex flex-col items-center justify-center gap-2 h-[80px]" style={{ borderTop: '3px solid #3B82F6' }}>
              <span className="text-[12px] leading-none" style={{ color: '#64748B' }}>Izin</span>
              <span className="text-[26px] leading-none" style={{ color: '#1E293B', fontVariantNumeric: 'tabular-nums' }}>{data.izin}</span>
            </div>
            <div className="bg-white rounded-[16px] p-3 flex flex-col items-center justify-center gap-2 h-[80px]" style={{ borderTop: '3px solid #F59E0B' }}>
              <span className="text-[12px] leading-none" style={{ color: '#64748B' }}>Sakit</span>
              <span className="text-[26px] leading-none" style={{ color: '#1E293B', fontVariantNumeric: 'tabular-nums' }}>{data.sakit}</span>
            </div>
            <div className="bg-white rounded-[16px] p-3 flex flex-col items-center justify-center gap-2 h-[80px]" style={{ borderTop: '3px solid #EF4444' }}>
              <span className="text-[12px] leading-none" style={{ color: '#64748B' }}>Alfa</span>
              <span className="text-[26px] leading-none" style={{ color: '#1E293B', fontVariantNumeric: 'tabular-nums' }}>{data.alfa}</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div 
          className="w-full max-w-[360px] mx-auto rounded-[20px] p-4"
          style={{ backgroundColor: '#0EA5A3' }}
        >
          <h3 className="text-white text-[16px] mb-4">Absensi Kehadiran Bulan {selectedMonth}</h3>
          <div className="flex gap-2">
            {/* Y-Axis */}
            <div className="flex flex-col justify-between h-[160px] pb-2 pt-0">
              <span className="text-white/70 text-[10px] leading-none" style={{ fontVariantNumeric: 'tabular-nums' }}>{maxValue}</span>
              <span className="text-white/70 text-[10px] leading-none" style={{ fontVariantNumeric: 'tabular-nums' }}>{Math.floor(maxValue * 0.75)}</span>
              <span className="text-white/70 text-[10px] leading-none" style={{ fontVariantNumeric: 'tabular-nums' }}>{Math.floor(maxValue * 0.5)}</span>
              <span className="text-white/70 text-[10px] leading-none" style={{ fontVariantNumeric: 'tabular-nums' }}>{Math.floor(maxValue * 0.25)}</span>
              <span className="text-white/70 text-[10px] leading-none" style={{ fontVariantNumeric: 'tabular-nums' }}>0</span>
            </div>
            
            {/* Chart Bars */}
            <div className="flex-1 h-[160px] flex items-end justify-around gap-2 pb-2">
              {[
                { label: 'Masuk', value: data.hadir, color: '#16A34A' },
                { label: 'Izin', value: data.izin, color: '#3B82F6' },
                { label: 'Sakit', value: data.sakit, color: '#F59E0B' },
                { label: 'Alfa', value: data.alfa, color: '#EF4444' },
              ].map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full rounded-t-[8px] transition-all duration-500"
                    style={{ 
                      backgroundColor: item.color, 
                      height: maxValue > 0 ? `${(item.value / maxValue) * 110}px` : '4px',
                      minHeight: '4px'
                    }}
                  />
                  <span className="text-white text-[12px] leading-none">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="w-full max-w-[360px] mx-auto grid grid-cols-2 gap-3">
          <div className="bg-white rounded-[20px] p-4 flex items-center gap-3">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#16A34A20' }}>
              <Calendar size={20} style={{ color: '#16A34A' }} />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] leading-none mb-1" style={{ color: '#64748B' }}>Total Hari</span>
              <span className="text-[18px] leading-none" style={{ color: '#1E293B', fontVariantNumeric: 'tabular-nums' }}>{data.totalHari} hari</span>
            </div>
          </div>
          <div className="bg-white rounded-[20px] p-4 flex items-center gap-3">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#3B82F620' }}>
              <Clock size={20} style={{ color: '#3B82F6' }} />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] leading-none mb-1" style={{ color: '#64748B' }}>Persentase</span>
              <span className="text-[18px] leading-none" style={{ color: '#1E293B', fontVariantNumeric: 'tabular-nums' }}>{persentase}%</span>
            </div>
          </div>
        </div>

        {/* Recent Attendance */}
        <div className="w-full max-w-[360px] mx-auto flex flex-col gap-3">
          <h3 className="text-[16px]" style={{ color: '#1E293B' }}>Catatan Kehadiran Terbaru</h3>
          {[
            { date: 'Rabu, 20 Oktober', status: 'Izin - pad', icon: '📝', color: '#3B82F6' },
            { date: 'Selasa, 19 Oktober', status: 'Hadir', icon: '✓', color: '#16A34A' },
            { date: 'Senin, 18 Oktober', status: 'Sakit', icon: '🤒', color: '#F59E0B' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-[20px] p-4 flex items-center gap-3">
              <div 
                className="w-[48px] h-[48px] rounded-full flex items-center justify-center text-[20px] flex-shrink-0"
                style={{ backgroundColor: `${item.color}20` }}
              >
                {item.icon}
              </div>
              <div className="flex flex-col flex-1">
                <span className="text-[15px] leading-tight" style={{ color: '#1E293B' }}>{item.date}</span>
                <span className="text-[13px] leading-tight mt-1" style={{ color: '#64748B' }}>{item.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Summary */}
        <div className="w-full max-w-[360px] mx-auto bg-white rounded-[20px] p-4 flex flex-col gap-3">
          <h3 className="text-[16px]" style={{ color: '#1E293B' }}>Riwayat Presensi Kegiatan</h3>
          <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: '#F1F5F9' }}>
            <span className="text-[14px]" style={{ color: '#64748B' }}>Jumlah Acara</span>
            <span className="text-[16px]" style={{ color: '#1E293B', fontVariantNumeric: 'tabular-nums' }}>12</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b" style={{ borderColor: '#F1F5F9' }}>
            <span className="text-[14px]" style={{ color: '#64748B' }}>Hadir</span>
            <span className="text-[16px]" style={{ color: '#16A34A', fontVariantNumeric: 'tabular-nums' }}>10</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-[14px]" style={{ color: '#64748B' }}>Tidak Hadir</span>
            <span className="text-[16px]" style={{ color: '#EF4444', fontVariantNumeric: 'tabular-nums' }}>2</span>
          </div>
        </div>
      </div>
    </div>
  );
}