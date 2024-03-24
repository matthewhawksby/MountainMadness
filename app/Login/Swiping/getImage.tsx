import { list } from '@vercel/blob';


export default async function ListAllImages() {
  const response = await list();
    
    
    return(
    <img src={response.blobs[0].downloadUrl} alt={response.blobs[0].pathname} width={500} height={500}/>
    )
      {/* {response.blobs.map((blob) => (
        <div key={blob.pathname}>
          <img src={blob.downloadUrl} alt={blob.pathname} width={500} height={500}/>
        </div>
      ))} */}
    

}