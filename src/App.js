import HeaderView from "./Composant/HeaderView/HeaderView";
import HeroView from "./Composant/HeroView/HeroView";
import MainView from "./Composant/MainView/MainView";
import FooterView from "./Composant/FooterView/FooterView";

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
import "./MyFonction.jsx";

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
