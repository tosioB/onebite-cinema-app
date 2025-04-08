import style from "./page.module.css";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${params.id}`,
    { cache: "no-store" }
  );
  if (!response.ok) {
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
    <div className={style.container}>
      <div
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
        className={style.cover_img_container}
      >
        <img src={posterImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.releaseDate}>
        {releaseDate}&nbsp;/&nbsp;
        {genres.map((genre, index) => (
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
    </div>
  );
}
