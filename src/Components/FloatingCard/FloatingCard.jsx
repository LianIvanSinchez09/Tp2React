import React from 'react'
import '../Hero/Hero.css'

const FloatingCard = ({ product, position, floatClass }) => {
  return (
    <div
    key={product.id}
    className={`
        ${floatClass} ${position}
        absolute rounded-2xl px-4 py-3
        backdrop-blur-md border border-white/80
        bg-white
    `}
    >
    <p className="text-[15px] uppercase tracking-widest text-purple-400 mb-1">
        ${product.price}
        
    </p>
    <p className="text-lg font-semibold text-purple-900">{product.name}</p>
    <span
    className="inline-block text-[10px] px-2 py-0.5 rounded-full mt-1.5 bg-blue-100"
    >
    <p>
    Stock: {product.stock}
    </p>
    </span>
    </div>
  )
}

export default FloatingCard
