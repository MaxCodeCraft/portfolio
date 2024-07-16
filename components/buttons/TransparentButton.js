import Link from "next/link";

export default function TransparentButton(props) {
  return (
    <Link href={props.url}>
      <div className="flex items-center justify-center rounded border-2 border-gallifreyanGold">
        <p className="px-5 py-3 font-goodtimes text-sm text-white">
          {props.title}
        </p>
      </div>
    </Link>
  );
}
