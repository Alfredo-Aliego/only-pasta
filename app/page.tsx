"use client";
import { getMovies } from "../api/api.js";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Masonry from "react-masonry-css";

type Movies = {
  stills: Still[];
  imdb_id: string;
  title: string;
};
type Still = {
  id: number;
  image_url: string;
  imdb_id: string;
};

export default function HomePage() {
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    let stills: Movies[] = await getMovies();
    setMovies(stills);
    console.log(stills);
  }

  return (
    <main className="m-4 pt-4 ">
      <Masonry breakpointCols={4} className="flex -ml-8" columnClassName="pl-8">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Fragment key={movie.imdb_id}>
              <div className="relative group overflow-hidden bg-gray-400 mb-8">
                <img
                  src={movie.stills[11]?.image_url}
                  alt={movie.title}
                  className="transition-transform transform group-hover:scale-110 w-full h-auto"
                />
                <div className="overflow-hidden absolute inset-0 bg-black bg-opacity-40 group-hover:opacity-100 opacity-0 transition-opacity flex justify-center items-center">
                  <span className="text-white font-bold z-10">
                    <Link href={`/${movie.title}`}>
                      <h1>{movie.title}</h1>
                    </Link>
                  </span>
                </div>
              </div>
            </Fragment>
          ))
        ) : (
          <aside className="block mx-auto loading loading-bars loading-lg scale-150"></aside>
        )}
      </Masonry>
    </main>
  );
}
