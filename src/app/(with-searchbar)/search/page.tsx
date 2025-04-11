import MovieItem from "@/components/movie-item";
import style from "./page.module.css";
import { MovieData } from "@/type";
import { delay } from "@/util/delay";
import { Suspense } from "react";
import RecoMovieListSkeleton from "@/components/skeleton/reco-movie-list-skeleton";

async function SearchResult({ q }: { q: string }) {
  await delay(1500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const movies: MovieData[] = await response.json();

  return (
    <>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  return (
    <div className={style.search_container}>
      <Suspense
        key={(await searchParams).q || ""}
        fallback={
          <>
            <RecoMovieListSkeleton count={10} />
          </>
        }
      >
        <SearchResult q={(await searchParams).q || ""} />
      </Suspense>
    </div>
  );
}
