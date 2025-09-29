import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "DevOps / Multi-Cloud",
    title: "Multi-Cloud CI/CD",
    description:
      "Built a Jenkins + Terraform + Helm pipeline to deploy a demo app to AWS EKS and Azure AKS. Reliable, repeatable deployments across two clouds.",
    link: "https://github.com/mohitjain1911/multi-cloud-ci-cd",
  },
  {
    id: 2,
    image: card2,
    category: "DevOps / Kubernetes",
    title: "Kubernetes CI/CD + Docker",
    description:
      "Engineered Jenkins pipelines for Docker CI/CD and Helm deployments. Added rollback, retries, and logging to deploy a sample app reliably.",
    link: "https://github.com/mohitjain1911/cicd-kube-docker",
  },
  {
    id: 3,
    image: card3,
    category: "DevOps / Automation",
    title: "Ansible Automation",
    description:
      "Automated server provisioning and configuration using reusable, idempotent Ansible playbooks and roles. Ensured consistent and production-ready environments.",
    link: "https://github.com/mohitjain1911/ansible-project",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
