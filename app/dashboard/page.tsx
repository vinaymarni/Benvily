'use client';

import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAtom } from 'jotai';
import { currentUserAtom, isAuthenticatedAtom } from '@/lib/atoms';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Calendar, Clock, MapPin, LogOut, Plus } from 'lucide-react';

export default function DashboardPage() {
  const [currentUser] = useAtom(currentUserAtom);
  const [, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push('/auth/login');
    }
  }, [currentUser, router]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    router.push('/');
  };

  if (!currentUser) {
    return null;
  }

  const upcomingBookings = currentUser.bookings.filter((b) => b.status === 'confirmed');
  const pastBookings = currentUser.bookings.filter((b) => b.status === 'completed');

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome, {currentUser.name}!</h1>
            <p className="text-muted-foreground">Manage your appointments and bookings</p>
          </div>
          <div className="flex gap-3">
            <Link href="/services">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New Booking
              </Button>
            </Link>
            <Button variant="outline" onClick={handleLogout} className="gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* User Info */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="font-semibold">{currentUser.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <p className="font-semibold">{currentUser.phone}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Account Type</p>
              <p className="font-semibold capitalize">{currentUser.role}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Member Since</p>
              <p className="font-semibold">
                {new Date(currentUser.createdAt).toLocaleDateString()}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bookings Section */}
        <div className="space-y-8">
          {/* Upcoming Bookings */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Upcoming Appointments</h2>
            {upcomingBookings.length > 0 ? (
              <div className="grid gap-4">
                {upcomingBookings.map((booking) => (
                  <Card key={booking.id}>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground">Service</p>
                            <p className="font-semibold">Premium Grooming</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">
                              {new Date(booking.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-muted-foreground">Price</p>
                            <p className="text-lg font-bold text-accent">  ₹{booking.price}/-</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{booking.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button variant="outline" size="sm">
                          Cancel
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-muted-foreground mb-4">
                    You don't have any upcoming appointments.
                  </p>
                  <Link href="/services">
                    <Button>Book an Appointment</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Past Bookings */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Past Appointments</h2>
            {pastBookings.length > 0 ? (
              <div className="grid gap-4">
                {pastBookings.map((booking) => (
                  <Card key={booking.id} className="opacity-75">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2">
                          <p className="font-semibold">Premium Grooming</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(booking.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {booking.time}
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Leave Review
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="pt-6 text-center text-muted-foreground">
                  No past appointments yet.
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
