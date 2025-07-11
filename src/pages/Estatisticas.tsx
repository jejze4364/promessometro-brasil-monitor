
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, BarChart3, TrendingUp, TrendingDown, Users, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Estatisticas = () => {
  const navigate = useNavigate();

  const estatisticasGerais = {
    totalPromessas: 248,
    cumpridas: 67,
    andamento: 134,
    descumpridas: 47,
    taxaCumprimento: 67
  };

  const estatisticasPorCategoria = [
    { categoria: "Educação", total: 45, cumpridas: 12, andamento: 25, descumpridas: 8, taxa: 58 },
    { categoria: "Saúde", total: 38, cumpridas: 8, andamento: 22, descumpridas: 8, taxa: 50 },
    { categoria: "Segurança", total: 32, cumpridas: 15, andamento: 12, descumpridas: 5, taxa: 72 },
    { categoria: "Economia", total: 28, cumpridas: 9, andamento: 15, descumpridas: 4, taxa: 59 },
    { categoria: "Meio Ambiente", total: 25, cumpridas: 6, andamento: 14, descumpridas: 5, taxa: 52 },
    { categoria: "Infraestrutura", total: 22, cumpridas: 8, andamento: 11, descumpridas: 3, taxa: 61 },
    { categoria: "Assistência Social", total: 20, cumpridas: 7, andamento: 10, descumpridas: 3, taxa: 60 },
    { categoria: "Cultura", total: 18, cumpridas: 2, andamento: 12, descumpridas: 4, taxa: 44 }
  ];

  const rankingEstados = [
    { estado: "GO", nome: "Goiás", taxa: 82, cumpridas: 6, total: 11 },
    { estado: "RS", nome: "Rio Grande do Sul", taxa: 75, cumpridas: 4, total: 10 },
    { estado: "RN", nome: "Rio Grande do Norte", taxa: 73, cumpridas: 4, total: 8 },
    { estado: "SC", nome: "Santa Catarina", taxa: 72, cumpridas: 4, total: 9 },
    { estado: "SP", nome: "São Paulo", taxa: 70, cumpridas: 6, total: 15 },
    { estado: "MG", nome: "Minas Gerais", taxa: 65, cumpridas: 5, total: 13 },
    { estado: "PR", nome: "Paraná", taxa: 64, cumpridas: 5, total: 11 },
    { estado: "BA", nome: "Bahia", taxa: 63, cumpridas: 5, total: 12 }
  ];

  const comparativoTempo = [
    { periodo: "Jan-Mar 2023", cumpridas: 15, andamento: 45, descumpridas: 8 },
    { periodo: "Abr-Jun 2023", cumpridas: 28, andamento: 52, descumpridas: 12 },
    { periodo: "Jul-Set 2023", cumpridas: 38, andamento: 71, descumpridas: 18 },
    { periodo: "Out-Dez 2023", cumpridas: 52, andamento: 98, descumpridas: 28 },
    { periodo: "Jan-Mar 2024", cumpridas: 67, andamento: 134, descumpridas: 47 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 hover:bg-purple-100"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar ao início</span>
            </Button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Promessômetro Brasil
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="text-white h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Estatísticas Nacionais
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Análise completa do cumprimento de promessas políticas em todo o Brasil
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center border border-purple-200">
            <div className="text-2xl font-bold text-gray-800">{estatisticasGerais.totalPromessas}</div>
            <div className="text-sm text-gray-600">Total de promessas</div>
          </div>
          <div className="bg-green-100/60 backdrop-blur-sm rounded-lg p-4 text-center border border-green-200">
            <div className="text-2xl font-bold text-green-600">{estatisticasGerais.cumpridas}</div>
            <div className="text-sm text-green-600">Cumpridas</div>
          </div>
          <div className="bg-yellow-100/60 backdrop-blur-sm rounded-lg p-4 text-center border border-yellow-200">
            <div className="text-2xl font-bold text-yellow-600">{estatisticasGerais.andamento}</div>
            <div className="text-sm text-yellow-600">Em andamento</div>
          </div>
          <div className="bg-red-100/60 backdrop-blur-sm rounded-lg p-4 text-center border border-red-200">
            <div className="text-2xl font-bold text-red-600">{estatisticasGerais.descumpridas}</div>
            <div className="text-sm text-red-600">Descumpridas</div>
          </div>
        </div>

        {/* Taxa Geral */}
        <Card className="max-w-4xl mx-auto mb-8 bg-white/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Taxa Nacional de Cumprimento</span>
              <Badge variant="outline" className="text-lg font-bold">
                {estatisticasGerais.taxaCumprimento}%
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={estatisticasGerais.taxaCumprimento} className="h-4 mb-2" />
            <p className="text-sm text-gray-600">
              Baseado em promessas cumpridas (100%) e em andamento (50%)
            </p>
          </CardContent>
        </Card>

        {/* Estatísticas por Categoria */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Desempenho por Categoria</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {estatisticasPorCategoria.map((cat, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{cat.categoria}</CardTitle>
                    <Badge variant="outline">{cat.taxa}%</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Total: {cat.total}</span>
                      <span>Cumpridas: {cat.cumpridas}</span>
                    </div>
                    <Progress value={cat.taxa} className="h-2" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-green-50 rounded p-2">
                      <div className="font-bold text-green-600">{cat.cumpridas}</div>
                      <div className="text-green-600">Cumpridas</div>
                    </div>
                    <div className="bg-yellow-50 rounded p-2">
                      <div className="font-bold text-yellow-600">{cat.andamento}</div>
                      <div className="text-yellow-600">Andamento</div>
                    </div>
                    <div className="bg-red-50 rounded p-2">
                      <div className="font-bold text-red-600">{cat.descumpridas}</div>
                      <div className="text-red-600">Descumpridas</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ranking Estados */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Ranking dos Estados</h3>
          <Card className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="space-y-4">
                {rankingEstados.map((estado, index) => (
                  <div key={estado.estado} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">{estado.estado}</span>
                        <span className="text-gray-600">{estado.nome}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm text-gray-600">
                          {estado.cumpridas}/{estado.total} promessas
                        </div>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`${estado.taxa >= 70 ? 'border-green-500 text-green-700' : estado.taxa >= 60 ? 'border-yellow-500 text-yellow-700' : 'border-red-500 text-red-700'}`}
                      >
                        {estado.taxa}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Evolução Temporal */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Evolução ao Longo do Tempo</h3>
          <Card className="max-w-4xl mx-auto bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span>Progresso Trimestral</span>
              </CardTitle>
              <CardDescription>
                Acompanhe como as promessas evoluem a cada trimestre
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {comparativoTempo.map((periodo, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{periodo.periodo}</h4>
                      <div className="flex items-center space-x-2">
                        {index > 0 && (
                          <Badge 
                            variant="outline" 
                            className={`${periodo.cumpridas > comparativoTempo[index-1].cumpridas ? 'border-green-500 text-green-700' : 'border-gray-500 text-gray-700'}`}
                          >
                            {periodo.cumpridas > comparativoTempo[index-1].cumpridas ? '+' : ''}
                            {periodo.cumpridas - (index > 0 ? comparativoTempo[index-1].cumpridas : 0)}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="bg-green-50 p-2 rounded">
                        <div className="font-bold text-green-600">{periodo.cumpridas}</div>
                        <div className="text-green-600">Cumpridas</div>
                      </div>
                      <div className="bg-yellow-50 p-2 rounded">
                        <div className="font-bold text-yellow-600">{periodo.andamento}</div>
                        <div className="text-yellow-600">Andamento</div>
                      </div>
                      <div className="bg-red-50 p-2 rounded">
                        <div className="font-bold text-red-600">{periodo.descumpridas}</div>
                        <div className="text-red-600">Descumpridas</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Quer acompanhar mais de perto?
              </h3>
              <p className="text-gray-600 mb-6">
                Explore os dados detalhados de cada político e categoria.
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                  onClick={() => navigate('/presidente')}
                >
                  Ver Presidente
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/governadores')}
                >
                  Ver Governadores
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Estatisticas;
