import { useState } from 'react';
import { ArrowLeft, Phone, Mail, MessageCircle, Send, User } from 'lucide-react';

interface BantuanProps {
  onNavigate: (page: string) => void;
}

export function Bantuan({ onNavigate }: BantuanProps) {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSendMessage = () => {
    if (name && email && message) {
      alert('Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda.');
      setName('');
      setEmail('');
      setMessage('');
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
        <h1 className="text-[20px] text-white">Bantuan & Kontak</h1>
      </div>

      {/* Content */}
      <div className="px-4 pt-4 flex flex-col gap-4">
        {/* Quick Contacts */}
        <div className="w-full max-w-[360px] mx-auto flex flex-col gap-3">
          <h2 className="text-[18px]" style={{ color: '#1E293B' }}>Hubungi Kami</h2>
          
          <a 
            href="tel:+6281234567890"
            className="bg-white rounded-[20px] p-4 flex items-center gap-4"
          >
            <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#0EA5A320' }}>
              <Phone size={24} style={{ color: '#0EA5A3' }} />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-[16px]" style={{ color: '#1E293B' }}>Guru BK</span>
              <span className="text-[14px]" style={{ color: '#64748B' }}>+62 812-3456-7890</span>
            </div>
          </a>

          <a 
            href="tel:+6281234567891"
            className="bg-white rounded-[20px] p-4 flex items-center gap-4"
          >
            <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#0EA5A320' }}>
              <Phone size={24} style={{ color: '#0EA5A3' }} />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-[16px]" style={{ color: '#1E293B' }}>Tata Usaha</span>
              <span className="text-[14px]" style={{ color: '#64748B' }}>+62 812-3456-7891</span>
            </div>
          </a>

          <a 
            href="https://wa.me/6281234567892"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-[20px] p-4 flex items-center gap-4"
          >
            <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#16A34A20' }}>
              <MessageCircle size={24} style={{ color: '#16A34A' }} />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-[16px]" style={{ color: '#1E293B' }}>WhatsApp CS</span>
              <span className="text-[14px]" style={{ color: '#64748B' }}>+62 812-3456-7892</span>
            </div>
          </a>

          <a 
            href="mailto:info@sman6jogja.sch.id"
            className="bg-white rounded-[20px] p-4 flex items-center gap-4"
          >
            <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#3B82F620' }}>
              <Mail size={24} style={{ color: '#3B82F6' }} />
            </div>
            <div className="flex flex-col flex-1">
              <span className="text-[16px]" style={{ color: '#1E293B' }}>Email Sekolah</span>
              <span className="text-[14px]" style={{ color: '#64748B' }}>info@sman6jogja.sch.id</span>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-[360px] mx-auto flex flex-col gap-3">
          <h2 className="text-[18px]" style={{ color: '#1E293B' }}>Kirim Pesan</h2>
          
          <div className="bg-white rounded-[20px] p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[14px]" style={{ color: '#64748B' }}>Nama</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama Anda"
                className="w-full h-[48px] rounded-[16px] px-4 border"
                style={{ borderColor: '#E2E8F0', color: '#1E293B' }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px]" style={{ color: '#64748B' }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                className="w-full h-[48px] rounded-[16px] px-4 border"
                style={{ borderColor: '#E2E8F0', color: '#1E293B' }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px]" style={{ color: '#64748B' }}>Pesan</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Tuliskan pesan atau pertanyaan Anda..."
                className="w-full rounded-[16px] px-4 py-3 border resize-none"
                style={{ borderColor: '#E2E8F0', color: '#1E293B' }}
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSendMessage}
              disabled={!name || !email || !message}
              className="w-full h-[48px] rounded-[20px] flex items-center justify-center gap-2"
              style={{
                backgroundColor: name && email && message ? '#0EA5A3' : '#E2E8F0',
                color: name && email && message ? 'white' : '#94A3B8',
                cursor: name && email && message ? 'pointer' : 'not-allowed',
                padding: '12px 16px'
              }}
            >
              <Send size={18} />
              <span className="text-[14px] leading-none">Kirim Pesan</span>
            </button>
          </div>
        </div>

        {/* Popular Questions */}
        <div className="w-full max-w-[360px] mx-auto flex flex-col gap-3">
          <h2 className="text-[18px]" style={{ color: '#1E293B' }}>Pertanyaan Populer</h2>
          
          {[
            'Bagaimana cara reset password?',
            'Aplikasi tidak bisa melakukan presensi',
            'Data presensi tidak tersimpan',
            'Cara mengubah foto profil'
          ].map((question, idx) => (
            <button
              key={idx}
              className="bg-white rounded-[20px] p-4 flex items-center justify-between text-left"
            >
              <span className="text-[16px]" style={{ color: '#1E293B' }}>{question}</span>
              <div className="w-[24px] h-[24px] rounded-full flex items-center justify-center" style={{ backgroundColor: '#F1F5F9' }}>
                <span style={{ color: '#64748B' }}>?</span>
              </div>
            </button>
          ))}
        </div>

        {/* Operating Hours */}
        <div 
          className="w-full max-w-[360px] mx-auto rounded-[20px] p-4"
          style={{ backgroundColor: '#FEF3C7', borderLeft: '4px solid #F59E0B' }}
        >
          <h3 className="text-[16px] mb-2" style={{ color: '#92400E' }}>⏰ Jam Operasional</h3>
          <p className="text-[14px]" style={{ color: '#78350F', lineHeight: '20px' }}>
            Senin - Jumat: 07:00 - 15:00 WIB<br />
            Sabtu: 07:00 - 12:00 WIB<br />
            Minggu & Hari Libur: Tutup
          </p>
        </div>
      </div>
    </div>
  );
}