import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoadingSpinner from './Components/LoadingSpinner';
import Navbar from './Components/Navbar';
import HeroCarousel from './Pages/Home';
import Footer from './Pages/Footer';
import About from './Pages/About';
import Contact from './Pages/Contact';
import WebsiteDevelopment from './Pages/Website Development';
import SEO from './Pages/Seo';
import SocialMediaMarketing from './Pages/Social Media';
import DigitalMarketingServices from './Pages/Digital Marketing';
import FloatingButtons from './Components/FloatingButtons';
/* import Blog from './Pages/Blog'; */
import Appdevelopment from './Pages/Appdevelopment';
import PayNowPage from './Pages/PayNow';
import MarketArea from './Pages/MarketArea';

import DelhiFirstGooglePromotion from './Pages/Delhi Seo/DelhiFirstGooglePromotion';
import DelhiGuaranteedGooglePromotion from './Pages/Delhi Seo/DelhiGuaranteedGooglePromotion';
import DelhiTopSEOCompany from './Pages/Delhi Seo/DelhiTopSEOCompany';
import LocalPromotionServiceDelhi from './Pages/Delhi Seo/LocalPromotionDelhi';
import GuaranteedLocalPromotionDelhi from './Pages/Delhi Seo/GuaranteedLocalPromotionDelhi';
import SeoAgencyDelhi from './Pages/Delhi Seo/SeoAgencyDelhi';
import BestSeoAgencyDelhi from './Pages/Delhi Seo/BestSeoAgencyDelhi';
import GooglePromotionDelhi from './Pages/Delhi Seo/GooglePromotionServiceDelhi';
import BestGooglePromotionDelhi from './Pages/Delhi Seo/BestGooglePromotionDelhi';
import SeoPromotionServiceDelhi from './Pages/Delhi Seo/SeoPromotionServiceDelhi';
import BestSeoPromotionServiceDelhi from './Pages/Delhi Seo/BestSeoPromotionServiceDelhi';
import DelhiTopDigitalMarketingAgency from './Pages/Delhi Seo/DelhiTopDigitalMarketingAgency';

import IndiaFirstGooglePromotion from './Pages/India Seo/IndiaFirstGooglePromotion';
import IndiaGuaranteedGooglePromotion from './Pages/India Seo/IndiaGuaranteedGooglePromotion';
import IndiaTopSEOCompany from './Pages/India Seo/IndiaTopSEOCompany';
import IndiaTopDigitalMarketingAgency from './Pages/India Seo/IndiaTopDigitalMarketingAgency';
import IndiaLocalPromotionService from './Pages/India Seo/IndiaLocalPromotionService';
import IndiaGuaranteedLocalPromotion from './Pages/India Seo/IndiaGuaranteedLocalPromotion';
import IndiaSeoServiceAgency from './Pages/India Seo/IndiaSeoServiceAgency';
import IndiaBestSeoAgencyService from './Pages/India Seo/IndiaBestSeoAgencyService';
import IndiaGooglePromotionServices from './Pages/India Seo/IndiaGooglePromotionServices';
import IndiaBestGooglePromotion from './Pages/India Seo/IndiaBestGooglePromotion';
import IndiaSeoPromotionService from './Pages/India Seo/IndiaSeoPromotionService';
import IndiaBestSeoPromotionService from './Pages/India Seo/IndiaBestSeoPromotionService';

import MumbaiTopSEOCompany from './Pages/Mumbai Seo/MumbaiTopSEOCompany';
import MumbaiGuaranteedGooglePromotion from './Pages/Mumbai Seo/MumbaiGuaranteedGooglePromotion';
import MumbaiFirstGooglePromotion from './Pages/Mumbai Seo/MumbaiFirstGooglePromotion';
import MumbaiTopDigitalMarketingAgency from './Pages/Mumbai Seo/MumbaiTopDigitalMarketingAgency';
import MumbaiLocalPromotionService from './Pages/Mumbai Seo/MumbaiLocalPromotionService';
import MumbaiGuaranteedLocalPromotion from './Pages/Mumbai Seo/MumbaiGuaranteedLocalPromotion';
import MumbaiBestSeoAgencyService from './Pages/Mumbai Seo/MumbaiBestSeoAgencyService';
import MumbaiSeoServiceAgency from './Pages/Mumbai Seo/MumbaiSeoServiceAgency';
import MumbaiGooglePromotionServices from './Pages/Mumbai Seo/MumbaiGooglePromotionServices';
import MumbaiBestGooglePromotionService from './Pages/Mumbai Seo/MumbaiBestGooglePromotionService';
import MumbaiSeoPromotionService from './Pages/Mumbai Seo/MumbaiSeoPromotionService';
import MumbaiBestSeoPromotionService from './Pages/Mumbai Seo/MumbaiBestSeoPromotionService';

import GujaratFirstGooglePromotion from './Pages/Gujarat/GujaratFirstGooglePromotion';
import GujaratGuaranteedGooglePromotion from './Pages/Gujarat/GujaratGuaranteedGooglePromotion';
import GujaratTopSEOCompany from './Pages/Gujarat/GujaratTopSEOCompany';
import GujaratTopDigitalMarketingAgency from './Pages/Gujarat/GujaratTopDigitalMarketingAgency';
import GujaratLocalPromotionService from './Pages/Gujarat/GujaratLocalPromotionService';
import GujaratGuaranteedLocalPromotion from './Pages/Gujarat/GujaratGuaranteedLocalPromotion';
import GujaratSeoServiceAgency from './Pages/Gujarat/GujaratSeoServiceAgency';
import GujaratBestSeoAgencyService from './Pages/Gujarat/GujaratBestSeoAgencyService';
import GujaratGooglePromotionServices from './Pages/Gujarat/GujaratGooglePromotionServices';
import GujaratBestGooglePromotionService from './Pages/Gujarat/GujaratBestGooglePromotionService';
import GujaratSeoPromotionService from './Pages/Gujarat/GujaratSeoPromotionService';
import GujaratBestSeoPromotionService from './Pages/Gujarat/GujaratBestSeoPromotionService';

import IndoreFirstGooglePromotion from './Pages/Indore Seo/IndoreFirstGooglePromotion';
import IndoreGuaranteedGooglePromotion from './Pages/Indore Seo/IndoreGuaranteedGooglePromotion';
import IndoreTopDigitalMarketingAgency from './Pages/Indore Seo/IndoreTopDigitalMarketingAgency';
import IndoreTopSEOCompany from './Pages/Indore Seo/IndoreTopSEOCompany';
import IndoreLocalPromotionService from './Pages/Indore Seo/IndoreLocalPromotionService';
import IndoreGuaranteedLocalPromotion from './Pages/Indore Seo/IndoreGuaranteedLocalPromotion';
import IndoreSeoServiceAgency from './Pages/Indore Seo/IndoreSeoServiceAgency';
import IndoreBestSeoAgencyService from './Pages/Indore Seo/IndoreBestSeoAgencyService';
import IndoreGooglePromotionServices from './Pages/Indore Seo/IndoreGooglePromotionServices';
import IndoreBestGooglePromotionService from './Pages/Indore Seo/IndoreBestGooglePromotionService';
import IndoreSeoPromotionService from './Pages/Indore Seo/IndoreSeoPromotionService';
import IndoreBestSeoPromotionService from './Pages/Indore Seo/IndoreBestSeoPromotionService';
import HyderabadFirstGooglePromotion from './Pages/Hyderabad/HyderabadFirstGooglePromotion';
import HyderabadGuaranteedGooglePromotion from './Pages/Hyderabad/HyderabadGuaranteedGooglePromotion';
import HyderabadTopSEOCompany from './Pages/Hyderabad/HyderabadTopSEOCompany.JSX';
import HyderabadTopDigitalMarketingAgency from './Pages/Hyderabad/HyderabadTopDigitalMarketingAgency';
import HyderabadLocalPromotionService from './Pages/Hyderabad/HyderabadLocalPromotionService';
import HyderabadGuaranteedLocalPromotion from './Pages/Hyderabad/HyderabadGuaranteedLocalPromotion';
import HyderabadSeoServiceAgency from './Pages/Hyderabad/HyderabadSeoServiceAgency';
import HyderabadBestSeoAgencyService from './Pages/Hyderabad/HyderabadBestSeoAgencyService';
import HyderabadGooglePromotionServices from './Pages/Hyderabad/HyderabadGooglePromotionServices';
import HyderabadBestGooglePromotionService from './Pages/Hyderabad/HyderabadBestGooglePromotionService.JSX';
import HyderabadSeoPromotionService from './Pages/Hyderabad/HyderabadSeoPromotionService';
import HyderabadBestSeoPromotionService from './Pages/Hyderabad/HyderabadBestSeoPromotionService';
import GoogleMyBusiness from './Pages/GoogleMyBusiness';

import RajoriGardenFirstGooglePromotion from './Pages/Delhi Seo/Local Area Delhi RajoriGarden/RajoriGardenFirstGooglePromotion';
import RajoriGardenGuaranteedGooglePromotion from './Pages/Delhi Seo/Local Area Delhi RajoriGarden/RajoriGardenGuaranteedGooglePromotion';
import RajouriGardenTopSEOCompany from './Pages/Delhi Seo/Local Area Delhi RajoriGarden/RajouriGardenTopSEOCompany';
import RajoriGardenTopDigitalMarketingAgency from './Pages/Delhi Seo/Local Area Delhi RajoriGarden/RajoriGardenTopDigitalMarketingAgency';
import RajoriGardenLocalPromotionServiceDelhi from './Pages/Delhi Seo/Local Area Delhi RajoriGarden/RajoriGardenLocalPromotionServiceDelhi';
import RajoriGardenGuaranteedLocalPromotionDelhi from './Pages/Delhi Seo/Local Area Delhi RajoriGarden/RajoriGardenGuaranteedLocalPromotionDelhi';
import RajoriGardenBestSeoAgencyDelhi from './Pages/Delhi Seo/Local Area Delhi RajoriGarden/RajoriGardenBestSeoAgencyDelhi';
import RajoriGardenGooglePromotionDelhi from './Pages/Delhi Seo/Local Area Delhi RajoriGarden/RajoriGardenGooglePromotionDelhi';
import RajoriGardenSeoPromotionServiceDelhi from './Pages/Delhi Seo/Local Area Delhi RajoriGarden/RajoriGardenSeoPromotionServiceDelhi';
import RajoriGardenBestSeoPromotionServiceDelhi from './Pages/Delhi Seo/Local Area Delhi RajoriGarden/RajoriGardenBestSeoPromotionServiceDelhi';
import TilakNagarFirstGooglePromotion from './Pages/Delhi Seo/Local Area Delhi Tilak Nagar/TilakNagarFirstGooglePromotion';
import RajoriGardenSeoAgencyDelhi from './Pages/Delhi Seo/Local Area Delhi RajoriGarden/RajoriGardenSeoAgencyDelhi';
import TilakNagarGuaranteedGooglePromotion from './Pages/Delhi Seo/Local Area Delhi Tilak Nagar/TilakNagarGuaranteedGooglePromotion';
import TilakNagarTopDigitalMarketingAgency from './Pages/Delhi Seo/Local Area Delhi Tilak Nagar/TilakNagarTopDigitalMarketingAgency';
import TilakNagarGuaranteedLocalPromotionDelhi from './Pages/Delhi Seo/Local Area Delhi Tilak Nagar/TilakNagarGuaranteedLocalPromotionDelhi';
import TilakNagarTopSEOCompany from './Pages/Delhi Seo/Local Area Delhi Tilak Nagar/TilakNagarTopSEOCompany';
import TilakNagarLocalPromotionServiceDelhi from './Pages/Delhi Seo/Local Area Delhi Tilak Nagar/TilakNagarLocalPromotionServiceDelhi';
import LoginPage from './Admin Panel/Login';
import PromoPopup from './Components/PromoPopup';
import GlobalEnquiryButton from './Components/GlobalEnquiryButton';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermConditions from './Pages/TermConditions';

// Layout wrapper component
const Layout = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/login');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <FloatingButtons />}
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <PromoPopup />}
      {!isAdminRoute && <GlobalEnquiryButton/>}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <LoadingSpinner />
      <Layout>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<HeroCarousel />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/google-promotion" element={<DelhiFirstGooglePromotion />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingServices />} />
          <Route path="/services/google-my-business" element={<GoogleMyBusiness />} />
          <Route path="/services/app-development" element={<Appdevelopment />} />
          {/*<Route path="/blog" element={<Blog/>} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/pay-now" element={<PayNowPage />} />
          <Route path="/marketarea" element={<MarketArea />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-conditions" element={<TermConditions/>} />

          {/* Delhi Main Route */}
          <Route path="/delhi" element={<DelhiFirstGooglePromotion />} />
          <Route path="/delhi/guaranteed-google-promotion-services" element={<DelhiGuaranteedGooglePromotion />} />
          <Route path="/delhi/top-seo-company" element={<DelhiTopSEOCompany />} />
          <Route path="/delhi/top-digital-marketing-agency" element={<DelhiTopDigitalMarketingAgency />} />
          <Route path="/delhi/local-promotion-service" element={<LocalPromotionServiceDelhi />} />
          <Route path="/delhi/guaranteed-local-promotion-service" element={<GuaranteedLocalPromotionDelhi />} />
          <Route path="/delhi/seo-service-agency" element={<SeoAgencyDelhi />} />
          <Route path="/delhi/best-seo-service-agency" element={<BestSeoAgencyDelhi />} />
          <Route path="/delhi/google-promotion-services" element={<GooglePromotionDelhi />} />
          <Route path="/delhi/best-google-promotion-service" element={<BestGooglePromotionDelhi />} />
          <Route path="/delhi/seo-promotion-service" element={<SeoPromotionServiceDelhi />} />
          <Route path="/delhi/best-seo-promotion-service" element={<BestSeoPromotionServiceDelhi />} />

          {/* Delhi Local Area Main Route */}
          <Route path="/delhi/rajouri-garden" element={<RajoriGardenFirstGooglePromotion />} />
          <Route path="/delhi/rajouri-garden/guaranteed-google-promotion-services" element={<RajoriGardenGuaranteedGooglePromotion />} />
          <Route path="/delhi/rajouri-garden/top-seo-company" element={<RajouriGardenTopSEOCompany />} />
          <Route path="/delhi/rajouri-garden/top-digital-marketing-agency" element={<RajoriGardenTopDigitalMarketingAgency />} />
          <Route path="/delhi/rajori-garden/local-promotion-service" element={<RajoriGardenLocalPromotionServiceDelhi />} />
          <Route path="/delhi/rajori-garden/guaranteed-local-promotion-service" element={<RajoriGardenGuaranteedLocalPromotionDelhi />} />
          <Route path="/delhi/rajori-garden/seo-service-agency" element={<RajoriGardenSeoAgencyDelhi />} />
          <Route path="/delhi/rajori-garden/best-seo-service-agency" element={<RajoriGardenBestSeoAgencyDelhi />} />
          <Route path="/delhi/rajori-garden/google-promotion-services" element={<RajoriGardenGooglePromotionDelhi />} />
          <Route path="/delhi/rajori-garden/seo-promotion-service" element={<RajoriGardenSeoPromotionServiceDelhi />} />
          <Route path="/delhi/rajori-garden/best-seo-promotion-service" element={<RajoriGardenBestSeoPromotionServiceDelhi />} />

          <Route path="/delhi/tilak-nagar" element={<TilakNagarFirstGooglePromotion />} />
          <Route path="/delhi/tilak-nagar/guaranteed-google-promotion-services" element={<TilakNagarGuaranteedGooglePromotion />} />
          <Route path="/delhi/tilak-nagar/top-seo-company" element={<TilakNagarTopSEOCompany />} />
          <Route path="/delhi/tilak-nagar/top-digital-marketing-agency" element={<TilakNagarTopDigitalMarketingAgency />} />
          <Route path="/delhi/tilak-nagar/local-promotion-service" element={<TilakNagarLocalPromotionServiceDelhi />} />
          <Route path="/delhi/tilak-nagar/guaranteed-local-promotion-service" element={<TilakNagarGuaranteedLocalPromotionDelhi />} />

          <Route path="/login" element={<LoginPage />} />

          {/* India Main Route */}
          <Route path="/india" element={<IndiaFirstGooglePromotion />} />
          <Route path="/india/guaranteed-google-promotion-services" element={<IndiaGuaranteedGooglePromotion />} />
          <Route path="/india/top-seo-company" element={<IndiaTopSEOCompany />} />
          <Route path="/india/top-digital-marketing-agency" element={<IndiaTopDigitalMarketingAgency />} />
          <Route path="/india/local-promotion-service" element={<IndiaLocalPromotionService />} />
          <Route path="/india/guaranteed-local-promotion-service" element={<IndiaGuaranteedLocalPromotion />} />
          <Route path="/india/seo-service-agency" element={<IndiaSeoServiceAgency />} />
          <Route path="/india/best-seo-service-agency" element={<IndiaBestSeoAgencyService />} />
          <Route path="/india/google-promotion-services" element={<IndiaGooglePromotionServices />} />
          <Route path="/india/best-google-promotion-service" element={<IndiaBestGooglePromotion />} />
          <Route path="/india/seo-promotion-service" element={<IndiaSeoPromotionService />} />
          <Route path="/india/best-seo-promotion-service" element={<IndiaBestSeoPromotionService />} />

          {/* Mumbai Main Route */}
          <Route path="/mumbai" element={<MumbaiFirstGooglePromotion />} />
          <Route path="/mumbai/guaranteed-google-promotion-services" element={<MumbaiGuaranteedGooglePromotion />} />
          <Route path="/mumbai/top-seo-company" element={<MumbaiTopSEOCompany />} />
          <Route path="/mumbai/top-digital-marketing-agency" element={<MumbaiTopDigitalMarketingAgency />} />
          <Route path="/mumbai/local-promotion-service" element={<MumbaiLocalPromotionService />} />
          <Route path="/mumbai/guaranteed-local-promotion-service" element={<MumbaiGuaranteedLocalPromotion />} />
          <Route path="/mumbai/seo-service-agency" element={<MumbaiSeoServiceAgency />} />
          <Route path="/mumbai/best-seo-service-agency" element={<MumbaiBestSeoAgencyService />} />
          <Route path="/mumbai/google-promotion-services" element={<MumbaiGooglePromotionServices />} />
          <Route path="/mumbai/best-google-promotion-service" element={<MumbaiBestGooglePromotionService />} />
          <Route path="/mumbai/seo-promotion-service" element={<MumbaiSeoPromotionService />} />
          <Route path="/mumbai/best-seo-promotion-service" element={<MumbaiBestSeoPromotionService />} />

          {/* Gujarat Main Route */}
          <Route path="/gujarat" element={<GujaratFirstGooglePromotion />} />
          <Route path="/gujarat/guaranteed-google-promotion-services" element={<GujaratGuaranteedGooglePromotion />} />
          <Route path="/gujarat/top-seo-company" element={<GujaratTopSEOCompany />} />
          <Route path="/gujarat/top-digital-marketing-agency" element={<GujaratTopDigitalMarketingAgency />} />
          <Route path="/gujarat/local-promotion-service" element={<GujaratLocalPromotionService />} />
          <Route path="/gujarat/guaranteed-local-promotion-service" element={<GujaratGuaranteedLocalPromotion />} />
          <Route path="/gujarat/seo-service-agency" element={<GujaratSeoServiceAgency />} />
          <Route path="/gujarat/best-seo-service-agency" element={<GujaratBestSeoAgencyService />} />
          <Route path="/gujarat/google-promotion-services" element={<GujaratGooglePromotionServices />} />
          <Route path="/gujarat/best-google-promotion-service" element={<GujaratBestGooglePromotionService />} />
          <Route path="/gujarat/seo-promotion-service" element={<GujaratSeoPromotionService />} />
          <Route path="/gujarat/best-seo-promotion-service" element={<GujaratBestSeoPromotionService />} />

          {/* Indore Main Route */}
          <Route path="/indore" element={<IndoreFirstGooglePromotion />} />
          <Route path="/indore/guaranteed-google-promotion-services" element={<IndoreGuaranteedGooglePromotion />} />
          <Route path="/indore/top-seo-company" element={<IndoreTopSEOCompany />} />
          <Route path="/indore/top-digital-marketing-agency" element={<IndoreTopDigitalMarketingAgency />} />
          <Route path="/indore/local-promotion-service" element={<IndoreLocalPromotionService />} />
          <Route path="/Indore/guaranteed-local-promotion-service" element={<IndoreGuaranteedLocalPromotion />} />
          <Route path="/Indore/seo-service-agency" element={<IndoreSeoServiceAgency />} />
          <Route path="/Indore/best-seo-service-agency" element={<IndoreBestSeoAgencyService />} />
          <Route path="/Indore/google-promotion-services" element={<IndoreGooglePromotionServices />} />
          <Route path="/Indore/best-google-promotion-service" element={<IndoreBestGooglePromotionService />} />
          <Route path="/Indore/seo-promotion-service" element={<IndoreSeoPromotionService />} />
          <Route path="/Indore/best-seo-promotion-service" element={<IndoreBestSeoPromotionService />} />

          {/* Hyderabad Main Route */}
          <Route path="/hyderabad" element={<HyderabadFirstGooglePromotion />} />
          <Route path="/hyderabad/guaranteed-google-promotion-services" element={<HyderabadGuaranteedGooglePromotion />} />
          <Route path="/hyderabad/top-seo-company" element={<HyderabadTopSEOCompany />} />
          <Route path="/hyderabad/top-digital-marketing-agency" element={<HyderabadTopDigitalMarketingAgency />} />
          <Route path="/hyderabad/local-promotion-service" element={<HyderabadLocalPromotionService />} />
          <Route path="/hyderabad/guaranteed-local-promotion-service" element={<HyderabadGuaranteedLocalPromotion />} />
          <Route path="/hyderabad/seo-service-agency" element={<HyderabadSeoServiceAgency />} />
          <Route path="/hyderabad/best-seo-service-agency" element={<HyderabadBestSeoAgencyService />} />
          <Route path="/hyderabad/google-promotion-services" element={<HyderabadGooglePromotionServices />} />
          <Route path="/hyderabad/best-google-promotion-service" element={<HyderabadBestGooglePromotionService />} />
          <Route path="/hyderabad/seo-promotion-service" element={<HyderabadSeoPromotionService />} />
          <Route path="/hyderabad/best-seo-promotion-service" element={<HyderabadBestSeoPromotionService />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
