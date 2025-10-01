import hackvedaLogo from '../../assets/brand-logos/hackveda.png';
import lovenhealLogo from '../../assets/brand-logos/lovenheal.png';
import solyticsLogo from '../../assets/brand-logos/solytics.png';
import qualysLogo from '../../assets/brand-logos/qualys.png';
import Marquee from "react-fast-marquee";

const commonSVGClass = "h-16 w-32 object-contain transition-all duration-300";

const brandLogos = [
  <img src={hackvedaLogo} alt="Hackveda" className={commonSVGClass} />,
  <img src={lovenhealLogo} alt="Lovenheal" className={commonSVGClass} />,
  <img src={solyticsLogo} alt="Solytics Partners" className={commonSVGClass} />,
  <img src={qualysLogo} alt="Qualys" className={commonSVGClass} />,
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center">
        <p className="section-title mb-6">Happy Clients</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I've had the pleasure of working with a diverse range of companies,
          from startups to established brands.
        </p>
      </div>

      <Marquee pauseOnHover={true} speed={60} gradient={false}>
        <div className="flex items-center gap-16 pt-6">
          {brandLogos.map((logo, index) => (
            <span 
              key={index} 
              className="flex items-center justify-center bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all"
            >
              {logo}
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default HappyClients;
