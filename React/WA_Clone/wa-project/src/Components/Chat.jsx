import React from 'react'
// useParams
import { useParams } from  'react-router-dom'

function Chat() {
  const params = useParams();
  return (
    <div>Chat : {params.uniqueId}</div>
  )
}

export default Chat