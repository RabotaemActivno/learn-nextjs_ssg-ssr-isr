import Link from "next/link";
import { getAllFims } from "../actions/getAllFilms";

export default async function FilmsaPage() {
  const allFilms = await getAllFims();

  return (
    <div className="container mx-auto mt-4">
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-black">
        Films list:
      </h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {allFilms.result.map((film) => (
          <li key={film.uid}>
            <Link href={`films/${film.uid}`}>{film.properties.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
