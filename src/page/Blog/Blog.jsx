import React, { useState, useEffect } from "react";
 
import {Helmet} from "react-helmet";
const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("/blog.json")
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
         <Helmet>
        <title>FreshTaste || Blog page</title>
      </Helmet>
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
           data-aos="fade-down"
            src="https://webdesigns.com.ng/wp-content/uploads/How-to-Start-a-Tech-Blog.webp"
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div data-aos="fade-up" className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl">
              welcome tech related Blog
            </h3>

            <p>
              Here you will find tech related blog which will help you with
              information and customer ingest for us
            </p>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blog.map((blogItem) => (
            <div data-aos="zoom-in" key={blogItem.id}>
              <div
                rel="noopener noreferrer"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src={blogItem.image}
                  alt={blogItem.title}
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold">{blogItem.title}</h3>
                  <span className="text-xs dark:text-gray-400">
                    {blogItem.date}
                  </span>
                  <p>{blogItem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
