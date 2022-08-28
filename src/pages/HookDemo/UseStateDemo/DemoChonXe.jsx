import React, { useState } from 'react'

export default function DemoChonXe() {
    const [color, setcolor] = useState("./img/products/red-car.jpg");
    const handleClick = (color) => {
        setcolor(`./img/products/${color}-car.jpg`)
    }
  return (
    <div >
        <h3>Demo Chon Xe</h3>
        <div className='row'>
            <div className='col-6'>
                <img src={color} alt="car" />
            </div>
            <div className='col-6'>
                <button className='btn mx-2' style={{background:'red',color:'#fff'}} onClick={() => {
                    handleClick('red');
                }}>Red</button>
                <button className='btn mx-2' style={{background:'silver',color:'#fff'}} onClick={() => {
                    handleClick('silver');
                }}>Silver</button>
                <button className='btn mx-2' style={{background:'black',color:'#fff'}} onClick={() => {
                    handleClick('black');
                }}>Black</button>
                <button className='btn mx-2' style={{background:'#EEE',color:'#fff'}} onClick={() => {
                    handleClick('steel');
                }}>Steel</button>
            </div>
        </div>
    </div>
  )
}
