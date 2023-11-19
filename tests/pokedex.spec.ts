import { test, expect } from '@playwright/test';

test('When the user is on the pokedex page', async ({ page }) => {
  await page.goto('/pokedex');
  expect(page.url()).toBe('http://localhost:4200/pokedex');
  const header = page.getByText('Select Pokédex Version');
  await expect(header).toBeVisible();
  await expect
    .poll(async () =>
      page.locator('.pokedex-version-group-select-item').count()
    )
    .toBeGreaterThanOrEqual(22);
});
