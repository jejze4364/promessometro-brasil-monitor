
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle, Clock, XCircle, ExternalLink, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Presidente = () => {
  const navigate = useNavigate();

  const promessas = [
    {
      id: 1,
      titulo: "Retomar o Bolsa Família com valor mínimo de R$600",
      categoria: "Assistência Social",
      status: "cumprida",
      progresso: 100,
      descricao: "Programa foi retomado em janeiro de 2023 com valor de R$600 mensais",
      fonte: "Portal do Governo Federal",
      dataAtualizacao: "2023-12-15"
    },
    {
      id: 2,
      titulo: "Revogar decretos que flexibilizam o porte de armas",
      categoria: "Segurança Pública",
      status: "cumprida",
      progresso: 100,
      descricao: "Decretos foram revogados nos primeiros 100 dias de governo",
      fonte: "Diário Oficial da União",
      dataAtualizacao: "2023-04-10"
    },
    {
      id: 3,
      titulo: "Zerar o desmatamento na Amazônia até 2030",
      categoria: "Meio Ambiente",
      status: "andamento",
      progresso: 35,
      descricao: "Redução de 11,3% no desmatamento em 2023, mas ainda longe da meta",
      fonte: "INPE - Instituto Nacional de Pesquisas Espaciais",
      dataAtualizacao: "2024-01-08"
    },
    {
      id: 4,
      titulo: "Criar um ministério dos povos indígenas",
      categoria: "Direitos Humanos",
      status: "cumprida",
      progresso: 100,
      descricao: "Ministério dos Povos Indígenas criado e em funcionamento",
      fonte: "Portal Planalto",
      dataAtualizacao: "2023-01-02"
    },
    {
      id: 5,
      titulo: "Investir em escolas em tempo integral",
      categoria: "Educação",
      status: "andamento",
      progresso: 45,
      descricao: "Programa lançado, mas implementação ainda em fase inicial",
      fonte: "Ministério da Educação",
      dataAtualizacao: "2023-11-20"
    },
    {
      id: 6,
      titulo: "Recompor orçamento das universidades federais",
      categoria: "Educação",
      status: "andamento",
      progresso: 60,
      descricao: "Parte do orçamento foi recomposta, mas ainda abaixo do necessário",
      fonte: "Ministério da Educação",
      dataAtualizacao: "2023-12-01"
    },
    {
      id: 7,
      titulo: "Reconstruir o SUS com mais recursos",
      categoria: "Saúde",
      status: "andamento",
      progresso: 40,
      descricao: "Aumento no orçamento aprovado, implementação em curso",
      fonte: "Ministério da Saúde",
      dataAtualizacao: "2023-10-15"
    },
    {
      id: 8,
      titulo: "Renegociar dívidas do Fies",
      categoria: "Educação",
      status: "descumprida",
      progresso: 0,
      descricao: "Proposta ainda não foi apresentada ao Congresso",
      fonte: "Ministério da Educação",
      dataAtualizacao: "2023-12-10"
    }
  ];

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
    total: promessas.length,
    cumpridas: promessas.filter(p => p.status === 'cumprida').length,
    andamento: promessas.filter(p => p.status === 'andamento').length,
    descumpridas: promessas.filter(p => p.status === 'descumprida').length,
  };

  const progressoGeral = Math.round(
    (stats.cumpridas * 100 + stats.andamento * 50) / stats.total
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:bg-green-100"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar ao início</span>
            </Button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Promessômetro Brasil
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* President Profile */}
        <div className="text-center mb-8">
          <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-4xl font-bold">LI</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Luiz Inácio Lula da Silva
          </h2>
          <Badge className="bg-red-600 hover:bg-red-700 text-white mb-4">
            Partido dos Trabalhadores (PT)
          </Badge>
          <p className="text-gray-600 max-w-2xl mx-auto">
            38º Presidente da República Federativa do Brasil (2023-2026)
          </p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center border border-green-200">
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
            {promessas.map((promessa) => (
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
                Ajude-nos a manter as informações atualizadas. Faça uma denúncia ou sugestão.
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

export default Presidente;
