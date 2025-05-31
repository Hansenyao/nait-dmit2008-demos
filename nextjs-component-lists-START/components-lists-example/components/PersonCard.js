import Image from 'next/image'

function PersonCard({data}) {
  return (<>
  <style>
    {`
        .card {
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            max-width: 320px;
          }
          .card-body {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
            padding:10px;
          }
          .image{
            width:100%;
          
          }   
     `
    }
  </style>
    <div className='card'>
    <Image className='image' src={data.pic} alt="Profile Picture" width={300} height={300}/>
  <div  className='card-body'>
    <h3>{data.fname} {data.lname}</h3>
    <p>{data.email}</p>
    <p>{data.tell}</p>
  </div>
  </div>
  </>
  )
}

export default PersonCard