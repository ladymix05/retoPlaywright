import {Locator,test, expect,type Page } from '@playwright/test';


const TODO_ITEMS = [
  'Calculo Integral',
  'Calculo Diferencial',
  'Calculo Vectorial',
  'Algebra'
];

test('type random book', async ({ page }) => {
  //await page.waitForTimeout(5000);
  await page.goto('https://books-pwakit.appspot.com/');
  const newTodo = page.locator('#input');
  await newTodo.click;

  await newTodo.fill(TODO_ITEMS[0]);
  await newTodo.press('Enter');
  // click on title first book
  page.getByRole('link', { name: 'Cálculo integral de una' }).click();
  const bookFirst = await page.locator('.title').locator('nth=0');
  await expect(page.getByRole('heading', { name: 'Cálculo integral de una' })).toBeVisible();
  await expect(page.getByText('Description En la formación')).toBeVisible();
  
  //var titleBook = books.allTextContents;
  //console.log(titleBook);
  //const bookCalculo = page.locator("//li[1]/book-item");
  //await expect(bookCalculo).toBeVisible();
  //await page.waitForSelector(bookCalculo);
 // await page.$("getByRole('link', { name: 'Cálculo integral Cálculo integral Francisco José Ortiz Campos, Ortiz Cerecedo,' })").hover;
 // await page.$("getByRole('link', { name: 'Cálculo integral Cálculo integral Francisco José Ortiz Campos, Ortiz Cerecedo,' })").click;
  



});