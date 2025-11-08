import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";

export async function getSchool(location: string): Promise<SanityDocument[]> {
    return await client.fetch<SanityDocument[]>(
        `*[_type == "school" && location == $location] | order(position asc) {
    _id,
    ageGroup,
    days,
    time,
    price,
    location,
    position
  }`,
        { location }
    )
}
