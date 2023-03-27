import { Document } from "mongoose";

export type Role = 'Admin' | 'Disable' | 'Client'

export interface ITicket extends Document {
    name: string,
    price: number,
    numberOfPassengers: number,
    origin: string,
    destiny: string,
    user: Object,
    date: Date,
    quantity:number,
    quantityAvailable:number,
    TtravelTime: Date
}   

export interface IUser extends Document {
    name: string,
    email: string,
    passwordHash: string;
    tickets: Array
    phone: number,
    role: Role
}