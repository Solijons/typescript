import Item from './Item';

export default class Transactions {
    private static id: number = 0;
    private date: string;
    private items: Item[];
    private total: number;

    constructor() {
        Transactions.id++;
        this.date = new Date().toString();
        this.items = [];
        this.total = 0;
    }

    public addItem(item: Item) {
        this.items.push(item);
        this.total = this.total + item.price;
        this.total = this.total + this.total * 0.04;
    }

    public toString() {
        let str = "Transaction: " + Transactions.id + "\n";
        str += "items: " + JSON.stringify(this.items) + "\n";
        str += "date: " + this.date + "\n";
        str += "total: " + this.total + "\n";
        return str;
    }
}