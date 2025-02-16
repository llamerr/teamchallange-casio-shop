import { ArrowLeftRight, CheckCircle, Info, XCircle } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ReturnsPage() {
  return (
    <div className="flex max-h-[336px] flex-row overflow-y-auto p-4">
      <div className="">
        <h1 className="mb-3 text-2xl font-bold">Returns</h1>

        <p className="mb-4 text-sm text-muted-foreground">
          Learn about our return policy and process for CASIO watches and products.
        </p>

        <Alert className="mb-4">
          <Info className="size-4" />
          <AlertTitle className="text-sm">30-Day Return Policy</AlertTitle>
          <AlertDescription className="text-xs">
            We offer a 30-day return period for unworn watches in original condition with all tags attached.
          </AlertDescription>
        </Alert>
      </div>

      <Card className="mb-4">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-sm">
            <ArrowLeftRight className="size-4" />
            Return Process
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="ml-4 list-decimal space-y-2 text-xs">
            <li>
              <h3 className="font-medium">Initiate Return</h3>
              <p className="text-muted-foreground">Fill out the return form in your order history</p>
            </li>
            <li>
              <h3 className="font-medium">Print Label</h3>
              <p className="text-muted-foreground">Use our prepaid return shipping label</p>
            </li>
            <li>
              <h3 className="font-medium">Package Item</h3>
              <p className="text-muted-foreground">Securely pack the watch with all original materials</p>
            </li>
            <li>
              <h3 className="font-medium">Ship</h3>
              <p className="text-muted-foreground">Drop off at any authorized shipping location</p>
            </li>
            <li>
              <h3 className="font-medium">Refund</h3>
              <p className="text-muted-foreground">Receive refund within 5-7 business days of receipt</p>
            </li>
          </ol>
          <Button size="sm" className="mt-4">
            Start Return Process
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <CheckCircle className="size-4 text-green-500" />
              Eligible for Return
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-4 list-disc space-y-1 text-xs">
              <li>Unworn watches with tags attached</li>
              <li>Original packaging included</li>
              <li>Within 30 days of delivery</li>
              <li>Proof of purchase available</li>
              <li>No signs of wear or damage</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <XCircle className="size-4 text-red-500" />
              Not Eligible for Return
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="ml-4 list-disc space-y-1 text-xs">
              <li>Worn or used watches</li>
              <li>Missing original packaging</li>
              <li>Beyond 30-day return window</li>
              <li>Signs of damage or tampering</li>
              <li>Special order or customized items</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
