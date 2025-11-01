import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "zx4fofkq",
    dataset: "production",
    apiVersion: "2025-10-29",
    useCdn: false,
});