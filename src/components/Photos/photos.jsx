import MediaPage from '../Shared/MediaPage';
const videos = [
  { id: 'z_7wfXeZL-g', title: 'Egypt & Jordan 2022/23', query: '?si=2c-qHQHLI3aRFfkB' },
  { id: '0yzM_pxB0qY', title: 'Northern Territory 2021' },
  { id: 'QTkTdYfBvCk', title: 'Europe 19/20' },
  { id: 'Y9x_vyCl0lg', title: 'Europe 18/19' },
  { id: 'p_jTXvdzkHM', title: 'South-East Asia 17/18' },
];
export default function Photos() {
  return <MediaPage title="Photos & Videos" description="Some places are worth bringing a camera along for. A few travel films from over the years."><div className="video-list">{videos.map(({ id, title, query = '' }) => <figure key={id}><figcaption><h2>{title}</h2></figcaption><iframe className="video-frame" loading="lazy" title={title} src={`https://www.youtube.com/embed/${id}${query}`} referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowFullScreen /></figure>)}</div></MediaPage>;
}
