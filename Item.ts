export default class Item {
    public id: number = 0;
    public name: string = 'unnamed item';
    public price: number = 0;

    constructor(id?: number, name?: string, price?: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}