import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "(11) 97386-1696",
  email: "isa.anequini@gmail.com",
};

const sliderContent = {
  name: "Isa Anequini",
  description: `Sou fisioterapeuta com + de 16 anos de experiência formada pela UNESP, mestre em Ciências da Reabilitação pela USP com especialização em Doenças Neuromusculares pela UNIFESP.`,
  btnText: " Donwload CV",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+04 6545-9535-6515">{conctInfo.phone}</a>
            <a href="mailto:mail%20to:ibthemes21@gmail.com,com">
              {conctInfo.email}
            </a>
          </div>
          {/* <div className="hb-lang">
            <ul className="nav">
              <li className="active">
                <a href="#">EN</a>
              </li>
              <li>
                <a href="#">FR</a>
              </li>
            </ul>
          </div> */}
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6>Olá, me chamo</h6>
                <h1 className="font-alt">{sliderContent.name}</h1>
                <TextLoop>
                  <p className="loop-text lead">Fisioterapia</p>
                  <p className="loop-text lead">Especialização em Doenças Neuromusculares</p>
                  <p className="loop-text lead">Conselheira Consultiva</p>
                </TextLoop>{" "}
                <p className="desc">{sliderContent.description}</p>
                <div className="mt-4">
                  <a
                    className="px-btn px-btn-white"
                    href="img/resume.png"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/home-banner.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
