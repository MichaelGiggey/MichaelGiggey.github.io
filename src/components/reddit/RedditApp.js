import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoLogoReddit } from "react-icons/io";
import styles from './redditApp.module.css';

const RedditApp = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('Most Popular Posts');
  // Default to 'Most Popular'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [after, setAfter] = useState(null);

  const sortOptionMapping = {
    'Most Popular Posts': 'hot',
    'Most Recent Posts': 'new',
    'Top Posts of All Time': 'top'
  };

  const observer = useRef();

  const lastPostElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        fetchMorePosts();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchPosts = async (reset = false) => {
    setLoading(true);
    setError(null);
    try {
      let response;
      const sortValue = sortOptionMapping[sortOption];
      if (!searchTerm) {
        response = await axios.get(`https://www.reddit.com/${sortValue}.json`, {
          params: { after: reset ? null : after }
        });
      } else {
        response = await axios.get(`https://www.reddit.com/search.json`, {
          params: { q: searchTerm, sort: sortValue, after: reset ? null : after }
        });
      }
      setPosts(prevPosts => reset ? response.data.data.children.slice(0, 8).map(child => child.data) : [...prevPosts, ...response.data.data.children.slice(0, 4).map(child => child.data)]);
      setAfter(response.data.data.after);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch posts');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(true);
  }, [searchTerm, sortOption]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  const fetchMorePosts = () => {
    if (after) {
      fetchPosts();
    }
  };

  return (
    <div className={styles.redditContainer}>
      <h1 className={styles.redditHeader}>
        <IoLogoReddit className={styles.redditLogo} />
        Reddit Light
      </h1>
      <h2 className={styles.searchHeader}>{searchTerm ? `Search results for ${searchTerm}` : `${sortOption}`}</h2>
      <input
        name='search'
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Enter search term"
        className={styles.searchInput}
      />
      <select name='searchOptionsMenu' value={sortOption} onChange={handleSortOptionChange} className={styles.sortSelect}>
        <option value="Most Popular Posts">Most Popular</option>
        <option value="Most Recent Posts">Most Recent</option>
        <option value="Top Posts of All Time">Top (All Time)</option>
      </select>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className={styles.postList}>
        {posts.map((post, index) => {
          if (posts.length === index + 1) {
            return (
              <li ref={lastPostElementRef} key={post.id} className={styles.post}>
                <div className={styles.postDetails}>
                  <a href={`https://www.reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer" className={styles.postTitle}>
                    <h2>
                      <IoLogoReddit className={styles.redditLogoPosts} />
                      {post.title}
                    </h2>
                  </a>
                  <div className={styles.postInfo}>
                    <span className={styles.postAuthor}>
                      by {post.author}
                    </span>
                    <div className={styles.postBodyText}>
                      {post.selftext}
                    </div>
                  </div>

                  {post.thumbnail && post.thumbnail !== 'self' && post.thumbnail !== 'default' && (
                    post.is_video && post.media?.reddit_video?.fallback_url ? (
                      <video className={styles.postVideo} controls crossOrigin="anonymous">
                        <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <video src={post.thumbnail} alt="Content Not Available" className={styles.postThumbnail} />
                    )
                  )}
                  
                </div>
                <span className={styles.postScore}>
                  {post.score} upvotes
                </span>
                <span className={styles.postComments}>
                  {post.num_comments} comments
                </span>
                <span className={styles.postDate}>
                  {new Date(post.created_utc * 1000).toLocaleString()}
                </span>
              </li>
            );
          } else {
            return (
              <li key={post.id} className={styles.post}>
                <div className={styles.postDetails}>
                  <a href={`https://www.reddit.com${post.permalink}`} target="_blank" rel="noopener noreferrer" className={styles.postTitle}>
                    <h2>
                      <IoLogoReddit className={styles.redditLogoPosts} />
                      {post.title}
                    </h2>
                  </a>
                  <div className={styles.postInfo}>
                    <span className={styles.postAuthor}>
                      by {post.author}
                    </span>
                    <div className={styles.postBodyText}>
                      {post.selftext}
                    </div>
                  </div>

                  {post.thumbnail && post.thumbnail !== 'self' && post.thumbnail !== 'default' && (
                    post.is_video ? (
                      <video className={styles.postVideo} controls crossOrigin="anonymous">
                        <source src={post.media.reddit_video.fallback_url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img src={post.thumbnail} alt="Content Not Available" className={styles.postThumbnail} />
                    )
                  )}
                  
                </div>
                <span className={styles.postScore}>
                  {post.score} upvotes
                </span>
                <span className={styles.postComments}>
                  {post.num_comments} comments
                </span>
                <span className={styles.postDate}>
                  {new Date(post.created_utc * 1000).toLocaleString()}
                </span>
              </li>
            );
          }
        })}
      </ul>
      <div>
        <Link to="/projects" className={styles.link}>Back to Projects</Link>
      </div>
    </div>
  );
};

export default RedditApp;
