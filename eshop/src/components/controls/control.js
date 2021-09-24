import React from "react";
import './control.css'
import Builder from "./Builder/Builder";
const Control = (props) => {
    const products = [
        { id: '1', titel: 'product1', type: 'product1' },
        { id: '2', titel: 'product2', type: 'product2' },
        { id: '3', titel: 'product3', type: 'product3' },
        { id: '4', titel: 'product4', type: 'product4' }
    ]
    return (
        <div className="controls">
            <div>
                <p>total price : {props.totalPrice}</p>
            </div>
            {products.map((item) => {
                return (<Builder key={item.id}
                    titel={item.titel}
                    add={() => props.productAdd(item.type)}
                    remove={() => props.productRemove(item.type)}
                />)
            })}
        </div>
    )
}

export default Control