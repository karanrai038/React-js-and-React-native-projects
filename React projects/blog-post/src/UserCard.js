import React from "react";

const UserCard = (props) => {
  console.log(props);
  return (
    <div className="ui card">
      <img src={props.children.props.picture} height={250} alt="hue hue " />

      <div className="content">
        <div className="header">{props.children.props.name}</div>
        <div className="desciption"> {props.children.props.description}</div>
        <div className="date">
          <strong>{props.children.props.date}</strong>
        </div>
      </div>
      <div class="ui star rating" data-rating={props.rating}></div>
      <div className="ui bottom button">
        <i className="add icon"></i>
        Learn More
      </div>
    </div>
  );
};
export default UserCard;
