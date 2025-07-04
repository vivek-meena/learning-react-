import React from 'react'
import { useParams } from 'react-router-dom'

export const Paramcomp = () => {
  const {id}=useParams();
  return (
    <div>
        Params:{id}
    </div>
  )
}
