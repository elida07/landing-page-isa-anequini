import React from "react";

const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Atendimento presencial ou online",
    descriptions: `Atendimentos que se adaptam a você`
  },
  {
    icon: "icon-desktop",
    title: "Avaliações Especializadas",
    descriptions: `Avaliações Especializadas em Neuromuscular utilizando escalas internacionais (Chop Intend, Hammersmith, North Star, MFM, RULM, entre outras)`
  },
  {
    icon: "icon-target",
    title: "Supervisão de casos clínicos ",
    descriptions: `Acompanhamento e tratamento fisioterapêutico motor`
  },
  {
    icon: "icon-target",
    title: "Treinamentos",
    descriptions: `Para profissionais fisioterapeutas`
  },
  {
    icon: "icon-target",
    title: "Consultoria",
    descriptions: `Para tratamento fisioterapêutico neurofuncional em doenças neuromusculares`
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
