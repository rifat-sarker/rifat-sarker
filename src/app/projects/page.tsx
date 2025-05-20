import { ProjectsSection } from "@/components/sections/projects-section";
import { PortfolioLayout } from "@/layout/portfolio-layout";
import { getProjects } from "@/service";

export default async function ProjectsPage() {
  const { data: projectsData } = await getProjects();
  return (
    <PortfolioLayout>
      <ProjectsSection projectsData={projectsData} />
    </PortfolioLayout>
  );
}
