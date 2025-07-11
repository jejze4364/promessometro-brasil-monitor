
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, AlertTriangle, BarChart3, CheckCircle, Clock, XCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const stats = {
    totalPromises: 248,
    fulfilled: 67,
    inProgress: 134,
    broken: 47
  };

  const fulfillmentRate = Math.round((stats.fulfilled / stats.totalPromises) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-white h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Promessômetro Brasil
                </h1>
                <p className="text-sm text-gray-600">Transparência e cobrança política</p>
              </div>
            </div>
            <Badge variant="outline" className="border-green-500 text-green-700">
              {stats.totalPromises} promessas monitoradas
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Acompanhe quem te representa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Monitore o cumprimento das promessas de campanha do Presidente e Governadores. 
            Transparência, cobrança e participação cidadã em um só lugar.
          </p>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-green-200">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-green-600">{stats.fulfilled}</div>
              <div className="text-sm text-gray-600">Cumpridas</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-yellow-200">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-yellow-600">{stats.inProgress}</div>
              <div className="text-sm text-gray-600">Em andamento</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-red-200">
              <div className="flex items-center justify-center mb-2">
                <XCircle className="h-8 w-8 text-red-500" />
              </div>
              <div className="text-2xl font-bold text-red-600">{stats.broken}</div>
              <div className="text-sm text-gray-600">Descumpridas</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-200">
              <div className="flex items-center justify-center mb-2">
                <BarChart3 className="h-8 w-8 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-blue-600">{fulfillmentRate}%</div>
              <div className="text-sm text-gray-600">Taxa de cumprimento</div>
            </div>
          </div>
        </div>

        {/* Main Navigation Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <Card 
            className="cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-green-100 to-green-50 border-green-200"
            onClick={() => navigate('/presidente')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-white h-8 w-8" />
              </div>
              <CardTitle className="text-2xl text-green-800">Presidente da República</CardTitle>
              <CardDescription className="text-green-700">
                Acompanhe as promessas de Luiz Inácio Lula da Silva
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600">42 promessas</span>
                <Badge className="bg-green-500 hover:bg-green-600">Ver promessas</Badge>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-blue-100 to-blue-50 border-blue-200"
            onClick={() => navigate('/governadores')}
          >
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white h-8 w-8" />
              </div>
              <CardTitle className="text-2xl text-blue-800">Governadores</CardTitle>
              <CardDescription className="text-blue-700">
                Monitore promessas dos 27 governadores estaduais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span className="text-sm text-blue-600">206 promessas</span>
                <Badge className="bg-blue-500 hover:bg-blue-600">Ver por estado</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Actions */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card 
            className="cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-red-100 to-red-50 border-red-200"
            onClick={() => navigate('/denuncia')}
          >
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="text-white h-6 w-6" />
              </div>
              <CardTitle className="text-xl text-red-800">Fazer Cobrança</CardTitle>
              <CardDescription className="text-red-700">
                Registre descumprimentos e cobre transparência
              </CardDescription>
            </CardHeader>
          </Card>

          <Card 
            className="cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200"
            onClick={() => navigate('/estatisticas')}
          >
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="text-white h-6 w-6" />
              </div>
              <CardTitle className="text-xl text-purple-800">Estatísticas</CardTitle>
              <CardDescription className="text-purple-700">
                Análises e gráficos de cumprimento nacional
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Participe da democracia digital
            </h3>
            <p className="text-gray-600 mb-6">
              Seja um cidadão ativo! Monitore, cobre e compartilhe o desempenho dos nossos representantes.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold px-8 py-3"
              onClick={() => navigate('/sobre')}
            >
              Saiba mais sobre o projeto
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-600">
              © 2024 Promessômetro Brasil - Transparência e participação cidadã
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Dados coletados de fontes oficiais e verificados por nossa equipe
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
