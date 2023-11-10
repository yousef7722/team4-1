import React from "react";

const Search = () => {
  return (
    <>
      <div class="">
        <div className="d-flex justify-content-between text-white align-items-center ">
          <div className="text-left" style={{maxWidth:"400px"}}>
            <h2>Looking for a job ?</h2>
            <h6>
              Here you can find your best match between 1000s of updated and
              avalible positions{" "}
            </h6>
          </div>
          <div className="text-white">
            <div
              className="d-flex align-items-center  text-white rounded d-flex ps-4"
              style={{
                backgroundColor: "rgba(90, 90, 90, 0.541)",
              }}
            >
              <div>
                <i
                  className="fas fa-search i2 me-4"
                  style={{
                    color: "rgb(206, 164, 26)",
                    cursor: "pointer",
                    backgroundColor: "rgba(128, 128, 128, 0)",
                  }}
                ></i>
              </div>
              <div >
                <input
                  type="text"
                  placeholder="Search for a job"
                  style={{
                    backgroundColor: "rgba(128, 128, 128, 0)",
                    border: "0px",
                    width: "200px",
                  }}
                />
              </div>
              <div
                className="btn rounded-0 px-4 py-2 fw-medium  rounded-end  text-uppercase text-white"
                style={{
                  backgroundColor: "rgb(206, 164, 26)",
                }}
              >
                Search
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
