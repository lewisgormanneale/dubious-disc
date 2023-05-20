# Gracidea

Gracidea ([it's a flower](https://bulbapedia.bulbagarden.net/wiki/Gracidea)) is a Pokémon-themed website, meant to serve as a hub for resources, news, and tools related to the Pokémon games that I create.

I started the website for a few reasons:

- To practice building a project using the new [Next.js App Router](https://beta.nextjs.org/docs/app-directory-roadmap).
- I had a few scattered ideas of some tools that I wanted to create related to the Pokémon games (such as a Team Planner), and wanted a central place to collate and host them.
- To practice integrating a website with a headless CMS - in this case, [Sanity](https://www.sanity.io/).
- To learn more about SEO, and how it relates to things like dynamic URLs, headless CMS systems, the experimental Next App Router and more. This is why I bought a domain for this project.

Why the Pokémon theme? As a new developer looking for things to build to improve my coding ability, the amount of data in the Pokémon series is a great resource. Being RPGs, the amount of data related to the games is huge ([see PokéAPI](https://pokeapi.co/docs/v2)) - through resources such as PokéAPI I am now working with a Supabase database that holds over 100 tables and hundred of thousands of rows of data. This has enabled me to start working on tools such as the Team Planner that are far more interesting, challenging and complex than if I was working with a simpler dataset or API.

## Features

- Fully responsive for all screen sizes
- Sanity implementation, with a news feed for updates to the site and general news.
- Sanity Studio directly hosted as part of the project, instead of through a seperate instance.
- Pokémon Team Planner Features:
  - Support for all mainline games. Selectable Pokémon are based on the Regional Pokédex from that game.
  - Build team of six, toggling sprites based on gender and shiny state.
  - Limit available options based on native region, and prevent type overlap based on the types of team members already selected.

## Roadmap

- Create Category schema in Sanity, to enable custom suggested posts based on the game page the user is looking at.
- Get Live Preview working for Sanity posts that are being drafted in Studio.
- Dynamic sitemap based on Sanity content
- Share options for posts.
- Additional Team Planner Features:
  - Filter by learnable HMs/ensure team HM coverage
  - Toggle display of version exclusive Pokémon based on selected version.
  - Display type matchups for team, evaluate common weaknesses or strengths based on overall typings selected.
  - Save/load team functionality
  - Share team functionality
  - 'Timeline View' showing Pokémon available in the game based on how early they become available to the player (using location data etc.)
  - Indicators for when a Pokémon requires a trade to evolve

Other Tools/Resources I Want To Build:

- Shiny Rate Calculator
- Catch Rate Calculator
- Pokédex

## Screenshots

![Home](https://user-images.githubusercontent.com/107112881/224760739-5d7c231c-8c33-47ed-9ca6-9c53b365015b.png)
![Home 2](https://user-images.githubusercontent.com/107112881/224760812-133f544c-4215-4dda-a84c-22f760904ae2.png)
![Mobile Home](https://user-images.githubusercontent.com/107112881/224760826-ea3f6d45-4e0a-4807-a91e-b747814cb16f.png)
![Mobile Menu](https://user-images.githubusercontent.com/107112881/224760839-225a9e11-3403-45d6-8de6-37f403be7f0d.png)
![Sanity Studio](https://user-images.githubusercontent.com/107112881/224760861-65be9f8a-1bdb-4ac9-abbb-2922965692bb.png)

## Acknowledgements

- [PokéAPI](https://pokeapi.co/docs/v2) - Note that this project is not directly querying the API. I copied the data into my own Supabase instance, as I needed to edit and link some data together to enable more advanced/speedier queries.
- [This Example Next.js Blog by Sanity](https://github.com/sanity-io/nextjs-blog-cms-sanity-v3) - the foundation for the structure of my posts, and a lot of the Sanity-specific components.
- [Another Example Next.js Sanity Project by Marc Kruiss](https://github.com/Marc-Kruiss/next_js_13_sanity_v3_setup) - this one used the App Router, and was really helpful in providing insight in how some of the Sanity functionality had to be updated for the new App Directory and in how to directly integrate Sanity Studio into the project.

## Tech Stack

JavaScript, TypeScript, React, Next.js 13, Sanity, TailwindCSS, Supabase, Vercel
