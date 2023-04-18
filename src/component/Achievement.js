import React from "react";
import AchievementCard from "../component/cards/AchievementCard";
import AchievementData from "../config/AchievementData.json";
const Achievement = () => {
  return (
    <>
      <div className="achievement-content">
        <div className="title text-center">
          <p className="title-p b">Counter</p>
          <h2 className="h2">Our Achievement</h2>
          <p className="p">
            A Private Limited is the most popular type of partnership Malta. The
            limited liability is, in fact, the only type of company allowed by
            Companies.
          </p>
        </div>
        <div className="achievement-card-grp">
          {AchievementData?.map((item,id)=>{
            return <AchievementCard item={item}  key={id}/>
          }  )}
         
          {/* <AchievementCard />
          <AchievementCard />
          <AchievementCard /> */}
        </div>
      </div>
    </>
  );
};

export default Achievement;
