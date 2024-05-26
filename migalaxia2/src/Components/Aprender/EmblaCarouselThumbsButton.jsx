import React from 'react'
import { useNavigate } from "react-router";

export const Thumb = (props) => {
  const { selected, name, url,  onClick } = props
  const navigate = useNavigate();

  function innerOnClick() {
    if(selected) {
      navigate(url);
    }else{
      onClick()
    }
  }

  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : ''
      )}
    >
      <button
        onClick={innerOnClick}
        type="button"
        className="embla-thumbs__slide__number"
      >
        {name}
      </button>
    </div>
  )
}
