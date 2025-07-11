
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Target, Eye, Heart, Shield, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sobre = () => {
  const navigate = useNavigate();

  const team = [
    { name: "Ana Silva", role: "Coordenadora Geral", description: "Jornalista com 10 anos de experiência em fact-checking" },
    { name: "Carlos Santos", role: "Desenvolvedor", description: "Especialista em desenvolvimento web e transparência pública" },
    { name: "Mariana Costa", role: "Pesquisadora", description: "Cientista política focada em análise de políticas públicas" },
    { name: "João Oliveira", role: "Designer UX", description: "Designer especializado em interfaces para participação cidadã" }
  ];

  const values = [
    {
      icon: <Eye className="h-8 w-8 text-blue-500" />,
      title: "Transparência",
      description: "Acreditamos que a informação deve ser acessível e compreensível para todos os cidadãos."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Imparcialidade",
      description: "Nosso trabalho é baseado em fatos verificáveis, sem viés político ou ideológico."
    },
    {
      icon: <Target className="h-8 w-8 text-purple-500" />,
      title: "Precisão",
      description: "Utilizamos fontes oficiais e verificamos todas as informações antes da publicação."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Participação",
      description: "Encorajamos a participação cidadã ativa no acompanhamento da política."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:bg-blue-100"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar ao início</span>
            </Button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Promessômetro Brasil
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Globe className="text-white h-12 w-12" />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Sobre o Promessômetro Brasil
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma plataforma independente dedicada ao monitoramento das promessas de campanha 
            dos políticos brasileiros, promovendo transparência e accountability democrática.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="max-w-4xl mx-auto mb-12 bg-white/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Nossa Missão</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Facilitar o acompanhamento cidadão das promessas eleitorais através de uma plataforma 
              transparente, acessível e baseada em dados verificáveis. Nosso objetivo é fortalecer 
              a democracia brasileira promovendo maior responsabilização política.
            </p>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Nossos Valores</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-3">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <Card className="max-w-4xl mx-auto mb-12 bg-white/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Como Funciona</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Coleta</h4>
                <p className="text-gray-600">
                  Coletamos promessas de campanha de fontes oficiais como planos de governo e debates.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Verificação</h4>
                <p className="text-gray-600">
                  Acompanhamos e verificamos o status de cada promessa usando fontes governamentais oficiais.
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Publicação</h4>
                <p className="text-gray-600">
                  Disponibilizamos as informações de forma clara e acessível para todos os cidadãos.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Nossa Equipe</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="text-white h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="outline">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription>{member.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <div className="bg-blue-100/60 backdrop-blur-sm rounded-lg p-4 text-center border border-blue-200">
            <div className="text-2xl font-bold text-blue-600">248</div>
            <div className="text-sm text-blue-600">Promessas monitoradas</div>
          </div>
          <div className="bg-green-100/60 backdrop-blur-sm rounded-lg p-4 text-center border border-green-200">
            <div className="text-2xl font-bold text-green-600">28</div>
            <div className="text-sm text-green-600">Políticos acompanhados</div>
          </div>
          <div className="bg-purple-100/60 backdrop-blur-sm rounded-lg p-4 text-center border border-purple-200">
            <div className="text-2xl font-bold text-purple-600">27</div>
            <div className="text-sm text-purple-600">Estados cobertos</div>
          </div>
          <div className="bg-yellow-100/60 backdrop-blur-sm rounded-lg p-4 text-center border border-yellow-200">
            <div className="text-2xl font-bold text-yellow-600">2023</div>
            <div className="text-sm text-yellow-600">Ano de fundação</div>
          </div>
        </div>

        {/* Contact Section */}
        <Card className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Entre em Contato</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              Tem dúvidas, sugestões ou quer colaborar com nosso projeto? Entre em contato conosco!
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-gray-700"><strong>Email:</strong> contato@promessometrobrasil.org</p>
              <p className="text-gray-700"><strong>Telefone:</strong> (11) 9999-9999</p>
            </div>
            <Button 
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              onClick={() => navigate('/denuncia')}
            >
              Fazer uma contribuição
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Sobre;
