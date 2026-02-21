'use client';

import { AdminSidebar } from '@/components/admin-sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAtom } from 'jotai';
import { currentUserAtom } from '@/lib/atoms';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { salons, stylists, services, styles } from '@/lib/dummy-data';
import { Users, Building2, Scissors, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
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

  const stats = [
    {
      title: 'Total Salons',
      value: salons.length,
      icon: Building2,
      color: 'text-blue-500',
    },
    {
      title: 'Total Stylists',
      value: stylists.length,
      icon: Users,
      color: 'text-purple-500',
    },
    {
      title: 'Total Services',
      value: services.length,
      icon: Scissors,
      color: 'text-pink-500',
    },
    {
      title: 'Total Styles',
      value: styles.length,
      icon: TrendingUp,
      color: 'text-green-500',
    },
  ];

  return (
    <div className="flex">
      <AdminSidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your salon network.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Salons Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Top Salons</CardTitle>
              <CardDescription>Your most popular salon locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salons.slice(0, 3).map((salon) => (
                  <div key={salon.id} className="flex items-center justify-between pb-4 border-b last:border-0">
                    <div>
                      <p className="font-semibold">{salon.name}</p>
                      <p className="text-sm text-muted-foreground">{salon.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{salon.rating} ★</p>
                      <p className="text-sm text-muted-foreground">{salon.reviews} reviews</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Services Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Available Services</CardTitle>
              <CardDescription>Services offered across your network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.slice(0, 3).map((service) => (
                  <div key={service.id} className="flex items-center justify-between pb-4 border-b last:border-0">
                    <div>
                      <p className="font-semibold">{service.name}</p>
                      <p className="text-sm text-muted-foreground">{service.duration} mins</p>
                    </div>
                    <p className="font-semibold">${service.basePrice}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stylists Overview */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Top Stylists</CardTitle>
            <CardDescription>Your highest-rated stylists</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stylists.slice(0, 3).map((stylist) => (
                <div key={stylist.id} className="border rounded-lg p-4">
                  <p className="font-semibold mb-1">{stylist.name}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {stylist.genderSpecialization}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold">{stylist.rating}</span> ★
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stylist.reviews} reviews
                      </p>
                    </div>
                    <div className="text-right text-sm">
                      <p className="text-xs text-muted-foreground">
                        {stylist.specializations.length} specialties
                      </p>
                    </div>
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
