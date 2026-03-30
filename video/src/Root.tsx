import { Composition } from "remotion";
import { Main } from "./Composition";

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="Walkthrough"
                component={Main}
                durationInFrames={1180} // Perfectly matches 5s scenes + crossfades
                fps={30}
                width={1920}
                height={1080}
            />
        </>
    );
};
