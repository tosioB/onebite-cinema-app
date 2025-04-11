import MovieItem from "@/components/movie-item";
import style from "./page.module.css";
import { MovieData } from "@/type";
import { delay } from "@/util/delay";
import { Suspense } from "react";
import RecoMovieListSkeleton from "@/components/skeleton/reco-movie-list-skeleton";
import AllMovieListSkeleton from "@/components/skeleton/all-movie-list-skeleton";

async function AllMovie() {
  await delay(1500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const allMovie: MovieData[] = await response.json();

  return (
    <>
      {allMovie.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </>
  );
}

async function RecoMovie() {
  await delay(3000);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    { next: { revalidate: 3 } }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const recoMovie: MovieData[] = await response.json();

  return (
    <>
      {recoMovie.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </>
  );
}

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommended_movies_container}>
          <Suspense fallback={<RecoMovieListSkeleton count={3} />}>
            <RecoMovie />
          </Suspense>
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_movies_container}>
          <Suspense fallback={<AllMovieListSkeleton count={10} />}>
            <AllMovie />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
