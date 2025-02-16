import { Clock, Mail, Phone } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ContactPage() {
  return (
    <div className="max-h-[336px] overflow-y-auto p-4">
      <h1 className="mb-3 text-2xl font-bold">Contact Us</h1>

      <p className="mb-4 text-sm text-muted-foreground">
        Get in touch with our customer support team. We're here to help with any questions about your CASIO watch.
      </p>

      <div className="mb-4 grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Phone className="size-4" />
              Phone Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              1-800-CASIO-US
              <br />
              Monday - Friday
              <br />
              9:00 AM - 5:00 PM EST
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Mail className="size-4" />
              Email Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              support@casio.com
              <br />
              Response within
              <br />
              24-48 hours
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm">
              <Clock className="size-4" />
              Live Chat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Available Now
              <br />
              24/7 Support
              <br />
              Average wait: 2 mins
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
