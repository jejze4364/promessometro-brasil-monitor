
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowLeft, AlertTriangle, Send, Shield, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Denuncia = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    tipo: "",
    representante: "",
    assunto: "",
    descricao: "",
    email: "",
    fonte: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio
    toast({
      title: "Cobrança enviada com sucesso!",
      description: "Sua denúncia foi registrada e será analisada pela nossa equipe.",
    });

    // Reset form
    setFormData({
      tipo: "",
      representante: "",
      assunto: "",
      descricao: "",
      email: "",
      fonte: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-red-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:bg-red-100"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar ao início</span>
            </Button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Promessômetro Brasil
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="text-white h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Faça uma Cobrança
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Encontrou uma promessa descumprida? Tem informações sobre o andamento de algum compromisso? 
            Sua participação é essencial para mantermos a transparência política.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-red-600" />
                  <span>Formulário de Cobrança</span>
                </CardTitle>
                <CardDescription>
                  Preencha as informações abaixo para registrar sua cobrança ou denúncia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo de Cobrança</Label>
                      <Select value={formData.tipo} onValueChange={(value) => handleInputChange('tipo', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="descumprimento">Promessa Descumprida</SelectItem>
                          <SelectItem value="atraso">Atraso no Cumprimento</SelectItem>
                          <SelectItem value="informacao">Informação Incorreta</SelectItem>
                          <SelectItem value="transparencia">Falta de Transparência</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="representante">Representante</Label>
                      <Select value={formData.representante} onValueChange={(value) => handleInputChange('representante', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o representante" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="presidente">Presidente Lula</SelectItem>
                          <SelectItem value="ac">Gladson Cameli (AC)</SelectItem>
                          <SelectItem value="al">Paulo Dantas (AL)</SelectItem>
                          <SelectItem value="am">Wilson Lima (AM)</SelectItem>
                          <SelectItem value="ap">Clécio Luís (AP)</SelectItem>
                          <SelectItem value="ba">Jerônimo Rodrigues (BA)</SelectItem>
                          <SelectItem value="ce">Elmano de Freitas (CE)</SelectItem>
                          <SelectItem value="df">Ibaneis Rocha (DF)</SelectItem>
                          <SelectItem value="es">Renato Casagrande (ES)</SelectItem>
                          <SelectItem value="go">Ronaldo Caiado (GO)</SelectItem>
                          <SelectItem value="ma">Carlos Brandão (MA)</SelectItem>
                          <SelectItem value="mg">Romeu Zema (MG)</SelectItem>
                          <SelectItem value="ms">Eduardo Riedel (MS)</SelectItem>
                          <SelectItem value="mt">Mauro Mendes (MT)</SelectItem>
                          <SelectItem value="pa">Helder Barbalho (PA)</SelectItem>
                          <SelectItem value="pb">João Azevêdo (PB)</SelectItem>
                          <SelectItem value="pe">Raquel Lyra (PE)</SelectItem>
                          <SelectItem value="pi">Rafael Fonteles (PI)</SelectItem>
                          <SelectItem value="pr">Ratinho Júnior (PR)</SelectItem>
                          <SelectItem value="rj">Cláudio Castro (RJ)</SelectItem>
                          <SelectItem value="rn">Fátima Bezerra (RN)</SelectItem>
                          <SelectItem value="ro">Marcos Rocha (RO)</SelectItem>
                          <SelectItem value="rr">Antonio Denarium (RR)</SelectItem>
                          <SelectItem value="rs">Eduardo Leite (RS)</SelectItem>
                          <SelectItem value="sc">Jorginho Mello (SC)</SelectItem>
                          <SelectItem value="se">Fábio Mitidieri (SE)</SelectItem>
                          <SelectItem value="sp">Tarcísio de Freitas (SP)</SelectItem>
                          <SelectItem value="to">Wanderlei Barbosa (TO)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="assunto">Assunto da Cobrança</Label>
                    <Input
                      id="assunto"
                      placeholder="Ex: Descumprimento da promessa sobre educação pública"
                      value={formData.assunto}
                      onChange={(e) => handleInputChange('assunto', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="descricao">Descrição Detalhada</Label>
                    <Textarea
                      id="descricao"
                      placeholder="Descreva detalhadamente sua cobrança, incluindo datas, fatos e contexto..."
                      value={formData.descricao}
                      onChange={(e) => handleInputChange('descricao', e.target.value)}
                      rows={6}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Seu E-mail (opcional)</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                      <p className="text-xs text-gray-500">
                        Para receber atualizações sobre sua cobrança
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fonte">Fonte/Evidência (opcional)</Label>
                      <Input
                        id="fonte"
                        placeholder="Link para notícia, documento oficial, etc."
                        value={formData.fonte}
                        onChange={(e) => handleInputChange('fonte', e.target.value)}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold py-3"
                    size="lg"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Cobrança
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-700">
                  <Shield className="h-5 w-5" />
                  <span>Suas Informações</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600">
                    Todas as informações são tratadas com confidencialidade
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600">
                    Sua cobrança será analisada por nossa equipe de verificação
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-600">
                    Informações verificadas serão adicionadas ao sistema
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-blue-700">
                  <Eye className="h-5 w-5" />
                  <span>Como Funciona</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">1. Recebimento</h4>
                  <p className="text-xs text-gray-600">
                    Sua cobrança é recebida e registrada em nosso sistema
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">2. Verificação</h4>
                  <p className="text-xs text-gray-600">
                    Nossa equipe verifica as informações em fontes oficiais
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">3. Atualização</h4>
                  <p className="text-xs text-gray-600">
                    O status da promessa é atualizado se procedente
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">4. Transparência</h4>
                  <p className="text-xs text-gray-600">
                    A informação fica disponível para todos os cidadãos
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-orange-50/60 backdrop-blur-sm border-orange-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-orange-800 mb-2">
                  💡 Dica Importante
                </h3>
                <p className="text-sm text-orange-700">
                  Quanto mais detalhes e fontes você fornecer, mais rápida será a verificação da sua cobrança.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Denuncia;
