import { test, expect } from '@playwright/test';
import { TestSetup } from '../hooks/testSetUp';

test('Search books', async ({ page }) => {
    const setup = new TestSetup(page);
    await setup.productCreate.goto();
    await setup.productCreate.searchBook(setup.randomProductName);
   });
