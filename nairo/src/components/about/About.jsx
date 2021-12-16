import React from "react";
import Social from "../Social";
import Testimonials from "../../components/testimonial/Testimonial";
import Services from "../../components/service/Service";
import Awards from "../../components/award/Awards";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me.jpg" alt="about" />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Fisioterapeuta</p>
                  <h3>Isa Anequini</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div className="col-lg-7 ml-auto">
              <div className="about-info">
                <div className="title">
                  <h3>Sobre mim.</h3>
                </div>
                <div className="about-text">
                <ul> 
                    <li>
                      <p>Fisioterapeuta pela UNESP</p>
                    </li>
                    <li>
                      <p>Mestre em Ciências da Reabilitação pela USP</p>
                    </li>
                    <li>
                      <p>Especialização em Doenças Neuromusculares pela UNIFESP</p>
                    </li>
                    <li>
                      <p>Formação pelo Método PediaSuit</p>
                    </li>
                    <li>
                      <p>Professora convidada da Pós graduação de Intervenção Terapêutica nas Doenças Neuromusculares da Unifesp</p>
                    </li>
                    <li>
                      <p>Membro da comissão científica INAME</p>
                    </li>
                    <li>
                      <p>Conselheira Consultiva da ABRAFEU</p>
                    </li>
                    <li>
                      <p>Fisioterapeuta voluntária da ABDIM VBSL</p>
                    </li>
                    <li>
                      <p>16 anos de experiência no tratamento fisioterapêutico neurofuncional nas Doenças Neuromusculares.</p>
                    </li>
                  </ul>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Nome: </label>
                          <span>Isa Anequini</span>
                        </li>
                        <li>
                          <label>Endereço: </label>
                          <span>Rua Batazar Lisboa, 242. Vila Mariana - São Paulo/SP</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Celular: </label>
                          <span>(+11) 97386-1696</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>isa.anequini@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}
          <div className="title">
            <h3>Áreas de atuação.</h3>
          </div>
          <Services />
          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          {/* <div className="title">
            <h3>Awards.</h3>
          </div>
          <Awards /> */}
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

         {/*  <div className="title">
            <h3>Testimonials.</h3>
          </div>
          <Testimonials /> */}
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
