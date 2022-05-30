import React from "react"
import "../App.css";

export default function Task({taskName, time}){
    return <div className="task">
        <h1>TaskName :  {taskName}</h1>
        <h1>Time to Complete :  {time}</h1>

    </div>
}