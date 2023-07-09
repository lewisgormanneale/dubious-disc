
# Angular Pokédex

## [View Live Deployment](https://angular-pokedex-test.netlify.app/pokedex/1?page=1)

## Project Brief

Project built as a technical test for Codeweavers, built using Angular and Bootstrap. 
The Brief:
- Using the PokéAPI, create a Pokédex application allowing users to browse all available Pokémon. ✅
- Use the GET https://pokeapi.co/api/v2/pokemon/{id or name}/ to build a page that will list all available Pokémon.
    - This page should allow the user to navigate through the result in blocks of 50. ✅
    - This page should be reloadable and shareable. ✅
- Use the GET https://pokeapi.co/api/v2/pokemon/{id or name}/ to build a page displaying information about the Pokémon.
    - This page should be accessed by clicking a Pokémon result from step 1.✅
    - This page should be reloadable and shareable. ✅
- Use any other additional PokéAPI(s) to add more functionality and/or information to your application. I added:
    - Dropdown menu that let's you browse pokémon by pokédex version (https://pokeapi.co/api/v2/pokedex/{id}/)
    - On the Pokémon page, display the Pokémon's stats, pokédex descriptions, gender ratio and other values.
    - Search box built with [ng-bootstrap](https://ng-bootstrap.github.io/#/components/typeahead/examples) that lets users search and select any Pokémon, with suggestions while typing.


## Screenshots

### Desktop
<p float="left">
  <img width="800" alt="Pokédex Desktop" src="https://user-images.githubusercontent.com/107112881/231489217-f89f94bf-55c0-413b-bc1b-1b536dd0e11e.png">
  <img width="800" alt="Pokémon Desktop" src="https://user-images.githubusercontent.com/107112881/231489414-b2ce293b-49d6-439e-b6f9-fecb6bcc3dfa.png">
</p>

### Mobile
<p float="left">
  <img width="300" alt="Pokédex Mobile" src="https://user-images.githubusercontent.com/107112881/231489325-27efe4f9-b1bb-4fa0-858d-8e191e5d09f9.png">
  <img width="300" alt="Pokémon Mobile" src="https://user-images.githubusercontent.com/107112881/231489513-4fe2f80c-af0c-4954-895f-8d445a6c4209.png">
</p>


## Development Process Notes

Read on for a breakdown of the development journey of the application:

1. I cloned the project, installed dependencies, Angular CLI, had a look around the app and served it just to see how it all worked (blank page but good to know it was all working).

2. I learnt more about Angular, e.g. how components work - watched some brief YouTube overviews, comparing principles mentioned with the repo I have cloned. Also learnt more about Bootstrap. 

Identified resources that will be helpful in building the project - best tutorial I found for building an Angular project was in the official docs with the angular ‘Tour Of Heroes’ tutorial - a lot of similar principles to what I was trying to do with a pokédex, so was a good starting point: [https://angular.io/tutorial/tour-of-heroes](https://angular.io/tutorial/tour-of-heroes)

3. Re-confirmed app requirements before designing/deciding app layout and component structure. I want to have a scrollable, paginated list of Pokémon where if you tap on a Pokémon, more information about that Pokémon will appear. 
Researching API info, this could include:
- Abilities
- Types
- Stats
- Sprites
- Moves
- Held Items
- Weight
- Height

4. I sketched out some website layout ideas on Miro and then created a low fidelity wireframe for the application. Identified components necessary to build by marking up the low fidelity wireframe. At this stage I wanted to have the Pokedex list still remain visible on the selection of a Pokemon - in what orientation and how large it would be would depend on screen size. 

5. Decided on development practices, based in part on job spec:
- Follow clean code principles:
    - Write code as simply as possible: KISS.
    - Avoid unnecessary repetition: DRY.
    - Delete what is not needed: YAGNI.
- Deploy early and often.
- Small branches for features, commit and merge into main often. “Incremental changes”
- Wanted to ensure I build tests for the application - unit tests and e2e tests. 

7. `basic-layout-setup` Began coding to get basic layout and component structure in place.
Firstly, I was just concerned with laying out the page - added some placeholder Pokémon data and added the components decided on in the wireframe, using the Angular docs/tutorial for guidance. 
Gained a better understanding of angular directives, specifically *ngFor. Learnt about pipes eg UppercasePipe.

Used bootstrap documentation to get the basic html/styling content for each component e.g. navbar. But not customizing how components look yet or passing any data around beyond the placeholder pokedex.

8. Break to better understand testing with Angular and deploy the project. Successfully deployed site on Netlify - changed build folder/project name to angular-pokedex. Wrote first test that verified PokemonDetails filled with selected pokemon details from pokedex.

9. `pokeapi-connection` Got the application fetching and displaying data from PokéAPI instead of placeholder data. This involved learning more about Angular services and creating a PokedexService. 

10. `navigation-and-pagination` Developed an improved understanding of pagination with Angular and PokéAPI (block of 50) [https://pokeapi.co/docs/v2#resource-listspagination-section](https://pokeapi.co/docs/v2#resource-listspagination-section), and planned how to reflect this in the URL and have URL hydrate with correct info on refresh.

11. `details-and-styling` Styled the pokedex page with a new colour scheme. Reworked the API connection to instead call the /pokedex route, because the pokemon route displays multiple forms of the same Pokémon which affects what data is available for the species. Improved pagination to load page numbers based on result count and show/hide page numbers responsively based on screen size.

12. `pokemon-detail-page`  Focus of this branch was reaching MVP of the Pokemon Details Page in terms of info shown. After some research into best practices around Angular project folder structures, the application file structure was also reorganized to make scaling the appllication up further easier. Created unit tests for new components and pipes that I built to convert height/weifght values and generate background colour gradients based on Pokémon typing.

13. `routing` Added a redirects file necessary for netlify to support angular routing. Installed ng-bootstrap and made general improvements to the navbar. Improved back button logic on pokemon page so that users with no history were not taken out of the website. Added pokedex selection dropdown in navbar. 

14. `search` Implemented search functionality into the navbar. Used existing pokedex route in the pokedex service to query the national pokedex. Then used ng-bootsrap to render an input field that evaluates typed values against entries. Selecting an entry updates the model and lets you click Go button, which routes you to pokemon page using the id from their url. Not implementing any kind of ‘search results’ page so this logic was necessary to ensure you could only be taken to another page if the pokemon exists. 

15. `stats` Added a new component that takes in the stats array for a pokemon and returns a card with progress bars that represent each base stats value between 0 and 255

16. `testing` Wrote additional unit tests with Jasmine. Set up Cypress and built some e2e tests. 
## Future Improvements

Given more time here are some of the features I would want to implement:
- Additional Pokémon information on the pokemon page, incl. learnable moves, locations, evolution lines and much more.
- Use GitHub Actions or another CI service to link testing to deployment.
- View paginated lists of Pokémon in categories other than pokedex - e.g. all Pokémon of a certain type or who can learn a certain more.

