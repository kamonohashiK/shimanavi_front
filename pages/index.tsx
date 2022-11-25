import SearchForm from "../components/search_form";
import IslandsPerArea from "../components/islands_per_area";

export default function Home() {
  return (
    <div>
      <main>
        <SearchForm />
        <IslandsPerArea />
      </main>
    </div>
  );
}
