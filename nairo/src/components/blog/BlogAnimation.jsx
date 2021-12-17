import React, { useState } from "react";
import Modal from "react-modal";
import Contact from "../contact/Contact";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="row">
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="blog-grid" onClick={toggleModalOne}>
            <div className="blog-img">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/fSBdifAhkY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="blog-info">
              <div className="meta">
                INAME - Instituto Nacional da Atrofia Muscular Espinhal
              </div>
              <h6>
                (Aula 1) - Exercícios Ativos Fisioterapia na Atrofia Muscular Espinhal - Parte 1: Live Ft. Dra Isabela Anequini
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-1 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalTwo}>
            <div className="blog-img">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/GWvuXZHfq7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="blog-info">
              <div className="meta">
                INAME - Instituto Nacional da Atrofia Muscular Espinhal
              </div>
              <h6>
                (Aula 2) - Exercícios Ativos Fisioterapia na Atrofia Muscular Espinhal - Parte 2: Live Ft. Dra Isabela Anequini
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-2 */}

        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <div className="blog-grid" onClick={toggleModalThree}>
            <div className="blog-img">
              <img src={`img/blog/isa-anequini-blog.png`} alt="blog post"></img>
            </div>

            <div className="blog-info">
              <div className="meta">Live Fisioterapia motora nas AVDs em tempos de COVID-19</div>
              <h6>
                <a
                href="https://distroflix.com.br/c/covid19-fisioterapia-motora-nas-avds"
                target="_blank"
                >
                  Fisioterapia Motora nas Atividades Funcionais - COVID19
                </a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-3 */}
      </div>
      {/* End .row */}
    </>
  );
};

export default News;
