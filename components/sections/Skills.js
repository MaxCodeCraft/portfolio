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
    <div
      id="skills"
      className="bg-nebula flex w-screen flex-col bg-spatialGrey pt-10"
    >
      <SkillsTitle />
      <div className="flex w-full justify-center py-16">
        <SkillCardsContainer />
      </div>
    </div>
  );
}
