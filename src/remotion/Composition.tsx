import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, staticFile, Img, spring } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { ScreenSlide } from "./ScreenSlide";

// Transition duration (10 frames = ~0.33s — very snappy, zero overlap leak)
const TRANSITION_FRAMES = 10;
const SCENE_DURATION = 150; // Restored to your "perfect" 5s pace

export const Main: React.FC = () => {
    return (
        <AbsoluteFill style={{ backgroundColor: "white" }}>
            <TransitionSeries>

                {/* INTRO — 2s */}
                <TransitionSeries.Sequence durationInFrames={60}>
                    <IntroScene />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })} />

                {/* 1. GREENSCAPE */}
                <TransitionSeries.Sequence durationInFrames={SCENE_DURATION}>
                    <ScreenSlide
                        imageSrc="assets/screens/greenscape.png"
                        title="GreenScape"
                        description="Professional field checklists ensuring every job is done to standard."
                        tagText="Live Checklists"
                        overlayPosition="left"
                        animationType="slide-left"
                        highlightAction="checkbox"
                    />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })} />

                {/* 2. VOLTAGE (GPS) */}
                <TransitionSeries.Sequence durationInFrames={SCENE_DURATION}>
                    <ScreenSlide
                        imageSrc="assets/screens/voltage.png"
                        title="Voltage Electric"
                        description="Real-time GPS routing to keep your team on the fastest path."
                        tagText="Live Tracking"
                        overlayPosition="right"
                        animationType="slide-right"
                        highlightAction="pins"
                    />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })} />

                {/* 3. ELITE HVAC */}
                <TransitionSeries.Sequence durationInFrames={SCENE_DURATION}>
                    <ScreenSlide
                        imageSrc="assets/screens/hvac.png"
                        title="Elite HVAC"
                        description="Dark mode scheduling optimized for high-performance dispatch."
                        tagText="Optimized Dispatch"
                        overlayPosition="left"
                        animationType="zoom-in"
                        highlightAction="calendar"
                    />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })} />

                {/* 4. PRECISION PLUMBING */}
                <TransitionSeries.Sequence durationInFrames={SCENE_DURATION}>
                    <ScreenSlide
                        imageSrc="assets/screens/plumbing.png"
                        title="Precision Plumbing"
                        description="Dynamic instant invoicing with automated payment links."
                        tagText="Instant Invoicing"
                        overlayPosition="right"
                        animationType="slide-up"
                        highlightAction="glow"
                    />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })} />

                {/* 5. SPARKLE CLEAN (INVENTORY) */}
                <TransitionSeries.Sequence durationInFrames={SCENE_DURATION}>
                    <ScreenSlide
                        imageSrc="assets/screens/sparkle.png"
                        title="Sparkle Clean Co."
                        description="Inventory dashboards with real-time stock pulse alerts."
                        tagText="Asset Pulse"
                        overlayPosition="left"
                        animationType="slide-right"
                        highlightAction="pulse"
                    />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })} />

                {/* 6. KITCHEN REMODEL 1 */}
                <TransitionSeries.Sequence durationInFrames={SCENE_DURATION}>
                    <ScreenSlide
                        imageSrc="assets/screens/kitchen1.png"
                        title="Luxury Remodels"
                        description="End-to-end phase tracking for high-end residential projects."
                        tagText="Project Mapping"
                        overlayPosition="right"
                        animationType="slide-left"
                    />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })} />

                {/* 7. KITCHEN REMODEL 2 */}
                <TransitionSeries.Sequence durationInFrames={SCENE_DURATION}>
                    <ScreenSlide
                        imageSrc="assets/screens/kitchen2.png"
                        title="Supply Chain"
                        description="Real-time material procurement and vendor coordination."
                        tagText="Material Pulse"
                        overlayPosition="left"
                        animationType="zoom-in"
                    />
                </TransitionSeries.Sequence>

                <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })} />

                {/* FINAL BOUQUET — Ends the video at 1340 frames (~44.6s) */}
                <TransitionSeries.Sequence durationInFrames={150}>
                    <FinalBouquet />
                </TransitionSeries.Sequence>

            </TransitionSeries>
        </AbsoluteFill>
    );
};

const IntroScene: React.FC = () => {
    const frame = useCurrentFrame();
    return (
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", background: "white" }}>
            <div style={{ textAlign: "center" }}>
                <p style={{
                    fontSize: 28, fontWeight: 500, letterSpacing: "0.15em",
                    textTransform: "uppercase", color: "#999", marginBottom: 16,
                    opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
                }}>
                    Introducing
                </p>
                <h1 style={{
                    fontSize: 130, fontWeight: 900, letterSpacing: "-0.05em", color: "#111",
                    opacity: interpolate(frame, [10, 40, 50, 60], [0, 1, 1, 0], { extrapolateRight: "clamp" }),
                }}>
                    Backbone
                </h1>
            </div>
        </AbsoluteFill>
    );
};

const FinalBouquet: React.FC = () => {
    const frame = useCurrentFrame();
    
    // Original smooth reveal
    const entrance = interpolate(frame, [0, 40], [0, 1], { extrapolateRight: "clamp" });

    const screens = [
        "assets/screens/greenscape.png",
        "assets/screens/voltage.png",
        "assets/screens/hvac.png",
        "assets/screens/plumbing.png",
        "assets/screens/sparkle.png",
        "assets/screens/kitchen1.png",
        "assets/screens/kitchen2.png",
    ];

    // "Bouquet of flowers" arrangement
    const angles = [-30, -20, -10, 0, 10, 20, 30];
    const xPositions = [-450, -300, -150, 0, 150, 300, 450];
    const yOffsets = [120, 60, 20, 0, 20, 60, 120];

    return (
        <AbsoluteFill style={{ backgroundColor: "#fcfcfc", overflow: "hidden" }}>
            {/* Soft ambient background */}
            <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.1) 0%, transparent 70%)",
            }} />

            {/* Bouquet arrangement at lower half */}
            <div style={{
                position: "absolute",
                bottom: -150, // Peeking from the bottom
                left: "50%",
                transform: "translateX(-50%)",
                width: 1400,
                height: 800,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                opacity: entrance,
            }}>
                {screens.map((src, i) => {
                    const z = 10 - Math.abs(i - 3); // Center screen on top
                    const delay = i * 4;
                    // Original smooth pop
                    const pop = spring({ frame: frame - 20 - delay, fps: 30, config: { damping: 12 } });
                    
                    return (
                        <div key={src} style={{
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            width: 320,
                            height: 600,
                            borderRadius: 30,
                            background: "white",
                            overflow: "hidden",
                            transformOrigin: "bottom center",
                            transform: `translateX(calc(-50% + ${xPositions[i]}px)) translateY(${yOffsets[i] + (1 - pop) * 800}px) rotate(${angles[i]}deg)`,
                            boxShadow: "0 40px 100px rgba(0,0,0,0.2)",
                            border: "5px solid white",
                            zIndex: z,
                        }}>
                            <Img src={staticFile(src)} style={{ width: "100%", height: "auto", display: "block" }} />
                        </div>
                    );
                })}
            </div>

            {/* Final Messaging focused on top half */}
            <div style={{
                position: "absolute",
                top: "15%",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                width: 1400,
                opacity: interpolate(frame, [40, 70], [0, 1], { extrapolateRight: "clamp" }),
            }}>
                <h2 style={{
                    fontSize: 84,
                    fontWeight: 900,
                    letterSpacing: "-0.04em",
                    lineHeight: 1.1,
                    color: "#111",
                    margin: 0,
                    fontFamily: "Space Grotesk, sans-serif",
                }}>
                    Whatever your needs.<br />
                    Whatever your priorities.<br />
                    <span style={{ color: "#3b82f6" }}>We'll customize it.</span>
                </h2>
                
                {/* Logo Branding - Original stagger */}
                <div style={{ 
                    marginTop: 50,
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "center",
                    gap: 12,
                    opacity: interpolate(frame, [80, 110], [0, 1], { extrapolateRight: "clamp" }),
                }}>
                    <span style={{ 
                        fontSize: 28, 
                        fontWeight: 400, 
                        color: "#666", 
                        fontStyle: "italic",
                        fontFamily: "Plus Jakarta Sans, sans-serif",
                    }}>
                        with
                    </span>
                    <span style={{ 
                        fontSize: 64, 
                        fontWeight: 900, 
                        color: "#111", 
                        letterSpacing: "-0.02em",
                        fontFamily: "Space Grotesk, sans-serif",
                    }}>
                        Backbone
                    </span>
                </div>
            </div>
        </AbsoluteFill>
    );
};
