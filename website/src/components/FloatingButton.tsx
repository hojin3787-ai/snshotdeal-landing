'use client';

import { FaComments } from 'react-icons/fa';

export default function FloatingButton() {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).ht) {
      (window as any).ht.open();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-full font-bold text-white shadow-2xl transition-all hover:shadow-3xl cursor-pointer"
      style={{ 
        backgroundColor: '#EB5644',
        animation: 'float 3s ease-in-out infinite'
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#D84A3A'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EB5644'}
      aria-label="무료 상담하기"
    >
      <FaComments className="text-2xl" />
      <span className="hidden sm:inline">무료 상담</span>
    </button>
  );
}
