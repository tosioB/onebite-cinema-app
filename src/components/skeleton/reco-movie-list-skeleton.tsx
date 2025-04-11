import RecoMovieItemSkeleton from "./reco-movie-item-skeleton";

export default function RecoMovieListSkeleton({ count }: { count: number }) {
  return new Array(count)
    .fill(0)
    .map((_, index) => (
      <RecoMovieItemSkeleton key={`movie-item-skeleton-${index}`} />
    ));
}
