import Image from "next/image";
import ListPanel from "./ListPanel";

interface ListPanelProps {
    heading: string;
    items: string[];
    linkText: string;
    linkUrl: string;
    hasBottomBorder: boolean;
}

interface ThreePanelProps {
    imageUrl: string; // URL for the background image
    firstPanel: ListPanelProps; // Properties for the SKIN & BODY section
    secondPanel: ListPanelProps; // Properties for the KITS & OBJECTS section
}

export default function ThreePanel({
    imageUrl,
    firstPanel,
    secondPanel,
}: ThreePanelProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:h-full">
            {/* Right Image Section */}
            <div
                className="relative md:h-full lg:h-[65vh] h-[50vh] bg-cover bg-center bg-no-repeat order-1 md:order-2 md:border-l-2 border-black"
                style={{ backgroundImage: `url(${imageUrl})` }} // Use imageUrl prop
            >
                {/* You can replace the image URL with your actual image path */}
            </div>

            {/* Left Text Section */}
            <div className="grid grid-rows-2 order-2 md:order-1">
                {/* Section 1: SKIN & BODY */}
                <ListPanel
                    heading={firstPanel.heading}
                    items={firstPanel.items}
                    linkText={firstPanel.linkText}
                    linkUrl={firstPanel.linkUrl}
                    hasBottomBorder={firstPanel.hasBottomBorder}
                />

                {/* Section 2: KITS & OBJECTS */}
                <div className="border-black border-b-2 md:border-b-0">
                    <ListPanel
                        heading={secondPanel.heading}
                        items={secondPanel.items}
                        linkText={secondPanel.linkText}
                        linkUrl={secondPanel.linkUrl}
                        hasBottomBorder={secondPanel.hasBottomBorder}
                    />
                </div>
            </div>
        </div>
    );
}
