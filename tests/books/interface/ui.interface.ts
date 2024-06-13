import { Page } from '@playwright/test';
import { ElementSelectors } from '../selector/selectorBooks';

export interface ICreateProductPage {
    goto(): Promise<void>;
    enterUsername(username: string): Promise<void>;
    searchBook(username: string): Promise<void>;
}

export class CreateProductPage implements ICreateProductPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(): Promise<void> {
        await this.page.goto('https://books-pwakit.appspot.com/');
    }

    async enterUsername(username: string): Promise<void> {
        await this.page.fill(ElementSelectors.input, username);
    }

    async searchBook(username: string): Promise<void> {
        await this.enterUsername(username);
        await this.page.press(ElementSelectors.input, 'Enter');
        const newTodo = this.page.locator('#input');
        await newTodo.press('Enter')
        await this.page.locator('#input').press('Enter');
        this.page.getByRole('link', { name: 'Cálculo integral de una' }).click();
    }

}