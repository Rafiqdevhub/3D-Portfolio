import { memo, useCallback } from "react";
import PropTypes from "prop-types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import { words } from "../constants";
import AnimatedCounter from "../components/AnimatedCounter";
import ExperienceHeroModel from "../components/models/Hero_Moldels/ExperienceHeroModel";

// Memoized word item component for better performance
const WordItem = memo(({ imgPath, text }) => (
  <span className="flex items-center md:gap-3 gap-1 pb-2">
    <img
      src={imgPath}
      alt={`${text} icon`}
      className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
      loading="lazy"
      width={48}
      height={48}
    />
    <span>{text}</span>
  </span>
));

WordItem.displayName = "WordItem";
WordItem.propTypes = {
  imgPath: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Hero = memo(() => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  }, []); // Empty dependency array since we only want this to run once

  const handleButtonClick = useCallback((e) => {
    e.preventDefault();
    const target = document.getElementById("counter");
    if (target) {
      const offset = window.innerHeight * 0.15;
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img
          src="/images/bg.png"
          alt="Background decoration"
          className="w-full h-auto"
          loading="lazy"
          width={1920}
          height={1080}
        />
      </div>
      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <WordItem
                        key={`word-${word.text}-${index}`}
                        imgPath={word.imgPath}
                        text={word.text}
                      />
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm M Rafiq, a developer with a passion for code.
            </p>
            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
              onClick={handleButtonClick}
            />
          </div>
        </header>
        <figure>
          <div className="hero-3d-layout">
            <ExperienceHeroModel />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
