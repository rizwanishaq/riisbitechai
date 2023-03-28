import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import NewsItem from "./NewsItem";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([{}]);

  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get(
        "https://riisbitec.onrender.com/api/news"
      );
      const sources = await response.data.sources;
      setNews(sources);
    };

    getNews();
  }, []);

  return (
    <Card>
      <Card.Body className="pb-0">
        <Card.Title>
          News &amp; Updates <span>| Today</span>
        </Card.Title>

        <div className="news">
          {news.map((item, idx) => (
            <NewsItem item={item} key={`${item.id}_${idx}`} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default News;
