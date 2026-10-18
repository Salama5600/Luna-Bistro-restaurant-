import React from 'react';

interface PageIntroProps {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
}

export function PageIntro({ eyebrow, title, children }: PageIntroProps) {
  return (
    <div className="site-container page-intro reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <span className="intro-rule" aria-hidden="true" />
      {children && <p>{children}</p>}
    </div>
  );
}
