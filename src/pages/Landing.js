import { useState } from "react";

function Landing() {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="">
      <div className="text-9xl text-[#9e998d] pl-8 font-medium mt-44">
        <p>A closer look</p>
        <p className="pt-10">
          at{" "}
          <span
            className="cursor-pointer"
            onClick={handleClick}
          >
            David.<span className="relative inline-block text-transparent bg-clip-text animated-gradient glow-text">*</span>
          </span>
        </p>
      </div>

      <div className="text-md text-[#9e998d] pl-8 font-medium mt-6">
        <p>
          click on my{" "}
          <span className="relative inline-block text-transparent bg-clip-text animated-gradient">
            name
          </span>{" "}
          to see more.
        </p>
      </div>
      <div className="pl-8 mt-8">
        {showLinks && (
          <div className="flex space-x-4 text-[#9e998d] text-lg">
            <a href="#link1" className="hover:underline">Software Development</a>
            <a href="#link2" className="hover:underline">Photography</a>
            <a href="#link3" className="hover:underline">3</a>
            <a href="#link4" className="hover:underline">4</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Landing;
