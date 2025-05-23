import React from "react";

interface CardContainerProps {
  children: React.ReactNode;
}

export default function CardContainer({ children }: CardContainerProps) {
  return (
    <div className="relative mx-auto w-full">
      {/* Shadow layers for stacked effect */}
      <div
        className="absolute bottom-[-24px] z-0 h-32 w-full overflow-hidden"
        aria-hidden="true"
      >
        {/* Shadow layers */}
        {[
          { bottom: 0, width: "88%", left: "calc(50% - 88% / 2)" },
          { bottom: 8, width: "92%", left: "calc(50% - 92% / 2)" },
          { bottom: 16, width: "96%", left: "calc(50% - 96% / 2)" },
        ].map((layer, index) => (
          <div
            key={index}
            style={{
              WebkitBackdropFilter: "blur(8px)",
              backdropFilter: "blur(8px)",
              backgroundColor: "rgba(171, 171, 171, .24)",
              borderRadius: "32px",
              bottom: layer.bottom,
              flex: "none",
              height: "240px",
              left: layer.left,
              overflow: "hidden",
              position: "absolute",
              width: layer.width,
              willChange: "transform",
              zIndex: 0,
            }}
          />
        ))}
      </div>

      {/* Main card */}
      <div
        className="relative flex w-full flex-col overflow-hidden rounded-3xl"
        style={{
          background:
            "linear-gradient(180deg, #0f1112 51%, rgba(172,179,182,1) 100%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
