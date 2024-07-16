import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-between bg-tardisBlue px-5 md:h-28 md:justify-center">
      <div className="neon md:absolute md:left-0 md:ml-4">
        <Image
          src={"/images/mcc-logo.png"}
          width={842}
          height={168}
          className="w-48 object-contain md:w-32 lg:w-64"
          alt="MaxCodeCraft Logo"
        />
      </div>
      <div className="dropdown dropdown-end cursor-pointer text-white md:hidden">
        <FontAwesomeIcon icon={faBars} size="xl" role="button" tabIndex={0} />
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] w-52 rounded-md bg-spatialGrey p-2 shadow-inner"
        >
          <li>
            <Link href={"#skills"}>
              <p className="font-goodtimes text-white hover:text-gallifreyanGold">
                COMPéTENCES
              </p>
            </Link>
          </li>
          <li>
            <Link href={"#projects"}>
              <p className="font-goodtimes text-white hover:text-gallifreyanGold">
                PROJETS
              </p>
            </Link>
          </li>
          <li>
            <Link href={"#contact"}>
              <p className="font-goodtimes text-white hover:text-gallifreyanGold">
                CONTACT
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden items-center justify-center gap-6 md:flex">
        <Link href={"#skills"}>
          <p className="font-goodtimes text-white hover:text-gallifreyanGold md:text-base lg:text-xl">
            COMPéTENCES
          </p>
        </Link>
        <Link href={"#projects"}>
          <p className="font-goodtimes text-white hover:text-gallifreyanGold md:text-base lg:text-xl">
            PROJETS
          </p>
        </Link>
        <Link href={"#contact"}>
          <p className="font-goodtimes text-white hover:text-gallifreyanGold md:text-base lg:text-xl">
            CONTACT
          </p>
        </Link>
      </div>
      <div className="hidden md:block"> </div>
    </header>
  );
}
