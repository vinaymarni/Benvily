import { atom } from 'jotai';

// Types
export type Gender = 'Male' | 'Female' | 'Unisex';
export type ServiceType = 'Haircut' | 'Coloring' | 'Styling' | 'Massage' | 'Facial' | 'Waxing';
export type UserRole = 'customer' | 'admin' | 'stylist';

export interface Service {
  id: string;
  name: ServiceType;
  description: string;
  duration: number; // in minutes
  basePrice: number;
  availableGenders: Gender[];
  image: string;
}

export interface Style {
  id: string;
  name: string;
  description: string;
  image: string;
  serviceId: string;
  price: number;
  availableGenders: Gender[];
  rating: number;
  reviews: number;
}

export interface Stylist {
  id: string;
  name: string;
  specializations: ServiceType[];
  image: string;
  rating: number;
  reviews: number;
  salonId: string;
  genderSpecialization: Gender;
}

export interface Salon {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  openHours: { open: string; close: string };
  services: string[]; // Service IDs
}

export interface TimeSlot {
  id: string;
  stylistId: string;
  date: string;
  time: string;
  available: boolean;
  serviceId: string;
}

export interface Booking {
  id: string;
  userId: string;
  stylistId: string;
  salonId: string;
  serviceId: string;
  styleId: string;
  date: string;
  time: string;
  price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  role: UserRole;
  bookings: Booking[];
  createdAt: string;
}

// Global State Atoms
export const genderAtom = atom<Gender | null>(null);
export const selectedServiceAtom = atom<Service | null>(null);
export const selectedStyleAtom = atom<Style | null>(null);
export const selectedSalonAtom = atom<Salon | null>(null);
export const selectedStylistAtom = atom<Stylist | null>(null);
export const selectedSlotAtom = atom<TimeSlot | null>(null);

export const currentUserAtom = atom<User | null>(null);
export const isAuthenticatedAtom = atom(false);

export const bookingFlowAtom = atom<'service' | 'salon'>('service');
export const currentBookingAtom = atom<Partial<Booking>>({});
