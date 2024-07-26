import React from "react";

export default function About() {
    const skillLevels = [
        { skill: 'HTML', level: 100 },
        { skill: 'CSS', level: 90 },
        { skill: 'JavaScript', level: 75 },
        { skill: 'PHP', level: 80 },
        { skill: 'WordPress', level: 90 },
        { skill: 'Photoshop', level: 55 }
    ];


    return (
        <section className="mt-16">
            <div className="container px-3">

                <h3 className="text-center mt-4 font-semibold text-5xl py-3 relative
               after:w-[200px] after:h-[3px] after:bg-blue-500 after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:content-[''] after:absolute after:-translate-y-1/2
               before:content-[''] before:bg-blue-900 before:absolute before:left-1/2 before:w-[50px] before:h-[8px] before:-bottom-[1px] before:-translate-x-1/2 before:-translate-y-1/2
               before:z-10 before:rounded-sm
               ">
                    About
                </h3>

                <p className="w-8/12 mx-auto leading-7 py-2 font-semibold text-center ">
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                    aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                    quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                    sit in iste officiis commodi quidem hic quas.
                </p>

                <div className="py-2 flex items-center justify-center flex-col">
                    <img src="/img1.jpg" className="w-5/12 mb-2 rounded-md shadow-lg  shadow-blue-100" />
                    <h2>Brandon Johnson </h2>
                    <h4>UI/UX Designer & Web Developer.</h4>
                </div>

                <div className="flex flex-wrap items-center justify-around gap-y-5">
                    {
                        skillLevels.map(({ skill, level }) => <div className="w-5/12">
                            <div className="flex items-center justify-between px-1 py-1">
                                <span
                                    className="font-extrabold border-1 border-blue-400 p-0.5 text-[12px] rounded-md text-blue-400">{skill}</span>
                                <span
                                    className="font-extrabold border-1 border-blue-400 p-0.5 text-[12px] rounded-md text-blue-400">{level}%</span>
                            </div>
                            <div className="w-full h-[15px] rounded-lg  bg-gray-100 overflow-hidden">
                                <div className="bg-blue-700 h-full" style={{ width: `${level}%` }}></div>
                            </div>
                        </div>)
                    }

                </div>

            </div>

        </section>
    );
}

