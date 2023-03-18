import React from "react";
// import Pic1 from "./1.jpg"

const SingleComment=(props)=>{
    return (
        // <div className="">
        //     <div>
        //         <a href="/" className="avatar">
        //             <img className="image" src={props.picture} alt="Profile Picture1" />
        //         </a>
        //     </div>
        //         <div className="content">
        //             <a href="/" className="author">
        //                 {props.name}
        //             </a>
        //         <div className="metadata">
        //             <span className="date">{props.date}</span>
        //         </div>
        //         <div className="text">
        //             {props.text}
        //         </div>
        //         </div>
        //     </div>

        <div class="ui card">
  <div class="image">
    <img src={props.picture} alt="pic"/>
  </div>
  <div class="content">
    <a href="/" class="header">{props.name}</a>
    <div class="meta">
      <span class="date">{props.date}</span>
    </div>
    <div class="description">
      {props.description}
    </div>
  </div>
  <div class="extra content">
    <a href="/">
      <i class="user icon"></i>
      {props.students}
    </a>
  </div>
</div>
    )
}
export default SingleComment