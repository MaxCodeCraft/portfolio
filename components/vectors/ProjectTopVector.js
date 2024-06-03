export default function ProjectTopVector(props) {
  return (
    <div
      className={`absolute left-1/2 top-10 h-[122px] gap-4 ${props.isSelected ? "flex" : "hidden"}`}
    >
      <div className="flex h-full flex-col justify-end">
        <svg
          width="149"
          height="70"
          viewBox="0 0 149 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M83.0439 0.499999L82.7258 0.114227L82.8643 -7.15256e-07H83.0439V0.499999ZM0.333333 66.5C0.333333 65.0272 1.52724 63.8333 3 63.8333C4.47276 63.8333 5.66667 65.0272 5.66667 66.5C5.66667 67.9728 4.47276 69.1667 3 69.1667C1.52724 69.1667 0.333333 67.9728 0.333333 66.5ZM149 0.999999H83.0439V-7.15256e-07H149V0.999999ZM83.3619 0.885772L3.31809 66.8858L2.68191 66.1142L82.7258 0.114227L83.3619 0.885772Z"
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
          <p className="font-digitalix text-xs text-tardisOrange">NOTAVIEW</p>
          <p className="text-xs text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex text-xs text-white">
            <p>React</p>
            <p>TypeScript</p>
          </div>
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
  );
}
