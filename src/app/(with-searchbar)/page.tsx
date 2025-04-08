import MovieItem from "@/components/movie-item";
import style from "./page.module.css";
import movies from "@/mock/movies.json";

const mockData = [
  {
    id: 16,
    title: "스트리밍",
    releaseDate: "2025-03-21",
    company: "롯데엔터테인먼트",
    genres: ["스릴러"],
    subTitle: "연쇄살인범 추적 방송에 참여하시겠습니까?",
    description:
      "구독자 수 1위의 범죄 채널 스트리머 '우상(강하늘)'이 풀리지 않던 연쇄살인 사건의 단서를 발견하고 범인을 추적하는 과정을 실시간으로 방송하며 벌어지는 스릴러",
    runtime: 91,
    posterImgUrl:
      "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20250325_115%2F1742870770764qLuUy_JPEG%2Fmovie_image.jpg",
  },
  {
    id: 17,
    title: "백설공주",
    releaseDate: "2025-03-19",
    company: "월트디즈니 컴퍼니 코리아",
    genres: ["판타지", "뮤지컬"],
    subTitle: "동화 그 이상의 마법 같은 이야기",
    description:
      "눈보라가 몰아치던 겨울 밤 태어난 백설공주. 온정이 넘치던 왕국에서 모두의 사랑을 받았지만, 강력한 어둠의 힘으로 왕국을 빼앗은 여왕의 위협에 숲으로 도망친다. 마법의 숲에서 간신히 살아남은 백설공주는 신비로운 일곱 광부들과 만나게 되며 새로운 세상을 마주하고, 마음속 깊이 숨겨진 용기와 선한 힘을 깨닫게 된다. 그리고 마침내, 빼앗긴 왕국을 되찾기 위해 여왕과 맞서 싸우기로 결심하는데…",
    runtime: 109,
    posterImgUrl:
      "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20250319_123%2F1742370056144UwYpI_JPEG%2Fmovie_image.jpg",
  },
  {
    id: 18,
    title: "스윙걸즈",
    releaseDate: "2025-03-26",
    company: "(주)팝엔터테인먼트",
    genres: ["코미디"],
    subTitle: "우린 스윙한다! 그 누구보다 재미있게",
    description:
      '"빅밴드 재즈? 그게 뭐하는 건데?" 지루한 보충수업을 째고 싶었을 뿐, 토모코(색소폰) 야구부 선배에게 홀딱 반했을 뿐, 요시에(트럼펫) 남들보다 폐활량이 뛰어났을 뿐, 세키구치(트럼본) 어쩌다 친구 따라왔을 뿐, 나오미(드럼) 심벌즈가 적성에 안 맞았을 뿐, 나카무라(피아노) 짝사랑하는 재즈 덕후일 뿐, 수학 선생님(지휘) 대단한 이유 없음! 눈부신 재능 없음! 거창한 목표 없음! 그래서 우린 스윙한다♬ 그 누구보다 재미있게♬',
    runtime: 103,
    posterImgUrl:
      "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20250311_297%2F1741675957835xcn5f_JPEG%2Fmovie_image.jpg",
  },
];

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommended_movies_container}>
          {mockData.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_movies_container}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}
