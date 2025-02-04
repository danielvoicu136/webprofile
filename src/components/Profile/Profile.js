import React from "react";  
import './Profile.css';




import imgAvatar from '../../assets/images/myavatar.jpg'
import MyTools from "../MyTools/MyTools";

const Profile = () => { 
    return ( 
        <div className="profile_container box_style"> 
    
 
        <div class="avatar_container">
            <div class="avatar_border">
            <img src={imgAvatar} alt="Avatar"></img>
            </div>
        </div>

            <div className="profile_details"> 
                <h1 className="name">Daniel VOICU</h1>
                <h2 className="title">
                    Junior Full Stack Developer<br></br>
                    Senior Automotive CAD Engineer<br></br>
                    Senior Gameplay Scripter<br></br>
                </h2>
                <div className="contact_info">
                    <p>danielvoicu136@gmail.com<br></br>
                    <a href="https://wa.me/40732838136">0732838136</a>   •   <a href="https://github.com/danielvoicu136">GitHub</a>   •   <a href="https://www.linkedin.com/in/danielvoicu136">LinkedIn</a><br></br>
                    </p>
                </div>
            </div>

          <MyTools></MyTools>
        </div>
    )
}

export default Profile 