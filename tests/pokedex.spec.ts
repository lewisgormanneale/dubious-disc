import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/pokedex');
});

test.describe('Given a user is looking for information on Reshiram from Pokémon Black 2 / White 2', () => {
  test('When the user is on the pokedex page', async ({ page }) => {
    test.step('Then the user should be presented with links to pokédexes for all available games', async () => {
      const pokedexLinks = await page.$$('.pokedex-version-group-select-item');
      expect(pokedexLinks.length).toBeGreaterThanOrEqual(22);
    });
  });
});
