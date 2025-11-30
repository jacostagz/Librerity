// src/lib/data/books.ts
export type Book = {
  id: string;
  slug: string;
  title: string;
  author: string;
  price: number; // en COP
  cover?: string;
  description?: string;
  weightKg?: number;
};

const books: Book[] = [
  {
    id: "1",
    slug: "el-principito",
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    price: 25000,
    cover: "/placeholder-cover.jpg",
    description:
      "Una fábula poética que nos recuerda la importancia de ver con el corazón.",
    weightKg: 0.35,
  },
  {
    id: "2",
    slug: "cien-anos-de-soledad",
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    price: 43000,
    cover: "/placeholder-cover.jpg",
    description:
      "La emblemática novela de realismo mágico que marcó la literatura latinoamericana.",
    weightKg: 0.55,
  },
  // agrega más libros según necesites
];

export default books;
