import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronRight, HelpCircle, CheckCircle, XCircle, Clock } from 'lucide-react';

interface PanduanProps {
  onNavigate: (page: string) => void;
}

const faqData = [
  {
    question: 'Bagaimana cara melakukan presensi harian?',
    answer: 'Buka aplikasi Smartschool, pada halaman Beranda klik tombol "Absen Masuk" saat tiba di sekolah dan "Absen Pulang" saat akan pulang. Pastikan GPS aktif dan Anda berada di area sekolah.'
  },
  {
    question: 'Apa yang harus dilakukan jika lupa presensi?',
    answer: 'Jika lupa melakukan presensi, segera hubungi guru BK atau wali kelas untuk konfirmasi kehadiran. Anda juga bisa mengajukan surat keterangan melalui menu "Ajukan Surat Izin".'
  },
  {
    question: 'Bagaimana cara mengajukan izin atau sakit?',
    answer: 'Klik tombol "Ajukan Surat Izin" pada halaman Beranda, pilih tanggal, jenis (izin/sakit), dan tuliskan alasan. Setelah itu klik "Kirim Pengajuan" dan tunggu konfirmasi dari sekolah.'
  },
  {
    question: 'Dimana saya bisa melihat riwayat presensi?',
    answer: 'Anda dapat melihat riwayat presensi lengkap di menu "Riwayat" yang dapat diakses dari quick action atau bottom navigation. Di sana tersedia statistik bulanan dan catatan kehadiran detail.'
  }
];

export function Panduan({ onNavigate }: PanduanProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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
        <h1 className="text-[20px] text-white">Panduan Aplikasi</h1>
      </div>

      {/* Content */}
      <div className="px-4 pt-4 flex flex-col gap-4">
        {/* Quick Guide */}
        <div className="w-full max-w-[360px] mx-auto flex flex-col gap-3">
          <h2 className="text-[18px]" style={{ color: '#1E293B' }}>Cara Menggunakan Aplikasi</h2>
          
          {[
            { step: 1, title: 'Login ke Aplikasi', desc: 'Masukkan username dan password yang diberikan sekolah' },
            { step: 2, title: 'Aktifkan GPS', desc: 'Pastikan lokasi aktif untuk melakukan presensi' },
            { step: 3, title: 'Presensi Harian', desc: 'Klik Absen Masuk saat tiba dan Absen Pulang saat akan pulang' },
            { step: 4, title: 'Cek Jadwal', desc: 'Lihat jadwal pelajaran di menu Jadwal' },
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-[20px] p-4 flex gap-4">
              <div 
                className="w-[40px] h-[40px] rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#0EA5A3', color: 'white' }}
              >
                {item.step}
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[16px]" style={{ color: '#1E293B' }}>{item.title}</span>
                <span className="text-[14px]" style={{ color: '#64748B' }}>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Icons & Meanings */}
        <div className="w-full max-w-[360px] mx-auto flex flex-col gap-3">
          <h2 className="text-[18px]" style={{ color: '#1E293B' }}>Arti Ikon & Status</h2>
          
          <div className="bg-white rounded-[20px] p-4 flex flex-col gap-4">
            {[
              { icon: <CheckCircle size={24} style={{ color: '#16A34A' }} />, label: 'Hadir', desc: 'Status kehadiran normal' },
              { icon: <Clock size={24} style={{ color: '#F59E0B' }} />, label: 'Terlambat', desc: 'Hadir melewati batas waktu' },
              { icon: <HelpCircle size={24} style={{ color: '#3B82F6' }} />, label: 'Izin', desc: 'Tidak hadir dengan izin' },
              { icon: <XCircle size={24} style={{ color: '#EF4444' }} />, label: 'Alfa', desc: 'Tidak hadir tanpa keterangan' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 pb-4 border-b last:border-b-0" style={{ borderColor: '#F1F5F9' }}>
                <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#F8FAFC' }}>
                  {item.icon}
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[16px]" style={{ color: '#1E293B' }}>{item.label}</span>
                  <span className="text-[14px]" style={{ color: '#64748B' }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="w-full max-w-[360px] mx-auto flex flex-col gap-3">
          <h2 className="text-[18px]" style={{ color: '#1E293B' }}>Pertanyaan Umum (FAQ)</h2>
          
          {faqData.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-[20px] overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full p-4 flex items-center justify-between gap-3 text-left"
              >
                <span className="text-[16px] flex-1" style={{ color: '#1E293B' }}>{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  style={{ 
                    color: '#64748B',
                    transform: expandedFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s'
                  }} 
                />
              </button>
              {expandedFaq === idx && (
                <div className="px-4 pb-4 pt-0">
                  <p className="text-[14px]" style={{ color: '#64748B', lineHeight: '20px' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tips */}
        <div 
          className="w-full max-w-[360px] mx-auto rounded-[20px] p-4"
          style={{ backgroundColor: '#DBEAFE', borderLeft: '4px solid #3B82F6' }}
        >
          <h3 className="text-[16px] mb-2" style={{ color: '#1E40AF' }}>💡 Tips Menggunakan Presensi</h3>
          <ul className="flex flex-col gap-2">
            {[
              'Selalu aktifkan GPS sebelum melakukan presensi',
              'Lakukan presensi masuk sebelum jam 07:00',
              'Jangan lupa presensi pulang sebelum meninggalkan sekolah',
              'Ajukan izin minimal H-1 jika berhalangan hadir'
            ].map((tip, idx) => (
              <li key={idx} className="flex gap-2 text-[14px]" style={{ color: '#475569' }}>
                <ChevronRight size={16} style={{ color: '#3B82F6', flexShrink: 0, marginTop: '2px' }} />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
