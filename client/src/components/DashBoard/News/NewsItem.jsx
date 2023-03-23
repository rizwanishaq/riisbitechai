import React from "react";

const NewsItem = ({ item }) => {
  return (
    <div className="post-item clearfix">
      <img src="assets/img/item-1.jpg" alt="" />
      <h4>
        <a href={item.url} target="_blank" rel="noreferrer">
          {item.name}
        </a>
      </h4>
      <p>{item.description}</p>
    </div>
  );
};

export default NewsItem;
