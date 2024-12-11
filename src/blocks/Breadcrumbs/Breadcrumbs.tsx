import { Home } from 'lucide-react';
import Link from 'next/link';

export function Breadcrumbs() {
  return (
    <nav className="flex items-center space-x-2 text-sm text-slate-600" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center hover:text-slate-900">
        <Home className="size-4" />
        <span className="sr-only">Home</span>
      </Link>
      <span>/</span>
      <Link href="/collections" className="hover:text-slate-900">
        Collections
      </Link>
      <span>/</span>
      <Link href="/vintage" className="hover:text-slate-900">
        Vintage
      </Link>
      <span>/</span>
      <span className="text-slate-900" aria-current="page">
        A1000ACG-9
      </span>
    </nav>
  );
}
