import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FabyModas from "../assets/fabymodas.jpg";
import JoLima from "../assets/JoLima.jpg";
import VDhair from "../assets/VdHair.jpg"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import feedbackJoLima from "../assets/feedbackjolima.jpg";
import feedbakJoLima2 from "../assets/feedbackjolima2.jpg";
import ResultadosJoLima from "../assets/resultadosjolima.jpg";
import ResultadosJoLima2 from "../assets/ResultadorJoLima2.jpg";
import VideosJoLima from "../assets/VideoJoLima.mp4";
import TrabalhoJoLima from "../assets/TrabalhoJoLima2.jpg";
import TrabalhoJoLima2 from "../assets/TrabalhoJoLima.jpg"
import AntesFaby from "../assets/AlcanceFabymodasAntes.jpg";
import DepoisFaby from "../assets/AlcanceFabyModasDepois.jpg";
import VideoFabyModas from "../assets/VideoFabyModas.mp4"
import VideoFabyModas2 from "../assets/FABI MODA VESTUÁRIO .mov";
import TrabalhoFabyModas from "../assets/MetodologiasFabymodas.jpg"; 
import VideoVdHair from "../assets/VideoVDHair.mp4"
import VdHair from "../assets/VdHair2.jpg";
import TemplateVdHair from "../assets/ImagemVDHair.jpg"
import InstagramIcon from "../assets/instagram.png"; 
import { useState } from "react";

function FabyModasModal({ open, onClose, project }) {
  if (!open || !project) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#faf5f1] p-6 rounded-lg max-w-md w-full h-full overflow-y-auto">
        <h3 className="text-2xl font-bold mb-4">{project.title}
          <button
            className="absolute top-6 text-2xl right-10 text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={onClose}
            aria-label="Fechar"
          >
            X
          </button> 
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-2">
            <img src={InstagramIcon} alt="ig" className="inline w-6 h-6 align-middle hover:opacity-80" />
          </a>
        </h3>
        <img src={project.image} alt={project.title} className="mb-4 rounded w-full" />
        <p className="mb-4">{project.description}</p>
        <div>
          <p className="font-bold mb-2 mt-6">Meu trabalho</p>
          <video src={VideoFabyModas}  className="w-full h-auto object-cover rounded mb-4" controls/>
          <video src={VideoFabyModas2}  className="w-full h-auto object-cover rounded mb-4" controls/>
          <img src={TrabalhoFabyModas}/>
          <p className="font-bold mb-2 mt-6">Antes</p>
          <img src={AntesFaby}/>
          <p className="font-bold mb-2 mt-6">Depois</p>
          <img src={DepoisFaby}/>
        </div>
      </div>
    </div>
  );
}

function JoLimaModal({ open, onClose, project }) {
  if (!open || !project) return null;
  
  return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-[#faf5f1] p-6 rounded-lg max-w-md w-full h-full overflow-y-auto">
          <h3 className="text-2xl font-bold mb-4">{project.title} 
          <button
            className="absolute top-6 text-2xl right-10 text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={onClose}
            aria-label="Fechar"
          >
            X
          </button> 
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-2">
              <img src={InstagramIcon} alt="ig" className="inline w-6 h-6 align-middle hover:opacity-80" />
            </a>
          </h3>
        
        <img src={project.image} alt={project.title} className="mb-4 rounded w-full" />
        <p className="mb-4">{project.description}</p>
        
        <div>
          <p className="font-bold mb-2">Opiniões dos clientes</p>
          <img src={feedbackJoLima} className="w-full h-auto object-cover rounded mb-4" />
          <p className="font-bold mb-2">Trabalho com metodologias escaláveis</p>
          <img src={feedbakJoLima2} className="w-full h-auto object-cover rounded mb-4" />
          <img src={TrabalhoJoLima} className="w-full h-auto object-cover rounded mb-4" />
          <img src={TrabalhoJoLima2} className="w-full h-auto object-cover rounded mb-4" />
          <video src={VideosJoLima} className="w-full h-auto object-cover rounded mb-4" controls/>
          <p className="font-bold mb-2 mt-6">Impactos reais</p>
          <img src={ResultadosJoLima} className="w-full h-auto object-cover rounded mb-4" />
          <img src={ResultadosJoLima2} className="w-full h-auto object-cover rounded mb-4" />

        </div>
      </div>
    </div>
  );
}
function VdHairModal({ open, onClose, project }) {
  if (!open || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#faf5f1] p-6 rounded-lg max-w-md w-full h-full overflow-y-auto">
        <h3 className="text-2xl font-bold mb-4">{project.title}
          <button
            className="absolute top-6 text-2xl right-10 text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={onClose}
            aria-label="Fechar"
          >
            X
          </button>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-2">
            <img src={InstagramIcon} alt="ig" className="inline w-6 h-6 align-middle hover:opacity-80" />
          </a>
        </h3>
        <img src={project.image} alt={project.title} className="mb-4 rounded w-full" />
        <p className="mb-4">{project.description}</p>
        <div>
          <p className="font-bold mb-2">Trabalho com metodologias escaláveis</p>
          <video src={VideoVdHair} className="w-full h-auto object-cover rounded mb-4" controls/>
          <p className="font-bold mb-2 mt-6">Construímos sua imagem digital com estratégia e autenticidade.</p>
          <img src={TemplateVdHair}/>

        </div>
      </div>
    </div>
  );
}

export const Projects = () => {
  const projects = [
    {
      id: "faby-modas",
      title: "Faby Modas",
      description: "Empresa atua tanto no varejo quanto atacado de vestuário e acessórios — incluindo roupas femininas, masculinas e infantis, além de calçados, lingerie, artigos para chuva e demais complementos do vestuário",
      image: FabyModas,
      tags: ["Comunicação", "Moda", "Atendimento"],
      link: "https://www.instagram.com/fabymodas3?utm_source=ig_web_button_share_sheet&igsh=NmV0bHRnczJjY2Z1"
    },
    {
      id: "jo-lima",
      title: "Jo Lima Hair Teraphy",
      description: "Salão de beleza que oferece serviços voltados para cuidados pessoais e estéticos. Geralmente, salões como esse atuam com uma ampla gama de serviços.",
      image: JoLima,
      tags: ["Bem Estar", "Terapia", "Atendimento"],
      link: "https://www.instagram.com/jolima_hairteraphy?utm_source=ig_web_button_share_sheet&igsh=MW1tcnlqdmQwa2I5YQ=="
    },
    {
      id: "vd-Hair",
      title: "VD Hair",
      description: "VD Hair é um salão de beleza especializado em terapias capilares integrativas.",
      image: VDhair,
      tags: ["Bem Estar", "Terapia", "Atendimento"],
      link: "https://www.instagram.com/jolima_hairteraphy?utm_source=ig_web_button_share_sheet&igsh=MW1tcnlqdmQwa2I5YQ=="
    }
    
  ];

  const [openModal, setOpenModal] = useState({
    "faby-modas": false,
    "jo-lima": false,
    "vd-Hair": false
  });
  const [selectedProject, setSelectedProject] = useState(null);

  const showProject = (project) => {
    setSelectedProject(project);
    setOpenModal({ ...openModal, [project.id]: true });
  };

  const closeModal = (projectId) => {
    setOpenModal({ ...openModal, [projectId]: false });
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#6e7e85]">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Projetos Recentes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-[#6e7e85] hover:bg-blue-700 text-white"
                    onClick={() => showProject(project)}
                  >
                    Ver Projeto
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <FabyModasModal 
        open={openModal["faby-modas"]} 
        onClose={() => closeModal("faby-modas")} 
        project={selectedProject?.id === "faby-modas" ? selectedProject : null} 
      />
      
      <JoLimaModal 
        open={openModal["jo-lima"]} 
        onClose={() => closeModal("jo-lima")} 
        project={selectedProject?.id === "jo-lima" ? selectedProject : null} 
      />
      <VdHairModal
      open={openModal["vd-Hair"]}
      onClose={() => closeModal("vd-Hair")}
      project={selectedProject?.id === "vd-Hair" ? selectedProject : null}
    />
    </section>
  );
};