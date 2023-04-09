import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./home.css";
import axios from "axios";



export default function Home() {
  const [posts, setPosts] = useState([]);
 

  useEffect(() => {
    axios.get('/posts')
    .then(res => setPosts(res.data))
    .catch(err => console.error(err));
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
}