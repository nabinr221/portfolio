import React from "react";
import AchievementCard from "../component/cards/AchievementCard";

const Achievement = () => {
  return (
    <>
      <div className="achievement-content">
        <div className="achievement-text">
          <p className="title-p">Counter</p>
          <h2>Our Achievement</h2>
          <p>
            A Private Limited is the most popular type of partnership Malta. The
            limited liability is, in fact, the only type of company allowed by
            Companies.
          </p>
        </div>
        <div className="achievement-card-grp">
          <AchievementCard />
          <AchievementCard />
          <AchievementCard />
          <AchievementCard />
        </div>
      </div>
    </>
  );
};

export default Achievement;
