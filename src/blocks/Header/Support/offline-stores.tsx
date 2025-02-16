import { MapPin, Timer } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OfflineStoresPage() {
  return (
    <div className="max-h-[336px] overflow-y-auto p-4">
      <h1 className="mb-3 text-2xl font-bold">Offline Stores</h1>

      <p className="mb-4 text-sm text-muted-foreground">Find CASIO authorized dealers and service centers near you.</p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <MapPin className="size-4" />
              CASIO Flagship Store
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1 text-xs">
              <p>123 Watch Street</p>
              <p>New York, NY 10001</p>
              <p className="flex items-center gap-1">
                <Timer className="size-3" />
                Open: 10 AM - 9 PM
              </p>
              <Button variant="outline" size="sm" className="mt-2 w-full">
                Get Directions
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <MapPin className="size-4" />
              CASIO Service Center
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1 text-xs">
              <p>456 Time Avenue</p>
              <p>New York, NY 10002</p>
              <p className="flex items-center gap-1">
                <Timer className="size-3" />
                Open: 9 AM - 6 PM
              </p>
              <Button variant="outline" size="sm" className="mt-2 w-full">
                Get Directions
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <MapPin className="size-4" />
              Authorized Dealer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1 text-xs">
              <p>789 Clock Road</p>
              <p>New York, NY 10003</p>
              <p className="flex items-center gap-1">
                <Timer className="size-3" />
                Open: 11 AM - 7 PM
              </p>
              <Button variant="outline" size="sm" className="mt-2 w-full">
                Get Directions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
