import React from "react";
import { FaAtom, FaReact, FaMapMarkerAlt } from "react-icons/fa";
import Bounded from "@/components/Bounded";

const ServiceData = [
  {
    title: "HST",
    content: "300-1500km",
    description:
      "Used for astronomical observations, capturing stunning images of the universe.",
    icon: <FaAtom className="text-5xl" />,
  },
  {
    title: "ISS",
    content: "500-1500km",
    description:
      ", it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
    icon: <FaReact className="text-5xl" />,
  },
  {
    title: "GPS",
    content: "300-1500km",
    description:
      "Part of the Global Positioning System (GPS) used for navigation.",
    icon: <FaMapMarkerAlt className="text-5xl" />,
  },
];

const HeroCard = () => {
  return (
    <Bounded className=" py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ServiceData.map((data, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              className="bg-blue-800 rounded-xl p-8 flex flex-col items-center"
            >
              <div className="text-yellow-400 mb-6 text-center">{data.icon}
              <div className="absolute inset-0 bg-yellow-400 opacity-0 rounded-full filter blur-xl group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-5xl font-bold font-display text-center mb-2">
                {data.title}
              </h3>
              <p className="text-2xl text-yellow-200 text-center font-body mb-4"> {/* Changed text color to yellow-400 */}
                {data.content}
              </p>
              <p className="text-xl text-gray-300 text-center px-3 font-body">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default HeroCard;