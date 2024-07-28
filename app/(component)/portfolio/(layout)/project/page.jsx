"use client"
import React, { useEffect, useRef, useState } from 'react'


export default function Project() {
  const active = useRef("all")
  const projects = [
    {
      "category": "design",
      "title": "Print Advertisement",
      "description": "Designing print advertisements for magazines, newspapers, or other media.",
      "image": "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "link": "https://example.com/print-advertisement"
    },
    {
      "category": "programming",
      "title": "Weather Forecast App",
      "description": "Building an application to provide real-time weather updates and forecasts.",
      "image": "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "link": "https://example.com/weather-forecast-app"
    },
    {
      "category": "ui ux",
      "title": "Dashboard UI",
      "description": "Designing an intuitive and interactive dashboard for data visualization.",
      "image": "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "link": "https://example.com/dashboard-ui"
    },
    {
      "category": "design",
      "title": "Social Media Graphics",
      "description": "Designing engaging graphics for social media platforms to enhance brand presence.",
      "image": "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "link": "https://example.com/social-media-graphics"
    },
    {
      "category": "programming",
      "title": "API Integration Service",
      "description": "Creating a service for integrating various APIs into a unified system.",
      "image": "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "link": "https://example.com/api-integration-service"
    },
    {
      "category": "programming",
      "title": "Chat Application",
      "description": "Creating a real-time chat application with user authentication and message encryption.",
      "image": "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "link": "https://example.com/chat-application"
    },
    {
      "category": "design",
      "title": "Poster Design",
      "description": "Creating eye-catching posters for events or promotional activities.",
      "image": "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "link": "https://example.com/poster-design"
    },
    {
      "category": "ui ux",
      "title": "Mobile App Redesign",
      "description": "A complete redesign of a mobile app to enhance user experience and interface.",
      "image": "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "link": "https://example.com/mobile-app-redesign"
    },
    {
      "category": "programming",
      "title": "Task Management Tool",
      "description": "Developing a tool for tracking tasks and team collaboration with notifications and deadline management.",
      "image": "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "link": "https://example.com/task-management-tool"
    },
    {
      "category": "design",
      "title": "Infographic Design",
      "description": "Creating visually appealing infographics to convey complex information simply.",
      "image": "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "link": "https://example.com/infographic-design"
    },
    {
      "category": "ui ux",
      "title": "E-commerce Site UI",
      "description": "Creating a user-friendly interface for an online shopping platform.",
      "image": "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "link": "https://example.com/ecommerce-site-ui"
    },
    {
      "category": "design",
      "title": "Brand Identity Package",
      "description": "Designing a complete brand identity including logo, color scheme, and typography.",
      "image": "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "link": "https://example.com/brand-identity-package"
    },
    {
      "category": "ui ux",
      "title": "Fitness App Interface",
      "description": "Designing a sleek and motivating interface for a fitness tracking app.",
      "image": "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "link": "https://example.com/fitness-app-interface"
    },
    {
      "category": "programming",
      "title": "E-commerce Platform",
      "description": "Development of a robust e-commerce platform with features like product management and secure payment.",
      "image": "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "link": "https://example.com/ecommerce-platform"
    }
  ]
  

  const [filerData, setFilterData] = useState([projects])

  const handelChaen = (selectItem) => {
    active.current = selectItem
    if (active.current === "all") {
      setFilterData(projects)
    } else {
      setFilterData(projects.filter(project => project.category === active.current))
    }
  }


  useEffect(() => {
    handelChaen("all")
  }, [])


  return (
    <section className='mt-16 pb-3'>

      <h3 className="title">
        Project
      </h3>

      <ul className="list-none w-1/2 flex items-center justify-center gap-x-8 mx-auto my-4">
        <li onClick={() => handelChaen("all")} className={`capitalize  font-bold ${active.current === "all" ? "bg-blue-700 " : "bg-blue-400 "} text-xl text-white px-3 rounded-lg cursor-pointer hover:bg-blue-700`}> all </li>
        <li onClick={() => handelChaen("design")} className={`capitalize  font-bold ${active.current === "design" ? "bg-blue-700 " : "bg-blue-400 "}  text-xl text-white px-3 rounded-lg cursor-pointer hover:bg-blue-700`}> Design </li>
        <li onClick={() => handelChaen("ui ux")} className={`capitalize  font-bold ${active.current === "ui ux" ? "bg-blue-700 " : "bg-blue-400 "}  text-xl text-white px-3 rounded-lg cursor-pointer hover:bg-blue-700`}> UI UX </li>
        <li onClick={() => handelChaen("programming")} className={`capitalize  font-bold ${active.current === "programming" ? "bg-blue-700 " : "bg-blue-400 "}  text-xl text-white px-3 rounded-lg cursor-pointer hover:bg-blue-700`}> Programing </li>
      </ul>

      <div className="container px-6 flex items-center justify-center flex-wrap gap-4"  >
        {
          filerData.map(project => <div
            key={JSON.stringify(project)} className='w-3/12 relative group rounded-md overflow-hidden '>
            <img src={project.image} alt="" className="w-100" />
            <div className='bg-slate-400 opacity-40 inset-3 rounded-md absolute flex items-center cursor-pointer justify-center flex-col p-2 group-hover:bg-slate-900 group-hover:text-white group-hover:opacity-100 main-transition'>
              <h4 className='mb-2' >{project.title}</h4>
              <p className='text-balance text-center'>{project.description}</p>
            </div>
          </div>)
        }
      </div>
    </section>
  )
}
