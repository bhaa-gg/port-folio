import React from "react";
const VideoComponent = ({ src, title }) => {
    return (
        <div className="w-full  mx-auto sm:w-[90%] md:w-[80%]  lg:w-[70%] "  >
            <iframe src={src} height="550" className="w-full overflow-hidden scroll-0" frameborder="0" allowfullscreen="0" title="ProjectVideo"></iframe>
            <p className="font-bold text-xl underline my-2" >{title}</p>
        </div>
    );
};

export default VideoComponent;

