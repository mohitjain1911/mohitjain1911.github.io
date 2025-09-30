import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Mohit consistently impressed us with his curiosity, dedication, and ability to take ownership of complex tasks.",
    quote: `He resolved Jenkins and Kubernetes automation issues, improved cluster bootstrapping, and contributed to cost-optimized infrastructure design using Ansible. Mohit also proposed a benchmarking pipeline and played a key role in testing our in-house cluster upgrades. For a fresher, he demonstrated exceptional maturity and technical understanding.`,
    name: "Dhiraj Kumar",
    designation: "Sr Manager | DevOps | AI/ML Ops | Data Platform (Qualys)",
  },
  {
    message:
      "Mohit is a technically strong professional with an exceptional ability to quickly grasp new concepts.",
    quote: `His problem-solving skills, adaptability, and collaborative mindset make him an invaluable asset to any team. He worked with focus, delivered results, and contributed meaningfully to DevOps projects.`,
    name: "Dipak Sawle",
    designation: "Lead DevOps Engineer, Qualys",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonials</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000, // 5 seconds per slide
            disableOnInteraction: false, // keep autoplay after user interaction
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
