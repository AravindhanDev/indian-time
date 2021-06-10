import React, { useState } from "react";

function App() {

    const currentTime = new Date().toLocaleTimeString().slice(0, 7);

    const [time, setTime] = useState(currentTime);

    function showTime() {
        setTime(new Date().toLocaleTimeString().slice(0, 7));
    }

    setInterval(showTime, 1000);

    return ( <
        div className = "container" >
        <
        h1 > { time } < /h1> <
        button onClick = { showTime } > Get Time < /button> <
        /div>
    );
}

export default App;