
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">
            Victor Gabriel
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Contato
            </button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200 ">
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Sobre Mim
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Contato
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
