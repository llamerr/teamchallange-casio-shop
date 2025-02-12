'use client';

import { Search } from 'lucide-react';

export function TrackOrderBar() {
  return (
    <li className="
      flex w-full flex-col gap-1 border-b border-[#7983A7]
      px-6 py-4
      text-base font-medium text-[#3F4664]
    "
    >
      <p>Track Your Order:</p>
      <div className="flex h-12 flex-row">
        <input
          placeholder="Enter order code"
          className="
          w-full border border-[#7983A7] bg-[#F3F3F3] px-3 text-lg
          font-normal text-[#7983A7] focus:border-[#111321] focus:outline-none
        "
        />
        <button type="button" className="flex size-12 items-center justify-center bg-[#111321] text-[#F3F3F3]">
          <Search className="size-6" />
        </button>
      </div>
    </li>
  );
}
