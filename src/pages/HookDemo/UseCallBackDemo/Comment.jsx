import React,{memo} from 'react'

function Comment(props) {
  return (
    <div>
        <p>Ban da tha {props.renderLike()}</p>
        <br />
        <textarea className='w-50 form-control'></textarea> <br />
        <button>Gui</button>
    </div>
  )
}

export default memo(Comment);