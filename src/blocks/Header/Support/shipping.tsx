import { Plane, Ship, Truck } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function ShippingPage() {
  return (
    <div className="max-h-[336px] overflow-y-auto p-4">
      <h1 className="mb-3 text-2xl font-bold">Shipping Information</h1>

      <p className="mb-4 text-sm text-muted-foreground">
        Find detailed information about our shipping methods, delivery times, and tracking procedures.
      </p>

      <div className="mb-4 grid grid-cols-3 gap-4">
        <Card className="col-span-3 md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Truck className="size-4" />
              Domestic Shipping
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1 text-xs">
              <li>Standard (5-7 business days)</li>
              <li>Express (2-3 business days)</li>
              <li>Next Day Delivery available</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="col-span-3 md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Plane className="size-4" />
              International Shipping
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1 text-xs">
              <li>Standard (10-15 business days)</li>
              <li>Express (3-5 business days)</li>
              <li>Available to 190+ countries</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="col-span-3 md:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Ship className="size-4" />
              Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1 text-xs">
              <li>Real-time tracking updates</li>
              <li>Email notifications</li>
              <li>SMS alerts available</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Shipping Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">Method</TableHead>
                <TableHead className="text-xs">Delivery Time</TableHead>
                <TableHead className="text-xs">Cost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="text-xs">Standard Domestic</TableCell>
                <TableCell className="text-xs">5-7 business days</TableCell>
                <TableCell className="text-xs">$5.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs">Express Domestic</TableCell>
                <TableCell className="text-xs">2-3 business days</TableCell>
                <TableCell className="text-xs">$12.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs">Next Day</TableCell>
                <TableCell className="text-xs">Next business day</TableCell>
                <TableCell className="text-xs">$24.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs">International Standard</TableCell>
                <TableCell className="text-xs">10-15 business days</TableCell>
                <TableCell className="text-xs">$19.99</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs">International Express</TableCell>
                <TableCell className="text-xs">3-5 business days</TableCell>
                <TableCell className="text-xs">$39.99</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
