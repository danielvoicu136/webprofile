import React from "react";
import freetimeData from "../../utils/freetimeData";
import "./FreeTime.css";

const FreeTime = () => {
    return (
        <div className="free-time-container box_style">
            <div className="free-time-header">
                <p>What do I Enjoy ?</p>
            </div>
            <div className="image-grid">
                {freetimeData.map((item, index) => (
                    <div key={index} className="image-item">
                        <div className="image-wrapper">
                            <img src={item.url} alt={item.alt} />
                            <div className="image-overlay">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FreeTime;
