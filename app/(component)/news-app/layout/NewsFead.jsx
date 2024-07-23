import React from 'react'
import Artical from './Artical'
import 'react-loading-skeleton/dist/skeleton.css'
import ArticalSkelton from './ArticalSkelton'

export default function NewsFead({ articles, error, loading }) {

    if (error.trim().length !== 0) {
        return <div className='alert alert-danger text-center h4 w-50 mx-auto mt-5 fw-bolder'>{error}</div>
    }


    if (loading) {
        return Array.from({ length: 5 }).map((item, index) => <ArticalSkelton key={index} />)
    }

    if (+articles.length === 0 && !loading) {
        return <div className='text-center h4 w-50 mx-auto mt-5 fw-bolder h3'>Unable to locate any articles</div>
    }

    return articles.map(article =>
        <Artical artical={article} key={JSON.stringify(article)} />)

}

