import { useState } from 'react';
import { X, Calendar } from 'lucide-react';

interface SuratIzinDialogProps {
  onClose: () => void;
}

export function SuratIzinDialog({ onClose }: SuratIzinDialogProps) {
  const [tanggal, setTanggal] = useState('');
  const [jenis, setJenis] = useState<'izin' | 'sakit'>('izin');
  const [alasan, setAlasan] = useState('');

  const handleSubmit = () => {
    // Logic untuk submit surat izin
    alert(`Surat ${jenis} berhasil diajukan untuk tanggal ${tanggal}`);
    onClose();
  };

  return (
    <div className="absolute inset-0 bg-black/50 flex items-end justify-center z-50" style={{ maxWidth: '390px' }}>
      <div className="w-full bg-white rounded-t-[24px] p-6 flex flex-col gap-6 animate-slide-up">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px]" style={{ color: '#1E293B' }}>Ajukan Surat Izin</h2>
          <button onClick={onClose} className="p-2">
            <X size={24} color="#64748B" />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {/* Tanggal */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px]" style={{ color: '#475569' }}>Pilih Tanggal</label>
            <div className="relative">
              <input
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                className="w-full h-[48px] rounded-[16px] px-4 border text-[15px]"
                style={{ borderColor: '#E2E8F0', color: '#1E293B' }}
              />
              <Calendar 
                size={20} 
                className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: '#64748B' }}
              />
            </div>
          </div>

          {/* Jenis */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px]" style={{ color: '#475569' }}>Jenis</label>
            <div className="flex gap-3">
              <button
                onClick={() => setJenis('izin')}
                className="flex-1 h-[48px] rounded-[16px] border-2 flex items-center justify-center"
                style={{
                  borderColor: jenis === 'izin' ? '#0EA5A3' : '#E2E8F0',
                  backgroundColor: jenis === 'izin' ? '#0EA5A320' : 'white',
                  color: jenis === 'izin' ? '#0EA5A3' : '#64748B'
                }}
              >
                <span className="text-[14px] leading-none">Izin</span>
              </button>
              <button
                onClick={() => setJenis('sakit')}
                className="flex-1 h-[48px] rounded-[16px] border-2 flex items-center justify-center"
                style={{
                  borderColor: jenis === 'sakit' ? '#0EA5A3' : '#E2E8F0',
                  backgroundColor: jenis === 'sakit' ? '#0EA5A320' : 'white',
                  color: jenis === 'sakit' ? '#0EA5A3' : '#64748B'
                }}
              >
                <span className="text-[14px] leading-none">Sakit</span>
              </button>
            </div>
          </div>

          {/* Alasan */}
          <div className="flex flex-col gap-2">
            <label className="text-[14px]" style={{ color: '#475569' }}>Alasan</label>
            <textarea
              value={alasan}
              onChange={(e) => setAlasan(e.target.value)}
              rows={4}
              placeholder="Tuliskan alasan izin..."
              className="w-full rounded-[16px] px-4 py-3 border resize-none text-[14px]"
              style={{ borderColor: '#E2E8F0', color: '#1E293B' }}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!tanggal || !alasan}
            className="w-full h-[48px] rounded-[20px] flex items-center justify-center"
            style={{
              backgroundColor: tanggal && alasan ? '#0EA5A3' : '#E2E8F0',
              color: tanggal && alasan ? 'white' : '#94A3B8',
              cursor: tanggal && alasan ? 'pointer' : 'not-allowed',
              padding: '12px 16px'
            }}
          >
            <span className="text-[14px] leading-none">Kirim Pengajuan</span>
          </button>
        </div>
      </div>
    </div>
  );
}