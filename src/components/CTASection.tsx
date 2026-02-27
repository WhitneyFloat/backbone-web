"use client";

import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle } from "lucide-react";

import { LiquidMetalButton } from "./LiquidMetalButton";

export const CTASection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background elements for depth */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent-primary rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
                <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
                    Stop Losing Money to <br />
                    <span className="text-accent-primary underline decoration-4 underline-offset-8">Operational Chaos</span>
                </h2>

                <p className="text-xl md:text-2xl text-body-text max-w-4xl mx-auto mb-12 leading-relaxed font-serif italic">
                    Every day you operate with scattered tools is a day you're leaving revenue
                    on the table. Stop accepting dysfunction and start building your backbone.
                </p>

                <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-gray-100 mb-16">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    <span className="text-lg font-bold">
                        We're currently at 92% capacity. Next slot: March 2026
                    </span>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-left mb-16 max-w-5xl mx-auto">
                    {/* Glassmorphic Cards */}
                    {[
                        { title: "What You Get", items: ["Custom mobile app", "Full team training", "30-day launch support", "Ongoing optimization"], color: "text-accent-primary", icon: "✓" },
                        { title: "What You Stop", items: ["App subscription chaos", "Manual admin work", "Schedule confusion", "Delayed payments"], color: "text-red-500", icon: "✗" },
                        { title: "What You Gain", items: ["15-25% more revenue", "15+ hours weekly saved", "Professional reputation", "Team efficiency"], color: "text-green-600", icon: "↑", isGain: true }
                    ].map((col, idx) => (
                        <div key={idx} className="bg-white/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/60 shadow-xl shadow-gray-200/50 transition-all hover:-translate-y-2 hover:bg-white/60">
                            <h4 className={`text-2xl font-black mb-6 ${col.color}`}>{col.title}</h4>
                            <ul className="space-y-4">
                                {col.items.map((item, i) => (
                                    <li key={i} className={`flex items-start gap-3 text-body-text font-bold ${col.isGain ? 'text-green-700' : ''}`}>
                                        <span className={`${col.color} mt-1`}>{col.icon}</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-8">
                    <LiquidMetalButton
                        label="Book Your Strategy Call"
                        onClick={() => console.log('Final CTA Section Clicked')}
                    />
                    <p className="text-lg text-muted-text italic font-serif">
                        15-minute call. Zero pressure. We'll map your exact solution.
                    </p>
                </div>
            </div>
        </section>
    );
};
