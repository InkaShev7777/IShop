import React from 'react'

export default function Pagination({currentPerPage,totalCount,paginate}) {
    const pageNumber =[]
    for(let i = 1;i <= Math.ceil((totalCount/currentPerPage)); i++){
        pageNumber.push(i);
    }
  return (
    <div  className='pagination'>
       {pageNumber.map(number => (
                <div key={number} onClick={()=> paginate(number)}>
                    {number}
                </div>
            ))}
    </div>
  )
}
