import React, { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { toast } from "react-hot-toast";
import type { SearchBarProps } from "../App/App.types";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }: SearchBarProps): React.JSX.Element => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(query);
  };

  return (
    <header className={s.searchBar}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.searchInput}
        />
        <button type="submit" className={s.searchButton}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
