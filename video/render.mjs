import { bundle } from "@remotion/bundler";
import { renderStill, getCompositions } from "@remotion/renderer";
import path from "path";
import fs from "fs";

const start = async () => {
    const compositionId = "Walkthrough";
    const entry = "./src/index.ts";
    console.log("Bundling...");
    const bundleLocation = await bundle({
        entryPoint: path.resolve(entry),
        // If you need to pass a custom webpack config, do it here
    });

    const comps = await getCompositions(bundleLocation);
    const composition = comps.find((c) => c.id === compositionId);
    if (!composition) {
        throw new Error(`No composition with id ${compositionId}`);
    }

    const outputDir = path.resolve("../public/walkthrough");
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log(`Rendering ${composition.durationInFrames} frames...`);

    console.log(`Rendering ${composition.durationInFrames} frames sequentially...`);
    for (let i = 0; i < composition.durationInFrames; i++) {
        const output = path.join(outputDir, `frame-${i.toString().padStart(4, "0")}.png`);

        if (fs.existsSync(output)) {
            continue;
        }

        await renderStill({
            composition,
            serveUrl: bundleLocation,
            output,
            frame: i,
        });

        if (i % 10 === 0) {
            console.log(`Rendered frame ${i}/${composition.durationInFrames}`);
        }
    }

    console.log("Done!");
};

start().catch((err) => {
    console.error(err);
    process.exit(1);
});
