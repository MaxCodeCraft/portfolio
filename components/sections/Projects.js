import dynamic from "next/dynamic";

const ProjectsTitle = dynamic(
  () => import("@/components/titles/ProjectsTitle"),
  {
    ssr: false,
  },
);

export default function Projects() {
  return (
    <div className="mt-28 flex w-screen flex-col">
      <ProjectsTitle />
      <div className="flex w-full justify-center py-32">
        <svg
          width="576"
          height="516"
          viewBox="0 0 576 516"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M334.075 156.169H236.775L150.147 3L133.198 12.4161L221.082 164.957L172.118 249.075H2V267.279H172.118L219.826 353.28L134.453 503.31L148.891 513.354L236.147 361.44H334.075L422.587 513.354L438.908 503.31L351.024 353.28L399.988 267.279H574.5V248.447H399.988L351.024 164.957L438.28 13.0439L422.587 3.62774L334.075 156.169Z"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M434.514 23.0877L564.456 247.191M564.456 269.162L434.514 493.894M417.565 505.193H154.541M138.22 495.149L7.02197 267.279M7.02197 248.447L138.22 21.8322M155.169 11.1606H418.192"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}