"use client"
import React, { useState } from 'react'
import Counter from './counter'

function SchoolSystem() {

    // const response = await fetch("http://localhost:3000/students")
    // const data = await response.json()
    // console.log(data)
    // return (
    //     <div className={`container mx-auto px-6`}>
    //         <div className="flex flex-wrap ">
    //             {
    //                 data.map(item => <div className="w-full md:w-1/2 lg:w-4/12 p-2" key={item.id}>
    //                     <div className='bg-blue-400 rounded-md shadow-md shadow-blue-100 p-2 text-white  cursor-pointer hover:bg-blue-800'>
    //                         <p><span className='text-2xl font-bold '>name : </span> {item.name}</p>
    //                         <p><span className='text-2xl font-bold '>Age : </span> {item.age}</p>
    //                         <p><span className='text-2xl font-bold '>gender : </span> {item.gender}</p>
    //                         <p className='aspect-[1/0.1]'><span className='text-2xl font-bold '>address : </span> {item.address}</p>
    //                     </div>
    //                 </div>)
    //             }

    //         </div>
    //     </div>
    // )
    const DEFAULT_VALUE = {
        ab: "",
        ma: "",
        en: "",
        sc: ""
    }
    const [x, setX] = useState(DEFAULT_VALUE)
    const [error, setError] = useState("")
    const [result, setResult] = useState("")

    const collectData = (event) => {
        const data = { ...x }
        data[event.target.name] = event.target.value
        setX(data)
    }

    const validation = () => {
        const values = Object.values(x);

        if (values.some(item => item.trim() === "")) {
            setError("You Must Insert All Fields");
            return false;
        }

        if (values.some(item => isNaN(+item))) {
            setError("You Must Insert All Values as Numbers");
            return false;
        }

        if (values.some(item => +item < 0 || +item > 50)) {
            setError("You Must Insert All Values in Range 0 to 50");
            return false;
        }

        setError("");
        return true;
    }

    const getResult = () => {
        if (validation()) {
            const result = Object.values(x).reduce((sum, item) => sum + +item, 0);
            setResult(result);
            setX(DEFAULT_VALUE)

        } else {
            setResult("");
        }
    }

    return (

        <div className='w-[500px] mx-auto rounded-md shadow p-3 mt-9'>
            <div className="w-full ">
                <label htmlFor="ab" className="py-1 font-bold text-blue-900">  AB </label>
                <input type="text" id="ab" name='ab' onChange={collectData} className="block p-2 border-2 border-slate-500 outline-none focus:border-blue-400 rounded-md font-bold w-full" value={x.ab} />
            </div>
            <div className="w-full ">
                <label htmlFor="ma" className="py-1 font-bold text-blue-900"> MA </label>
                <input type="text" id="ma" name='ma' onChange={collectData} className="block p-2 border-2 border-slate-500 outline-none focus:border-blue-400 rounded-md font-bold w-full" value={x.ma} />
            </div>
            <div className="w-full ">
                <label htmlFor="en" className="py-1 font-bold text-blue-900">  EN</label>
                <input type="text" id="en" name='en' onChange={collectData} className="block p-2 border-2 border-slate-500 outline-none focus:border-blue-400 rounded-md font-bold w-full" value={x.en} />
            </div>
            <div className="w-full ">
                <label htmlFor="sc" className="py-1 font-bold text-blue-900">  SC</label>
                <input type="text" id="sc" name='sc' onChange={collectData} className="block p-2 border-2 border-slate-500 outline-none focus:border-blue-400 rounded-md font-bold w-full" value={x.sc} />
            </div>
            <button onClick={getResult} className="border-3 border-blue-600 w-3/12 my-3 py-2 px-4 rounded-md  text-2xl font-extrabold text-blue-950 main-tramsation hover:bg-blue-600 hover:text-white">
                Calc
            </button>
            {error && (
                <p className="bg-red-500 text-white text-2xl p-2 rounded-md">
                    {error}
                </p>
            )}

            {result && <p className={`text-white text-2xl p-2 rounded-md ${result > 100 ? 'bg-blue-500' : 'bg-gray-500'}`}>
                Result: {result} ({result > 100 ? "Good" : "Bad"})
            </p>}


            <Counter incrementResult={setResult} result ={result}/>
            <Counter incrementResult={setResult} result ={result}/>



        </div>

    )
}

export default SchoolSystem