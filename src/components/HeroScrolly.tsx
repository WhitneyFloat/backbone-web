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

    // BEAT A: 0-15%
    const beatAOpacity = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.15], [0, 1, 1, 0]);
    const beatAY = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.15], [40, 0, 0, -40]);

    // BEAT B: 20-45%
    const beatBOpacity = useTransform(scrollYProgress, [0.2, 0.25, 0.4, 0.45], [0, 1, 1, 0]);
    const beatBY = useTransform(scrollYProgress, [0.2, 0.25, 0.4, 0.45], [40, 0, 0, -40]);

    // BEAT C: 50-65%
    const beatCOpacity = useTransform(scrollYProgress, [0.5, 0.55, 0.6, 0.65], [0, 1, 1, 0]);
    const beatCY = useTransform(scrollYProgress, [0.5, 0.55, 0.6, 0.65], [40, 0, 0, -40]);

    // BEAT D: 70-85%
    const beatDOpacity = useTransform(scrollYProgress, [0.7, 0.75, 0.8, 0.85], [0, 1, 1, 0]);
    const beatDY = useTransform(scrollYProgress, [0.7, 0.75, 0.8, 0.85], [40, 0, 0, -40]);

    // BEAT E: 90-100%
    const beatEOpacity = useTransform(scrollYProgress, [0.9, 0.95, 1], [0, 1, 1]);
    const beatEY = useTransform(scrollYProgress, [0.9, 0.95, 1], [40, 0, 0]);

    // Final Canvas Fade Out: 95-100%
    const canvasOpacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-[500vh] bg-white">
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* Canvas Background */}
                <ScrollyCanvas
                    totalFrames={231}
                    framePath="/frames/ezgif-frame-"
                    frameExtension=".png"
                    containerRef={containerRef}
                    opacity={canvasOpacity}
                />

                {/* Text Overlays */}
                <div className="relative z-10 container mx-auto px-4 h-full">

                    {/* BEAT A: Hero Intro */}
                    <motion.div
                        style={{ opacity: beatAOpacity, y: beatAY }}
                        className="absolute inset-0 container mx-auto"
                    >
                        <div className="h-full grid grid-cols-1 lg:grid-cols-3 items-center">
                            {/* Left Side Content */}
                            <div className="lg:col-span-1 space-y-8 pl-4 md:pl-8 lg:pl-12">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.9] tracking-tighter">
                                    Your Business. <br />
                                    One App. <br />
                                    <span className="text-accent-primary">Complete Control.</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-body-text mb-6 leading-relaxed italic font-serif">
                                    Custom mobile apps built for service businesses who are tired of
                                    patching together tools.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <LiquidMetalButton
                                        label="See How It Works"
                                        width={180}
                                        onClick={() => console.log('See How It Works clicked')}
                                    />
                                    <LiquidMetalButton
                                        label="Book Strategy Call"
                                        width={200}
                                        onClick={() => console.log('Book Strategy Call clicked')}
                                    />
                                </div>
                            </div>

                            {/* Empty Center for Phone Animation */}
                            <div className="lg:col-span-1 hidden lg:block" />

                            {/* Right Side Supporting Text */}
                            <div className="lg:col-span-1 pr-4 md:pr-8 lg:pr-12 text-right hidden lg:block">
                                <p className="text-lg text-muted-text mb-4 italic font-medium">
                                    Get everything—scheduling, invoicing, GPS routing, customer management—
                                    in one branded app your team will actually use.
                                </p>
                                <p className="text-sm text-muted-text italic">
                                    Trusted by HVAC, plumbing, electrical, and mobile service businesses nationwide
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* BEAT B: Problem vs Solution */}
                    <motion.div
                        style={{ opacity: beatBOpacity, y: beatBY }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="grid md:grid-cols-2 gap-x-48 lg:gap-x-96 max-w-full px-8 lg:px-24">
                            {/* Left: Problem */}
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">The Old Way <br />Is Costing You Money</h2>
                                <ul className="space-y-2 text-base md:text-lg italic font-serif text-muted-text">
                                    {["Juggling 6 different apps", "Dispatching via texts", "Manual invoicing chaos", "Random notebooks", "Guessing at territories"].map((text, i) => (
                                        <li key={i}>→ {text}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right: Solution */}
                            <div className="space-y-6 text-right">
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-accent-primary">One Custom App. <br />Your Entire Operation.</h2>
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
                        <p className="text-2xl md:text-3xl text-body-text leading-relaxed font-serif italic max-w-2xl px-8 bg-white/40 backdrop-blur-2xl py-8 rounded-[2.5rem] border border-white/60 shadow-xl shadow-gray-200/50">
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
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
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
                            onClick={() => console.log('Final CTA clicked')}
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
