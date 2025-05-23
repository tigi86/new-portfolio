import React from "react";
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a
              key={index}
              href={work.w_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={work.w_img} alt={work.w_name} />
            </a>
          );
        })}
      </div>

      <a
        className="ancher"
        href="https://tigi86.github.io/admin_dashboard/"
        target="_blank"
      >
        <div className="mywork-showmore">
          <p>Show More</p> <img src={arrow_icon} alt="" />
        </div>
      </a>
    </div>
  );
};

export default Mywork;
