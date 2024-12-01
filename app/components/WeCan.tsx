"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Definimos la interfaz para los servicios
interface Service {
  name: string;
  imgUrl: string;
  bgColour: string;
}

// Componente WeCan
const WeCan: React.FC = () => {
  // Lista de servicios con URLs de imágenes de muestra
  const services: Service[] = [
    {
      name: "Digital Marketing",
      imgUrl: "/imagen.jpg",
      bgColour: "bg-green-100",
    },
    {
      name: "PPC Services",
      imgUrl: "/imagen.jpg",
      bgColour: "bg-slate-100",
    },
    {
      name: "SMO Services",
      imgUrl: "/imagen.jpg",
      bgColour: "bg-yellow-100",
    },
    {
      name: "SEO Services",
      imgUrl: "/imagen.jpg",
      bgColour: "bg-rose-100",
    },
    {
      name: "Social Marketing",
      imgUrl: "/imagen.jpg",
      bgColour: "bg-purple-100",
    },
    {
      name: "Website Optimization",
      imgUrl: "/imagen.jpg",
      bgColour: "bg-blue-100",
    },
    {
      name: "Web Development",
      imgUrl: "/imagen.jpg",
      bgColour: "bg-pink-100",
    },
  ];

  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevState) => (prevState + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="py-24 sm:py-32">
      <div className="app__container grid grid-cols-1 md:grid-cols-2 gap-y-8">
        {/* Texto a la izquierda */}
        <div className="my-auto md:pr-24">
          <h1 className="primary-heading capitalize">
            What we can <br />
            do for <span className="highlight">you?</span>
          </h1>
          <p className="app__text mt-4">
            We are perfect in providing solutions in certain areas of
            technology. We have a bunch of services that could speed up your
            entire business functioning.
          </p>
        </div>

        {/* Carrusel de servicios */}
        <div className="relative h-[500px] p-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`slide ${service.bgColour} flex justify-end flex-col items-center shadow-lg rounded-xl app__text ${
                activeSlide === index ? "activeSlider" : ""
              }`}
            >
              <Image
                src={service.imgUrl}
                height={400}
                width={400}
                alt={service.name}
                className="rounded-xl"
              />
              <div className="py-6 bg-white w-full rounded-xl">
                <h1 className="font-bold text-2xl text-center">{service.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeCan;
