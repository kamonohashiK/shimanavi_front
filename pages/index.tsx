import Head from "next/head";
import SearchForm from "../components/search_form";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import IslandsPerArea from "../components/islands_per_area";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Navbar />
        <SearchForm />
        <IslandsPerArea />
      </main>
    </div>
  );
}
