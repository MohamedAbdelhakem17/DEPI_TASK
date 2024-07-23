import React from 'react'

export default function Header() {
    return (
        <header className='bg-primary py-3 px-4 shadow text-white d-flex align-items-center justify-content-between rounded-bottom mb-3'>
            <h3 className="fw-bolder h2">News App</h3>
            <div className="input-group w-25">
                <input type="text" className="form-control p-3 fw-bold" placeholder='Search' />
            </div>
        </header>
    )
}
