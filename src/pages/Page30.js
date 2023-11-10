import React from "react";
import Search from "../components/Search";
import Sidebar1 from "../components/SideBar1";
import main_background from "../media/main_background.jpg";
import SecTitle1 from "../components/SecTitle1";
import JobOfferMin from "../components/JobOfferMin";

const Page30 = () => {
  return (
    <>
      <img src={main_background} className="main-overlay" />
      <div className="landing-section main position-relative" style={{marginBottom:"200px"}}>
        <main className="container d-flex flex-column gap-4 text-white position-relative pt-5 z-3">
          <SecTitle1 titleName="Jobs" />
          <Search />
          <div class="d-flex gap-5 mt-5">
            <div className="w-100" style={{ maxWidth: "360px" }}>
              <Sidebar1 />
              <div className="btn text-uppercase text-white w-100 mt-4" style={{backgroundColor:"#bf9b30"}}>create your cv</div>
            </div>
            <div className="job-container d-flex flex-column gap-3">
              <JobOfferMin />
              <JobOfferMin />
              <JobOfferMin />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Page30;
