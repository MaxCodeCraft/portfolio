import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="sticky flex h-20 w-full items-center justify-between bg-spatialGrey px-5 md:h-28 md:justify-center">
      <div className="neon md:absolute md:left-0 md:ml-4">
        {/* <Image
          src={"/images/mcc-logo.png"}
          width={40}
          height={73}
          className="w-10 object-contain"
          alt="MaxCodeCraft Logo"
        /> */}
        <Image
          src={"/images/mcc-logo2.png"}
          width={842}
          height={168}
          className="w-48 object-contain md:w-64"
          alt="MaxCodeCraft Logo"
        />
      </div>
      <div className="cursor-pointer text-white md:hidden">
        <FontAwesomeIcon icon={faBars} size="xl" />
      </div>
      <div className="hidden items-center justify-center gap-6 md:flex">
        <Link href={"#"}>
          <p className="font-goodtimes text-xl text-white hover:text-gallifreyanGold md:text-base">
            A PROPOS
          </p>
        </Link>
        <Link href={"#skills"}>
          <p className="font-goodtimes text-xl text-white hover:text-gallifreyanGold md:text-base">
            COMPéTENCES
          </p>
        </Link>
        <Link href={"#projects"}>
          <p className="font-goodtimes text-xl text-white hover:text-gallifreyanGold md:text-base">
            PROJETS
          </p>
        </Link>
        <Link href={"#contact"}>
          <p className="font-goodtimes text-xl text-white hover:text-gallifreyanGold md:text-base">
            CONTACT
          </p>
        </Link>
      </div>
      <div className="hidden md:block"> </div>
      {/* <div className="flex gap-4">
        <a
          href="https://github.com/MaxCodeCraft/"
          target="blank"
          aria-label="link to my github repositories"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-white text-white hover:border-gallifreyanGold hover:text-gallifreyanGold">
            <FontAwesomeIcon icon={faGithub} className="w-6" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/maxime-bocquet-8870a0261/"
          target="blank"
          aria-label="link to my linkedin profile page"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-white text-white hover:border-gallifreyanGold hover:text-gallifreyanGold">
            <FontAwesomeIcon icon={faLinkedin} className="w-6" />
          </div>
        </a>
      </div> */}
    </header>
  );
}
