import React from 'react'

export default function Footer({ pageSize, pageNumber, itemCount, handelNextPage, handelPreviousPage }) {
    return (
        <div className='d-flex align-items-center justify-content-between mx-auto w-75 my-2'>
            <button className="btn btn-outline-primary fw-bolder px-3" disabled={pageNumber === 1} onClick={handelPreviousPage}>Previous</button>
            <button className="btn btn-outline-primary fw-bolder px-3" disabled={pageSize > itemCount} onClick={handelNextPage}>Next</button>
        </div>
    )
}
