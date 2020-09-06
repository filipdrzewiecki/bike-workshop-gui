import '../../Css/index.css';
import React from 'react';


const ChallengeBox = (props) => {
    return (
        <div className="tools">
            <h2><div className="challengeBar"><div className={props.skillLevel}></div></div> Umiejętności</h2>
            <h2><div className="challengeBar"><div className={props.toolLevel}></div></div> Narzędzia:</h2>
            <ul>{props.list.map((paragraph) => <li>{paragraph}</li>)}</ul>
        </div>
    );
}

export default ChallengeBox;