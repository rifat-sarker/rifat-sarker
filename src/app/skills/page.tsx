import { SkillsSection } from "@/components/sections/skills-section";
import { PortfolioLayout } from "@/layout/portfolio-layout";
import { getSkills } from "@/service";

export default async function SkillsPage() {
  const { data: skillsData } = await getSkills();
  // console.log("Skills received:", skillsData);

  return (
    <PortfolioLayout>
      <SkillsSection skills={skillsData} />
    </PortfolioLayout>
  );
}
