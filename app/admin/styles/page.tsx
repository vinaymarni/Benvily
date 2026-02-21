'use client';

import { AdminSidebar } from '@/components/admin-sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAtom } from 'jotai';
import { currentUserAtom } from '@/lib/atoms';
import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
import { styles } from '@/lib/dummy-data';
import { Star, MapPin, Clock, Plus, Edit, Trash2 } from 'lucide-react';

export default function AdminSalonsPage() {
  const [currentUser] = useAtom(currentUserAtom);
  const router = useRouter();

  // useEffect(() => {
  //   if (!currentUser || currentUser.role !== 'admin') {
  //     router.push('/auth/login');
  //   }
  // }, [currentUser, router]);

  // if (!currentUser || currentUser.role !== 'admin') {
  //   return null;
  // }

  return (
    <div className="flex">
      <AdminSidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Manage Styles</h1>
            <p className="text-muted-foreground">
              View and manage all Styles locations in your network
            </p>
          </div>
          <Button className="gap-2"> 
            <Plus className="h-4 w-4" />
            Add Style
          </Button>
        </div>

        {/* Salons Table */}
        <Card>
          <CardHeader>
            <CardTitle>All Styles</CardTitle>
            <CardDescription>{styles.length} Styles in your network</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {styles.map((style) => (
                <div
                  key={style.id}
                  className="border rounded-lg p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold">{style.name}</h3>
                      {/* <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {style.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {style.openHours.open} - {style.openHours.close}
                        </div>
                      </div> */}
                    </div>
                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-xs text-muted-foreground">Rating</p>
                        <p className="font-semibold flex items-center gap-1">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          {style.rating} ({style.reviews} reviews)
                        </p>
                      </div>
                      {/* <div>
                        <p className="text-xs text-muted-foreground">Services</p>
                        <p className="font-semibold">{style.services.length} services</p>
                      </div> */}
                    </div>
                  </div>

                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Edit className="h-4 w-4" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
