import { useState } from 'react';

interface EditorialMediaProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectClass?: string;
  fit?: 'cover' | 'contain';
  priority?: boolean;
  fallbackLabel?: string;
}

export function EditorialMedia({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspectClass = '',
  fit = 'cover',
  priority = false,
  fallbackLabel = 'ATM Arapongas',
}: EditorialMediaProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#171717]/5 ${aspectClass} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          onError={() => setHasError(true)}
          className={`h-full w-full ${
            fit === 'contain' ? 'object-contain' : 'object-cover'
          } ${imgClassName}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center border border-[#171717]/20 bg-white p-6 text-center"
        >
          <svg
            viewBox="0 0 80 48"
            className="mb-3 h-10 w-16 text-[#171717]"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="2"
              y="4"
              width="76"
              height="40"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <line
              x1="40"
              y1="2"
              x2="40"
              y2="46"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            <circle cx="58" cy="18" r="4.5" fill="#A9DDF5" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <span className="font-mono-tech text-xs tracking-wider text-[#171717]/70">
            {fallbackLabel}
          </span>
        </div>
      )}
    </div>
  );
}
