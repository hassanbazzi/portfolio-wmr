import { useEffect, useState } from "preact/hooks";
import styles from "./blog.module.css";
export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(function () {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@habazzi"
    )
      .then((r) => r.json())
      .then((json) => {
        if (json && json.items && json.items.length) {
          const posts = json.items.map((item) => {
            return {
              title: item.title,
              date: item.pubDate,
              link: item.link,
              thumbnail: item.thumbnail,
            };
          });
          setPosts(posts);
        }
      });
  }, []);
  if (!posts || !posts.length) {
    return null;
  }
  return (
    <div>
      <h3>Blog</h3>
      <div class={styles.blogContainer}>
        {posts.slice(0, 4).map((post) => (
          <div class={styles.posts}>
            <div
              class={styles.thumbnail}
              style={{
                backgroundImage: `url(${post.thumbnail})`,
              }}
            />
            <div class={styles.story}>
              <a href={post.link}>{post.title}</a>
              <span>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
