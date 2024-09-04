import { API_URL } from '../../../contants';

async function getMovie(id: string) {
  console.log('1', Date.now())
  await new Promise((resolve => setTimeout(resolve, 5000)));
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

async function getVideos(id: string) {
  console.log('2', Date.now())
  await new Promise((resolve => setTimeout(resolve, 5000)));
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}

export default async function MovieDetail({
  params: {id}
}: {
  params: {id: string}
}) {
  await new Promise((resolve => setTimeout(resolve, 1000)));
  console.log('start fetching')
  /* getMovie 완료 후 get Videos 실행
    const movie = await getMovie(id)
    const videos = await getVideos(id)
  * */
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]) // API 호출 동시에 but 둘 다 끝나야 UI 볼 수 있음
  console.log('end fetching')
  return <h1>{movie.title}</h1>
}