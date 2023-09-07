import { getAllFims } from "@/app/actions/getAllFilms"
import { getFilm } from "@/app/actions/getFilm"
import Link from "next/link"

interface Params {
    params: {
        filmId: number
    }
}

export default async function Film({params: {filmId}}: Params) {

    const film = await getFilm(filmId)

    return (
        <div>
            <h1>{film.result.properties.title}</h1>
            <Link href={'/films'}>Назад</Link>
        </div>
    )
}

export async function generateStaticParams() {
    const films = await getAllFims()
    return films.result.map(film=>({
        filmId: film.uid
    }))
}