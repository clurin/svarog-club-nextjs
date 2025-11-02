import { KarateScheduleItem } from "@/models/Models";
import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

export async function getSchedules(location: string, discipline: string): Promise<SanityDocument[]> {
  return await client.fetch<SanityDocument[]>(
    `*[_type == "schedules" && location == $location && discipline == $discipline] | order(position asc) {
    _id,
    ageGroup,
    days,
    time,
    price,
    location,
    position
  }`,
    { location, discipline }
  )
}

export async function getKarateSchedule(location: string, discipline: string): Promise<KarateScheduleItem[]> {
  return await client.fetch(
    `*[_type == "karateSchedule" && location == $location && discipline == $discipline] | order(position asc) {
      _id,
      ageGroup,
      schedule[] {
        days,
        time
      },
      price,
      location,
      position
    }`,
    { location, discipline }
  );
}