import React from 'react'

function Composer({ item }) {
  return (
    <div className="Composer">
      <div className='Composer-inner'>
        <div className='Composer-front'>
          <img src={item.portrait} alt={item.complete_name} />
        </div>
        <div className='Composer-back'>
          <h1>{item.name}</h1>
          <ul>
            <li><strong>Composers Name:</strong> {item.complete_name}</li>
            <li><strong>Epoch:</strong> {item.epoch}</li>
            <li><strong>Birth:</strong> {item.birth}</li>
            <li><strong>Death:</strong> {item.death}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Composer;