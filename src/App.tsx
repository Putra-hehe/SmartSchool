import { useState } from 'react';
import { Beranda } from './components/Beranda';
import { RiwayatPresensi } from './components/RiwayatPresensi';
import { Jadwal } from './components/Jadwal';
import { Panduan } from './components/Panduan';
import { Bantuan } from './components/Bantuan';
import { ESchool } from './components/ESchool';
import { StatusAkademik } from './components/StatusAkademik';
import { Settings } from './components/Settings';
import { BottomNav } from './components/BottomNav';

export default function App() {
  const [currentPage, setCurrentPage] = useState('beranda');

  const renderPage = () => {
    switch (currentPage) {
      case 'beranda':
        return <Beranda onNavigate={setCurrentPage} />;
      case 'event':
        return <ESchool onNavigate={setCurrentPage} />;
      case 'riwayat':
        return <RiwayatPresensi onNavigate={setCurrentPage} />;
      case 'jadwal':
        return <Jadwal onNavigate={setCurrentPage} />;
      case 'panduan':
        return <Panduan onNavigate={setCurrentPage} />;
      case 'bantuan':
        return <Bantuan onNavigate={setCurrentPage} />;
      case 'status':
        return <StatusAkademik onNavigate={setCurrentPage} />;
      case 'settings':
        return <Settings onNavigate={setCurrentPage} />;
      default:
        return <Beranda onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#F3F6F8' }}>
      <div className="relative w-[390px] h-[844px] bg-white overflow-hidden shadow-xl">
        {renderPage()}
        <BottomNav currentPage={currentPage} onNavigate={setCurrentPage} />
      </div>
    </div>
  );
}
