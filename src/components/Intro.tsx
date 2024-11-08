import { getDictionary } from "@/config/i18n/dictionary";
import Reveal from "@/utils/Reveal";
import Image from "next/image";

export default async function Intro() {
  const i18n = await getDictionary();

  return (
    <div id="experience">
      <section className="flex items-center justify-between px-8 mb-20 tracking-wider">
        <div className="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left">
          <Reveal left={false}>
            <div className="flex flex-col px-10 md:px-20">
              <h3 className="text-xl font-bold">{i18n.skills}</h3>
              <br />
              <span className="text-lg">Trabajo en equipo</span>
              <span className="text-lg">Comunicación efectiva</span>
              <span className="text-lg">Liderazgo de equipos técnicos</span>
              <span className="text-lg">Gestión de tiempo y tareas</span>
              <span className="text-lg">Resolución de problemas</span>
              <span className="text-lg">Adaptabilidad al cambio</span>
            </div>
          </Reveal>
          <Reveal left={false}>
            <div className="flex flex-col px-10 md:px-20">
              <h3 className="text-xl font-bold">{i18n.technologies}</h3>
              <br />
              <span className="text-lg">Angular</span>
              <span className="text-lg">React</span>
              <span className="text-lg">Next JS</span>
              <span className="text-lg">AWS</span>
              <span className="text-lg">Node</span>
            </div>
          </Reveal>
        </div>
        <Image
          src="/techs.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-white-500/50 ring-offset-[30px]"
        />

        <div className="hidden md:flex flex-col w-1/3 space-y-12 text-right">
          <div className="px-20">
            <Reveal>
              <h4 className="text-xl font-bold">{i18n.experience}</h4>
              <br />
              <p className="text-6xl">+6</p>
            </Reveal>
          </div>
          <div className="px-20">
            <Reveal>
              <h4 className="text-xl font-bold">{i18n.projects}</h4>
              <br />
              <p className="text-6xl">+5</p>
            </Reveal>
          </div>
        </div>
      </section>
      <hr className="border-gray-400 mx-44" />
    </div>
  );
}
