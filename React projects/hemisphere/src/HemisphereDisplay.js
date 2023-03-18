import React from "react";
import North from "./n.png";
import South from "./s.jpg";
const HemisphereDisplay = ({ latitude }) => {
  const hemi = latitude > 0 ? "Northern hemishphere" : "Southern Hemisphere";
  const pic = latitude > 0 ? North : South;
  return (
    <div>
      <div>
        <img src={pic} alt="world map" />
      </div>
      {hemi}
    </div>
  );
};
export default HemisphereDisplay;
