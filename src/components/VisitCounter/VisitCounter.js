import { useEffect, useState } from "react";
import "./VisitCounter.css";

const VisitCounter = () => {
    const [visits, setVisits] = useState(0);

    useEffect(() => {
        fetch("https://daniel.daeva.ro/webprofile/backend/backend.php?action=getCounter")
            .then(response => response.json())
            .then(data => setVisits(data.visits))
            .catch(error => console.error("Eroare la fetch:", error));

        fetch("https://daniel.daeva.ro/webprofile/backend/backend.php?action=addCounter", {
            method: "POST"
        }).catch(error => console.error("Eroare la incrementare:", error));
    }, []);

    return (
        <div className="visit-counter">
            <h2>Total visits:</h2>
            <p>{visits}</p>
        </div>
    );
};

export default VisitCounter;
