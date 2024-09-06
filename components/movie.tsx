"use client"

import Link from 'next/link';
import styles from "../styles/movie.module.css"
import { useRouter } from 'next/navigation';

interface IMovieProps {
  title: string;
  id: number;
  poster_path: string;
}

export default function Movie({title, id, poster_path}: IMovieProps) {
  const router = useRouter();
  const onClick = (id: number) => {
    router.push(`/movies/${id}`)
  }
  return (
    <div key={id} className={styles.movie}>
      <img src={poster_path} alt={title} onClick={() => onClick(id)} className="hover:border-2 border-red-800 border-solid" />
      <Link prefetch href={`/movies/${id}`}>{title}</Link>
    </div>
  )
}
