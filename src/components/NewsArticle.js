import React from "react";

const NewsArticle = ({text}) => {
  return (
    <div
      class="row news-item d-flex justify-content-between my-3 px-2"
      style={{
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      <div>
        <p>TECH</p>
        <div class="home-line"></div>
        <div class="row">
          <h2 class="col-9">HERE'S THE FRIST ARTICAL</h2>
          <span class="col-3">
            <i class="fas fa-clock about-span-icon5"></i>
            <span> 2 h ago</span>
          </span>
        </div>
      </div>
      <p class="fs-7" style={{ textOverflow: "ellipsis" }}>
      {text}
      </p>
    </div>
  );
};

export default NewsArticle;
