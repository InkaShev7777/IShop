import React, { useState } from 'react'
import Nav from './Nav'
import DataTable from 'react-data-table-component'


export default function CategoriesAdmin(props) {
    const columns = [
        {
            name:'ID',
            selector:row => row.id,
        },
        {
            name:'Title',
            selector:row => row.title,
            sortable:true
        }
    ];
    const [records,setRecords] = useState(props.dataCategories)
    function handleFilter(event){
        const newDate = props.dataCategories.filter(row => {
            return row.title.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newDate)
    }
  return (
    <div className='px-3'>
        <Nav Toggle={props.Toggle} />
        <div className='container mt-5'>
            <div className='text-end'>
                <input type="text" onChange={handleFilter}/>
            </div>
            <DataTable columns={columns} data={records} fixedHeader pagination></DataTable>
        </div>
    </div>
  )
}
