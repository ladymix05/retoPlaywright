import { CreateProductPage } from '../interface/ui.interface';
import { BooktUtils } from "../utils/randomBooksUtil.ts";
import { TODO_ITEMS } from '../data/books.data';
export class TestSetup {
  
    productCreate: CreateProductPage;
    randomProductName: string;

    constructor(page: any) {
        this.productCreate = new CreateProductPage(page);
        this.randomProductName = BooktUtils.getRandomBook();
    }
}