"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const ContactTitle = dynamic(() => import("@/components/titles/ContactTitle"), {
  ssr: false,
});

const handleSubmit = () => {
  return;
};

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [textContent, setTextContent] = useState("");

  return (
    <div id="contact" className="flex w-full flex-col bg-spatialGrey">
      <ContactTitle />
      <div className="m-auto flex w-[650px] py-16">
        <form
          className="flex w-full flex-col items-center gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex w-full gap-4">
            <div className="flex h-14 w-1/2 items-center justify-center rounded-md bg-gradient-to-tr from-gallifreyanGold to-tardisOrange p-1">
              <input
                className="h-full w-full bg-[#BDBCBC] p-2 placeholder:font-digitalix placeholder:text-white"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex h-14 w-1/2 items-center justify-center rounded-md bg-gradient-to-tr from-gallifreyanGold to-tardisOrange p-1">
              <input
                className="h-full w-full bg-[#BDBCBC] p-2 placeholder:font-digitalix placeholder:text-white"
                type="text"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="flex h-14 w-full items-center justify-center rounded-md bg-gradient-to-tr from-gallifreyanGold to-tardisOrange p-1">
            <input
              className="h-full w-full bg-[#BDBCBC] p-2 placeholder:font-digitalix placeholder:text-white"
              type="email"
              placeholder="Email"
              required="true"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex h-60 w-full items-center justify-center rounded-md bg-gradient-to-tr from-gallifreyanGold to-tardisOrange p-1">
            <textarea
              className="h-full w-full bg-[#BDBCBC] p-2 align-top placeholder:font-digitalix placeholder:text-white"
              type="text"
              placeholder="Message"
              required="true"
              onChange={(e) => setTextContent(e.target.value)}
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
      </div>
    </div>
  );
}
