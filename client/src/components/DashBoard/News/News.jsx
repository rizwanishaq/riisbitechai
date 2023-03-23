import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import NewsItem from "./NewsItem";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([{}]);

  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get("http://localhost:5000/api/news");
      const sources = await response.data.sources;
      setNews(sources);
    };

    getNews();
  }, []);

  return (
    <Card>
      <div className="filter">
        <a className="icon" href="#" data-bs-toggle="dropdown">
          <i className="bi bi-three-dots"></i>
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li className="dropdown-header text-start">
            <h6>Filter</h6>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              Today
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              This Month
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              This Year
            </a>
          </li>
        </ul>
      </div>

      <Card.Body className="pb-0">
        <Card.Title>
          News &amp; Updates <span>| Today</span>
        </Card.Title>

        <div className="news">
          {news.map((item) => (
            <NewsItem item={item} key={item.id} />
          ))}

          {/* <div className="post-item clearfix">
            <img src="assets/img/news-2.jpg" alt="" />
            <h4>
              <a href="#">Quidem autem et impedit</a>
            </h4>
            <p>
              Illo nemo neque maiores vitae officiis cum eum turos elan dries
              werona nande...
            </p>
          </div>

          <div className="post-item clearfix">
            <img src="assets/img/news-3.jpg" alt="" />
            <h4>
              <a href="#">Id quia et et ut maxime similique occaecati ut</a>
            </h4>
            <p>
              Fugiat voluptas vero eaque accusantium eos. Consequuntur sed ipsam
              et totam...
            </p>
          </div>

          <div className="post-item clearfix">
            <img src="assets/img/news-4.jpg" alt="" />
            <h4>
              <a href="#">Laborum corporis quo dara net para</a>
            </h4>
            <p>
              Qui enim quia optio. Eligendi aut asperiores enim repellendusvel
              rerum cuder...
            </p>
          </div>

          <div className="post-item clearfix">
            <img src="assets/img/news-5.jpg" alt="" />
            <h4>
              <a href="#">Et dolores corrupti quae illo quod dolor</a>
            </h4>
            <p>
              Odit ut eveniet modi reiciendis. Atque cupiditate libero beatae
              dignissimos eius...
            </p>
          </div> */}
        </div>
      </Card.Body>
    </Card>
  );
};

export default News;
