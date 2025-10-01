
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";
import { useRef } from "react";

const testimonialData = [
  {
    quote: `Mohit consistently impressed us with his curiosity, dedication, and ability to take ownership of complex tasks. He resolved Jenkins and Kubernetes automation issues, improved cluster bootstrapping, and contributed to cost-optimized infrastructure design using Ansible. Mohit also proposed a benchmarking pipeline and played a key role in testing our in-house cluster upgrades. For a fresher, he demonstrated exceptional maturity and technical understanding.`,
    name: "Dhiraj Kumar",
    designation: "Sr Manager | DevOps | AI/ML Ops | Data Platform (Qualys)",
  },
  {
    
    quote: `Mohit is a technically strong professional with an exceptional ability to quickly grasp new concepts.. His problem-solving skills, adaptability, and collaborative mindset make him an invaluable asset to any team. He worked with focus, delivered results, and contributed meaningfully to DevOps projects.`,
    name: "Dipak Sawle",
    designation: "Lead DevOps Engineer, Qualys",
  },
];

const Testimonial = () => {
  const swiperRef = useRef(null);
  return (
    <div id="testimonial-section" className="relative w-full flex justify-center items-center py-10 md:py-25">
      {/* Custom Arrows */}
      <button
        className="testimonial-arrow testimonial-arrow-left"
        aria-label="Previous testimonial"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        &#8592;
      </button>
      <div className="flex mx-auto justify-center px-2 max-w-218 w-full">
        <div className="w-full h-full cursor-grab">
          <p className="section-title mb-6 text-center">Testimonials</p>
          <Swiper
            id="testimonialSwiper"
            spaceBetween={30}
            onSwiper={swiper => (swiperRef.current = swiper)}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 30000, // 5 seconds per slide
              disableOnInteraction: false, // keep autoplay after user interaction
            }}
            modules={[EffectFade, Pagination, Autoplay]}
          >
            {testimonialData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialTemplate testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <button
        className="testimonial-arrow testimonial-arrow-right"
        aria-label="Next testimonial"
        onClick={() => swiperRef.current?.slideNext()}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Testimonial;
