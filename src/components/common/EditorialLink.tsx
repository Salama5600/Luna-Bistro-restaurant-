import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface EditorialLinkProps {
  to: string;
  children: React.ReactNode;
}

export function EditorialLink({ to, children }: EditorialLinkProps) {
  return (
    <Button asChild variant="editorial" className="editorial-link">
      <Link to={to}>
        {children}
        <ArrowRight />
      </Link>
    </Button>
  );
}
