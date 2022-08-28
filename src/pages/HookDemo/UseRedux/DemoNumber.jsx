/* eslint-disable no-unused-vars */
import React from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { changeNumber } from '../../../redux/Reducer/NumberReducer';

export default function DemoNumber (props) {

    const number = useSelector(state => state.number);
    const dispatch = useDispatch();
  return (
    <div className='container'>
        <h3>Number: {number}</h3>
        <button className='btn btn-primary' onClick={() => {
            // const action = {
            //     type: 'NumberReducer/changeNumber',
            //     payload: number + 1
            // }
            // dispatch(action);
            // Cach 2 : action creator
            const action = changeNumber(number + 1)
            dispatch(action);
        }}>+</button>
    </div>
  )
}




