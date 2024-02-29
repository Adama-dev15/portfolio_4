import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsView = () => {
  useEffect(() => {
    const initializeSlider = () => {
      const slider = document.querySelector(".testimonials-slider");

      if (slider) {
        new Slider(slider, {
          autoplay: true,
          autoplaySpeed: 5000,
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      }
    };

    initializeSlider();
  }, []);

  return (
    <div>
      <section id="testimonials" className="testimonials section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="testimonials-slider swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-1.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
              </div>

              <div className="swiper-slide">
                <div
                  className="testimonial-item"
                  /* data-aos="fade-up" */
                  data-aos-delay="100"
                >
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    Export tempor illum tamen malis malis eram quae irure esse
                    labore quem cillum quid cillum eram malis quorum velit fore
                    eram velit sunt aliqua noster fugiat irure amet legam anim
                    culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                  <img
                    src="assets/img/testimonials/testimonials-2.jpg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
              </div>
              {/* Ajoutez d'autres slides ici */}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsView;
