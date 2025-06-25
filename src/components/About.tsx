
import { Card, CardContent } from "@/components/ui/card";
import Profile from "../assets/Profile.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Sobre mim 
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src= {Profile}
                alt="Professional workspace"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Olá, sou Victor Gabriel, especialista em estratégias de vendas e tráfego inteligente.
                Meu foco é ajudar negócios a transformar visitantes em compradores,
                criando uma narrativa de vendas que conecta e converte.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Seja para produtos físicos ou infoprodutos, trabalho para construir uma audiência engajada e lucrativa, otimizando recursos e transformando tráfego em vendas.
                Meu objetivo é mostrar que, com as ferramentas e estratégias certas,
                qualquer negócio pode crescer, aparecer e vender na internet com objetividade e resultados palpáveis.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">+20k</div>
                    <div className="text-gray-600">Pessoas alcançadas</div>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
                    <div className="text-gray-600">Anos de experiência</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
