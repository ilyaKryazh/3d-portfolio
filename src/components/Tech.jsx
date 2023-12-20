import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='mt-20 flex flex-row gap-10 justify-center flex-wrap'>
      {technologies.map((tech) =>
        <div className='w-20 h-20' key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      )}
    </div>
  )
}

export default Tech
