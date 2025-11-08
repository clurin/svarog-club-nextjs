import { client } from "@/sanity/client"
import { Coach } from "@/models/Models"

export async function getCoaches(): Promise<Coach[]> {
  return await client.fetch<Coach[]>(`*[_type == "coaches"]{
    _id,
    name,
    "imageUrl": photo.asset->url,
    achievements,
    disciplines
  }`)
}
