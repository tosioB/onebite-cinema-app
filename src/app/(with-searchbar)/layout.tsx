import { ReactNode } from "react";
import Searchbar from "../../components/searchbar";
import style from "./layout.module.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <Searchbar />
      {children}
    </div>
  );
}
