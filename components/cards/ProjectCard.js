export default function ProjectCard(props) {
  return (
    <div className="h-64 w-80 overflow-hidden rounded-2xl">
      <img src={props.image} alt={props.alt} className="w-full rounded-2xl" />
    </div>
  );
}
