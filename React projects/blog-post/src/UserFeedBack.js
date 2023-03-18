import React from "react";

const UserFeedBack = (props) => {
  return (
    <>
      <div className="col-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
            <p className="card-text">props.text</p>
            <div class="card-footer">
              <small class="text-muted">{props.footerData}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserFeedBack;
