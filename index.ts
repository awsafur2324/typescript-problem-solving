function formatString(input: string, toUpper?: boolean): string {
    if (!toUpper && typeof toUpper !== "undefined") {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}

formatString("Hello");     
formatString("Hello", true);
formatString("Hello", false);  



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book C", rating: 4.0 },
    { title: "Book C", rating: 4.1 },
];
filterByRating(books);



function concatenateArrays<T>(...arrays: T[][]): T[] {
    const newArray: T[] = [];
    arrays.map(array => newArray.push(...array));
    return newArray;
}

concatenateArrays(["a", "b"], ["c"]);
concatenateArrays([1, 2], [3, 4], [5, 6]);


class Vehicle {
    private _make: string;
    public year: number;
    constructor(make: string, year: number) {
        this._make = make;
        this.year = year;
    }
    getInfo(): string {
        return `Make:${this._make}, Year:${this.year}`
    }
}
class Car extends Vehicle {
    private _model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this._model = model;
    }
    getModel(): string {
        return `Model: ${this._model}`;
    }
}

const myCar = new Car("Toyota", 2021, "Corolla");
myCar.getInfo();
myCar.getModel();


function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * 2;
    }
}
processValue("Hello");
processValue(5);

// 6
interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    const sortedProducts = products.sort((a, b) => b.price - a.price);
    return sortedProducts.length > 0 ? sortedProducts[0] : null;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Bag", price: 50 },
    { name: "Notebook", price: 25 },
];

getMostExpensiveProduct(products);


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    switch (day) {
        case Day.Sunday:
        case Day.Saturday:
            return "Weekend";
        case Day.Monday:
        case Day.Tuesday:
        case Day.Wednesday:
        case Day.Thursday:
        case Day.Friday:
            return "Weekday";
        default:
            return "Invalid day";
    }
}
getDayType(Day.Tuesday);
getDayType(Day.Sunday);


async function squareAsync(n: number): Promise<number> {
    return await new Promise((resolve, reject) => {
        if (n > 0) {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        } else {
            reject("Error: Negative number not allowed");
        }
    });
}

squareAsync(4).then(console.log); 
squareAsync(-3).catch(console.error);