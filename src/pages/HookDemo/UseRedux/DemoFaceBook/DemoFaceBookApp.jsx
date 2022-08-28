import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { addComment } from '../../../../redux/Reducer/FaceBookReducer';

export default function DemoFaceBookApp(props) {


    const { arrComment} = useSelector(state => state.FaceBookReducer);
    const dispatch = useDispatch();
    const userComment = useRef({name:'', content: ''});
    const renderComment = () => {
        return arrComment.map((comment,index) => {
            return  <div className='d-flex' key={index}>
            <div className='avatar' style={{width: 50}}>
                <img src={`https://i.pravatar.cc?u=${comment.name}`} alt="avatar" className='w-100' />
            </div>
            <div className='content'>
                <h5 className='text-danger'>{comment.name}</h5>
                <p>{comment.content}</p>
            </div>
        </div>
        })
    }

    const handleChange = (e) => {
        const {id ,value } = e.target;
        userComment.current[id] = value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // gui du lieu len redux
        let newComment = {...userComment.current}
        const action = addComment(newComment);
        dispatch(action);
    }
    
  return (
    <form className='container' onSubmit={handleSubmit}>
        <h3>Demo FaceBook App</h3>
        <div className='card'>
            <div className='card-header'>
                {renderComment()}
            </div>
            <div className='card-body'>
                <div className='form-group'>
                    <p>name</p>
                    <input className='form-control' id='name' onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <p>content</p>
                    <input className='form-control' id='content' onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <button className='btn btn-primary' type='submit'>Send</button>
                </div>
            </div>
        </div>
    </form>
  )
}
