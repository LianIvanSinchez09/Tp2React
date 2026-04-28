import React from 'react'
import './ItemCard.css'

const ItemCard = ({ ...props }) => {
    return (
        <div class="card m-6 bg-white p-6">
            <div class="card-img">
                <img src={props.avatar} alt="" />
            </div>
            <div class="card__descr-wrapper">
                <p class="card__descr">{props.name}</p>
                <p class="text-body">{props.description}</p>
            </div>
            <div>
                <p>${props.price}</p>
            </div>
        </div>
    )
}

export default ItemCard
