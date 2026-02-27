"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Star } from "lucide-react";

const outcomes = [
    {
        icon: <TrendingUp className="w-8 h-8 text-accent-primary" />,
        title: "15-25% More Revenue",
        subtitle: "Same Team. Same Hours.",
        body: "Complete more jobs per day with optimized routing and zero admin friction. Our clients average 3-5 additional jobs per week per technician—that's $40K-$80K additional annual revenue for a 3-person operation. Plus, same-day payment collection jumps from 30% to 87%, improving cash flow immediately.",
        stat: "Average ROI: 340% in first year",
    },
    {
        icon: <Clock className="w-8 h-8 text-accent-primary" />,
        title: "Reclaim 15+ Hours Weekly",
        subtitle: "Stop Doing Admin. Start Growing.",
        body: "Eliminate the end-of-day paperwork marathon. No more manual invoicing, no more chasing down information, no more coordinating via group text chaos. Automated workflows handle the busy work. Your techs save 45 minutes per day. You save 3+ hours daily. That's time you can spend on sales, strategy, or actually taking a day off.",
        stat: "Average time saved: 15-20 hours/week",
    },
    {
        icon: <Star className="w-8 h-8 text-accent-primary" />,
        title: "Reviews That Write Themselves",
        subtitle: "Customers Notice the Difference",
        body: "Professional arrival notifications. Instant digital invoicing. On-site card payments. Automatic follow-up. Your customers get a white-glove experience that makes you stand out from every competitor still operating like it's 2010. Higher ratings. More referrals. Premium pricing power.",
        stat: "Client NPS score increase: +34 points average",
    },
];

export const OutcomesSection = () => {
    return (
        <section className="py-24 bg-gray-50/50 relative overflow-hidden">
            {/* Background blur elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mb-16 text-left">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                        Stop Losing Money to <br />
                        <span className="text-accent-primary">Operational Chaos.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-body-text max-w-2xl font-serif italic">
                        These aren't just features—they're the tangible improvements our clients see within the first 30 days.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {outcomes.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                            className="p-10 rounded-[3rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-xl shadow-gray-200/50 flex flex-col h-full hover:bg-white/60 transition-all hover:-translate-y-2 group"
                        >
                            <div className="mb-8 p-4 bg-white/60 rounded-2xl w-fit shadow-sm border border-white group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                            <h3 className="text-3xl font-black mb-3 leading-tight tracking-tighter">{item.title}</h3>
                            <p className="text-xl font-bold text-accent-primary mb-6 italic font-serif">{item.subtitle}</p>
                            <p className="text-lg text-body-text mb-10 leading-relaxed flex-grow opacity-90">{item.body}</p>
                            <div className="pt-8 border-t border-white">
                                <span className="text-xl font-black text-accent-primary tracking-tight">{item.stat}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
