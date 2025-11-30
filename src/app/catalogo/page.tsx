import { BookCard } from "../../components/UI";

const libros = [
  { title: "El señor de los anillos", price: 120000, image: "/globes.png" },
  { title: "Cien años de soledad", price: 90000, image: "/globes.png" },
  { title: "1984", price: 70000, image: "/globes.png" },
];

export default function CatalogoPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-8">Catálogo de libros</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {libros.map((l, i) => (
          <BookCard key={i} {...l} />
        ))}
      </div>
    </section>
  );
}
