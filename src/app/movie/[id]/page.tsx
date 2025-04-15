import { notFound } from "next/navigation";
import style from "./page.module.css";
import { ReviewData } from "@/type";
import ReviewItem from "@/components/review-item";
import ReviewEditor from "@/components/review-editor";

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

async function MovieDetail({ movieId }: { movieId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${movieId}`,
    { cache: "force-cache" }
  );
  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다.</div>;
  }

  const movie = await response.json();
  const {
    title,
    releaseDate,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = movie;

  return (
    <section>
      <div
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
        className={style.cover_img_container}
      >
        <img src={posterImgUrl} alt={""} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.releaseDate}>
        {releaseDate}&nbsp;/&nbsp;
        {genres.map((genre: string, index: number) => (
          <span key={index}>
            {genre}
            {index < genres.length - 1 && ", "}&nbsp;
          </span>
        ))}
        &nbsp;/&nbsp;
        {runtime}
      </div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.description}>{description}</div>
    </section>
  );
}

async function MovieList({ movieId }: { movieId: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/movie/${movieId}`,
    { next: { tags: [`review-${movieId}`] } }
  );

  if (!response.ok) {
    throw new Error(`Review fetch failed : ${response.statusText}`);
  }

  const reviews: ReviewData[] = await response.json();

  return (
    <section>
      {reviews.map((review) => (
        <ReviewItem key={`review-item-${review.id}`} {...review} />
      ))}
    </section>
  );
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className={style.container}>
      <MovieDetail movieId={(await params).id} />
      <ReviewEditor movieId={(await params).id} />
      <MovieList movieId={(await params).id} />
    </div>
  );
}
