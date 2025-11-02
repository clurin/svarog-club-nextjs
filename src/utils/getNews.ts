import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";

export async function getNews(): Promise<SanityDocument[]> {
  return await client.fetch<SanityDocument[]>(`*[_type == "news"] | order(publishedAt desc){
        _id,
        title,
        content,
        publishedAt,
        "imageUrl": image.asset->url
    }`);
}
