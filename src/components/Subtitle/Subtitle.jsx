import React from 'react';


import './Subtitle.scss';


function Subtitle({name}) {

  return (
      <div className="subtitle">
        <button className="subtitle-btn">
         {name}
        </button>
    </div>
  )
}

export default Subtitle;