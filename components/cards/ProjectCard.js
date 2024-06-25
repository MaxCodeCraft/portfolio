import Image from "next/image";

export default function ProjectCard(props) {
  return (
    <div className="relative h-[173px] w-[329px] overflow-hidden rounded-sm">
      <Image
        src={props.image}
        alt={props.alt}
        width={329}
        height={173}
        className="w-full rounded-sm"
      />
      {/* <img src={props.image} alt={props.alt} className="w-full rounded-sm" /> */}
      <div className="tv absolute left-0 top-0 h-full w-full bg-white opacity-40 shadow-inner hover:opacity-0" />
    </div>
  );
}
