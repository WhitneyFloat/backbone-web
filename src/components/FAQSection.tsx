"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "How long does implementation actually take?",
        a: "From signing to your team using the app: 2-3 weeks. Week 1: Discovery call, configuration, branding integration. Week 2: App build, your team testing, training sessions. Week 3: Live launch with our support team on standby. We don't disappear after launch. The first 30 days include daily check-ins to ensure smooth adoption.",
    },
    {
        q: "What if my team isn't 'tech-savvy'?",
        a: "If they can use a smartphone for texting, they can use this. We've deployed apps for 60-year-old technicians who 'hate computers' and 22-year-old new hires who've never used business software. The interface is intentionally simple—big buttons, clear labels, logical flow. Average time to productivity: 15 minutes of hands-on training.",
    },
    {
        q: "Can it integrate with my current software?",
        a: "Probably yes, possibly with light custom work. We've successfully integrated with QuickBooks, Square, Stripe, Google Calendar, ServiceTitan, Housecall Pro, and dozens of other platforms. During discovery, we'll map out your current tools and build appropriate data bridges. Most clients actually consolidate TO our platform because it replaces 3-5 tools they're currently paying for separately.",
    },
    {
        q: "What does 'custom' really mean? Am I getting a template?",
        a: "You're getting a truly custom build, not a white-labeled template. Every feature is tailored to YOUR workflow, YOUR service types, YOUR pricing structure, YOUR branding. We start from scratch based on how YOU operate, not how we think field service businesses should operate.",
    },
    {
        q: "What happens if something breaks or we need changes?",
        a: "You have a direct line to our team, not a ticket system. Monthly retainer includes: bug fixes, feature refinements, ongoing optimization, and minor additions. Major new features are quoted separately, but we're incentivized to keep your app running perfectly because unhappy clients churn. Average response time for urgent issues: Under 2 hours.",
    },
    {
        q: "Do I own the app or are you holding it hostage?",
        a: "You own your data, always. App ownership is yours after build phase. We retain hosting/maintenance for the monthly fee, but your customer data, business logic, and branding are 100% portable. No proprietary lock-in. No surprise ransoms. Just clean business.",
    },
];

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
                        Questions We Hear From <br />
                        <span className="text-accent-primary underline decoration-4 underline-offset-8">Smart Business Owners</span>
                    </h2>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="rounded-[2.5rem] overflow-hidden border border-white/60 bg-white/40 backdrop-blur-2xl shadow-xl shadow-gray-200/50 transition-all hover:bg-white/60">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-8 md:p-10 text-left transition-colors"
                            >
                                <span className="text-2xl md:text-3xl font-bold text-primary-heading tracking-tighter leading-tight pr-8">{faq.q}</span>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/80 border border-white shadow-sm shrink-0 transition-transform ${openIndex === i ? 'rotate-180 bg-accent-primary text-white' : 'text-accent-primary'}`}>
                                    <ChevronDown size={24} />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                                    >
                                        <div className="px-8 pb-10 md:px-10 md:pb-12 text-xl text-body-text leading-relaxed border-t border-white/40 opacity-90">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
