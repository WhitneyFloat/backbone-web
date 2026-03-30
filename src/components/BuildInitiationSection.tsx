"use client";

import { motion } from "framer-motion";
import { CreditCard, Rocket, ShieldCheck, ArrowRight } from "lucide-react";

export const BuildInitiationSection = () => {
    return (
        <section id="initiate-build" className="py-24 bg-bg-alt relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto bg-white rounded-[3.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        {/* Left Column - Copy */}
                        <div className="p-12 md:p-16 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm font-bold uppercase tracking-wider mb-6 w-fit">
                                <Rocket className="w-4 h-4" />
                                Ready to scale?
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">
                                Initiate My <br />
                                <span className="text-accent-primary italic font-serif">Build</span>
                            </h2>
                            <p className="text-xl text-body-text mb-8 font-serif italic leading-relaxed">
                                Secure your spot in our development queue. Once initiated, our team starts mapping your custom infrastructure within 24 hours.
                            </p>
                            
                            <div className="space-y-4 mb-10">
                                {[
                                    "Locked-in pricing & timeline",
                                    "Immediate onboarding sequence",
                                    "Priority developer assignment",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-body-text font-bold">
                                        <ShieldCheck className="w-5 h-5 text-green-500" />
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <a 
                                href="https://buy.stripe.com/5kQaEXegFdsE76fddd0Jq00" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-accent-primary text-white text-xl font-black rounded-2xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent-primary/25"
                            >
                                <span className="relative z-10">Start Your Project Now</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                            </a>
                            
                            <div className="mt-6 flex items-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white" />
                                    ))}
                                </div>
                                <span className="text-sm font-bold">Joined by 150+ field service leaders</span>
                            </div>
                        </div>

                        {/* Right Column - Visual/Stripe context */}
                        <div className="bg-gray-50/50 p-12 md:p-16 flex flex-col justify-center border-l border-gray-50">
                            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 relative">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-accent-primary rounded-xl flex items-center justify-center text-white">
                                            <CreditCard className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-muted-text uppercase tracking-widest">Secure Payment</p>
                                            <p className="font-black text-lg">Stripe Checkout</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-muted-text">Build Deposit</p>
                                        <p className="text-2xl font-black text-accent-primary">$2,500.00</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="h-4 bg-gray-100 rounded-full w-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            transition={{ duration: 1.5, ease: "circOut" }}
                                            className="h-full bg-accent-primary" 
                                        />
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-10 bg-gray-50 rounded-xl" />
                                        <div className="h-10 bg-gray-50 rounded-xl" />
                                    </div>
                                    <div className="h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                                        <div className="w-16 h-3 bg-white/20 rounded-full" />
                                    </div>
                                </div>

                                <p className="mt-8 text-center text-sm font-medium text-muted-text italic">
                                    You will be redirected to Stripe's secure payment portal to complete your transaction.
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-2 gap-6 opacity-50">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span className="text-xs font-black uppercase tracking-tighter">SSL SECURE</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CreditCard className="w-4 h-4" />
                                    <span className="text-xs font-black uppercase tracking-tighter">PCI COMPLIANT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
