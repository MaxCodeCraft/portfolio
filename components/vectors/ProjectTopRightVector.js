export default function ProjectTopRightVector(props) {
  const technos = props.technos.map((tech, idx) => {
    return (
      <div className="flex items-center gap-1" key={idx}>
        <svg
          width="7"
          height="8"
          viewBox="0 0 7 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="4"
            width="4.49979"
            height="4.49979"
            transform="rotate(-45 0 4)"
            fill="#FFD700"
          />
        </svg>
        <p className="text-xs text-white">{tech}</p>
      </div>
    );
  });

  return (
    <>
      {props.isSelected === "top-right" ? (
        <div className="absolute left-1/2 top-40 flex h-[122px] translate-x-[205px] gap-4">
          <div className="flex h-full flex-col justify-end">
            <svg
              width="76"
              height="70"
              viewBox="0 0 76 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.0219 1L42.5944 0.740746L42.7404 0.5H43.0219V1ZM0.333333 67C0.333333 65.5272 1.52724 64.3333 3 64.3333C4.47276 64.3333 5.66667 65.5272 5.66667 67C5.66667 68.4728 4.47276 69.6667 3 69.6667C1.52724 69.6667 0.333333 68.4728 0.333333 67ZM76 1.5H43.0219V0.5H76V1.5ZM43.4495 1.25925L3.42754 67.2593L2.57246 66.7407L42.5944 0.740746L43.4495 1.25925Z"
                fill="#FF8C00"
              />
            </svg>
          </div>
          <div className="flex h-full gap-2">
            <svg
              width="4"
              height="123"
              viewBox="0 0 4 123"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 0.5L1.00001 4.36076L1 118.639L2.99999 122.5"
                stroke="white"
              />
            </svg>
            <div className="flex h-[122px] w-[300px] flex-col justify-between">
              <p className="font-digitalix text-xs text-tardisOrange">
                {props.title.toUpperCase()}
              </p>
              <p className="text-xs text-white">{props.desc}</p>
              <div className="flex flex-wrap gap-2">{technos}</div>
            </div>
            <svg
              width="5"
              height="123"
              viewBox="0 0 5 123"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.00001 0.5L3.99999 4.36076L4 118.639L1.00001 122.5"
                stroke="white"
              />
            </svg>
          </div>
        </div>
      ) : null}
    </>
  );
}
