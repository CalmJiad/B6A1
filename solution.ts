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
    if (!name || name.length === 0) {
      throw new Error("Name must be a non-empty string.");
    }
    if (age < 0) {
      throw new Error("Age must be valid number.");
    }
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
  if (products.length === 0) return 0;

  return products.reduce((acc, curr) => {
    const productTotal = curr.price * curr.quantity;

    if (curr.discount) {
      const discountedTotal =
        productTotal - (productTotal * curr.discount) / 100;
      return acc + discountedTotal;
    }
    return acc + productTotal;
  }, 0);
};
