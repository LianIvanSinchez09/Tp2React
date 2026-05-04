import React from 'react'

const FloatingCard = ({ id, pos, stock, price }) => {
  return (
    <div
    key={id}
    className={`
        ${card.floatClass} ${card.position}
        absolute rounded-2xl px-4 py-3
        backdrop-blur-md border border-white/80
    `}
    style={{
        background: "rgba(255,255,255,0.62)",
        boxShadow: "0 4px 20px rgba(120, 80, 200, 0.12)",
    }}
    >
    <p className="text-[10px] uppercase tracking-widest text-purple-400 mb-1">
        {stock}
    </p>
    <p className="text-lg font-semibold text-purple-900">{price}</p>
    <p className="text-[11px] text-purple-300 mt-0.5">{card.sub}</p>
    {card.tag && (
        <span
        className="inline-block text-[10px] px-2 py-0.5 rounded-full mt-1.5"
        style={{
            background: "rgba(200, 160, 255, 0.25)",
            color: "#7040b0",
        }}
        >
        {card.tag}
        </span>
    )}
    </div>
  )
}

export default FloatingCard
