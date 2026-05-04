import "./hero.css";

const FLOATING_CARDS = [
  {
    id: 1,
    floatClass: "float-card-1",
    position: "top-[18%] left-[5%]",
    label: "Mejor oferta",
    value: "$65",
    sub: "Sleek Granite Cheese",
    tag: "-20% hoy",
  },
  {
    id: 2,
    floatClass: "float-card-2",
    position: "bottom-[22%] left-[8%]",
    label: "Nuevo ingreso",
    value: "$83",
    sub: "Handcrafted Metal Car",
    tag: "Tendencia",
  },
  {
    id: 3,
    floatClass: "float-card-3",
    position: "top-[22%] right-[5%]",
    label: "Más vendido",
    value: "$70",
    sub: "Bespoke Rubber Chips",
    tag: "★ 4.9",
  },
  {
    id: 4,
    floatClass: "float-card-4",
    position: "bottom-[18%] right-[7%]",
    label: "Envío gratis",
    value: "+500",
    sub: "productos disponibles",
    tag: null,
  },
];

const STATS = [
  { num: "500+", label: "Productos" },
  { num: "12k",  label: "Clientes felices" },
  { num: "4.9★", label: "Valoración" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f9d0e8 0%, #e8d5f5 35%, #cdd8f8 70%, #b8cef6 100%)",
      }}
    >
      {/* ── Blobs ─────────────────────────────────────────── */}
      <div
        className="blob-1 absolute w-130 h-130 -top-30 -left-25"
        style={{ background: "rgba(255, 200, 230, 0.45)" }}
      />
      <div
        className="blob-2 absolute w-100 h-100 -bottom-20 -right-20"
        style={{ background: "rgba(180, 160, 240, 0.35)" }}
      />
      <div
        className="blob-3 absolute w-65 h-65 top-[30%] right-[15%]"
        style={{ background: "rgba(160, 200, 255, 0.3)" }}
      />

      {/* ── Floating product cards ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-5 hidden md:block">
        {/* {FLOATING_CARDS.map((card) => (

        ))} */}
      </div>

      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1
          className="fade-up fade-up-d2 font-serif font-black leading-[1.08] mb-5"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(42px, 6.5vw, 78px)",
            color: "#2d1a5c",
          }}
        >
          Todo lo que querés,
          <br />
          <span className="gradient-text">en un solo lugar</span>
        </h1>

        {/* Subtitle */}
        <p
          className="fade-up fade-up-d3 text-[17px] font-light leading-relaxed max-w-xl mx-auto mb-10"
          style={{ color: "#5a4080" }}
        >
          Descubrí miles de productos únicos con los mejores precios y envío
          rápido directo a tu puerta.
        </p>
        <div className="fade-up fade-up-d4 flex flex-wrap gap-4 justify-center">
          <button
            className="btn-primary px-10 py-4 rounded-full text-white font-medium text-[15px]"
            style={{
              background: "linear-gradient(135deg, #9055e5, #6a3dc7)",
              boxShadow: "0 8px 28px rgba(130, 70, 220, 0.38)",
              border: "none",
            }}
          >
            Explorar productos
          </button>
        </div>
      </div>
    </section>
  );
}
