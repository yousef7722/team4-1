import React from 'react'
import main_background from "../media/main_background.jpg";
import SmallArticle from "../components/SmallArticle";
import NewsArticle from "../components/NewsArticle";

const Page3 = () => {
  var bigText = " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderitmaiores voluptatum facere! Corrupti beatae, natus ab provident voluptatevoluptatibus neque. Eligendi accusamus aut placeat dolorum blanditiis,labore necessitatibus facere alias in doloremque velit minima aperiam.Ipsam et numquam labore fugit inventore placeat quasi, voluptas at officia"
  var smallText = bigText.slice(0, bigText.length/2)
  return (
    <>
      <img src={main_background} className="main-overlay" />{" "}
      {/*الصوره اللى فالخلفيه*/}
      <div className="main position-relative">
        <main className="page2">
          {/* <!-- start section -1 --> */}
          <div className="landing-section position-relative py-2">
            <div className="container  z-2 position-relative text-white py-5">
              <h1 className="home-h3">
                SOFTWARE ENGINEERING
                <br />
                FUTURE
              </h1>
              <div className="d-flex  mt-5 d-flex justify-content-between home-div-row border-rounded rounded-3 pt-5">
                <div className="position-relative w-50 px-4 ps-5">
                  <div className="ps-5 left-news-item">
                  <NewsArticle text={bigText}/>
                  </div>
                </div>
                <div className="w-45 mb-5 h-100 pe-4 d-flex flex-column">
                  <NewsArticle text={smallText}/>
                  <NewsArticle text={smallText}/>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end section -1 --> */}

          {/* <!-- start card section --> */}
          <div className="py-5" style={{ backgroundColor: "#1e1e1e" }}>
            <section class="container py-3 card-section z-3 position-relative">
              <SmallArticle />
              <SmallArticle />
              <SmallArticle />
              <SmallArticle />
            </section>
          </div>
          {/* <!-- end card section --> */}
        </main>
      </div>
    </>
  );
}

export default Page3