import React from 'react';
import Banner from '../assets/bannerPageAbout.jpg';
import CarAbout from '../assets/carAboutUs.jpg';
import CarAbout2 from '../assets/carAboutUs2.jpg';
import CarAbout3 from '../assets/carAboutUs3.jpg';

function About() {
  return (

    <>
      <section className="bg-zinc-950 w-full flex justify-between md:flex-row flex-col mt-14 tablet:mt-24 tablet:h-48">
        <div className="w-full flex justify-center items-center order-2 md:order1">
          <h1 className="text-white font-bold text-4xl w-4/5 md:w-2/5 my-5 md:leading-relaxed text-gradient animate-gradient text-center md:text-left tablet:text-xl">A CarStore transforma o seu sonho automotivo em realidade</h1>
        </div>
        <img className="order-1 md:order-2" src={Banner} alt="" />
      </section>
      <section className="flex justify-center mt-5 md:mt-10 font-serif">
        <div className="flex flex-col tablet:flex-col md:flex-row md:w-4/6 justify-between items-center md:text-left text-justify">
          <div className="w-4/5 md:w-2/5 tablet:w-full">
            <div className="p-5">
              <h1 className="font-bold text-3xl text-center">Seja Bem vindo</h1>
              <p className="mt-5 text-xl md:leading-">
                Somos sua referência em qualidade e confiança no mundo dos carros usados.
                Fundada em 2015, em Belém do Pará,
                a CarStore tem se destacado como uma opção de excelência no mercado automotivo.
              </p>
              <p className="mt-5 text-xl md:leading-7">
                Com uma equipe dedicada de 5 vendedores especializados,
                acreditamos que a paixão por carros vai além de um simples negócio.
                Na CarStore, cada veículo contém uma história,
                e estamos aqui para ajudá-lo a encontrar a
                narrativa perfeita para sua próxima jornada sobre rodas.
              </p>
              <p className="mt-5 text-xl md:leading-7">
                O que nos diferencia vai além de um catálogo
                diversificado de carros usados de alta qualidade.
                Nosso atendimento é guiado por um compromisso
                inabalável com a satisfação do cliente.
                Na CarStore valorizamos o relacionamento
                humano, entendendo que a compra de um carro
                é uma decisão pessoal e importante.
              </p>
            </div>
            <div>
              <img className="mt-5" src={CarAbout2} alt="Imagem Ilustrativa" />
              <img className="hidden md:block mt-10 h-96" src={CarAbout3} alt="Imagem Ilustrativa" />
            </div>
          </div>
          <div className="w-4/5 md:w-2/5 md:mt-20 tablet:w-full">
            <img className="hidden md:block" src={CarAbout} alt="Imagem ilustrativa" />

            <div className="p-5">
              <p className="mt-12 text-xl md:leading-7">
                Nossos valores são moldados por critérios rigorosos de transparência
                , honestidade e respeito. Cada veículo em nosso showroom
                é cuidadosamente selecionado, passando por uma avaliação
                criteriosa para garantir que você leve para casa não apenas
                um carro, mas também a confiança de estar
                fazendo um investimento sólido.

              </p>

              <p className="mt-5 text-xl md:leading-7">
                Na CarStore, não vendemos apenas carros, oferecemos experiências.
                Estamos comprometidos em fornecer a você um atendimento personalizado,
                que vá além de suas expectativas. Visite-nos e descubra como podemos
                transformar seu sonho automotivo em realidade, construindo juntos
                histórias memoráveis sobre quatro rodas.

              </p>
              <div className="mt-2 md:mt-16">
                <h1 className="text-center font-bold text-2xl">Venha fazer uma visita!!</h1>
                <iframe
                  className="mt-5"
                  title="CarStore"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.422599248996!2d-48.409488996090694!3d-1.369992507593841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a4f5591d9968e3%3A0xa8fb5ac7a512ad4d!2sAnanindeua%20-%20PA%2C%2067000-000!5e0!3m2!1spt-BR!2sbr!4v1701466972561!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>

      </section>

    </>
  );
}

export default About;
