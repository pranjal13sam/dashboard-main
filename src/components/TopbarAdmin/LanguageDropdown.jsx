import { useState } from "react";
import { germanyImg, italyImg, russiaImg, spainImg } from "../../assets/images";
import { LuGlobe } from "react-icons/lu";

const languages = [
  {
    name: "German",
    image: germanyImg,
  },
  {
    name: "Italian",
    image: italyImg,
  },
  {
    name: "Spanish",
    image: spainImg,
  },
  {
    name: "Russian",
    image: russiaImg,
  },
];

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-default-100 text-default-700 hover:text-primary focus:outline-none"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <LuGlobe size={24} />
      </button>
      <div
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="py-1">
          {languages.map((language) => (
            <button
              key={language.name}
              className="block w-full px-4 py-2 text-sm text-default-700 hover:bg-default-100 hover:text-primary"
            >
              <img
                src={language.image}
                alt={language.name}
                className="inline-block h-5 mr-2"
              />
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;