import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://odevpablo.app.n8n.cloud/webhook-test/formulario-envio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Messagem enviada!",
          description: "Obrigado por entrar em contato! Responderei em breve.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente mais tarde.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Entre em Contato
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Vamos Começar uma Conversa
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Pronto para transformar suas ideias em realidade? Adoraria saber mais sobre seu projeto 
                e discutir como podemos trabalhar juntos para criar algo incrível.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">@</span>
                  </div>
                  <span className="text-gray-600">hello@portfolio.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">📍</span>
                  </div>
                  <span className="text-gray-600">São Paulo - SP</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">⏰</span>
                  </div>
                  <span className="text-gray-600">Disponível para novos projetos</span>
                </div>
              </div>
            </div>
            
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Envie uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Seu Nome"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Seu Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Sua Mensagem"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};