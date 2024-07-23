import React from 'react'
import Artical from './Artical'

export default function NewsFead({ articles }) {
    console.log(articles)
    return (
        <>
            {
                articles.map(article => <Artical artical={article} key={JSON.stringify(article)}/>)
            }
        </>
    )
}

