import React from 'react'
import Image from 'next/image'

export default function Artical({ artical }) {
    return (
        <>
            <div className="card w-75 mx-auto  overflow-hidden mb-3">
                {
                    artical.img && <img
                        src={artical.img}
                        width={500}
                        height={200}
                        className='w-100'
                        alt="Picture of the author"
                    />
                    // artical.img && <Image
                    //     src={artical.img}
                    //     width={500}
                    //     height={200}
                    //     className='w-100'
                    //     alt="Picture of the author"
                    // />
                }
                <div className="card-body w-100">
                    <a className="card-title" href={artical.url} target='_blank'>{artical.title}</a>
                    <p className="card-text fw-bold">{artical.description}</p>
                    <p className="card-text">{artical.author}</p>
                    <p className="card-text">{new Date(artical.publishedAt).toLocaleDateString()}</p>
                </div>
            </div>
        </>
    )
}
