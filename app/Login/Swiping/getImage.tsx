import { list } from '@vercel/blob';



export default async function ListAllImages() {
  const response = await list();
    
    var index = Math.floor(Math.random()*response.blobs.length)
    
    return(
    <img src={response.blobs[index].downloadUrl} alt={response.blobs[index].pathname} width={500} height={500}/>
    )
      {/* {response.blobs.map((blob) => (
        <div key={blob.pathname}>
          <img src={blob.downloadUrl} alt={blob.pathname} width={500} height={500}/>
        </div>
      ))} */}
    

}