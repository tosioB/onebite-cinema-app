import MovieItem from "@/components/movie-item";
import style from "./page.module.css";
import { MovieData } from "@/type";

async function AllMovie() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    { next: { revalidate: 60 } }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const allMovie: MovieData[] = await response.json();

  return (
    <div className={style.all_movies_container}>
      {allMovie.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

async function RecoMovie() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    { next: { revalidate: 3 } }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>;
  }

  const recoMovie: MovieData[] = await response.json();

  return (
    <div className={style.recommended_movies_container}>
      {recoMovie.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <RecoMovie />
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <AllMovie />
      </section>
    </div>
  );
}
