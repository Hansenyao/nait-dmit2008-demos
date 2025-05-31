import React from 'react'
import PersonCard from './PersonCard'

function People({data}) {
  return (
    <>
    <style>
        {
            `
             .container{
                display:flex;
                flex-wrap:wrap;
                gap:10px;
             }

            `
        }
    </style>
    <div className='container'>
    {data.map((item,index)=>(<PersonCard data={item}></PersonCard>))}
    </div>
    </>
  )
}

export default People