import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className="absolute w-screen h-28 flex justify-between items-center px-5 bg-spatialGrey/75">
      <div>
        <Image
          src={"/mcc-logo.png"}
          width={40}
          height={73}
          className="w-10 object-contain"
        />
      </div>
      <div className="flex justify-center items-center gap-4">
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
        <div className="border-2 border-white hover:border-gallifreyan w-12 h-12 rounded-md flex justify-center items-center">
          <FontAwesomeIcon icon={faGithub} size="2xs" color="white" />
        </div>
        <div className="border-2 border-white hover:border-gallifreyan w-12 h-12 rounded-md flex justify-center items-center">
          <FontAwesomeIcon icon={faLinkedin} size="2xs" color="white" />
        </div>
      </div>
    </header>
  );
}
