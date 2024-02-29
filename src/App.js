import HeaderView from "./Composant/HeaderView/HeaderView";
import HeroView from "./Composant/HeroView/HeroView";
import MainView from "./Composant/MainView/MainView";
import FooterView from "./Composant/FooterView/FooterView";

//Favicons
import "./assets/img/favicon.png";
import "./assets/img/apple-touch-icon.png";

//Template Main CSS File
import "./assets/css/style.css";

//Vendor CSS Files
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";

//Template Main JS File
//import "./assets/js/main.js";
import "./MyFonction.jsx";

// Vendor JS Files
import "./assets/vendor/purecounter/purecounter_vanilla.js";
import "./assets/vendor/aos/aos.js";
import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/vendor/glightbox/js/glightbox.min.js";
import "./assets/vendor/isotope-layout/isotope.pkgd.min.js";
import "./assets/vendor/swiper/swiper-bundle.min.js";
import "./assets/vendor/typed.js/typed.umd.js";
import "./assets/vendor/waypoints/noframework.waypoints.js";
import "./assets/vendor/php-email-form/validate.js";

function App() {
  return (
    <div>
      <HeaderView />
      <HeroView />
      <MainView />
      <FooterView />
    </div>
  );
}

export default App;
