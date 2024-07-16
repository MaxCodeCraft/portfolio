"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const [isSelected, setIsSelected] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/N0amaYc21gJ", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          setSubmitted(true);
        } else if (response.code === 422) {
          setError(response.message);
        } else {
          setError(response.message);
        }
      })
      .catch((error) => {
        setError(error.message ? error.message : error);
      });
  }

  if (error) {
    document.getElementById("modal_error").showModal();
  }

  if (submitted) {
    document.getElementById("modal_success").showModal();
  }

  return (
    <div
      id="contact"
      className="flex w-full flex-wrap justify-center gap-4 bg-spatialGrey py-12 md:py-24"
    >
      <div className="mx-4 flex w-[400px] flex-col gap-6 bg-white/10 p-8 md:mx-0 md:h-[386px]">
        <h2 className="font-goodtimes text-2xl text-gallifreyanGold">
          Contact
        </h2>
        <p className="text-white">
          Envie de collaborer ou de discuter de vos idées de projet ?
          Contactez-moi pour voir comment nous pouvons travailler ensemble pour
          donner vie à vos concepts numériques.
        </p>
        <div className="text-white hover:text-gallifreyanGold">
          <a
            href="https://github.com/MaxCodeCraft/"
            target="blank"
            aria-label="link to my github repositories"
            className="flex items-center gap-4"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
            <p className="">Lien vers mon GitHub !</p>
          </a>
        </div>
        <div className="text-white hover:text-gallifreyanGold">
          <a
            href="https://www.linkedin.com/in/maxime-bocquet-dev/"
            target="blank"
            aria-label="link to my linkedin profile page"
            className="flex items-center gap-4"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
            <p className="">Consultez ma page Linkedin.</p>
          </a>
        </div>
      </div>
      <div className="mx-4 w-[650px] md:mx-0">
        <form
          className="flex w-full flex-col items-center gap-4"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div
              className={`flex h-14 w-full items-center justify-center rounded-md md:w-6/12 ${isSelected === "name" ? "bg-gradient-to-tr from-gallifreyanGold to-tardisOrange" : "bg-white"} p-1`}
            >
              <input
                className="h-full w-full bg-[#BDBCBC] p-4 outline-none placeholder:font-goodtimes placeholder:text-sm placeholder:text-white"
                type="text"
                id="name"
                value={name}
                placeholder="NOM"
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setIsSelected("name")}
              />
            </div>
            <div
              className={`flex h-14 w-full items-center justify-center rounded-md md:w-6/12 ${isSelected === "phone" ? "bg-gradient-to-tr from-gallifreyanGold to-tardisOrange" : "bg-white"} p-1`}
            >
              <input
                className="h-full w-full bg-[#BDBCBC] p-4 outline-none placeholder:font-goodtimes placeholder:text-sm placeholder:text-white"
                type="text"
                id="phone"
                value={phone}
                placeholder="TELEPHONE"
                onChange={(e) => setPhone(e.target.value)}
                onClick={() => setIsSelected("phone")}
              />
            </div>
          </div>
          <div
            className={`flex h-14 w-full items-center justify-center rounded-md ${isSelected === "email" ? "bg-gradient-to-tr from-gallifreyanGold to-tardisOrange" : "bg-white"} p-1`}
          >
            <input
              className="h-full w-full bg-[#BDBCBC] p-4 outline-none placeholder:font-goodtimes placeholder:text-sm placeholder:text-white"
              type="email"
              id="email"
              value={email}
              placeholder="EMAIL"
              required
              onChange={(e) => setEmail(e.target.value)}
              onClick={() => setIsSelected("email")}
            />
          </div>
          <div
            className={`flex h-60 w-full items-center justify-center rounded-md ${isSelected === "message" ? "bg-gradient-to-tr from-gallifreyanGold to-tardisOrange" : "bg-white"} p-1`}
          >
            <textarea
              className="h-full w-full bg-[#BDBCBC] p-4 align-top outline-none placeholder:font-goodtimes placeholder:text-sm placeholder:text-white"
              type="text"
              id="message"
              value={message}
              placeholder="MESSAGE"
              required
              onChange={(e) => setMessage(e.target.value)}
              onClick={() => setIsSelected("message")}
            />
          </div>
          <div className="flex w-full justify-end">
            <motion.button
              initial={{
                background: "linear-gradient(to right, #ffd700, #ff8c00)",
              }}
              whileHover={{
                background: "linear-gradient(to left, #ffd700, #ff8c00)",
              }}
              className="flex items-center justify-center gap-4 rounded px-6 py-[14px] font-goodtimes text-xs text-white"
              type="submit"
              onClick={() => setIsSelected("")}
            >
              ENVOYER <FontAwesomeIcon icon={faPaperPlane} size="xl" />
            </motion.button>
          </div>
        </form>

        <dialog
          id="modal_success"
          className="modal rounded-lg bg-tardisBlue p-9"
        >
          <div className="modal-box">
            <h3 className="font-goodtimes text-lg text-gallifreyanGold">
              Success !
            </h3>
            <p className="py-8 text-white">
              I&apos;ve received your message, thank you for contacting me!
            </p>
            <div className="modal-action flex w-full justify-end">
              <form method="dialog">
                <button
                  className="clipped-corner items-center justify-center rounded bg-gradient-to-tr from-gallifreyanGold to-tardisOrange px-6 py-[14px] font-goodtimes text-xs text-white"
                  onClick={() => {
                    setName("");
                    setPhone("");
                    setEmail("");
                    setMessage("");
                  }}
                >
                  CLOSE
                </button>
              </form>
            </div>
          </div>
        </dialog>

        <dialog id="modal_error" className="modal rounded-lg bg-tardisBlue p-9">
          <div className="modal-box">
            <h3 className="font-goodtimes text-lg text-tardisOrange">
              Error ...
            </h3>
            <p className="py-8 text-white">{error}</p>
            <div className="modal-action flex w-full justify-end">
              <form method="dialog">
                <button className="clipped-corner items-center justify-center rounded bg-gradient-to-tr from-gallifreyanGold to-tardisOrange px-6 py-[14px] font-goodtimes text-xs text-white">
                  CLOSE
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}
