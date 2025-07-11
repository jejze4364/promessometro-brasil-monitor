
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle, Clock, XCircle, ExternalLink, AlertTriangle, MapPin } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const GovernadorDetalhes = () => {
  const navigate = useNavigate();
  const { estado } = useParams();

  // Mock data - seria substituído por dados reais
  const governadorData = {
    "sp": {
      nome: "Tarcísio de Freitas",
      partido: "Republicanos",
      estado: "SP",
      estadoNome: "São Paulo",
      promessas: [
        {
          id: 1,
          titulo: "Construir 30 novas escolas técnicas",
          categoria: "Educação",
          status: "andamento",
          progresso: 65,
          descricao: "Programa para construção de escolas técnicas estaduais em parceria com o setor privado",
          fonte: "Secretaria de Educação de SP",
          dataAtualizacao: "2024-01-15"
        },
        {
          id: 2,
          titulo: "Reduzir em 20% os homicídios no estado",
          categoria: "Segurança Pública",
          status: "andamento",
          progresso: 45,
          descricao: "Plano integrado de segurança com foco na prevenção e inteligência",
          fonte: "Secretaria de Segurança Pública",
          dataAtualizacao: "2024-01-10"
        },
        {
          id: 3,
          titulo: "Privatizar a Sabesp",
          categoria: "Infraestrutura",
          status: "cumprida",
          progresso: 100,
          descricao: "Processo de desestatização da Companhia de Saneamento Básico do Estado de São Paulo",
          fonte: "Diário Oficial do Estado",
          dataAtualizacao: "2023-08-20"
        }
      ]
    }
  };

  const dados = governadorData[estado?.toLowerCase() as keyof typeof governadorData];

  if (!dados) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-bold mb-4">Governador não encontrado</h2>
            <p className="text-gray-600 mb-6">O estado "{estado}" não foi encontrado em nossa base de dados.</p>
            <Button onClick={() => navigate('/governadores')}>
              Voltar para governadores
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'cumprida': return 'text-green-600 bg-green-100';
      case 'andamento': return 'text-yellow-600 bg-yellow-100';
      case 'descumprida': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'cumprida': return <CheckCircle className="h-4 w-4" />;
      case 'andamento': return <Clock className="h-4 w-4" />;
      case 'descumprida': return <XCircle className="h-4 w-4" />;
      default: return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'cumprida': return 'Cumprida';
      case 'andamento': return 'Em andamento';
      case 'descumprida': return 'Descumprida';
      default: return 'Sem status';
    }
  };

  const stats = {
    total: dados.promessas.length,
    cumpridas: dados.promessas.filter(p => p.status === 'cumprida').length,
    andamento: dados.promessas.filter(p => p.status === 'andamento').length,
    descumpridas: dados.promessas.filter(p => p.status === 'descumprida').length,
  };

  const progressoGeral = Math.round(
    (stats.cumpridas * 100 + stats.andamento * 50) / stats.total
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/governadores')}
              className="flex items-center space-x-2 hover:bg-blue-100"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar aos governadores</span>
            </Button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Promessômetro Brasil
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Governor Profile */}
        <div className="text-center mb-8">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="text-white h-16 w-16" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {dados.nome}
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
              {dados.partido}
            </Badge>
            <Badge variant="outline" className="text-lg">
              {dados.estado} - {dados.estadoNome}
            </Badge>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Governador do Estado de {dados.estadoNome} (2023-2026)
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center border border-blue-200">
            <div className="text-2xl font-bold text-gray-800">{stats.total}</div>
            <div className="text-sm text-gray-600">Total de promessas</div>
          </div>
          <div className="bg-green-100/60 backdrop-blur-sm rounded-lg p-4 text-center border border-green-200">
            <div className="text-2xl font-bold text-green-600">{stats.cumpridas}</div>
            <div className="text-sm text-green-600">Cumpridas</div>
          </div>
          <div className="bg-yellow-100/60 backdrop-blur-sm rounded-lg p-4 text-center border border-yellow-200">
            <div className="text-2xl font-bold text-yellow-600">{stats.andamento}</div>
            <div className="text-sm text-yellow-600">Em andamento</div>
          </div>
          <div className="bg-red-100/60 backdrop-blur-sm rounded-lg p-4 text-center border border-red-200">
            <div className="text-2xl font-bold text-red-600">{stats.descumpridas}</div>
            <div className="text-sm text-red-600">Descumpridas</div>
          </div>
        </div>

        {/* Overall Progress */}
        <Card className="max-w-4xl mx-auto mb-8 bg-white/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Progresso Geral das Promessas</span>
              <Badge variant="outline" className="text-lg font-bold">
                {progressoGeral}%
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={progressoGeral} className="h-3" />
            <p className="text-sm text-gray-600 mt-2">
              Baseado em promessas cumpridas (100%) e em andamento (50%)
            </p>
          </CardContent>
        </Card>

        {/* Promises List */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Promessas de Campanha</h3>
          <div className="space-y-4">
            {dados.promessas.map((promessa) => (
              <Card key={promessa.id} className="bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {promessa.categoria}
                        </Badge>
                        <Badge className={getStatusColor(promessa.status)}>
                          {getStatusIcon(promessa.status)}
                          <span className="ml-1">{getStatusText(promessa.status)}</span>
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {promessa.titulo}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {promessa.descricao}
                  </CardDescription>
                  
                  {promessa.status === 'andamento' && (
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Progresso</span>
                        <span className="text-sm text-gray-600">{promessa.progresso}%</span>
                      </div>
                      <Progress value={promessa.progresso} className="h-2" />
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <ExternalLink className="h-3 w-3" />
                      <span>Fonte: {promessa.fonte}</span>
                    </div>
                    <span>Atualizado em {new Date(promessa.dataAtualizacao).toLocaleDateString('pt-BR')}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Encontrou algo incorreto?
              </h3>
              <p className="text-gray-600 mb-6">
                Ajude-nos a manter as informações atualizadas sobre seu governador.
              </p>
              <Button 
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                onClick={() => navigate('/denuncia')}
              >
                <AlertTriangle className="h-4 w-4 mr-2" />
                Fazer uma cobrança
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default GovernadorDetalhes;
