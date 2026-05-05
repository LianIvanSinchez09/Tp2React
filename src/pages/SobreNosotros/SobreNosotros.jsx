import React from "react";
import { useTranslation } from "react-i18next";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import "./SobreNosotros.css";

const SECTIONS = [
  {
    key: "1",
    delayClass: "sn-fade-d3",
    iconDelay: "sn-float",
    icon: "✦",
    accentColor: "#9b55e0",
    accentBg: "rgba(155, 85, 224, 0.08)",
    pillColor: "rgba(155, 85, 224, 0.15)",
    pillText: "#7040b0",
    pillLabel: "Nuestra historia",
    questionKey: "SobreNosotros.question",
    answerKey: "SobreNosotros.answer",
  },
  {
    key: "2",
    delayClass: "sn-fade-d4",
    iconDelay: "sn-float-d1",
    icon: "◈",
    accentColor: "#c471b5",
    accentBg: "rgba(196, 113, 181, 0.08)",
    pillColor: "rgba(196, 113, 181, 0.15)",
    pillText: "#a0408c",
    pillLabel: "Nuestra misión",
    questionKey: "SobreNosotros.question2",
    answerKey: "SobreNosotros.answer2",
  },
  {
    key: "3",
    delayClass: "sn-fade-d5",
    iconDelay: "sn-float-d2",
    icon: "◉",
    accentColor: "#7cacf8",
    accentBg: "rgba(124, 172, 248, 0.08)",
    pillColor: "rgba(124, 172, 248, 0.15)",
    pillText: "#2563b0",
    pillLabel: "Nuestros valores",
    questionKey: "SobreNosotros.question3",
    answerKey: "SobreNosotros.answer3",
  },
];

const SobreNosotros = () => {
  const { t } = useTranslation();

  return (
    <>
    <Header navigation={navigation} />
    <div className="flex flex-col min-h-screen">

      <main
        className="grow relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #f9d0e8 0%, #e8d5f5 35%, #cdd8f8 70%, #b8cef6 100%)",
        }}
      >
        <div
          className="sn-blob-1 absolute w-120 h-120 -top-25 -left-25 pointer-events-none"
          style={{ background: "rgba(255, 200, 230, 0.45)" }}
        />
        <div
          className="sn-blob-2 absolute w-95 h-95 -bottom-20ght-20 pointer-events-none"
          style={{ background: "rgba(180, 160, 240, 0.35)" }}
        />
        <div
          className="sn-blob-3 absolute w-6040px] top-[40%] right-[10%] pointer-events-none"
          style={{ background: "rgba(160, 200, 255, 0.28)" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-20">
          <div className="sn-fade-d0 flex justify-center mb-6">
            <span
              className="sn-pill inline-block text-[11px] font-medium uppercase tracking-widest px-5 py-1.5 rounded-full backdrop-blur-sm"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(160, 120, 220, 0.35)",
                color: "#6b3fa8",
              }}
            >
              Conocenos mejor
            </span>
          </div>
          <h1
            className="sn-fade-d1 text-center font-black leading-tight mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(38px, 6vw, 68px)",
              color: "#2d1a5c",
            }}
          >
            {t("SobreNosotros.title")}
          </h1>
          <p
            className="sn-fade-d2 text-center text-[17px] font-light leading-relaxed mb-14"
            style={{ color: "#5a4080" }}
          >
            {t("SobreNosotros.title2")}
          </p>

          <div className="sn-fade-d2 flex justify-center mb-14">
            <div className="sn-shimmer-bar h-0.75 w-24 rounded-full" />
          </div>
          <div className="flex flex-col gap-7">
            {SECTIONS.map((s) => (
              <div
                key={s.key}
                className={`sn-card ${s.delayClass} rounded-2xl p-7 backdrop-blur-md`}
                style={{
                  background: `rgba(255,255,255,0.62)`,
                  border: "1px solid rgba(255,255,255,0.85)",
                  boxShadow: "0 4px 24px rgba(120, 80, 200, 0.10)",
                }}
              >
                {/* Card top row */}
                <div className="flex items-center gap-3 mb-4">
                  {/* Accent icon */}
                  <span
                    className={`${s.iconDelay} text-2xl leading-none`}
                    style={{ color: s.accentColor }}
                  >
                    {s.icon}
                  </span>

                  {/* Pill label */}
                  <span
                    className="sn-pill text-[10px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: s.pillColor,
                      color: s.pillText,
                    }}
                  >
                    {s.pillLabel}
                  </span>

                  {/* Accent line */}
                  <div className="flex-1 h-px rounded-full" style={{ background: s.accentColor, opacity: 0.2 }} />
                </div>

                {/* Question heading */}
                <h2
                  className="font-bold text-xl mb-3"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#2d1a5c",
                  }}
                >
                  {t(s.questionKey)}
                </h2>

                {/* Answer body */}
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "#5a4a7a" }}
                >
                  {t(s.answerKey)}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom decoration */}
          <div className="sn-fade-d5 flex justify-center mt-16">
            <div className="sn-shimmer-bar h-0.75 w-16 rounded-full" />
          </div>
        </div>
      </main>

    </div>
    <Footer />
    </>
  );
};

export default SobreNosotros;
