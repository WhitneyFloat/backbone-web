"use client";

import { motion } from "framer-motion";
import { Calendar, Smartphone, CreditCard, Users, Check } from "lucide-react";

const features = [
    {
        icon: <Calendar className="w-8 h-8 text-accent-primary" />,
        title: "Smart Scheduling",
        headline: "Scheduling That Actually Makes Sense",
        bullets: [
            "Drag-and-drop calendar with technician availability",
            "Automatic route optimization based on job locations",
            "Real-time schedule updates sync to all techs instantly",
            "Buffer time between jobs (no more late arrivals)",
            "Recurring service automation",
            "Emergency job insertion without chaos",
            "Customer arrival notifications (auto-sent)",
        ],
        bottomLine: "Stop playing schedule Tetris. Let the system optimize while you focus on growth.",
    },
    {
        icon: <Smartphone className="w-8 h-8 text-accent-primary" />,
        title: "Mobile Operations",
        headline: "Everything That's Needed, Right In Their Pocket",
        bullets: [
            "Complete job details: scope, customer history, notes",
            "GPS navigation to job site with one tap",
            "Digital work order completion with photo documentation",
            "Inventory tracking (know what's on each truck)",
            "Customer signature capture for approvals",
            "Before/after photos with automatic cloud backup",
            "Time tracking automatically tied to jobs",
        ],
        bottomLine: "Every user becomes more professional and productive with zero extra effort.",
    },
    {
        icon: <CreditCard className="w-8 h-8 text-accent-primary" />,
        title: "Invoicing & Payments",
        headline: "Get Paid On-Site, Every Time",
        bullets: [
            "Auto-generated invoices from work orders",
            "Integrated credit card processing (swipe/tap)",
            "Digital signature for invoice approval",
            "Itemized charges with photos of work",
            "Automatic tax calculation by jurisdiction",
            "Instant receipt email to customer",
            "Payment tracking and aging reports",
        ],
        bottomLine: "Job completion to payment received in under 2 minutes. Cash flow solved.",
    },
    {
        icon: <Users className="w-8 h-8 text-accent-primary" />,
        title: "Customer Intelligence",
        headline: "Know Your Customers Better Than They Know Themselves",
        bullets: [
            "Complete service history at fingertips",
            "Equipment inventory per customer location",
            "Maintenance schedule tracking and reminders",
            "Customer communication log (calls, text, email)",
            "Lifetime value and service trends analytics",
            "Automated follow-up for reviews",
            "VIP customer flagging for special treatment",
        ],
        bottomLine: "Turn one-time customers into lifetime relationships with organized intelligence.",
    },
];

export const FeaturesSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Soft decorative background blurs */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[100px] -translate-x-1/2" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[100px] translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mb-16 text-left">
                    <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
                        Everything You Need. <br />
                        <span className="text-accent-primary">Nothing You Don't.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-body-text max-w-3xl font-serif italic">
                        Built specifically for field service businesses, not adapted from generic software. Every feature solves a real problem you face daily.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-white/40 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/60 shadow-xl shadow-gray-200/50 flex flex-col hover:bg-white/60 transition-all hover:-translate-y-2 group"
                        >
                            <div className="bg-white/80 p-4 rounded-2xl w-fit shadow-sm border border-white mb-8 group-hover:scale-110 transition-transform duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-3xl font-black mb-6 tracking-tighter leading-tight">{feature.headline}</h3>
                            <ul className="space-y-4 mb-10 flex-grow">
                                {feature.bullets.map((bullet, j) => (
                                    <li key={j} className="flex items-start gap-3 text-body-text font-medium italic font-serif">
                                        <Check className="w-5 h-5 text-accent-primary mt-1 shrink-0" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-8 border-t border-white">
                                <p className="font-black text-accent-primary leading-tight tracking-tight uppercase text-sm">{feature.bottomLine}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
