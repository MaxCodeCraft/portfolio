import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className="absolute flex h-28 w-screen items-center justify-between bg-spatialGrey/75 px-5">
      <div>
        <Image
          src={"/mcc-logo.png"}
          width={40}
          height={73}
          className="w-10 object-contain"
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <p className="font-digitalix text-white hover:text-gallifreyan">
          MY WORK
        </p>
        <p className="font-digitalix text-white hover:text-gallifreyan">
          ABOUT ME
        </p>
        <p className="font-digitalix text-white hover:text-gallifreyan">
          CONTACT
        </p>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/MaxCodeCraft/" target="blank">
          <div className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-white text-white hover:border-gallifreyan hover:text-gallifreyan">
            <FontAwesomeIcon icon={faGithub} className="w-6" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/maxime-bocquet-8870a0261/"
          target="blank"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-white text-white hover:border-gallifreyan hover:text-gallifreyan">
            <FontAwesomeIcon icon={faLinkedin} className="w-6" />
          </div>
        </a>
      </div>
    </header>
  );
}
