import { ReactNode } from "react";
import Searchbar from "../../components/searchbar";
import style from "./layout.module.css";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}>NIBITE CINEMA</Link>
      </header>
      <Searchbar />
      {children}
    </div>
  );
}
