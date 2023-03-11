import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

export interface Settings {
  title?: string;
  description?: any[];
  ogImage?: {
    title?: string;
  };
}

export const query = groq`
*[_type == "settings"][0]`;

export const fetchSettings = async () => {
  const settings = await client.fetch(query);
  return settings;
};
