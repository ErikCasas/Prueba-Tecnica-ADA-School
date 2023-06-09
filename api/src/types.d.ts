import { Document } from "mongoose";

export type Role = 'Admin' | 'Disable' | 'Client'

export interface Ticket extends Document {
    name: string,
    price: number,
    numberOfPassengers: number,
    origin: string,
    destiny: string,
    user: Object,
    date: string,
    quantity:number,
    quantityAvailable:number,
    travelTime: string,
    departureTime: string,
    
}   

export interface User extends Document {
    name: string,
    email: string,
    passwordHash: string;
    tickets: Array
    phone: number,
    role: Role
}