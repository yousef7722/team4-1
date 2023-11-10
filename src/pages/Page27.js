import React from "react";
import EIT from "../media/EIT.jpeg";
import main_background from "../media/secondary_background.jpg";

const Page27 = () => {
  return (
    <>
      <div className="container  text-white">
        <div className="row" style={{ width: "728px" }}>
          <div className=" d-flex col-7 justify-content-start">
            <h2 className="col-8 text-uppercase justify-content-start text-capitalize">
              add exam details
            </h2>
          </div>
          <div className=" d-flex col-5 justify-content-end">
            <div
              className="btn btn-warning col-5 text-uppercase justify-content-end "
              style={{
                height: "37px",
                backgroundColor: "#bf9b30",
                color: "white",
              }}
            >
              Publish
            </div>
          </div>
          <div className=" col-8 text-white ">
            <div className="row mt-5">
              <div className="col-6">
                <h4
                  className="text-capitalize"
                  style={{ color: "white", cursor: "pointer" }}
                >
                  exam information
                </h4>
              </div>
            </div>
          </div>

          <div
            className="row col-5 "
            style={{ backgroundColor: "rgb(31, 31, 31,0.7)" }}
          >
            <div className="col-2 p-4">
              <h5>Link</h5>
            </div>
            <div className="col-2  p-4">
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="col-5 text-white float-end mt-3">
          <div
            className="btn  text-uppercase text-white"
            style={{
              backgroundColor: "rgba(223, 217, 217, 0.822)",
              width: "130px",
              color: "white",
            }}
          >
            cancel
          </div>
          <div
            className="btn text-uppercase"
            style={{
              width: "130px",
              color: "white",
              marginLeft: "1rem",
              backgroundColor: "#bf9b30",
            }}
          >
            save
          </div>
        </div>
      </div>
    </>
  );
};
export default Page27;
