import { list } from '@vercel/blob';

export default async function ListAllImages() {
  const response = await list();
 
  return (
    <>
      {response.blobs.map((blob) => (
        <div key={blob.pathname}>
          <img src={blob.downloadUrl} alt={blob.pathname} />
        </div>
      ))}
    </>
  );
}