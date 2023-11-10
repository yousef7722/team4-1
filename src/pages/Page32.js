import React from "react";
import Imageupload from "../media/upload-img.png";
import Search from "../components/Search";
import EIT from "../media/EIT.png";
import Sidebar1 from "../components/SideBar1";
import main_background from "../media/main_background.jpg";
import SecTitle1 from "../components/SecTitle1";
import { Link } from "react-router-dom";

const Page32 = () => {
  return (
    <>
      <img src={main_background} className="main-overlay" />
      <div className="landing-section main position-relative" style={{ marginBottom: "200px" }}>
        <main className="container d-flex flex-column gap-4 text-white position-relative pt-5 z-3">
          <SecTitle1 titleName="Jobs" />
          <Search />
          <div class="d-flex gap-5 mt-5">
            <div className="w-100" style={{ maxWidth: "360px" }}>
              <Sidebar1 />
              <div className="btn text-uppercase text-white w-100 mt-4" style={{ backgroundColor: "#bf9b30" }}>create your cv</div>
            </div>
            <div className="job-container d-flex flex-column gap-3 flex-grow-1 ">
              {/* start */}
              <div className="text-white p-5 rounded" style={{
                backgroundColor: "rgb(0, 0, 0,0.3)",
              }}>
                <div className="d-flex justify-content-between align-content-lg-start ">
                  <div className="d-flex gap-3">
                    <img src={EIT} className="" style={{ width: "70px", height: "fit-content" }} />
                    <div>
                      <h6 className="nobreak" style={{ cursor: "pointer", fontSize: "20px" }}>
                        Front-end React JS Developer
                      </h6>
                      <p>Eptikar IT Solutions, Obour City</p>
                    </div>
                  </div>
                  <div className="">
                    <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                      5000 EGP - 8000 EGP{" "}
                    </span>
                    <span> Per Month</span>
                    <div>
                      <i className="fas fa-map-marker-alt" style={{ color: "#bf9b30", }}>
                      </i>
                      <span> On Site</span>
                    </div>
                  </div>
                </div>
                <div className="row  pt-5">
                  <div className="col-5">
                    <h6
                      style={{
                        cursor: "pointer",
                        fontSize: "20px",
                      }}
                    >
                      Balqees Hamdi Sabir
                    </h6>

                    <p>Computer science, international islamic university</p>
                  </div>
                </div>
                <div className="row  py-2 ">
                  <div className="col-8">
                    <h6 style={{ fontSize: "20px" }}>Email</h6>

                    <input
                      type="text"
                      className="form-control "
                      style={{
                        border: "0px",
                        backgroundColor: "rgb(73, 73, 73)",
                      }}
                    />
                  </div>
                  <div className="col-4">
                    <h6 style={{ fontSize: "20px" }}>Years Of Experience</h6>

                    <input
                      type="text"
                      className="form-control "
                      style={{ border: "0px", backgroundColor: "rgb(73, 73, 73)" }}
                    />
                  </div>
                </div>
                <div className="row  py-2">
                  <div className="col-6">
                    <h6 style={{ fontSize: "20px" }}>Mobile Number </h6>

                    <input
                      type="text"
                      className="form-control "
                      style={{ border: "0px", backgroundColor: "rgb(73, 73, 73)" }}
                    />
                  </div>
                </div>
                <div className="row  py-2">
                  <div className="col-7" style={{ width: "430px" }}>
                    <h6 style={{ fontSize: "20px" }}>Upload CV </h6>
                    <div
                      className="col-12"
                      style={{
                        border: "1px dashed #bf9b30",
                        textAlign: "center",
                      }}
                    >
                      <img src={Imageupload} />
                      <h6 style={{ fontSize: "20px" }}>
                        Drog & drop files or{" "}
                        <span
                          style={{
                            cursor: "pointer",
                            textDecoration: "underline",
                            color: "#bf9b30",
                          }}
                        >
                          Browse
                        </span>{" "}
                      </h6>
                      <p style={{ fontSize: "14px", color: "gray" }}>
                        Supported formotes: JPEG,PNG,GIF,MP4,PDF,PSD,AL,Word,PPT
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-2 align-content-center justify-content-end mt-4">
                  <Link to="/page31_job_ID">
                    <div
                      className="btn text-white text-uppercase"
                      style={{
                        width: "160px",
                        backgroundColor: "rgba(223, 217, 217, 0.822)",
                        height: "40px",
                        color: "#bf9b30",
                      }}
                    >
                      cancel
                    </div>
                  </Link>
                  <Link>
                    <div
                      className="btn text-white text-uppercase"
                      style={{
                        width: "160px",
                        height: "40px",
                        color: "white",
                        marginLeft: "1rem",
                        backgroundColor: "#bf9b30",
                      }}
                    >
                      submit
                    </div>
                  </Link>

                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </main>
      </div>

    </>
  );
};
export default Page32;
