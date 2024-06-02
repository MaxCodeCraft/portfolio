import HeroVector from "../vectors/HeroVector";

export default function Hero() {
  return (
    <div className="mt-56 flex w-screen items-center justify-center">
      <div className="left-section">
        <div className="flex flex-col gap-4">
          <div>
            <span className="align-bottom text-3xl text-white">Hi, I am </span>
            <span className="font-digitalix text-4xl text-gallifreyan shadow-lg">
              MAX
            </span>
          </div>
          <p className="align-bottom font-digitalix text-tardis">
            FULL STACK <span className="text-white">DEVELOPPER</span>
          </p>
          <HeroVector />
          <p className="-mt-16 max-w-[450px] text-white">
            Hello and welcome to my site! I'm a passionate full stack web
            developer with a unique background in sales. I use the MERN stack
            and love React libraries like Tailwind CSS and Framer Motion.
            Through an intensive bootcamp, I've mastered the frameworks needed
            to bring your projects to life!
          </p>
        </div>
      </div>
      <div className="right-section"></div>
    </div>
  );
}
