import React, { useEffect } from "react";

const FactsView = () => {
  useEffect(() => {
    const handleScroll = () => {
      const factsSection = document.getElementById("facts");
      if (!factsSection) return;

      const factsSectionTop = factsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (factsSectionTop < windowHeight * 0.75) {
        // Mettre à jour l'état ou exécuter d'autres actions appropriées
        console.log("La section de faits est visible!");
        // Vous pouvez mettre à jour un état ici ou exécuter d'autres actions appropriées
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <section id="facts" className="facts">
        <div className="container">
          <div className="section-title">
            <h2>Facts</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row no-gutters">
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              /* data-aos="fade-up" */
            >
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Happy Clients</strong> consequuntur quae
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              /* data-aos="fade-up" */
              data-aos-delay="100"
            >
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Projects</strong> adipisci atque cum quia aut
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              /* data-aos="fade-up" */
              data-aos-delay="200"
            >
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1453"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Hours Of Support</strong> aut commodi quaerat
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              /* data-aos="fade-up" */
              data-aos-delay="300"
            >
              <div className="count-box">
                <i className="bi bi-people"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="32"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Hard Workers</strong> rerum asperiores dolor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FactsView;
