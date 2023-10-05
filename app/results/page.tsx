"use client"
import { useState, Fragment } from "react";
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

export default function SearchResults() {
  const [movies, setMovies] = useState<Movies []>([]);

  return (
    <main className="mr-4 pt-4 ">
      <Masonry breakpointCols={3} className="flex" columnClassName="pl-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Fragment key={movie.imdb_id}>
              <div className="relative group overflow-hidden bg-gray-400 mb-4">
                <img
                  src={movie.stills[11]?.image_url}
                  alt={movie.title}
                  className="transition-transform transform group-hover:scale-110 w-full h-auto "
                />
                <div className="overflow-hidden absolute inset-0 bg-black bg-opacity-40 group-hover:opacity-100 opacity-0 transition-opacity flex justify-center items-center">
                  <span className="text-white font-bold z-10">
                    <Link href={`/post/${movie.imdb_id}`}>
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