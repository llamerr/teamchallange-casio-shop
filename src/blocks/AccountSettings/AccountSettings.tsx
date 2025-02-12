import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { SettingsTab } from './SettingsTab';
import { TrackOrderBar } from './TrackOrderBar';

export function AccountSettings() {
  return (
    <nav className="flex aspect-[0.63/1] w-[568px] flex-col justify-between border border-[#3F4664] bg-[#EEEEEF]">
      <ul>
        <SettingsTab href="/account/profile">Profile</SettingsTab>
        <SettingsTab href="/account/delivery-address">Delivery Addresses</SettingsTab>
        <SettingsTab href="/account/wishlist">Wishlist</SettingsTab>
        <SettingsTab href="/account/order-history">Order History</SettingsTab>
        <TrackOrderBar />
        <SettingsTab href="/comparison-list">Comparison List</SettingsTab>
      </ul>
      <div className="h-14 px-6 py-4">
        <Link href="/logout" className="flex w-fit flex-row gap-2 text-base font-normal text-[#111321] underline">
          Log out
          <ArrowRight className="size-6" />
        </Link>
      </div>
    </nav>
  );
}
