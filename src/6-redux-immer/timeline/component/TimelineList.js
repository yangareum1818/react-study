import React from "react";

function TimelineList({ timelines }) {
  return (
    <ul>
      {timelines &&
        timelines.map((timeline) => <li key={timeline.id}>{timeline.desc}</li>)}
    </ul>
  );
}
export default TimelineList;
