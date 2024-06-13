import { TODO_ITEMS } from '../data/books.data';

export namespace BooktUtils {
    export function getRandomBook(): string {
        const randomIndex = Math.floor(Math.random() * TODO_ITEMS.length);
        const randomProduct = TODO_ITEMS[randomIndex].product;
        return `${randomProduct}`;
    }
}