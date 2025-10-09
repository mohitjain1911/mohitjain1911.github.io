import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "2 Y.",
  },
  {
    id: 2,
    title: "CI/CD Pipelines Built",
    description: "10+",
  },
  {
    id: 3,
    title: "Cloud Platforms",
    description: "AWS & Azure",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Mohit Jain
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a Freelance DevOps Engineer and based in Maharashtra, India. I specialize in designing cloud-native solutions with a focus on scalability, automation, and system reliability. I have 2 years of hands-on experience in building and maintaining CI/CD pipelines, working with Jenkins, Ansible, Prometheus, and Grafana. Skilled in automation; cloud platforms (AWS & Azure); monitoring; and creating client-facing architecture documentation. Strong in troubleshooting, system reliability, and cross-team collaboration.
            
          </p>
          <div className="mt-6 text-center lg:text-start">
            {/* Stack buttons vertically on small screens, row on sm+ screens */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start w-full">
              <a
                className="btn-primary btn btn-xs xxs:btn-lg text-white w-full sm:w-auto text-center"
                href="mailto:mohitjain1940@gmail.com"
              >
                Say Hello!
              </a>

              <a
                className="btn-primary btn btn-xs xxs:btn-lg text-white w-full sm:w-auto text-center"
                href="#portfolio"
                aria-label="Go to portfolio section"
              >
                My Projects
              </a>

              <a
                className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary text-xs xxs:text-[14px] sm:text-[16px] w-full sm:w-auto text-center"
                href="/resume.pdf"
                download="MohitJain_Resume.pdf"
              >
                Download CV
              </a>
            </div>
          </div>
          
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      {/* Image removed per design: show text-only hero */}
    </div>
  );
};

export default Introduction;
