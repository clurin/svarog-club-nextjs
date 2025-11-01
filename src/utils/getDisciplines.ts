import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

export async function getDisciplines(): Promise<SanityDocument[]> {
    return await client.fetch<SanityDocument[]>(`*[_type == "disciplines"]{
    _id,
    title,
    "imageUrl": image.asset->url
  }`);
}