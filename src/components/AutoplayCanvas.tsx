"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AutoplayCanvasProps {
    totalFrames: number;
    framePath: string; // e.g. "/walkthrough/frame-"
    frameExtension: string; // e.g. ".png"
    fps: number;
    isPlaying: boolean;
}

export const AutoplayCanvas = ({
    totalFrames,
    framePath,
    frameExtension,
    fps,
    isPlaying,
}: AutoplayCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentFrame, setCurrentFrame] = useState(0);
    const lastUpdate = useRef<number>(0);

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < totalFrames; i++) {
            const img = new Image();
            const frameNum = String(i).padStart(4, "0");
            img.src = `${framePath}${frameNum}${frameExtension}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setImages(loadedImages);
                    setIsLoaded(true);
                }
            };
            loadedImages[i] = img;
        }
    }, [totalFrames, framePath, frameExtension]);

    // Animation loop
    useEffect(() => {
        if (!isPlaying || !isLoaded) return;

        let animationFrameId: number;

        const animate = (time: number) => {
            if (!lastUpdate.current) lastUpdate.current = time;

            const deltaTime = time - lastUpdate.current;
            const interval = 1000 / fps;

            if (deltaTime >= interval) {
                setCurrentFrame((prev) => (prev + 1) % totalFrames);
                lastUpdate.current = time - (deltaTime % interval);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPlaying, isLoaded, fps, totalFrames]);

    // Draw to canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = images[currentFrame];

        if (canvas && ctx && img) {
            const logicalWidth = canvas.clientWidth;
            const logicalHeight = canvas.clientHeight;

            ctx.clearRect(0, 0, logicalWidth, logicalHeight);

            const scale = Math.min(
                logicalWidth / img.width,
                logicalHeight / img.height
            );

            const x = (logicalWidth / 2) - (img.width / 2) * scale;
            const y = (logicalHeight / 2) - (img.height / 2) * scale;

            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
    }, [images, currentFrame]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                const canvas = canvasRef.current;
                const dpr = window.devicePixelRatio || 1;

                canvas.style.width = '100%';
                canvas.style.height = '100%';
                canvas.width = canvas.offsetWidth * dpr;
                canvas.height = canvas.offsetHeight * dpr;

                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.setTransform(1, 0, 0, 1, 0, 0);
                    ctx.scale(dpr, dpr);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <motion.canvas
            ref={canvasRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            className="w-full h-full"
        />
    );
};
