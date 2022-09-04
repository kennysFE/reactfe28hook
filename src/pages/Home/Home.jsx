/* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();
    const [arrProduct, setArrProduct] = useState([]);
    const getApiProduct = async () => {
        try {

            let result = await axios({
                url :'https://shop.cyberlearn.vn/api/Product',
                method: 'GET'
            });
            setArrProduct(result.data.content);
            // console.log('Ket qua', result.data.content);
        }catch(err) {
            console.log(err);
        }
    }

    const renderProduct = () => {
        return arrProduct.map((item,index) => {
           return <div className='col-3 mt-2' key={index}>
            <div className='card'>
            <img src={item.image} alt={item.name} />
                <div className='card-body bg-dark text-light'>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    {/* <button className='btn btn-success'>Detail</button> */}
                    <NavLink to={`/detail/${item.id}`} className = 'btn btn-success'>View Detail</NavLink>
                    <button className='mx-2 btn btn-success' onClick={() => {
                        navigate(`/detail/${item.id}`)
                    }}>Detail</button>
                </div>
            </div>
        </div>
        })
    }

    // const renderProduct = () => {
    //     return arrProduct.map((item,index)=>{
    //         return <div className='col-4 mt-2' key={index}>
    //             <div className='card'>
    //                 <img src={item.image} alt={item.name} />
    //                 <div className='card-body bg-dark text-white'>
    //                     <p>{item.name}</p>
    //                     <p>{item.price}</p>
    //                     <NavLink className='btn btn-secondary' to={`/detail/${item.id}`}>View detail</NavLink>

    //                     <button className='mx-2 btn btn-success' onClick={()=>{
    //                         navigate(`/detail/${item.id}`);
    //                     }}>Detail</button>
    //                 </div>
    //             </div>
    //         </div>
    //     })
    // }

    useEffect(()=> {
        // Sau khi giao dien load xong thi goi api thuc thi
        getApiProduct();
    }, []);
  return (
    <div className='container'>
    <h3>Shoes shop </h3>
    <div className='row'>
        {renderProduct()}
    </div>
</div>
  )
}
