import dynamic from "next/dynamic";

const SkillsTitle = dynamic(() => import("@/components/titles/SkillsTitle"), {
  ssr: false,
});

const SkillCardsContainer = dynamic(
  () => import("@/components/cards/SkillCardsContainer"),
  {
    ssr: false,
  },
);

export default function Skills() {
  return (
    <div className="mt-10 flex w-screen flex-col">
      <SkillsTitle />
      <div className="flex w-full justify-center py-16">
        <SkillCardsContainer />
      </div>
    </div>
  );
}
