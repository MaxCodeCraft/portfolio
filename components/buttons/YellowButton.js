import Link from "next/link";

export default function YellowButton(props) {
  return (
    <Link href={props.url}>
      <div className="clipped-corner items-center justify-center rounded bg-gradient-to-tr from-gallifreyanGold to-tardisOrange">
        <p className="px-6 py-[14px] font-digitalix text-xs text-white">
          {props.title}
        </p>
      </div>
    </Link>
  );
}
