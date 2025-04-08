import MovieItem from "@/components/movie-item";
import style from "./page.module.css";
import { MovieData } from "@/type";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${searchParams.q}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const movies: MovieData[] = await response.json();

  return (
    <div className={style.search_container}>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}
