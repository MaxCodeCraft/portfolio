"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const ContactTitle = dynamic(() => import("@/components/titles/ContactTitle"), {
  ssr: false,
});

export default function Contact() {
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
    <div id="contact" className="flex w-full flex-col bg-spatialGrey">
      <ContactTitle />
      <div className="m-auto flex w-[650px] py-16">
        <form
          className="flex w-full flex-col items-center gap-4"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="flex w-full gap-4">
            <div className="flex h-14 w-1/2 items-center justify-center rounded-md bg-gradient-to-tr from-gallifreyanGold to-tardisOrange p-1">
              <input
                className="h-full w-full bg-[#BDBCBC] p-2 placeholder:font-digitalix placeholder:text-white"
                type="text"
                id="name"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex h-14 w-1/2 items-center justify-center rounded-md bg-gradient-to-tr from-gallifreyanGold to-tardisOrange p-1">
              <input
                className="h-full w-full bg-[#BDBCBC] p-2 placeholder:font-digitalix placeholder:text-white"
                type="text"
                id="phone"
                value={phone}
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="flex h-14 w-full items-center justify-center rounded-md bg-gradient-to-tr from-gallifreyanGold to-tardisOrange p-1">
            <input
              className="h-full w-full bg-[#BDBCBC] p-2 placeholder:font-digitalix placeholder:text-white"
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex h-60 w-full items-center justify-center rounded-md bg-gradient-to-tr from-gallifreyanGold to-tardisOrange p-1">
            <textarea
              className="h-full w-full bg-[#BDBCBC] p-2 align-top placeholder:font-digitalix placeholder:text-white"
              type="text"
              id="message"
              value={message}
              placeholder="Message"
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex w-full justify-end">
            <button
              className="clipped-corner items-center justify-center rounded bg-gradient-to-tr from-gallifreyanGold to-tardisOrange px-6 py-[14px] font-digitalix text-xs text-white"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>

        <dialog
          id="modal_success"
          className="modal rounded-lg bg-tardisBlue p-9"
        >
          <div className="modal-box">
            <h3 className="font-digitalix text-lg text-gallifreyanGold">
              Success !
            </h3>
            <p className="py-8 text-white">
              I&apos;ve received your message, thank you for contacting me!
            </p>
            <div className="modal-action flex w-full justify-end">
              <form method="dialog">
                <button
                  className="clipped-corner items-center justify-center rounded bg-gradient-to-tr from-gallifreyanGold to-tardisOrange px-6 py-[14px] font-digitalix text-xs text-white"
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
            <h3 className="font-digitalix text-lg text-tardisOrange">
              Error ...
            </h3>
            <p className="py-8 text-white">{error}</p>
            <div className="modal-action flex w-full justify-end">
              <form method="dialog">
                <button className="clipped-corner items-center justify-center rounded bg-gradient-to-tr from-gallifreyanGold to-tardisOrange px-6 py-[14px] font-digitalix text-xs text-white">
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
