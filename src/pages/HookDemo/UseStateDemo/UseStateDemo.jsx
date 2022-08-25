import React,{useState} from 'react'

export default function UseStateDemo() {

  const [Number,setNumber] = useState(1);
  const [Like,setLike] = useState(1);


    console.log(Like);
  const handleClick = () => {
    // setNumber lam 2 nhiem vu la thay doi gia tri number = gia tri moi, va goi lai function component chay lai
    setNumber(Number + 1);
  }

  return (
    <div className='container'>
        <h3>Number :{Number}</h3>
        <button className='btn btn-primary' onClick={()=> {
            handleClick();
        }}>+</button>
        <div className='card w-25 mt-2'>
            <img src="https://i.pravatar.cc" alt="avatar" />
            <div className='card-body'>
                <h3>Name : Hoang</h3>
                <p> Age 18 </p>
                <button className='btn btn-danger' onClick={() => {
                    setLike(Like + 1);
                }}>
                 {Like}   <i className='fa fa-heart'></i>
                </button>
            </div>
        </div>
    </div>
  )
}
