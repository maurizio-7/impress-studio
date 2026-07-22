import React from "react";

export function IconBadge({ children, inline = false }) {
  return (
    <div
      className={`rounded-2xl bg-brand-accent/10 flex items-center justify-center flex-shrink-0 ${
        inline ? "w-12 h-12" : "w-14 h-14 mb-5"
      }`}
    >
      {children}
    </div>
  );
}

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ProfileIcon() {
  return (
    <IconBadge>
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-accent" {...strokeProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2.25" />
        <path d="M5.5 17c.7-2 2.3-3 3.5-3s2.8 1 3.5 3" />
        <path d="M14.5 9h4M14.5 12.5h4" />
      </svg>
    </IconBadge>
  );
}

export function BrandingIcon() {
  return (
    <IconBadge>
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-accent" {...strokeProps}>
        <path d="M12 3c-4.97 0-9 3.8-9 8.5 0 2.49 2 4.5 4.2 4.5H9a1.5 1.5 0 011.5 1.5v.2c0 1.5 1.2 2.3 2.5 2.3 4.97 0 9-4.03 9-9 0-4.42-4.03-7.5-9-7.5z" />
        <circle cx="8.5" cy="11" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
        <circle cx="15.5" cy="11" r="1" fill="currentColor" stroke="none" />
      </svg>
    </IconBadge>
  );
}

export function CardTapIcon() {
  return (
    <IconBadge>
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-accent" {...strokeProps}>
        <rect x="2.5" y="6" width="14" height="12" rx="2" />
        <path d="M6.5 14.5h6M6.5 11h3" />
        <path d="M18 8.5c1 1 1.5 2.2 1.5 3.5s-.5 2.5-1.5 3.5" />
        <path d="M20.5 6.5c1.6 1.6 2.5 3.5 2.5 5.5s-.9 3.9-2.5 5.5" />
      </svg>
    </IconBadge>
  );
}

export function SparkleIcon() {
  return (
    <IconBadge>
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-accent" {...strokeProps}>
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
      </svg>
    </IconBadge>
  );
}

export function TagIcon() {
  return (
    <IconBadge>
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-accent" {...strokeProps}>
        <path d="M11.5 3.5H5a1.5 1.5 0 00-1.5 1.5v6.5a1.5 1.5 0 00.44 1.06l8 8a1.5 1.5 0 002.12 0l6.5-6.5a1.5 1.5 0 000-2.12l-8-8a1.5 1.5 0 00-1.06-.44z" />
        <circle cx="8" cy="8" r="1.25" fill="currentColor" stroke="none" />
      </svg>
    </IconBadge>
  );
}

export function BoltIcon() {
  return (
    <IconBadge>
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-accent" {...strokeProps}>
        <path d="M13 3L5 13.5h5.5L11 21l8-10.5h-5.5L13 3z" />
      </svg>
    </IconBadge>
  );
}

export function PuzzleIcon() {
  return (
    <IconBadge>
      <svg viewBox="0 0 24 24" className="w-7 h-7 text-brand-accent" {...strokeProps}>
        <path d="M9 4h4a1 1 0 011 1v2.2a1.6 1.6 0 002.6 1.25 1.6 1.6 0 112.15 2.37A1.6 1.6 0 0020 13.4V15a1 1 0 01-1 1h-2.2a1.6 1.6 0 00-1.25 2.6 1.6 1.6 0 11-2.37 2.15A1.6 1.6 0 0011.6 20H10a1 1 0 01-1-1v-2.2a1.6 1.6 0 00-2.6-1.25 1.6 1.6 0 11-2.15-2.37A1.6 1.6 0 006 11.6V10a1 1 0 011-1h2z" />
      </svg>
    </IconBadge>
  );
}

export function EmailIcon() {
  return (
    <IconBadge inline>
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-accent" {...strokeProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3.5 6.5L12 13l8.5-6.5" />
      </svg>
    </IconBadge>
  );
}

export function PhoneIcon() {
  return (
    <IconBadge inline>
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-accent" {...strokeProps}>
        <path d="M6.5 3.5h2.8l1.3 4.2-2 1.6a11 11 0 005.1 5.1l1.6-2 4.2 1.3v2.8c0 1-.9 1.8-1.9 1.6-3.6-.6-7-2.4-9.6-5-2.6-2.6-4.4-6-5-9.6-.2-1 .6-1.9 1.6-1.9z" />
      </svg>
    </IconBadge>
  );
}

export function LocationIcon() {
  return (
    <IconBadge inline>
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-accent" {...strokeProps}>
        <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z" />
        <circle cx="12" cy="10" r="2.25" />
      </svg>
    </IconBadge>
  );
}

export function CheckIcon() {
  return (
    <div className="w-20 h-20 mx-auto rounded-full bg-brand-interactive/10 flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-9 h-9 text-brand-interactive" {...strokeProps}>
        <path d="M5 12.5l4.5 4.5L19 7" />
      </svg>
    </div>
  );
}
