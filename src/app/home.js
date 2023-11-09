"use client";

import styles from "./page.module.css";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import profile from "./signin";

import axios from "axios";

export default function Home() {
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const GameSearch = async (query) => {
    setSearchQuery(query);
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.cheapshark.com/api/1.0/deals?title=${query}`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
    setLoading(false);
  };

  return (
    <main className={styles.main}>
      GAMEDEALZ
      <div className={styles.description}></div>
      <div className={styles.grid}>
        <a
          href="./profile"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            SEARCH <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            PROFILE <span>-&gt;</span>
          </h2>
        </a>
      </div>
      <div className={styles.search}>
        <SearchBar onSearch={GameSearch} />

        {loading ? <p>Loading...</p> : <SearchResults results={results} />}
      </div>
    </main>
  );
}