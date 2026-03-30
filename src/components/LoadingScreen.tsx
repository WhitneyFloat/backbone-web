"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const totalFrames = 231;
        let loadedCount = 0;

        const incrementProgress = () => {
            loadedCount++;
            const pct = Math.floor((loadedCount / totalFrames) * 100);
            setProgress(pct);
            if (loadedCount === totalFrames) {
                setTimeout(onLoadingComplete, 800);
            }
        };

        for (let i = 0; i < totalFrames; i++) {
            const img = new Image();
            img.src = `/frames/ezgif-frame-${String(i + 1).padStart(3, "0")}.png`;
            img.onload = incrementProgress;
            img.onerror = incrementProgress;
        }
    }, [onLoadingComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
        >
            <div className="flex items-center justify-center mb-12">
                <div className="w-16 h-16 border-4 border-gray-200 border-t-4 border-t-blue-600 rounded-full animate-spin"></div>
            </div>

            <div className="flex flex-col items-center">
                <motion.span
                    className="text-7xl font-black tracking-tighter text-gray-900 mb-2"
                >
                    {progress}%
                </motion.span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                    Preparing Experience
                </span>
            </div>

            <div className="absolute bottom-12 text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                Backbone Custom Development
            </div>
        </motion.div>
    );
};
