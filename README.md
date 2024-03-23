# Dubious Disc

#### View Live: https://dubiousdisc.com/

Dubious Disc ([it's an item in Pokémon](https://bulbapedia.bulbagarden.net/wiki/Dubious_Disc)) is an Angular website I've built themed around the Pokémon games. It's intended as a place for me to code and host Pokémon-related tools and resources. 

It started out as a technical test for my job at Codeweavers (a classic 'build a Pokédex' project), but I've continued to work on the website afterwards, as an outlet to improve my Angular skills and try out new technologies.

##### View UI Components with Storybook: https://storybook.dubiousdisc.com/

## Features

- **Pokédex**: A list of all Pokémon, with search and filter functionality.
- **Pokémon Details**: Detailed information about each Pokémon, including their abilities, moves, forms and evolutions.
- **News & Updates**: A blog-style home page where I can post updates about the website/news related to Pokémon.
- **Dark/Light Mode**: A theme toggle, allowing users to switch between dark and light mode.

## Technologies

- **Angular**: The website is built using Angular, a popular front-end framework.
- **Tailwind CSS**: This utility-first CSS framework is used to style the website. Tailwind is also used to manage dark/light mode.
- **Storybook**: A Storybook component library is used to showcase the website's components. It can be viewed here: https://storybook.dubiousdisc.com/
- **Supabase**: A PostgreSQL database is used to store Pokémon data, hosted on Supabase. The original source for the data was PokéAPI, but I imported that data into Supabase for better performance and to enable me to make changes to the datasets/types etc.
- **Playwright**: End-to-end tests are written using Playwright, a Node.js library for automating browsers. These tests run on GitHub Actions when a pull request is opened.
- **Sanity**: A headless CMS is used to manage the website's blog posts. The CMS is hosted on Sanity.io: https://dubiousdisc.sanity.studio/
- **Vercel**: The website is hosted on Vercel. The live site can be viewed here: https://dubiousdisc.com/

## Screenshots
![Screenshot 2024-03-23 at 14 59 51](https://github.com/lewisgormanneale/dubious-disc/assets/107112881/c3f7fbf0-94b0-459c-b680-7d0a4522ab6c)
![Screenshot 2024-03-23 at 15 00 05](https://github.com/lewisgormanneale/dubious-disc/assets/107112881/c1b388e2-94bf-4b74-af29-8d585da7bfd2)
![Screenshot 2024-03-23 at 15 01 24](https://github.com/lewisgormanneale/dubious-disc/assets/107112881/437c9588-61f4-43c3-917f-5af246369230)

## Roadmap

- **Pokémon Team Builder**: A tool to help users build and share Pokémon teams, checking type coverage and other useful information.
- **Movedex**: A list of all moves in the Pokémon games, with detailed information about each move.
- **Abilitydex**: A list of all abilities in the Pokémon games, with detailed information about each ability.
- **Pokémon Type Chart**: A visual representation of the type effectiveness chart in the Pokémon games.
- **Shiny Rate Calculator**: A tool to calculate the odds of finding a shiny Pokémon in the games.
- **Catch Rate Calculator**: A tool to calculate the odds of catching a Pokémon in the games.
- **Game Pages**: Pages for each Pokémon game, with links to all content relating to that game, such as news or tools.
