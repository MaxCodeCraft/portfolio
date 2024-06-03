import Link from "next/link";

export default function TransparentButton(props) {
  return (
    <Link href={props.url}>
      <div className="button-cutted flex items-center justify-center rounded border-2 border-gallifreyanGold">
        <p className="px-5 py-3 font-digitalix text-xs text-white">
          {props.title}
        </p>
      </div>
    </Link>
  );
}
