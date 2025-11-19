import { useState } from 'react';
import {
  Calendar,
  TrendingUp,
  HelpCircle,
  Users,
  ChevronRight,
  Plus,
  Check,
} from 'lucide-react';
import { SuratIzinDialog } from './SuratIzinDialog';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BerandaProps {
  onNavigate: (page: string) => void;
}

export function Beranda({ onNavigate }: BerandaProps) {
  const [absenMasuk, setAbsenMasuk] = useState(false);
  const [absenPulang, setAbsenPulang] = useState(false);
  const [showSuratIzin, setShowSuratIzin] = useState(false);

  const handleAbsenMasuk = () => {
    setAbsenMasuk(true);
  };

  const handleAbsenPulang = () => {
    if (!absenMasuk) return;
    setAbsenPulang(true);
  };

  return (
    <>
      {/* area scroll konten, nggak ada overlay aneh2 */}
      <div
        className="w-full h-full overflow-y-auto pb-[96px]"
        style={{ backgroundColor: '#F3F6F8' }}
      >
        {/* HEADER */}
        <div
          className="w-full px-4 pt-4 pb-6 flex flex-col gap-3 rounded-b-[32px]"
          style={{
            background:
              'linear-gradient(135deg, #0EA5A3 0%, #1D7C8F 40%, #146C82 100%)',
            maxWidth: '390px',
            boxShadow: '0 4px 12px rgba(14, 165, 163, 0.25)',
          }}
        >
          {/* status bar */}
          <div className="flex items-center justify-between text-white text-[12px]">
            <span>18.22</span>
            <div className="flex items-center gap-1">
              <span>4G</span>
              <span>10%</span>
            </div>
          </div>

          {/* judul sekolah */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[22px] font-semibold text-white leading-tight">
              Smartschool
            </h1>
            <p className="text-white/85 text-[13px]">SMAN 6 YOGYAKARTA</p>
          </div>

          {/* kartu kecil avatar + hai udin */}
          <div className="flex items-center gap-3 rounded-2xl bg-white/18 px-3 py-2 shadow-sm">
            <div className="h-10 w-10 rounded-full bg-white/40 overflow-hidden border border-white/60 flex items-center justify-center flex-shrink-0">
              <ImageWithFallback
                src="/avatar-udin.png"
                alt="Foto profil siswa"
                className="h-full w-full rounded-full object-cover"
                style={{ objectPosition: 'center' }}
              />
            </div>

            <div className="flex flex-col leading-tight">
              <p className="text-[11px] text-teal-50/85 flex items-center gap-1">
                <span>👋</span>
                <span>Hai,</span>
              </p>
              <p className="text-[14px] font-semibold text-white">
                Udin Syamsudin
              </p>
              <p className="text-[11px] text-teal-50/85">Kelas 10E-1</p>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="px-4 -mt-2 flex flex-col gap-4">
          {/* KARTU PRESENSI */}
          <div className="w-full max-w-[360px] mx-auto bg-white rounded-[24px] p-5 shadow-sm flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <h2 className="text-[18px]" style={{ color: '#1E293B' }}>
                  Presensi harian siswa
                </h2>
                <p className="text-[14px]" style={{ color: '#64748B' }}>
                  Senin, 18 November 2025
                </p>
              </div>
              <button type="button" className="p-2">
                <div className="w-1 h-1 rounded-full bg-gray-400 mb-1" />
                <div className="w-1 h-1 rounded-full bg-gray-400 mb-1" />
                <div className="w-1 h-1 rounded-full bg-gray-400" />
              </button>
            </div>

            {/* tombol absen */}
            <div className="flex gap-3">
              {/* ABSEN MASUK */}
              {absenMasuk ? (
                <button
                  type="button"
                  disabled
                  className="flex-1 h-[44px] rounded-[20px] flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: '#16A34A',
                    color: 'white',
                    padding: '10px 16px',
                  }}
                >
                  <Check size={18} />
                  <span className="text-[14px] leading-none">Sudah Absen</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleAbsenMasuk}
                  className="flex-1 h-[44px] rounded-[20px] flex items-center justify-center"
                  style={{
                    backgroundColor: '#E2E8F0',
                    color: '#64748B',
                    padding: '10px 16px',
                  }}
                >
                  <span className="text-[14px] leading-none">Absen Masuk</span>
                </button>
              )}

              {/* ABSEN PULANG */}
              <button
                type="button"
                onClick={handleAbsenPulang}
                disabled={!absenMasuk || absenPulang}
                className="flex-1 h-[44px] rounded-[20px] flex items-center justify-center gap-2"
                style={{
                  backgroundColor: absenPulang
                    ? '#16A34A'
                    : !absenMasuk
                    ? '#E2E8F0'
                    : '#0EA5A3',
                  color: absenPulang
                    ? 'white'
                    : !absenMasuk
                    ? '#94A3B8'
                    : 'white',
                  cursor: !absenMasuk ? 'not-allowed' : 'pointer',
                  padding: '10px 16px',
                }}
              >
                {absenPulang ? (
                  <>
                    <Check size={18} />
                    <span className="text-[14px] leading-none">
                      Sudah Absen
                    </span>
                  </>
                ) : (
                  <span className="text-[14px] leading-none">Absen Pulang</span>
                )}
              </button>
            </div>

            {/* AJUKAN SURAT IZIN */}
            <button
              type="button"
              onClick={() => setShowSuratIzin(true)}
              className="w-full h-[44px] rounded-[20px] border-2 flex items-center justify-center gap-2"
              style={{
                borderColor: '#0EA5A3',
                borderStyle: 'dashed',
                color: '#0EA5A3',
                padding: '10px 16px',
              }}
            >
              <Plus size={18} />
              <span className="text-[14px] leading-none">Ajukan surat ijin</span>
            </button>
          </div>

          {/* QUICK ACTIONS */}
          <div className="w-full max-w-[360px] mx-auto grid grid-cols-4 gap-4 px-2">
            <button
              type="button"
              onClick={() => onNavigate('jadwal')}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#0EA5A3' }}
              >
                <Calendar size={26} color="white" />
              </div>
              <span
                className="text-[13px] text-center"
                style={{ color: '#475569' }}
              >
                Jadwal
              </span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('riwayat')}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#0EA5A3' }}
              >
                <TrendingUp size={26} color="white" />
              </div>
              <span
                className="text-[13px] text-center"
                style={{ color: '#475569' }}
              >
                Riwayat
              </span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('panduan')}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#0EA5A3' }}
              >
                <HelpCircle size={26} color="white" />
              </div>
              <span
                className="text-[13px] text-center"
                style={{ color: '#475569' }}
              >
                Panduan
              </span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('bantuan')}
              className="flex flex-col items-center gap-2"
            >
              <div
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#0EA5A3' }}
              >
                <Users size={26} color="white" />
              </div>
              <span
                className="text-[13px] text-center"
                style={{ color: '#475569' }}
              >
                Bantuan
              </span>
            </button>
          </div>

          {/* REMINDER */}
          <div
            className="w-full max-w-[360px] mx-auto rounded-[20px] p-4"
            style={{
              backgroundColor: '#EFF6FF',
              borderLeft: '4px solid #3B82F6',
            }}
          >
            <h3
              className="text-[15px] mb-2"
              style={{ color: '#1E40AF', lineHeight: '1.4' }}
            >
              Jangan lupa presensi ya !
            </h3>
            <p
              className="text-[13px]"
              style={{ color: '#475569', lineHeight: '1.5' }}
            >
              Karena sekolahmu bisa saja menerapkan aturan jika Tidak Presensi,
              maka otomatis Kamu mendapat Poin Pelanggaran
            </p>
          </div>

          {/* RIWAYAT RINGKAS */}
          <div className="w-full max-w-[360px] mx-auto flex flex-col gap-3 mb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-[18px]" style={{ color: '#0EA5A3' }}>
                Riwayat presensi harian
              </h2>
              <button
                type="button"
                onClick={() => onNavigate('riwayat')}
                className="flex items-center gap-1"
                style={{ color: '#0EA5A3' }}
              >
                <span className="text-[14px]">Lihat semua</span>
                <ChevronRight size={16} />
              </button>
            </div>

            {[
              {
                date: 'Jum, 15 November',
                status: 'Hadir',
                time: '07:15 - 14:30',
                color: '#16A34A',
              },
              {
                date: 'Kam, 14 November',
                status: 'Hadir',
                time: '07:10 - 14:25',
                color: '#16A34A',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[20px] p-4 shadow-sm flex items-center justify-between"
              >
                <div className="flex flex-col gap-1">
                  <span
                    className="text-[16px]"
                    style={{ color: '#1E293B' }}
                  >
                    {item.date}
                  </span>
                  <span
                    className="text-[14px]"
                    style={{ color: '#64748B' }}
                  >
                    {item.time}
                  </span>
                </div>
                <span
                  className="px-4 py-1 rounded-[12px] text-[14px]"
                  style={{
                    backgroundColor: `${item.color}20`,
                    color: item.color,
                  }}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showSuratIzin && (
        <SuratIzinDialog onClose={() => setShowSuratIzin(false)} />
      )}
    </>
  );
}
