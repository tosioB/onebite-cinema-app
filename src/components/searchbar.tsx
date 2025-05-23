"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import style from "./searchbar.module.css";

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const [search, setSearch] = useState(q || "");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  };

  return (
    <div className={style.searchbar_container}>
      <input value={search} onChange={onChangeSearch} onKeyDown={onKeyDown} />
      <button onSubmit={onSubmit}>검색</button>
    </div>
  );
}
