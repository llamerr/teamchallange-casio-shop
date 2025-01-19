import { Home } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export type BreadcrumbsProps = {
  links: Array<{ href: string; label: string }>;
};

export function Breadcrumbs({ links }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-slate-600" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center hover:text-slate-900">
        <Home className="size-4" />
        <span className="mx-2">Home</span>
      </Link>
      {links.map((link, index) => (
        <React.Fragment key={link.href}>
          <span>/</span>
          {index < links.length - 1
            ? (
                <Link href={link.href} className="hover:text-slate-900">
                  {link.label}
                </Link>
              )
            : (
                <span>{link.label}</span>
              )}
        </React.Fragment>
      ))}
    </nav>
  );
}
