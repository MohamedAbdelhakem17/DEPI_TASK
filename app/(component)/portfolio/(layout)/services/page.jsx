"use client"
import React from "react";
export default function Services() {
  const services = [
    {
      name: "Nesciunt Mete",
      description:
        "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    },
    {
      name: "Eosle Commodi",
      description:
        "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
    },
    {
      name: "Ledo Markt",
      description:
        "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
    },
    {
      name: "Asperiores Commodit",
      description:
        "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
    },
    {
      name: "Velit Doloremque",
      description:
        "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
    },
    {
      name: "Dolori Architecto",
      description:
        "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
    },
  ];

  return (
    <section className="mt-16 pb-3">
      <div className="container px-3">
        <h3 className="title">Services</h3>

        <p className="mx-auto w-8/12 py-2 text-center font-semibold leading-7">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <div className="flex items-center justify-center flex-wrap">
          {
            services.map(service => <div key={JSON.stringify(service)} className="p-4 w-1/3 cursor-pointer hover:scale-90 main-transition group">
              <div className="rounded-md shadow-sm shadow-blue-200 p-2 text-center group-hover:bg-blue-600  main-transition group-hover:border-2 group-hover:border-blue-300 group-hover:rotate-1" >
                <img src={"/icon.svg"} className="group-hover:bg-white text-white w-[70px] h-[70px] p-2 duration-300 bg-blue-600 block mx-auto my-2 rounded-full"/>
                <h3 className="text-blue-600 font-bold py-2 group-hover:text-white">{service.name}</h3>
                <p className="aspect-[1/.2] text-stone-500 group-hover:text-white">{service.description}</p>
              </div>
            </div>)
          }

        </div>
      </div>
    </section>
  );
}
