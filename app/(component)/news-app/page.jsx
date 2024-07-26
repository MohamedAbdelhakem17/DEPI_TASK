"use client"
import React, { useEffect, useRef, useState } from 'react';
import Header from './layout/Header';
import NewsFead from './layout/NewsFead';
import { debounce } from 'lodash';
import "./newsapp.moudel.css"
import Footer from './layout/Footer';


const NewsAppPage = () => {
  document.title = "News APP"
  const PAGE_SIZE = 5
  const [articles, setArticles] = useState([])
  const [error, setError] = useState("")
  const [loading, setLodaing] = useState(false)
  const [categorie, setCategorie] = useState("general")
  const quary = useRef("")
  const pageNumber = useRef(1)
  const abortConroller = useRef(new AbortController())

  const loadData = async (cat, signal) => {
    const API_URL = `https://newsapi.org/v2/top-headlines?country=eg&category=${cat}&pageSize=${PAGE_SIZE}&page=${pageNumber.current}&q=${quary.current}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    const respons = await fetch(API_URL, { cache: "force-cache", signal })
    const data = await respons.json()

    if (data.status !== "ok")
      throw new Error("Server Error, We Will Solve it soon")

    const articles = data.articles.map(article => ({
      title: article.title,
      description: article.description,
      author: article.author,
      publishedAt: article.publishedAt,
      img: article.urlToImage,
      url: article.url
    }));

    return articles
  }

  const featchDataAndUpdate = (cat) => {
    // (abortConroller.current) && abortConroller.current.abort()
    if (abortConroller.current) {
      console.log("REeeeeeee")
      abortConroller.current.abort()
    }
    abortConroller.current = new AbortController()
    const signal = abortConroller.current.signal
    setLodaing(true)
    loadData(cat || categorie, signal)
      .then(setArticles)
      .catch((error) => setError(error.message))
      .finally(() => setLodaing(false));
  }

  const loadDataDebounce = debounce((newQuery) => {
    quary.current = newQuery;
    featchDataAndUpdate()
  }, 700);

  const handelSearch = (newQuery) => {
    pageNumber.current = 1
    loadDataDebounce(newQuery)
  }

  const handelNextPage = () => {
    pageNumber.current += 1
    featchDataAndUpdate()
  }

  const handelPreviousPage = () => {
    pageNumber.current -= 1
    featchDataAndUpdate()
  }

  const handelSelectCategory = (event) => {
    const value = event.target.value
    setCategorie(value)
    pageNumber.current = 1
    featchDataAndUpdate(value)
  }

  useEffect(() => {
    featchDataAndUpdate(categorie)
    return () => {
      abortConroller.current.abort()
    }
  }, [])

  return (
    <>
      <div className="container">
        <Header quary={quary} handelSearch={handelSearch} handelSelectCategory={handelSelectCategory} categorie={categorie} />
        <NewsFead articles={articles} error={error} itemCount={+articles.length} loading={loading} />
        <Footer handelNextPage={handelNextPage} handelPreviousPage={handelPreviousPage} pageSize={PAGE_SIZE} pageNumber={pageNumber.current} itemCount={+articles.length} />
      </div>
    </>
  );
};

export default NewsAppPage;

