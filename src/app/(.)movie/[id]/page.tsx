import Modal from "@/components/modal";
import MoviePage from "@/app/movie/[id]/page";

export default function Page(props: any) {
  return (
    <div>
      <Modal>
        <MoviePage {...props} />
      </Modal>
    </div>
  );
}
