import React from "react";
import {
    AbsoluteFill,
    interpolate,
    useCurrentFrame,
    Img,
    staticFile,
    spring,
} from "remotion";

interface ScreenSlideProps {
    imageSrc: string;
    title: string;
    description: string;
    tagText?: string;
    overlayPosition?: "left" | "right";
    animationType?: "slide-left" | "slide-right" | "slide-up" | "zoom-in";
    highlightAction?: "checkbox" | "calendar" | "pins" | "glow" | "pulse";
}

export const ScreenSlide: React.FC<ScreenSlideProps> = ({
    imageSrc,
    title,
    description,
    tagText,
    overlayPosition = "left",
    animationType = "slide-left",
    highlightAction,
}) => {
    const frame = useCurrentFrame();

    // Entry Animation
    const slideIn = spring({
        frame,
        fps: 30,
        config: { damping: 15 },
    });

    // Slow drift/zoom during the whole scene
    const scale = interpolate(frame, [0, 165], [1, 1.05], { extrapolateRight: "clamp" });

    // Calculate Entry Transforms
    let initialX = 0;
    let initialY = 0;
    let initialScale = 1;

    if (animationType === "slide-left") initialX = 100;
    if (animationType === "slide-right") initialX = -100;
    if (animationType === "slide-up") initialY = 100;
    if (animationType === "zoom-in") initialScale = 0.9;

    const currentX = interpolate(slideIn, [0, 1], [initialX, 0]);
    const currentY = interpolate(slideIn, [0, 1], [initialY, 0]);
    const currentBaseScale = interpolate(slideIn, [0, 1], [initialScale, 1]);

    // Text Overlay Animation
    const textOpacity = interpolate(frame, [15, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    const textY = interpolate(frame, [15, 30], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

    // Highlight Tag Animation
    const tagOpacity = interpolate(frame, [50, 65], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
    const tagScale = spring({ frame: frame - 50, fps: 30, config: { damping: 12 } });

    const highlights = {
        checkbox: { top: "68%", left: "38%", width: "18%", height: "3%", color: "#22c55e" }, // GreenScape checkbox
        calendar: { top: "42%", left: "45%", width: "10%", height: "4%", color: "#00d4ff" }, // HVAC Start Job
        pins: { top: "82%", left: "8%", width: "65%", height: "14%", color: "#ffd400" }, // Voltage Dispatch Card
        glow: { top: "10%", right: "7%", width: "18%", height: "4%", color: "#10b981" }, // Plumbing PAID badge
        pulse: { top: "22%", left: "36%", width: "28%", height: "11%", color: "#ff6b6b" }, // Sparkle Low Stock
    };

    const h = highlightAction ? highlights[highlightAction] : null;

    return (
        <AbsoluteFill
            style={{
                backgroundColor: "#fcfcfc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* Main Phone Container */}
            <div
                style={{
                    transform: `translate(${currentX}px, ${currentY}px) scale(${currentBaseScale * scale})`,
                    boxShadow: "0 50px 120px rgba(0,0,0,0.12)",
                    borderRadius: 32,
                    height: "88%",
                    display: "inline-flex",
                    background: "white",
                    zIndex: 1,
                    position: "relative",
                    overflow: "hidden",
                    border: "6px solid rgba(255,255,255,0.9)",
                }}
            >
                <Img
                    src={staticFile(imageSrc)}
                    style={{
                        height: "100%",
                        width: "auto",
                        display: "block",
                    }}
                />

                {/* --- HIGHLIGHT OVERLAY & TAG --- */}
                {h && frame > 45 && (
                    <>
                        {/* The Box */}
                        <div style={{
                            position: "absolute",
                            ...h,
                            background: `${h.color}15`,
                            border: `3px solid ${h.color}`,
                            borderRadius: 16,
                            opacity: interpolate(frame, [45, 60], [0, 1], { extrapolateRight: "clamp" }),
                            boxShadow: highlightAction === "pulse" ? `0 0 ${interpolate(Math.sin(frame / 5), [-1, 1], [10, 40])}px ${h.color}60` : "none",
                        }} />

                        {/* The Tag */}
                        {tagText && (
                            <div style={{
                                position: "absolute",
                                top: h.top,
                                ...( "left" in h ? { left: `calc(${h.left} + ${h.width} + 20px)` } : {} ),
                                ...( "right" in h ? { right: `calc(${h.right} + ${h.width} + 20px)` } : {} ),
                                transform: "translateY(-50%) scale(" + tagScale + ")",
                                opacity: tagOpacity,
                                background: "#111",
                                color: "white",
                                padding: "12px 24px",
                                borderRadius: "100px",
                                fontSize: 20,
                                fontWeight: 800,
                                whiteSpace: "nowrap",
                                boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
                                zIndex: 2,
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                border: "1px solid rgba(255,255,255,0.1)",
                            }}>
                                <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: h.color }} />
                                {tagText}
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Glassmorphic Text Overlay Box */}
            <div
                style={{
                    position: "absolute",
                    [overlayPosition === "left" ? "left" : "right"]: 100,
                    top: "50%",
                    transform: `translateY(calc(-50% + ${textY}px))`,
                    opacity: textOpacity,
                    width: 520,
                    padding: 48,
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(40px)",
                    WebkitBackdropFilter: "blur(40px)",
                    borderRadius: 32,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
                    border: "1px solid rgba(255,255,255,0.7)",
                    zIndex: 10,
                }}
            >
                <h2
                    style={{
                        fontSize: 64,
                        fontWeight: 950,
                        marginBottom: 20,
                        lineHeight: 1,
                        color: "#000",
                        letterSpacing: "-0.04em",
                        fontFamily: "Space Grotesk, sans-serif",
                    }}
                >
                    {title}
                </h2>
                <div style={{ width: 60, height: 6, backgroundColor: "#3b82f6", marginBottom: 32, borderRadius: 3 }} />
                <p
                    style={{
                        fontSize: 28,
                        color: "#2d3748",
                        lineHeight: 1.4,
                        fontWeight: 500,
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}
                >
                    {description}
                </p>
            </div>
        </AbsoluteFill>
    );
};
