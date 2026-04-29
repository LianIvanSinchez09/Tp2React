import React from 'react'
import './ItemCard.css'

const ItemCard = ({ ...props }) => {
    return (
        <div className="card m-6 bg-white p-6">
            <div>
                <img className='card__img' src={props.avatar} alt="" />
            </div>
            <div className="card__descr-wrapper">
                <p className="card__descr">{props.name}</p>
                <p className="text-body">{props.description}</p>
            </div>
            <div>
                <p>${props.price}</p>
            </div>
        </div>
    )
}

export default ItemCard
