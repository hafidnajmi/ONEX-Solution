interface OnexIconProps {
  className?: string;
}

export const OnexIcon = ({ className = "w-8 h-8" }: OnexIconProps) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Bagian Kiri (Putih) - Ujung kanan ditarik ke tengah (12) */}
    <path 
      d="M3 7L8 12L3 17H7.5L12.5 12L7.5 7H3Z" 
      fill="white" 
    />
    
    {/* Bagian Kanan (Abu-abu) - Ujung kiri ditarik ke tengah (12) */}
    <path 
      d="M21 7L16 12L21 17H16.5L11.5 12L16.5 7H21Z" 
      fill="#94A3B8" 
      style={{ mixBlendMode: 'screen' }} 
    />
  </svg>
);