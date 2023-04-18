import React from "react";
import AchievementCard from "../component/cards/AchievementCard";
import AchievementData from "../config/AchievementData.json";
import SectionHeading from "./SectionHeading";
const Achievement = () => {
  return (
    <>
      <div className="achievement-content">
        <SectionHeading subtitle={"counter"} title={"our Achievements"} />
        <div className="achievement-card-grp">
          {AchievementData?.map((item, id) => {
            return <AchievementCard item={item} key={id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Achievement;
