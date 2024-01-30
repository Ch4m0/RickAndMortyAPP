import Search from "./ui/home/search/search";

import styles from "./page.module.scss";

import CardList from "./ui/home/card-list/card-list";
import RecentlyViewedComponent from "./ui/home/recently-viewed/recentlyViewed";
import RecentlyViewedListComponent from "./ui/home/recently-viewed/recently-viewed-list/recently-viewed-list";
import CardSkeleton from "@/app/ui/home/card-list/card/cardSkeleton";
import { Suspense } from "react";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";

  return (
    <main className={styles.main}>
      <section className="characters">
        <div>
          <h1 className={styles.title}>Characters</h1>
          <Search placeholder="Buscar" />
        </div>

        <Suspense key={query + currentPage} fallback={<CardSkeleton />}>
          <CardList query={query} currentPage={currentPage} />
        </Suspense>
      </section>

      <section className="lastRecentlyViewed">
        <RecentlyViewedComponent title="Recently Viewed">
          <RecentlyViewedListComponent />
        </RecentlyViewedComponent>
      </section>
    </main>
  );
}
