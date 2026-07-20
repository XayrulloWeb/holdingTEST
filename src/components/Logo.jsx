import React from 'react';

/**
 * Логотип HOLDING: золотая монограмма «H» в тонкой рамке + опциональный
 * текстовый знак. Векторный, масштабируется без потерь, наследует тему.
 *
 * @param {object} props
 * @param {boolean} [props.withWordmark=true] - показывать ли текст "HOLDING"
 * @param {number} [props.size=36] - размер иконки в px
 * @param {string} [props.className]
 */
export default function Logo({ withWordmark = true, size = 36, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        role="img"
        aria-label="HOLDING"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logo-hgold" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E0C18A" />
            <stop offset="0.5" stopColor="#C7A36A" />
            <stop offset="1" stopColor="#9C7C48" />
          </linearGradient>
        </defs>
        <rect
          x="4.5"
          y="4.5"
          width="55"
          height="55"
          rx="9"
          fill="none"
          stroke="url(#logo-hgold)"
          strokeWidth="1.4"
          strokeOpacity="0.6"
        />
        <path
          d="M22 18 V46 M42 18 V46 M22 32 H42"
          stroke="url(#logo-hgold)"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <circle cx="32" cy="32" r="1.9" fill="#E0C18A" />
      </svg>
      {withWordmark && (
        <span className="font-display text-lg tracking-[0.35em] uppercase font-light leading-none">
          HOLDING
        </span>
      )}
    </span>
  );
}
