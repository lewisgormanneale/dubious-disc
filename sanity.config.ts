import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { getDefaultDocumentNode } from "./structure";
import StudioNavbar from "./components/Sanity/StudioNavbar";
import Logo from "./components/Sanity/Logo";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "gracidea-studio",
  title: "Gracidea Studio",
  projectId,
  dataset,

  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
});
