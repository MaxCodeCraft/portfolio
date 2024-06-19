export default function ProjectCard(props) {
  return (
    <div className="relative w-96 overflow-hidden rounded-2xl">
      <img src={props.image} alt={props.alt} className="w-full rounded-2xl" />
      <div className="absolute left-0 top-0 h-full w-full bg-white opacity-40 shadow-inner hover:opacity-0" />
    </div>
  );
}
