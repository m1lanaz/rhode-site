import Image from "next/image";

interface PageData {
    image: string;
    titleOne: string;
    titleTwo: string;
    text: string;
    url: string;
    urlLink: string;
}


interface TwoColumnSectionProps {
    data: PageData;
}

export default function TwoColumnSection({ data }: TwoColumnSectionProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:h-full ">
            <div className="relative md:h-full lg:h-[65vh] h-[50vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${data.image})` }}>
            </div>
            <div className="pl-4 pt-10 pb-8 border-l-0 border-b-2 flex flex-col justify-between md:border-l-2 md:border-b-0 border-black">
                <div>
                    <p className="text-4xl md:text-5xl lg:text-6xl leading-10 tracking-wide pb-10 md:pb-3">
                    {data.titleOne}<br />{data.titleTwo}</p>
                </div>
                <div>
                    <div className="w-[70%] lg:w-[65%]">
                        <p className="text-xl leading-relaxed md:pb-6 pb-7">
                        {data.text}
                        </p>
                    </div>

                    <a className=" underline  underline-offset-4 decoration-1">{data.url}</a>
                </div>

            </div>
        </div>


    );
}
