import { useState } from 'react';
import { ArrowLeft, Bell, FileText, Award, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface StatusAkademikProps {
  onNavigate: (page: string) => void;
}

const statusData = {
  notifikasi: [
    { title: 'Pengumuman Libur Semester', time: '2 jam yang lalu', type: 'info', read: false },
    { title: 'Tugas Matematika telah dinilai', time: '5 jam yang lalu', type: 'success', read: false },
    { title: 'Reminder: Tugas Fisika besok deadline', time: '1 hari yang lalu', type: 'warning', read: true },
    { title: 'Nilai UTS sudah dapat dilihat', time: '2 hari yang lalu', type: 'success', read: true },
  ],
  tugas: [
    { subject: 'Matematika', title: 'Soal Integral', deadline: '20 November 2025', status: 'pending' },
    { subject: 'Fisika', title: 'Laporan Praktikum Gerak', deadline: '19 November 2025', status: 'urgent' },
    { subject: 'Kimia', title: 'Analisis Reaksi Kimia', deadline: '22 November 2025', status: 'pending' },
    { subject: 'Bahasa Indonesia', title: 'Esai Sastra', deadline: '15 November 2025', status: 'done' },
  ],
  nilai: [
    { subject: 'Matematika', type: 'UTS', score: 85, date: '10 Nov 2025' },
    { subject: 'Fisika', type: 'Quiz', score: 90, date: '12 Nov 2025' },
    { subject: 'Kimia', type: 'UTS', score: 88, date: '11 Nov 2025' },
    { subject: 'Bahasa Inggris', type: 'Tugas', score: 92, date: '13 Nov 2025' },
    { subject: 'Sejarah', type: 'UTS', score: 87, date: '14 Nov 2025' },
  ]
};

export function StatusAkademik({ onNavigate }: StatusAkademikProps) {
  const [activeTab, setActiveTab] = useState<'notifikasi' | 'tugas' | 'nilai'>('notifikasi');

  const getNotifIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle size={20} style={{ color: '#16A34A' }} />;
      case 'warning': return <AlertCircle size={20} style={{ color: '#F59E0B' }} />;
      default: return <Bell size={20} style={{ color: '#3B82F6' }} />;
    }
  };

  const getTaskStatus = (status: string) => {
    switch (status) {
      case 'done': return { bg: '#16A34A20', text: '#16A34A', label: 'Selesai', icon: <CheckCircle size={16} /> };
      case 'urgent': return { bg: '#EF444420', text: '#EF4444', label: 'Urgent', icon: <AlertCircle size={16} /> };
      default: return { bg: '#F59E0B20', text: '#F59E0B', label: 'Pending', icon: <Clock size={16} /> };
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return '#16A34A';
    if (score >= 75) return '#3B82F6';
    if (score >= 60) return '#F59E0B';
    return '#EF4444';
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
        <h1 className="text-[20px] text-white">Status Akademik</h1>
      </div>

      {/* Tabs */}
      <div className="px-4 pt-4">
        <div className="w-full max-w-[360px] mx-auto bg-white rounded-[20px] p-1 flex gap-1">
          <button
            onClick={() => setActiveTab('notifikasi')}
            className="flex-1 h-[42px] rounded-[16px] transition-all text-[13px] flex items-center justify-center"
            style={{
              backgroundColor: activeTab === 'notifikasi' ? '#0EA5A3' : 'transparent',
              color: activeTab === 'notifikasi' ? 'white' : '#64748B'
            }}
          >
            <span className="leading-none">Notifikasi</span>
          </button>
          <button
            onClick={() => setActiveTab('tugas')}
            className="flex-1 h-[42px] rounded-[16px] transition-all text-[13px] flex items-center justify-center"
            style={{
              backgroundColor: activeTab === 'tugas' ? '#0EA5A3' : 'transparent',
              color: activeTab === 'tugas' ? 'white' : '#64748B'
            }}
          >
            <span className="leading-none">Tugas</span>
          </button>
          <button
            onClick={() => setActiveTab('nilai')}
            className="flex-1 h-[42px] rounded-[16px] transition-all text-[13px] flex items-center justify-center"
            style={{
              backgroundColor: activeTab === 'nilai' ? '#0EA5A3' : 'transparent',
              color: activeTab === 'nilai' ? 'white' : '#64748B'
            }}
          >
            <span className="leading-none">Nilai</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-4 flex flex-col gap-3">
        {activeTab === 'notifikasi' && (
          <div className="w-full max-w-[360px] mx-auto flex flex-col gap-3">
            {statusData.notifikasi.map((notif, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-[20px] p-4 flex items-start gap-3"
                style={{ opacity: notif.read ? 0.7 : 1 }}
              >
                <div 
                  className="w-[40px] h-[40px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: notif.type === 'success' ? '#16A34A20' : notif.type === 'warning' ? '#F59E0B20' : '#3B82F620' }}
                >
                  {getNotifIcon(notif.type)}
                </div>
                <div className="flex flex-col flex-1 gap-1">
                  <span className="text-[16px]" style={{ color: '#1E293B' }}>{notif.title}</span>
                  <span className="text-[14px]" style={{ color: '#64748B' }}>{notif.time}</span>
                </div>
                {!notif.read && (
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0EA5A3' }} />
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tugas' && (
          <div className="w-full max-w-[360px] mx-auto flex flex-col gap-3">
            {statusData.tugas.map((task, idx) => {
              const taskStyle = getTaskStatus(task.status);
              
              return (
                <div key={idx} className="bg-white rounded-[20px] p-4 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <FileText size={16} style={{ color: '#0EA5A3' }} />
                        <span className="text-[14px]" style={{ color: '#0EA5A3' }}>{task.subject}</span>
                      </div>
                      <h3 className="text-[16px] mb-2" style={{ color: '#1E293B' }}>{task.title}</h3>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} style={{ color: '#64748B' }} />
                        <span className="text-[14px]" style={{ color: '#64748B' }}>Deadline: {task.deadline}</span>
                      </div>
                    </div>
                    <div 
                      className="px-3 py-1 rounded-[12px] flex items-center gap-1"
                      style={{ backgroundColor: taskStyle.bg, color: taskStyle.text }}
                    >
                      {taskStyle.icon}
                      <span className="text-[12px]">{taskStyle.label}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'nilai' && (
          <div className="w-full max-w-[360px] mx-auto flex flex-col gap-3">
            <div className="bg-white rounded-[20px] p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[16px]" style={{ color: '#1E293B' }}>Rata-rata Nilai</h3>
                <span className="text-[24px]" style={{ color: '#0EA5A3', fontVariantNumeric: 'tabular-nums' }}>
                  88.4
                </span>
              </div>
              <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#E2E8F0' }}>
                <div 
                  className="h-full rounded-full"
                  style={{ backgroundColor: '#0EA5A3', width: '88.4%' }}
                />
              </div>
            </div>

            {statusData.nilai.map((score, idx) => (
              <div key={idx} className="bg-white rounded-[20px] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${getScoreColor(score.score)}20` }}
                  >
                    <Award size={24} style={{ color: getScoreColor(score.score) }} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[16px]" style={{ color: '#1E293B' }}>{score.subject}</span>
                    <span className="text-[14px]" style={{ color: '#64748B' }}>{score.type} • {score.date}</span>
                  </div>
                </div>
                <span 
                  className="text-[24px]"
                  style={{ color: getScoreColor(score.score), fontVariantNumeric: 'tabular-nums' }}
                >
                  {score.score}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}