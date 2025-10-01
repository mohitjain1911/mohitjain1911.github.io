import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "DevOps Engineering",
    description:
      "I design and manage CI/CD pipelines using Jenkins and GitHub Actions, ensuring smooth and automated software delivery.",
  },
  {
    id: 2,
    title: "Cloud & Containers",
    description:
      "I work with AWS, Azure, Docker, and Kubernetes to build scalable, secure, and containerized cloud-native applications.",
  },
  {
    id: 3,
    title: "Infrastructure as Code",
    description:
      "I use Terraform and Ansible to automate infrastructure provisioning, configuration management, and system reliability.",
  },
  {
    id: 4,
    title: "Monitoring & Observability",
    description:
      "I enhance system visibility with Prometheus and Grafana, implementing alerting and dashboards for proactive issue resolution.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in automating infrastructure, managing cloud platforms, and building scalable DevOps solutions that improve software delivery and reliability.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My expertise combines tools like Jenkins, Kubernetes, Terraform, and monitoring stacks to deliver secure, efficient, and production-ready systems.
          </p>
        </div>
        <a
          href="mailto:your-email@example.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Contact Me
        </a>
      </div>
      <div>
        {rolesData.map((role) => (
          <Roles role={role} key={role.id} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
