import React, { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <button className='bg-slate-600 text-slate-100 ' onClick={() => {
                setCounter((prevCount)=> prevCount + 1)
            }}> Click Me </button>
            <p className='text-center text-3xl font-extrabold'>{counter}</p>
        </div>
    )
}
