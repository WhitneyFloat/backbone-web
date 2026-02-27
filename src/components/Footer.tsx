import { Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    {/* Column 1 - Brand */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black tracking-tighter">BACKBONE</h2>
                        <p className="text-lg font-bold text-accent-primary leading-tight font-serif italic">
                            The infrastructure behind great service businesses.
                        </p>
                        <p className="text-muted-text">
                            Custom mobile apps built for field service and specialized business operations.
                        </p>
                    </div>

                    {/* Column 2 - Industries */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-primary-heading font-serif italic">Industries</h4>
                        <ul className="space-y-3 text-body-text font-medium italic">
                            {["HVAC & Plumbing", "Electrical Services", "Cleaning Companies", "Mobile Repair", "Personal Care Services", "General Contractors", "Landscaping Tools"].map((link, i) => (
                                <li key={i}><a href="#" className="hover:text-accent-primary transition-colors underline-offset-4 hover:underline">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Resources */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-primary-heading font-serif italic">Resources</h4>
                        <ul className="space-y-3 text-body-text font-medium italic">
                            {["How It Works", "Pricing Guide", "Implementation Process", "FAQ"].map((link, i) => (
                                <li key={i}><a href="#" className="hover:text-accent-primary transition-colors underline-offset-4 hover:underline">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 - Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-primary-heading font-serif italic">Company</h4>
                        <ul className="space-y-3 text-body-text font-medium italic">
                            {["About Us", "Our Process", "Contact", "Book a Call", "Privacy Policy", "Terms of Service"].map((link, i) => (
                                <li key={i}><a href="#" className="hover:text-accent-primary transition-colors underline-offset-4 hover:underline">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-muted-text italic font-medium">
                        © 2026 Backbone Custom Development. Built for businesses who refuse to settle for chaos.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-muted-text hover:text-accent-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
                        <a href="#" className="text-muted-text hover:text-accent-primary transition-colors"><Twitter className="w-6 h-6" /></a>
                        <a href="#" className="text-muted-text hover:text-accent-primary transition-colors"><Mail className="w-6 h-6" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
