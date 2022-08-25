/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'
let timeout ={};

export default function UseEffectDemo() {
    const [arrProduct, setArrayProduct] = useState([]);
    const [count, setCount] = useState(60);

    const getApi = () => {
        let promise = axios({
            url: "https://shop.cyberlearn.vn/api/Product",
            method: "GET"
        });
        promise.then(result=>{
            console.log('Ket qua',result.data.content);
            setArrayProduct(result.data.content);
        });
        promise.catch(err => {
            console.log({err});
        })
    }

    const renderProduct = () => {
        return arrProduct.map((item,index) => {
            return <div className='col-3' key={index}>
                 <img style={{width: '100%'}} src={item.image} alt={item.name} />
                <div className="card-body bg-dark text-white">
                  <p className="font-weight-bold">{item.name}</p>
                  <p>{item.price}</p>
                  <button className="btn btn-success">add to cart</button>
                </div>
            </div>
        })
    }

    useEffect(() => {
        // Callback function nay se chay 1 lan dau tien va cac lan sau thi phu thuoc vao dependency thu 2 cua ham useEffect(giong DidUpdate)
        // Khi nao count thay doi thi moi chay ham callback nay tiep con state khac thay doi thi ham nay khong chay 
    },[count])

    useEffect(() => {
        // Chay mot lan sau khi render(Giong het componentDidMount ben class component)
        getApi()

        timeout = setInterval(() => {
            setCount((count) => {
                return count - 1;
            })
        }, 1000)

        return () => {
            // Function return trong useEffect se duoc kich hoat truoc khi component nay mat khoi giao dien giong componentWillMount ben react class
            clearInterval(timeout);
        }
    },[])
  return (
    <div className='container'>
        <h4>ComponentWillunmount</h4>
        <p>Count: {count}</p>

        <h3>UseEffectDemo</h3>
        <h4>ComponentDidMount (Su dung cho viec load 1 lan sau khi render)</h4>
        <hr />
        <h3>Shoes shop</h3>
        <div className='row'>
            {renderProduct()};
        </div>
    </div>
  )
}
