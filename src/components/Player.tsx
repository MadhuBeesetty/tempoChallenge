import React, { useEffect, useState } from 'react';
import ReactPlayer from "react-player"

function Player() {

  const renderNotes = (data: any) => {
    return data.map((e: any) => { return (<li key={e.note}>{e.note}</li>) })
  }

  let tempoData = {
    name: '',
    videoUrl: '',
    notes: []
  }

  const [classroomValue, setClassroomValue] = useState(tempoData);
  useEffect(() => {
    fetch("http://take-home-assignment.tempo.fit/video.json")
      .then(res => res.json())
      .then(result => setClassroomValue({ name: result.name, videoUrl: result.videoUrl, notes: result.notes }))
  })

  return (
    <div className="mx-auto" style={{ "width": "800px" }}>
      <p>{classroomValue.name}</p>
      <ReactPlayer url={classroomValue.videoUrl} controls width='100%' height='100%' />
      <ul>
        {renderNotes(classroomValue.notes)}
      </ul>
    </div>
  )
}

export default Player;
