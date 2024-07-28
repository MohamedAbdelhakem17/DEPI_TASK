import React from "react";

export default function Contact() {

    const info = [
        {
            "label": "Address",
            "details": "A108 Adam Street, New York, NY 535022"
        },
        {
            "label": "Phone",
            "details": "+1 5589 55488 55"
        },
        {
            "label": "Email",
            "details": "info@example.com"
        }
    ]

    return (
        <section className="mt-16 pb-3">
            <div className="container px-3">

                <h3 className="title ">
                    Contact
                </h3>

                <p className="w-8/12 mx-auto leading-7 py-2 font-semibold text-center ">
                    Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                </p>

                <div className="flex justify-center gap-5 items-center">
                    <div className="text w-3/12">
                        {
                            info.map(item => <div className="d-flex gap-x-5 group">
                                <img src="/contact.svg" className="w-[50px]  rounded-full h-[50px] p-2 border-3 border-blue-400 group-hover:scale-105 group-hover:bg-blue-400" />
                                <div>
                                    <h5 className="font-extrabold">{item.label}</h5>
                                    <p className="font-extrabold text-slate-600">{item.details}</p>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className="form w-8/12 flex justify-center gap-x-3 gap-y-2 flex-wrap mt-3">
                        <div className="w-5/12 ">
                            <label htmlFor="firstname" className="py-1 font-bold text-blue-900">  First Name</label>
                            <input type="text" id="firstname" className="block p-2 border-2 border-slate-500 outline-none focus:border-blue-400 rounded-md font-bold w-full" />
                        </div>
                        <div className="w-5/12 ">
                            <label htmlFor="lastname" className="py-1 font-bold text-blue-900">  Last Name</label>
                            <input type="text" id="lastname" className="block p-2 border-2 border-slate-500 outline-none focus:border-blue-400 rounded-md font-bold w-full" />
                        </div>
                        <div className="w-10/12 ">
                            <label htmlFor="email" className="py-1 font-bold text-blue-900">  Email </label>
                            <input type="email" id="email" className="block p-2 border-2 border-slate-500 outline-none focus:border-blue-400 rounded-md font-bold w-full" />
                        </div>
                        <div className="w-10/12 ">
                            <label htmlFor="message" className="py-1 font-bold text-blue-900">  message </label>
                            <textarea name="message" rows="5" id="message" className="resize-none block p-2 border-2 border-slate-500 outline-none focus:border-blue-400 rounded-md font-bold w-full"></textarea>
                        </div>

                        <button className="border-3 border-blue-600 w-3/12 my-3 py-2 px-4 rounded-md  text-2xl font-extrabold text-blue-950 main-tramsation hover:bg-blue-600 hover:text-white">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

