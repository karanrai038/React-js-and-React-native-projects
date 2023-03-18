import React from "react";
import SingleComment from "./singleComment";
import UserCard from "./UserCard";
import Pic1 from './img/5.jpg'
import Pic2 from './img/5.jpg'
import Pic3 from './img/5.jpg'

const Comp=()=>{
    return (
        
        <div className="ui cards justify-content-center">
          <UserCard>
            <SingleComment
              name="KARAN"
              picture={Pic1}
              text="Nodejs "
              date="Today at 06:00 PM"
              description="Instructed more than 10k of students in the last 10 years"
              rating="3"
            />
          </UserCard>

          <UserCard>
            <SingleComment
              name="KUNAL"
              picture={Pic2}
              text="ReactJs "
              date="Today at 08:00 PM"
              description="Instructed more than 5k of students in the last 10 years"
            />
          </UserCard>

          <UserCard>
            <SingleComment
              name="AKASH"
              picture={Pic3}
              text="VueJS "
              date="Today at 10:00 PM"
              description="Instructed more than 1k of students in the last 10 years and currently working in google as a SDE II"
              rating="3"
            />
          </UserCard>
        </div>
    )
}
export default Comp;