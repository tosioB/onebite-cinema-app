import AllMovieItemSkeleton from "./all-movie-item-skeleton";

export default function AllMovieListSkeleton({ count }: { count: number }) {
  return new Array(count)
    .fill(0)
    .map((_, index) => (
      <AllMovieItemSkeleton key={`movie-item-skeleton-${index}`} />
    ));
}
