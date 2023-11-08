import React from "react";
import seff_logo_transparent from "../media/seff_logo_transparent.png";
import images from "../media/images.png";
import Imageuploadbro from "../media/Image upload-bro.svg";
import main_background from "../media/main_background.jpg"; {/* صوره الخلفيه بتعملها امبورت الاول وتحطها تحت فالسورس*/}

const Page2 = () => {
  return (
    <>
      <img src={main_background} className="main-overlay" /> {/*الصوره اللى فالخلفيه*/}
      <div class="main position-relative">
        <main class="page2">
          {/* <!-- start section -1 --> */}
          <div class="container z-2 position-relative text-white">
            <h1 class="home-h3 mt-3">
              SOFTWARE ENGINEERING
              <br />
              FUTURE
            </h1>
            <div class="row d-flex justify-content-between home-div-row border-rounded rounded-3 my-5 pt-5">
              <div
                class="row d-flex justify-content-between my-3 home-row w-50 ml-5"
                style={{
                  marginLeft: "25px",
                  height: "300px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <div class="home-div-1">
                  <h3 class="FEATURED" style={{ paddingLeft: "50px" }}>
                    FEATURED NEWS
                  </h3>
                </div>
                <div class="left-div">
                  <div>
                    <p>TECH</p>
                    <div class="home-line"></div>
                    <div class="row">
                      <h2 class="col-9 fs-3">HERE'S THE FRIST ARTICAL</h2>
                      <span class="col-3">
                        <i class="fas fa-clock about-span-icon5"></i>
                        <span> 2 h ago</span>
                      </span>
                    </div>
                  </div>
                  <p
                    class="home-tech-text pt-2"
                    style={{ textOverflow: "ellipsis" }}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Reprehenderit maiores voluptatum facere! Corrupti beatae,
                    natus ab provident voluptate voluptatibus neque. Eligendi
                    accusamus aut placeat dolorum blanditiis, labore
                    necessitatibus facere alias in doloremque velit minima
                    aperiam. Ipsam et numquam labore fugit inventore placeat
                    quasi, voluptas at officia
                  </p>
                </div>
              </div>
              <div class="about-right-div mb-5 h-100  pr-3">
                <div
                  class="about-right-top-div mb-4 pb-4"
                  style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  <div class="about-right">
                    <p>TECH</p>
                    <div class="home-line"></div>
                    <h4>HERE'S THE SECOND ARTICAL</h4>
                    <span class="span-icon-about">
                      <i class="fas fa-clock"></i>
                      <span>2 days ago</span>
                    </span>
                  </div>
                  <p classnamename="about-right-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                    autem molestiae eos vitae tenetur natus fuga sint fugiat
                    modi magnam aliquam nisi, libero ab alias accusamus a
                    veritatis, id corrupti.
                  </p>
                </div>
                <div
                  class="about-right-top-div mb-4 pb-4"
                  style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  <div class="about-right">
                    <p>TECH</p>
                    <div class="home-line"></div>
                    <h4 classnamename="about-right-HERES-THE">
                      HERE'S THE THIRD ARTICAL
                    </h4>
                    <span class="span-icon-about">
                      <i class="fas fa-clock"></i>
                      <span>2 days ago</span>
                    </span>
                  </div>
                  <p classnamename="about-right-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis ex omnis tenetur. Atque quod quidem adipisci sed, eos
                    quasi, quibusdam aspernatur tempora quo doloribus corrupti
                    id nesciunt? Inventore, perspiciatis dolores.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end section -1 --> */}

          {/* <!-- start card section --> */}
          <div className="container">
            <section class="card-section mt-5 z-2 position-relative">
              <div class="Card-Business-bottom-box mb-5 text-white px-4 ">
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aut, quisquam esse? Quam, nulla. Quaerat saepe
                            alias voluptatibus libero repudiandae obcaecati,
                            numquam sed maiores iste totam tempora aliquid
                            aperiam. Rerum, animi.
                          </p>
                        </div>
                        <div class="col-1">
                          <a href="/userarticledetails/654607c2b694e0e7ca0f0e93">
                            <i class="fas fa-angle-right Businss-Left-icon2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Card-Business-bottom-box mb-5 text-white px-4 ">
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
                        <p class="Businss-Left-text15">TECH</p>
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aut, quisquam esse? Quam, nulla. Quaerat saepe
                            alias voluptatibus libero repudiandae obcaecati,
                            numquam sed maiores iste totam tempora aliquid
                            aperiam. Rerum, animi.
                          </p>
                        </div>
                        <div class="col-1">
                          <a href="/userarticledetails/654607c2b694e0e7ca0f0e93">
                            <i class="fas fa-angle-right Businss-Left-icon2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Card-Business-bottom-box mb-5 text-white px-4 ">
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
                        <p class="Businss-Left-text15">SPORTS</p>
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aut, quisquam esse? Quam, nulla. Quaerat saepe
                            alias voluptatibus libero repudiandae obcaecati,
                            numquam sed maiores iste totam tempora aliquid
                            aperiam. Rerum, animi.
                          </p>
                        </div>
                        <div class="col-1">
                          <a href="/userarticledetails/654607c2b694e0e7ca0f0e93">
                            <i class="fas fa-angle-right Businss-Left-icon2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="Card-Business-bottom-box mb-5 text-white px-4 ">
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aut, quisquam esse? Quam, nulla. Quaerat saepe
                            alias voluptatibus libero repudiandae obcaecati,
                            numquam sed maiores iste totam tempora aliquid
                            aperiam. Rerum, animi.
                          </p>
                        </div>
                        <div class="col-1">
                          <a href="/userarticledetails/654607c2b694e0e7ca0f0e93">
                            <i class="fas fa-angle-right Businss-Left-icon2"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* <!-- end card section --> */}
        </main>
      </div>
    </>
  );
};

export default Page2;
