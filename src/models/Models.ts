import { SanityDocument } from "next-sanity"

export interface ScheduleItem extends SanityDocument {
    _id: string
    ageGroup: string
    days: string[]
    time: string
    price: number
}

export interface KarateScheduleItem {
    _id: string
    position: number
    ageGroup: string
    schedule: Array<{
        days: string[]
        time: string
    }>
    price: number
    location: 'kupchino' | 'shushari'
}