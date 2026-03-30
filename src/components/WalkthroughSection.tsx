"use client";

import { Main } from "@/remotion/Composition";
import { Player } from "@remotion/player";

export const WalkthroughSection = () => {
    return (
        <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
                        How we <span className="italic font-serif text-accent-primary">Build</span>&nbsp; for You
                    </h2>
                    <p className="text-xl md:text-2xl text-body-text font-serif italic max-w-2xl mx-auto">
                        A quick walkthrough of how Backbone unifies your entire business into one custom mobile experience.
                    </p>
                </div>

                <div className="relative aspect-video max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 group">
                    <Player
                        component={Main}
                        durationInFrames={1180}
                        compositionWidth={1920}
                        compositionHeight={1080}
                        fps={30}
                        controls
                        autoPlay
                        loop
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "block"
                        }}
                    />
                </div>
            </div>
        </section>
    );
};
