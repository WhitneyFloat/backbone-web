"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

interface ScrollyCanvasProps {
    totalFrames: number;
    framePath: string;
    frameExtension: string;
    containerRef: React.RefObject<HTMLDivElement | null>;
    opacity?: any;
}

export const ScrollyCanvas = ({
    totalFrames,
    framePath,
    frameExtension,
    containerRef,
    opacity,
}: ScrollyCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothScrollProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const frameIndex = useTransform(
        smoothScrollProgress,
        [0, 1],
        [1, totalFrames]
    );

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            const frameNum = String(i).padStart(3, "0");
            img.src = `${framePath}${frameNum}${frameExtension}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            loadedImages[i - 1] = img;
        }
    }, [totalFrames, framePath, frameExtension]);

    useEffect(() => {
        const draw = () => {
            const index = Math.floor(frameIndex.get()) - 1;
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");
            const img = images[index];

            if (canvas && ctx && img) {
                const logicalWidth = window.innerWidth;
                const logicalHeight = window.innerHeight;
                ctx.clearRect(0, 0, logicalWidth, logicalHeight);

                const scale = Math.min(
                    logicalWidth / img.width,
                    logicalHeight / img.height
                );

                const x = (logicalWidth / 2) - (img.width / 2) * scale;
                const y = (logicalHeight / 2) - (img.height / 2) * scale;

                ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
            }
        };

        const handleResize = () => {
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                const dpr = window.devicePixelRatio || 1;
                canvas.style.width = window.innerWidth + 'px';
                canvas.style.height = window.innerHeight + 'px';
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;

                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.scale(dpr, dpr);
                }
                draw();
            }
        };

        const unsub = frameIndex.on("change", draw);
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            unsub();
            window.removeEventListener("resize", handleResize);
        };
    }, [images, frameIndex]);

    return (
        <div 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
                maskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 85%)'
            }}
        >
            {!isLoaded && (
                <img
                    src={`${framePath}001${frameExtension}`}
                    alt="Backbone App Preview"
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{ 
                        opacity: opacity ? opacity.get() : 1,
                        filter: 'brightness(1.04) contrast(1.02)'
                    }}
                />
            )}

            <motion.canvas
                ref={canvasRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                style={{
                    opacity,
                    filter: 'brightness(1.04) contrast(1.02)'
                }}
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
};
