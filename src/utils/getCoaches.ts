import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

export async function getCoaches(): Promise<SanityDocument[]> {
    return await client.fetch<SanityDocument[]>(`*[_type == "coaches"]{
    _id,
    name,
    "imageUrl": photo.asset->url,
    achievements,
    disciplines
  }`);
}