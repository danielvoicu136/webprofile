import React from "react";
import "./Profile.css";
import profileData from "../../utils/profileData";
import MyTools from "../MyTools/MyTools";

const Profile = () => {
  return (
    <div className="profile_container box_style">
      <div className="avatar_container">
        <div className="avatar_border">
          <img src={profileData.avatar} alt="Avatar" />
        </div>
      </div>

      <div className="profile_details">
        <h1 className="name">{profileData.name}</h1>
        <h2 className="title">
          {profileData.roles.map((role, index) => (
            <span key={index}>
              {role}
              <br />
            </span>
          ))}
        </h2>
        <div className="contact_info">
          <p>
            {profileData.mail}
            <br />
            <a href={profileData.phone[1]}>{profileData.phone[0]}</a> •
            <a href={profileData.github[1]}> {profileData.github[0]}</a> •
            <a href={profileData.linkedin[1]}> {profileData.linkedin[0]}</a>
            <br />
          </p>
        </div>
      </div>

      <MyTools />
    </div>
  );
};

export default Profile;
