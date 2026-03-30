"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { ScrollyCanvas } from "./ScrollyCanvas";
import { ArrowRight } from "lucide-react";
import { LiquidMetalButton } from "./LiquidMetalButton";

export const HeroScrolly = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Final Canvas Fade Out: 98.5-100%
    const canvasOpacity = useTransform(scrollYProgress, [0.985, 1], [1, 0]);

    // SEQUENTIAL HEADERS (Beat A: 0-25%)
    const label1X = useTransform(scrollYProgress, [0, 0.02], [100, 0]);
    const label1Opacity = useTransform(scrollYProgress, [0, 0.02, 0.22, 0.25], [0, 1, 1, 0]);

    const label2X = useTransform(scrollYProgress, [0.04, 0.07], [100, 0]);
    const label2Opacity = useTransform(scrollYProgress, [0.04, 0.07, 0.22, 0.25], [0, 1, 1, 0]);

    const label3X = useTransform(scrollYProgress, [0.14, 0.18], [-100, 0]);
    const label3Opacity = useTransform(scrollYProgress, [0.14, 0.18, 0.22, 0.25], [0, 1, 1, 0]);

    // LOGO SEQUENCE (Beat L: 30-98% - Extended visibility)
    const logoOpacity = useTransform(scrollYProgress, [0.3, 0.35, 0.96, 0.98], [0, 1, 1, 0]);
    const logoScale = useTransform(scrollYProgress, [0.3, 0.35], [0.95, 1]);

    const subtextOpacity = useTransform(scrollYProgress, [0.4, 0.45, 0.7, 0.75], [0, 1, 1, 0]);
    const buttonsOpacity = useTransform(scrollYProgress, [0.55, 0.6, 0.72, 0.75], [0, 1, 1, 0]);

    // SHIFTED BEATS (Adjusted to accommodate extended logo sequence)
    // Beat B (Prob/Sol): 78-86%
    const beatBOpacity = useTransform(scrollYProgress, [0.78, 0.8, 0.84, 0.86], [0, 1, 1, 0]);
    const beatBY = useTransform(scrollYProgress, [0.78, 0.8, 0.84, 0.86], [40, 0, 0, -40]);

    // Beat C (Trans): 88-93%
    const beatCOpacity = useTransform(scrollYProgress, [0.88, 0.9, 0.91, 0.93], [0, 1, 1, 0]);
    const beatCY = useTransform(scrollYProgress, [0.88, 0.9, 0.91, 0.93], [40, 0, 0, -40]);

    // Beat D (Reveal): 94-98.5%
    const beatDOpacity = useTransform(scrollYProgress, [0.94, 0.95, 0.975, 0.985], [0, 1, 1, 0]);
    const beatDY = useTransform(scrollYProgress, [0.94, 0.95, 0.975, 0.985], [40, 0, 0, -40]);

    // Beat E (CTA): 99-100%
    const beatEOpacity = useTransform(scrollYProgress, [0.99, 0.995, 1], [0, 1, 1]);
    const beatEY = useTransform(scrollYProgress, [0.99, 0.995, 1], [40, 0, 0]);

    return (
        <section ref={containerRef} className="relative h-[1200vh] bg-white">
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* Canvas Background */}
                <ScrollyCanvas
                    totalFrames={240}
                    framePath="/frames/ezgif-frame-"
                    frameExtension=".png"
                    containerRef={containerRef}
                    opacity={canvasOpacity}
                />

                {/* Text Overlays */}
                <div className="relative z-10 container mx-auto px-4 h-full">

                    {/* PHASE 1: Sequential Headers */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 items-center h-full">
                            <div className="lg:col-span-1 space-y-4 pl-4 md:pl-8 lg:pl-12">
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter">
                                    <motion.span
                                        style={{ opacity: label1Opacity, x: label1X }}
                                        className="block"
                                    >
                                        Your Business.
                                    </motion.span>
                                    <motion.span
                                        style={{ opacity: label2Opacity, x: label2X }}
                                        className="block"
                                    >
                                        One App.
                                    </motion.span>
                                    <motion.span
                                        style={{ opacity: label3Opacity, x: label3X, color: '#4F46E5' }}
                                        className="block mt-4"
                                    >
                                        Complete Control.
                                    </motion.span>
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* PHASE 2 & 3: Logo & Subtext & Buttons */}
                    <motion.div
                        style={{ opacity: logoOpacity, scale: logoScale }}
                        className="absolute inset-0 flex flex-col items-center justify-center pt-32 text-center px-4"
                    >
                        <h2
                            style={{ fontFamily: 'Acknowledgement' }}
                            className="font-normal tracking-tighter mb-4 leading-[0.8] select-none text-black transition-all"
                        >
                            <span className="text-xl md:text-2xl font-serif italic font-medium lowercase block mb-0 opacity-40 text-gray-500 tracking-tight">with</span>
                            <span className="text-3xl md:text-4xl inline-block transform lg:translate-x-1">
                                Backbone
                            </span>
                        </h2>

                        <motion.p
                            style={{ opacity: subtextOpacity }}
                            className="text-xl md:text-2xl text-body-text max-w-xl font-serif italic mb-12 lg:ml-auto"
                        >
                            Custom mobile apps built for service businesses who are tired of patching together tools.
                        </motion.p>

                        <motion.div
                            style={{ opacity: buttonsOpacity }}
                            className="flex flex-col gap-6 items-center lg:items-end"
                        >
                            <LiquidMetalButton
                                label="See How It Works"
                                width={220}
                                height={54}
                                onClick={() => console.log('See How It Works clicked')}
                            />
                            <LiquidMetalButton
                                label="Book Strategy Call"
                                width={240}
                                height={54}
                                onClick={() => window.open('https://calendly.com/whitneywilson1227/30min', '_blank')}
                            />
                        </motion.div>
                    </motion.div>

                    {/* BEAT B: Problem vs Solution */}
                    <motion.div
                        style={{ opacity: beatBOpacity, y: beatBY }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="grid md:grid-cols-2 gap-x-24 lg:gap-x-48 w-full max-w-7xl px-8 lg:px-24">
                            {/* Left: Problem */}
                            <div className="space-y-6 -translate-y-12">
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter whitespace-nowrap">The Old Way <br />Is Costing You Money</h2>
                                <ul className="space-y-2 text-base md:text-lg italic font-serif text-muted-text">
                                    {["Juggling 6 different apps", "Dispatching via texts", "Manual invoicing chaos"].map((text, i) => (
                                        <li key={i}>→ {text}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-6 text-right translate-y-32">
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-accent-primary leading-tight">
                                    One Custom App. <br />
                                    Your Entire Operation.
                                </h2>
                                <ul className="space-y-2 text-base md:text-lg italic font-serif text-accent-primary">
                                    {["Everything in one place", "Auto-dispatching", "On-site payments", "Customer history travel", "GPS-optimized routing"].map((text, i) => (
                                        <li key={i}>{text} ←</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* BEAT C: Transformation */}
                    <motion.div
                        style={{ opacity: beatCOpacity, y: beatCY }}
                        className="absolute inset-0 flex flex-col items-center justify-between pt-16 pb-12 md:pt-24 md:pb-20 text-center max-w-4xl mx-auto"
                    >
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                            Watch Your <br />
                            <span className="text-accent-primary">Business Transform</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-body-text leading-relaxed font-serif italic max-w-2xl px-10 bg-white/40 backdrop-blur-2xl py-6 rounded-[2.5rem] border border-white/60 shadow-xl shadow-gray-200/50">
                            Every tool you need, absorbed into one system.
                            seamless service delivery.
                        </p>
                    </motion.div>

                    {/* BEAT D: Final Reveal */}
                    <motion.div
                        style={{ opacity: beatDOpacity, y: beatDY }}
                        className="absolute inset-0 flex flex-col items-center justify-between pt-8 pb-4 md:pt-16 md:pb-12 text-center w-full"
                    >
                        {/* Header pushed higher */}
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                                One System. <br />
                                Complete Control. <br />
                                <span className="text-accent-primary">Actual Results.</span>
                            </h2>
                            <p className="text-xl md:text-2xl font-serif italic text-muted-text">
                                Stop juggling. <span className="text-accent-primary font-bold not-italic font-sans underline decoration-2 underline-offset-8">Start operating.</span>
                            </p>
                        </div>

                        {/* Metrics pushed lower and made more compact */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-5xl mx-auto px-6 pb-4">
                            {[
                                { val: "15-25%", label: "More Revenue" },
                                { val: "15+ Hours", label: "Saved Weekly" },
                                { val: "92%", label: "Adoption Rate", full: true }
                            ].map((stat, idx) => (
                                <div
                                    key={idx}
                                    className={`p-4 md:p-6 rounded-[2rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-xl shadow-gray-200/50 flex flex-col justify-center ${stat.full ? 'col-span-2 md:col-span-1' : ''}`}
                                >
                                    <span className="text-3xl md:text-5xl font-black text-accent-primary block tracking-tighter leading-none mb-1">{stat.val}</span>
                                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-muted-text opacity-80">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* BEAT E: Final CTA */}
                    <motion.div
                        style={{ opacity: beatEOpacity, y: beatEY }}
                        className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4"
                    >
                        <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tighter">Ready to Build Your Backbone?</h2>
                        <LiquidMetalButton
                            label="Book Your Strategy Call"
                            className="mb-8"
                            onClick={() => window.open('https://calendly.com/whitneywilson1227/30min', '_blank')}
                        />
                        <p className="text-lg text-muted-text italic font-serif">
                            15-minute call. Zero pressure. We'll map your exact solution.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
