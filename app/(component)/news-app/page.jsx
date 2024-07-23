"use client"
import React, { useEffect, useState } from 'react';
import Header from './layout/Header';
import NewsFead from './layout/NewsFead';
import "./newsapp.moudel.css"

const NewsAppPage = () => {
  const [articles , setArticles] = useState([])

  const loadData = async () => {
    const respons = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`)
    const data = await respons.json()
    if (data.status !== "ok")
      throw new Error("Server Error, We Well Solve it soon")

    const articles = data.articles.map(article => ({
      title: article.title,
      description: article.description,
      author: article.author,
      publishedAt: article.publishedAt,
      img: article.urlToImage,
      url:article.url
    }));

    setArticles(articles)
  }

  useEffect(() => {
    loadData()
  }, [])
  
  return (
    <>
      <div className="container">
        <Header />
        <NewsFead articles={articles} />
      </div>
    </>
  );
};

export default NewsAppPage;

