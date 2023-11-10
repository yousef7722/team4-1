import React from "react";
import images from "../media/images.png";
import { Link } from "react-router-dom";

const SmallArticle = () => {
  return (
    <div class="Card-Business-bottom-box mb-5 text-white px-4 cur">
      <div class="row">
        <div class="col-md-4 col-12">
          <img
            src={images}
            alt=""
            class="img-fluid rounded-start Businss-Left-image"
          />
        </div>
        <div class="col-md-8 col-12">
          <div class="Card-Business-bottom-box-text">
            <div class="Card-Businss-Left-box115">
              <p class="Businss-Left-text15">EDUCATION</p>
              <div class="Card-Businss-Left-subtitle-line"></div>
              <h4 class="Businss-Left-text2">
                HERE'S THE TITLE OF THE ARTICLE
              </h4>
              <span class="Businss-Left-icon-about">
                <i class="fas fa-clock mx-2 Businss-Left-icon"></i>
                <span class="Businss-Left-text22">2 days ago</span>
              </span>
            </div>
            <div class="row">
              <div class="col-11">
                <p class="Businss-Left-text3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                  quisquam esse? Quam, nulla. Quaerat saepe alias voluptatibus
                  libero repudiandae obcaecati, numquam sed maiores iste totam
                  tempora aliquid aperiam. Rerum, animi.
                </p>
              </div>
              <div class="col-1">
                <Link to="/PAGE4_article_ID">
                  <i class="fas fa-angle-right Businss-Left-icon2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallArticle;
