import React from 'react'
import CategoriesSelect from './CategoriesSelect'

export default function Header({ quary, handelSearch , handelSelectCategory, categorie}) {
    return (
        <header className='bg-primary py-2 px-4 shadow text-white row gy-2 d-flex align-items-center justify-content-between rounded-bottom mb-3 flex-column flex-md-row '>
            <h3 className="fw-bolder h2 text-center ">News App</h3>
            <CategoriesSelect handelSelectCategory={handelSelectCategory} categorie={categorie}/>
            <div className="search col-12 col-md-5">
                <div className="input-group">
                    <input type="text" className="form-control p-3 fw-bold" placeholder='Search' onChange={(e) => handelSearch(e.target.value)} />
                </div>
            </div>
        </header>
    )
}
