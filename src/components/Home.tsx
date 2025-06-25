
import { Button } from "@/components/ui/button";


export const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-[#6e7e85]">
      <div className="container mx-auto text-center" id="hero">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Conquiste Clientes 
            <span className="block text-white">com Tráfego Inteligente  </span>
          </h1>
          <p className="text-xl md:text-2xl color-[oklch(87% 0 0)] mb-8 max-w-2xl mx-auto animate-fade-in">
            Transforme sua rede social em uma vitrine para vender seus produtos ou serviço.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-[#E2E2E2] hover:bg-white text-[#1C0F13] px-8 py-3 text-lg"
              onClick={() => scrollToSection('projects')}
            >
              Veja meu trabalho
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-[#E2E2E2] hover:bg-white text-[#1C0F13] px-8 py-3 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
