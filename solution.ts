type InputType = string | number | boolean;

const formatValue = (input: InputType): InputType => {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    return !input;
  }
};

const getLength = (input: string | unknown[]): number => {
  if (Array.isArray(input)) {
    return input.length;
  } else {
    return input.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Item = {
  title: string;
  rating: number;
};

const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating >= 4);
};

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
};

const getUniqueValues = <T extends string | number>(
  array1: T[],
  array2: T[]
): T[] => {
  const uniqueValues: T[] = [];

  const addIfNotExists = (value: T) => {
    let exists = false;

    for (let i = 0; i < uniqueValues.length; i++) {
      if (uniqueValues[i] === value) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      uniqueValues.push(value);
    }
  };

  for (let i = 0; i < array1.length; i++) {
    addIfNotExists(array1[i]);
  }

  for (let j = 0; j < array2.length; j++) {
    addIfNotExists(array2[j]);
  }

  return uniqueValues;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => {
    const productTotal = product.price * product.quantity;
    const discountAmount = product.discount
      ? (productTotal * product.discount) / 100
      : 0;
    return total + (productTotal - discountAmount);
  }, 0);
};
