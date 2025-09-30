import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css"; // reuse styles

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 1,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1220: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
};

const experienceData = [
  {
    id: 1,
    image: img1,
    role: "DevOps Engineer",
    company: "Qualys",
    duration: "Cloud Infrastructure Project",
    description: [
      "Built a benchmarking pipeline for Docker base images (CPU, memory, disk IOPS, latency) using Ansible & Jenkins.",
      "Improved CI/CD security with dynamic TLS handling, increasing deployment reliability.",
      "Enhanced monitoring with Prometheus & Grafana, optimized autoscaling in Kubernetes (OKE).",
    ],
  },
  {
    id: 2,
    image: img2,
    role: "DevOps Engineer",
    company: "Solytics Partners",
    duration: "Azure Migration & CI/CD",
    description: [
      "Designed & maintained multi-environment CI/CD pipelines (Preprod, QA, Dev, Prod).",
      "Built custom pipelines for Microsoft Azure after AWS → Azure migration.",
      "Delivered client-ready architecture documentation for stakeholders.",
    ],
  },
  {
    id: 3,
    image: img3,
    role: "DevOps Engineer",
    company: "Lovenheal",
    duration: "Production System Automation",
    description: [
      "Developed Jenkins pipelines for app deployments; resolved live SSL/TLS issues.",
      "Automated uptime monitoring & DB backups using Bash & Cron.",
      "Built Grafana dashboards & centralized log monitoring with Loki + Promtail.",
    ],
  },
  {
    id: 4,
    image: img4,
    role: "DevOps Engineer",
    company: "Hackveda",
    duration: "End-to-End DevOps Setup",
    description: [
      "Set up complete CI/CD pipeline on AWS with Jenkins, Docker & Git integration.",
      "Implemented containerized deployments with Docker & Helm.",
      "Configured NGINX reverse proxy for scalable, load-balanced environments.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="content py-25 px-2 relative" id="experience">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Experience</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Real-world DevOps case studies where I built scalable systems, optimized CI/CD, and automated deployments for clients across industries.
        </p>
      </div>

      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {experienceData?.map((exp) => (
          <SwiperSlide
            key={exp.id}
            className="mb-10"
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full p-6 flex flex-col">
              <img
                src={exp.image}
                alt={exp.company}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {exp.role} @ {exp.company}
              </h3>
              <p className="text-sm text-picto-primary font-medium mb-3">
                {exp.duration}
              </p>
              <ul className="list-disc pl-5 text-gray-600 text-sm flex-1">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="mb-1">{point}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Experience;
