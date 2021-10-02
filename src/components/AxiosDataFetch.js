import axios from "axios";
import React, { useState, useEffect } from "react";

const AxiosDataFetch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        const data = res.data.slice(0, 4);
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>AxiosDataFetch Component</h2>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div className="card">
              <div className="header">
                <p>{post.title}</p>
              </div>
              <div className="container">
                <p>{post.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosDataFetch;
