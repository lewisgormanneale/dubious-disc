import { test, expect, type Page } from '@playwright/test';

const testData = require('./test-data.json');

test.beforeEach(async ({ page }) => {
  await page.goto('/pokedex');
  await page.route(
    'https://pokeapi.co/api/v2/version-group?limit=50',
    (route) =>
      route.fulfill({
        status: 200,
        body: testData,
      })
  );
});

test.describe('Given a user is looking for information on Reshiram from Pokémon Black 2 / White 2', () => {
  test('When the user is on the pokedex page', async ({ page }) => {
    test.step('Then the user should be presented with links to pokédexes for all available games', async () => {
      const pokedexLinks = page.getByTestId(
        'pokedex-version-group-select-item'
      );
      expect(await pokedexLinks.count()).toBeGreaterThan(21);
    });
  });
});
