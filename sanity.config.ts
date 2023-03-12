import { visionTool } from "@sanity/vision";
import {
  apiVersion,
  dataset,
  previewSecretId,
  projectId,
} from "lib/sanity.api";
import { previewDocumentNode } from "plugins/previewPane";
import { productionUrl } from "plugins/productionUrl";
import { settingsPlugin, settingsStructure } from "plugins/settings";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import authorType from "schemas/author";
import postType from "schemas/post";
import settingsType from "schemas/settings";

import StudioNavbar from "./components/Sanity/StudioNavbar";
import Logo from "./components/Sanity/Logo";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  name: "gracidea-studio",
  title: "Gracidea Studio",
  schema: {
    // If you want more content types, you can add them to this array
    types: [authorType, postType, settingsType],
  },
  plugins: [
    deskTool({
      structure: settingsStructure(settingsType),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    settingsPlugin({ type: settingsType.name }),
    // Add the "Open preview" action
    productionUrl({
      apiVersion,
      previewSecretId,
      types: [postType.name, settingsType.name],
    }),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
});
