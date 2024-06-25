export default function ProjectCard(props) {
  return (
    <div className="relative h-[173px] w-[329px] overflow-hidden">
      <img src={props.image} alt={props.alt} className="w-full" />
      <div className="absolute left-0 top-0 h-full w-full bg-white opacity-40 shadow-inner hover:opacity-0" />
    </div>
  );
}
