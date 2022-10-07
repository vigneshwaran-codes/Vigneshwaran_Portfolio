import React from 'react'
import TypeWriter from 'typewriter-effect'

export default function Welcome () {
  return (
    <div className='welcome_txt'>
      <TypeWriter
        options={{
          strings: ['Hi there, ', 'வணக்கம், ', 'Namaste .'],
          autoStart: true,
          loop: true,
          delay: 50
        }}
      />
    </div>
  )
}

export function Service () {
  return (
    <div>
      <TypeWriter
        options={{
          strings: ['Seamless', 'Beautiful', 'Creative Websistes.'],
          autoStart: true,
          loop: true,
          delay: 50
        }}
      />
    </div>
  )
}
