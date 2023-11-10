import React from "react";
import businessImg from "../media/business.jpg";
import main_background from "../media/main_background.jpg";

const Page4 = () => {
  return (
    <>
      <img src={main_background} className="page4 main-overlay " />
      <main class="main position-relative landing-section">
        <div class="overlay position-relative z-3">
          {/* <!-- start section -1 --> */}
          <section class="container section -1">
            <div class="container pt-5">
              <div class="home-info text-white d-flex justify-content-between align-items-center">
                <div class="right-info">
                  <span class="subtitle mb-4 d-block">Business</span>
                  <h2 class="title">HERE'S THE FORUTH ARTICLE</h2>
                </div>
                <div class="left-info">
                  <i class="fa-solid fa-clock"></i> <span>2h ago</span>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- end section -1 --> */}

          {/* <!-- start card section --> */}
          <section class="card-section mt-5">
            <div class="container p-5">
              <div class="hero-text p-4 d-flex flex-column gap-5">
                <div class="hero-image">
                  <img src={businessImg} class="img-fluid text-center" alt="" />
                </div>
                <div class="hero-content text-white mt-4">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Inventore sint expedita, adipisci exercitationem nihil ab
                    reprehenderit, aut enim veniam amet reiciendis consectetur.
                    Laboriosam unde alias libero ullam impedit nemo praesentium?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Inventore sint expedita, adipisci exercitationem nihil ab
                    reprehenderit, aut enim veniam amet reiciendis consectetur.
                    Laboriosam unde alias libero ullam impedit nemo praesentium?
                  </p>
                  <p class="mt-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Inventore sint expedita, adipisci exercitationem nihil ab
                    reprehenderit, aut enim veniam amet reiciendis consectetur.
                    Laboriosam unde alias libero ullam impedit nemo praesentium?
                    Inventore sint expedita, adipisci exercitationem nihil ab
                    reprehenderit, aut enim veniam amet reiciendis consectetur.
                    Laboriosam unde alias libero ullam impedit nemo praesentium?
                    reprehenderit, aut enim veniam amet reiciendis consectetur.
                    Laboriosam unde alias libero ullam impedit nemo praesentium?
                    Laboriosam unde alias libero ullam impedit nemo praesentium?
                    reprehenderit, aut enim veniam amet reiciendis consectetur.
                    Laboriosam unde alias libero ullam impedit nemo praesentium?
                    Laboriosam unde alias libero ullam impedit nemo praesentium?
                    reprehenderit, aut enim veniam amet reiciendis consectetur.
                    Laboriosam unde alias libero ullam impedit nemo praesentium?
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- end card section --> */}
        </div>
      </main>
    </>
  );
};

export default Page4;
