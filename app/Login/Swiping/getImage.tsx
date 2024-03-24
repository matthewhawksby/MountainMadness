import { list } from '@vercel/blob';


export default async function ListAllImages() {
  const response = await list();
    
    
    return(
    <img src={response.blobs[3].downloadUrl} alt={response.blobs[3].pathname} width={500} height={500}/>
    )
      {/* {response.blobs.map((blob) => (
        <div key={blob.pathname}>
          <img src={blob.downloadUrl} alt={blob.pathname} width={500} height={500}/>
        </div>
      ))} */}
    

}