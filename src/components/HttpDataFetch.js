import React, { useState, useEffect } from "react";

const HttpDataFetch = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await res.json();
      const data = await jsonData.slice(0, 10);
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>HttpDataFetch Component</h2>
      <ul>
        <ul>
          {posts &&
            posts.map((post) => (
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
      </ul>
    </div>
  );
};

export default HttpDataFetch;
