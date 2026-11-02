import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark'; // 'light' is for light/white backgrounds, 'dark' is for dark navy backgrounds
  showSubtext?: boolean;
  markOnly?: boolean;
  className?: string;
  height?: number;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  showSubtext = false,
  markOnly = false,
  className = '',
  height = 60,
}) => {
  const isDark = variant === 'dark';
  
  // Authentic colors from original Puri & Loggia LLP branding
  const navyColor = isDark ? '#FFFFFF' : '#163B6B';
  const goldColor = isDark ? '#F59E0B' : '#E59819';
  const goldBorder = isDark ? '#F59E0B' : '#D97706';
  const subtextColor = isDark ? '#94A3B8' : '#475569';

  // Mark-only / favicon emblem
  if (markOnly) {
    return (
      <svg
        width={height}
        height={height}
        viewBox="0 0 76 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Puri & Loggia LLP Emblem"
      >
        {/* Outer Gold Frame */}
        <rect
          x="3"
          y="3"
          width="70"
          height="62"
          stroke={goldBorder}
          strokeWidth="3.5"
          fill={isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF'}
          rx="2"
        />
        {/* PnL Monogram */}
        <text
          x="38"
          y="42"
          textAnchor="middle"
          fill={navyColor}
          fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
          fontStyle="italic"
          fontWeight="800"
          fontSize="36"
          letterSpacing="-1.5"
        >
          PnL
        </text>
        {/* Underline bar */}
        <rect x="12" y="49" width="52" height="3" fill={navyColor} rx="1" />
      </svg>
    );
  }

  // Full Brand Logo (Framed PnL with Puri & Loggia LLP Wordmark)
  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.9rem',
        textDecoration: 'none',
      }}
    >
      {/* Authentic Framed PnL Crest */}
      <svg
        width={Math.round(height * 0.98)}
        height={height}
        viewBox="0 0 76 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        {/* Outer Golden/Amber Frame */}
        <rect
          x="3"
          y="3"
          width="70"
          height="62"
          stroke={goldBorder}
          strokeWidth="3.5"
          fill={isDark ? 'rgba(255,255,255,0.06)' : '#FFFFFF'}
          rx="2"
        />
        {/* PnL Lettering with serif flair */}
        <text
          x="38"
          y="43"
          textAnchor="middle"
          fill={navyColor}
          fontFamily="'Playfair Display', Georgia, 'Times New Roman', serif"
          fontStyle="italic"
          fontWeight="800"
          fontSize="37"
          letterSpacing="-1.5"
        >
          PnL
        </text>
        {/* Underline bar under PnL */}
        <rect x="11" y="50" width="54" height="3.5" fill={navyColor} rx="1" />
      </svg>

      {/* Typography: Puri & Loggia LLP */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div
          style={{
            fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
            fontWeight: 800,
            fontSize: `${Math.max(20, Math.round(height * 0.44))}px`,
            letterSpacing: '-0.02em',
            color: navyColor,
            lineHeight: 1.1,
            display: 'flex',
            alignItems: 'baseline',
            gap: '0.3rem',
            whiteSpace: 'nowrap'
          }}
        >
          <span>Puri</span>
          <span style={{ color: goldColor, fontWeight: 700 }}>&amp;</span>
          <span>Loggia</span>
          <span
            style={{
              fontWeight: 800,
              fontSize: `${Math.max(15, Math.round(height * 0.35))}px`,
              letterSpacing: '0.04em',
              marginLeft: '3px',
              color: isDark ? goldColor : navyColor,
            }}
          >
            LLP
          </span>
        </div>

        {showSubtext && (
          <div
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: `${Math.max(10, Math.round(height * 0.18))}px`,
              fontWeight: 600,
              color: subtextColor,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginTop: '2px',
              whiteSpace: 'nowrap'
            }}
          >
            Chartered Professional Accountants
          </div>
        )}
      </div>
    </div>
  );
};
