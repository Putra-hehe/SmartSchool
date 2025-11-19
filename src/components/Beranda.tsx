import React, { useState, useRef, ChangeEvent } from 'react';
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

  // modal konfirmasi absen masuk
  const [showKonfirmasiMasuk, setShowKonfirmasiMasuk] = useState(false);

  // kamera / selfie
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selfiePreview, setSelfiePreview] = useState<string | null>(null);
  const [hasSelfie, setHasSelfie] = useState(false);

  const handleOpenKonfirmasiMasuk = () => {
    if (absenMasuk) return;
    setShowKonfirmasiMasuk(true);
  };

  const handleKonfirmasiMasuk = () => {
    if (!hasSelfie) return; // harus ada selfie
    setAbsenMasuk(true);
    setShowKonfirmasiMasuk(false);
    resetSelfie();
  };

  const handleAbsenPulang = () => {
    if (!absenMasuk || absenPulang) return;
    setAbsenPulang(true);
  };

  const handleOpenCamera = () => {
    fileInputRef.current?.click();
  };

  const handleSelfieChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setSelfiePreview(url);
    setHasSelfie(true);
  };

  const resetSelfie = () => {
    setSelfiePreview(null);
    setHasSelfie(false);
  };

  return (
    // wrapper relative biar modal absolute nempel ke "layar HP"
    <div className="relative w-full h-full">
      {/* MAIN SCROLL CONTENT */}
      <div
        className="w-full h-full overflow-y-auto pb-[96px]"
        style={{ backgroundColor: '#F3F6F8' }}
      >
        {/* HEADER */}
        <div
          className="w-full h-[200px] px-4 pt-4 pb-6 flex flex-col gap-3"
          style={{
            background: 'linear-gradient(135deg, #0EA5A3 0%, #4DB8B6 100%)',
            maxWidth: '390px',
            boxShadow: '0 4px 12px rgba(14, 165, 163, 0.15)',
          }}
        >
          {/* Status Bar */}
          <div className="flex items-center justify-between text-white text-[12px]">
            <span>18.22</span>
            <div className="flex items-center gap-1">
              <span>4G</span>
              <span>10%</span>
            </div>
          </div>

          {/* School Info */}
          <div className="flex flex-col gap-1">
            <h1 className="text-[24px] text-white">Smartschool</h1>
            <p className="text-white/90 text-[14px]">SMAN 6 YOGYAKARTA</p>
          </div>

          {/* USER CARD */}
          <div
            className="w-full max-w-[340px] mx-auto h-[90px] rounded-[24px] px-4 py-3 flex items-center gap-3"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <ImageWithFallback
              src="/avatar-udin.png"
              alt="Foto profil siswa"
              className="w-[48px] h-[48px] rounded-full object-cover flex-shrink-0"
              style={{
                border: '2px solid rgba(255, 255, 255, 0.5)',
                objectPosition: 'top',
              }}
            />
            <div className="flex flex-col gap-1">
              <p className="text-white text-[16px] font-semibold leading-tight">
                Udin Syamsudin
              </p>
              <p className="text-white/90 text-[13px] leading-tight">
                Kelas 10E-1 • NISN: 0012345678
              </p>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="px-4 -mt-2 flex flex-col gap-4">
          {/* PRESENSI CARD */}
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
              <button className="p-2" type="button">
                <div className="w-1 h-1 rounded-full bg-gray-400 mb-1" />
                <div className="w-1 h-1 rounded-full bg-gray-400 mb-1" />
                <div className="w-1 h-1 rounded-full bg-gray-400" />
              </button>
            </div>

            <div className="flex gap-3">
              {/* Absen Masuk → buka modal */}
              <button
                type="button"
                onClick={handleOpenKonfirmasiMasuk}
                disabled={absenMasuk}
                className="flex-1 h-[44px] rounded-[20px] flex items-center justify-center gap-2"
                style={{
                  backgroundColor: absenMasuk ? '#16A34A' : '#E2E8F0',
                  color: absenMasuk ? 'white' : '#64748B',
                  cursor: absenMasuk ? 'default' : 'pointer',
                  padding: '10px 16px',
                }}
              >
                {absenMasuk ? (
                  <>
                    <Check size={18} />
                    <span className="text-[14px] leading-none">
                      Sudah Absen
                    </span>
                  </>
                ) : (
                  <span className="text-[14px] leading-none">Absen Masuk</span>
                )}
              </button>

              {/* Absen Pulang */}
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

          {/* RINGKASAN RIWAYAT */}
          <div className="w-full max-w-[360px] mx-auto flex flex-col gap-3">
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

      {/* MODAL SURAT IZIN */}
      {showSuratIzin && (
        <SuratIzinDialog onClose={() => setShowSuratIzin(false)} />
      )}

      {/* MODAL KONFIRMASI ABSEN MASUK - FIXED */}
      {showKonfirmasiMasuk && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div 
            className="w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
            style={{ 
              maxWidth: '448px',
              maxHeight: '85vh'
            }}
          >
            {/* Header - Fixed */}
            <div className="p-6 pb-4 border-b border-slate-200 flex-shrink-0">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-semibold text-slate-800">
                  Konfirmasi Absen Masuk
                </h2>
                <button
                  type="button"
                  className="text-slate-400 hover:text-slate-600"
                  onClick={() => {
                    setShowKonfirmasiMasuk(false);
                    resetSelfie();
                  }}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6">
              <p className="text-sm text-slate-600 mb-4">
                Pastikan Anda berada di lokasi yang tepat dan kamera Anda siap.
              </p>

              {/* Area kamera */}
              <div
                className="w-full rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 text-sm mb-4 border border-dashed border-slate-300 cursor-pointer overflow-hidden"
                style={{ height: '200px' }}
                onClick={handleOpenCamera}
              >
                {selfiePreview ? (
                  <img
                    src={selfiePreview}
                    alt="Selfie"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>📷 Kamera Selfie (klik untuk ambil foto)</span>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="user"
                className="hidden"
                onChange={handleSelfieChange}
              />

              <div className="space-y-1 text-sm text-slate-600 mb-2">
                <div className="flex items-center gap-2">
                  <span>⏰</span>
                  <span>Waktu: 21.37 WIB</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Lokasi: SMAN 6 Yogyakarta</span>
                </div>
              </div>
            </div>

            {/* Footer - Fixed */}
            <div className="p-6 pt-4 border-t border-slate-200 flex justify-end gap-2 flex-shrink-0">
              <button
                type="button"
                className="px-4 py-2 rounded-lg border border-slate-300 text-sm text-slate-700"
                onClick={() => {
                  setShowKonfirmasiMasuk(false);
                  resetSelfie();
                }}
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleKonfirmasiMasuk}
                disabled={!hasSelfie}
                style={{
                  backgroundColor: hasSelfie ? '#0EA5A3' : '#CBD5E1',
                  color: hasSelfie ? 'white' : '#94A3B8',
                  cursor: hasSelfie ? 'pointer' : 'not-allowed',
                }}
                className="px-4 py-2 rounded-lg text-sm font-medium"
              >
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}