import { Clock, MapPin, PenToolIcon, Shield } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function WarrantyRepairPage() {
  return (
    <div className="max-h-[336px] overflow-y-auto p-4">
      <h1 className="mb-3 text-2xl font-bold">Warranty & Repair</h1>

      <p className="mb-4 text-sm text-muted-foreground">
        Learn about your CASIO watch warranty coverage and repair services.
      </p>

      <Tabs defaultValue="warranty" className="space-y-4">
        <TabsList className="grid h-9 w-full grid-cols-4">
          <TabsTrigger value="warranty" className="text-xs">
            Warranty
          </TabsTrigger>
          <TabsTrigger value="service" className="text-xs">
            Service Centers
          </TabsTrigger>
          <TabsTrigger value="process" className="text-xs">
            Repair Process
          </TabsTrigger>
          <TabsTrigger value="issues" className="text-xs">
            Common Issues
          </TabsTrigger>
        </TabsList>

        <TabsContent value="warranty" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Shield className="size-4" />
                Warranty Coverage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs">
              <p>Your CASIO watch comes with:</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>2-year international warranty</li>
                <li>Coverage for manufacturing defects</li>
                <li>Free repair at authorized centers</li>
                <li>Original parts replacement</li>
              </ul>
              <Button size="sm" className="mt-2">
                Download Warranty Card
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="service" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <MapPin className="size-4" />
                Find a Service Center
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs">
              <div className="mb-4">
                <p className="text-muted-foreground">
                  Locate your nearest authorized CASIO service center for professional watch repair and maintenance.
                </p>
              </div>
              {/* Add a store locator component here */}
              <Button size="sm">Find Nearest Location</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="process" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <PenToolIcon className="size-4" />
                Repair Process
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs">
              <ol className="ml-4 list-decimal space-y-2">
                <li>
                  <h3 className="font-medium">Request Service</h3>
                  <p className="text-muted-foreground">Fill out our online repair request form</p>
                </li>
                <li>
                  <h3 className="font-medium">Evaluation</h3>
                  <p className="text-muted-foreground">Our technicians will assess your watch</p>
                </li>
                <li>
                  <h3 className="font-medium">Repair Quote</h3>
                  <p className="text-muted-foreground">Receive a detailed cost estimate</p>
                </li>
                <li>
                  <h3 className="font-medium">Service</h3>
                  <p className="text-muted-foreground">Professional repair with genuine parts</p>
                </li>
                <li>
                  <h3 className="font-medium">Return</h3>
                  <p className="text-muted-foreground">Your watch is safely returned to you</p>
                </li>
              </ol>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="issues" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Clock className="size-4" />
                Common Issues & Solutions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-medium">Battery Replacement</h3>
                  <p className="text-muted-foreground">
                    Most CASIO watches require battery replacement every 2-3 years. Visit an authorized service center
                    for proper replacement.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-medium">Time Setting</h3>
                  <p className="text-muted-foreground">
                    For digital watches, press and hold the adjust button. For analog watches, pull out the crown to set
                    the time.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-medium">Water Resistance</h3>
                  <p className="text-muted-foreground">
                    Regular testing of water resistance is recommended. Avoid pressing buttons underwater.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
