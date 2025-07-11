
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Search, MapPin, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Governadores = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const governadores = [
    { estado: "AC", nome: "Gladson Cameli", partido: "PP", promessas: 8, cumpridas: 2, andamento: 4, descumpridas: 2 },
    { estado: "AL", nome: "Paulo Dantas", partido: "MDB", promessas: 7, cumpridas: 3, andamento: 3, descumpridas: 1 },
    { estado: "AM", nome: "Wilson Lima", partido: "União Brasil", promessas: 9, cumpridas: 4, andamento: 3, descumpridas: 2 },
    { estado: "AP", nome: "Clécio Luís", partido: "Solidariedade", promessas: 6, cumpridas: 2, andamento: 3, descumpridas: 1 },
    { estado: "BA", nome: "Jerônimo Rodrigues", partido: "PT", promessas: 12, cumpridas: 5, andamento: 5, descumpridas: 2 },
    { estado: "CE", nome: "Elmano de Freitas", partido: "PT", promessas: 10, cumpridas: 4, andamento: 4, descumpridas: 2 },
    { estado: "DF", nome: "Ibaneis Rocha", partido: "MDB", promessas: 8, cumpridas: 3, andamento: 3, descumpridas: 2 },
    { estado: "ES", nome: "Renato Casagrande", partido: "PSB", promessas: 9, cumpridas: 4, andamento: 4, descumpridas: 1 },
    { estado: "GO", nome: "Ronaldo Caiado", partido: "União Brasil", promessas: 11, cumpridas: 6, andamento: 3, descumpridas: 2 },
    { estado: "MA", nome: "Carlos Brandão", partido: "PSB", promessas: 8, cumpridas: 3, andamento: 4, descumpridas: 1 },
    { estado: "MG", nome: "Romeu Zema", partido: "Novo", promessas: 13, cumpridas: 5, andamento: 6, descumpridas: 2 },
    { estado: "MS", nome: "Eduardo Riedel", partido: "PSDB", promessas: 7, cumpridas: 3, andamento: 3, descumpridas: 1 },
    { estado: "MT", nome: "Mauro Mendes", partido: "União Brasil", promessas: 9, cumpridas: 4, andamento: 3, descumpridas: 2 },
    { estado: "PA", nome: "Helder Barbalho", partido: "MDB", promessas: 10, cumpridas: 4, andamento: 5, descumpridas: 1 },
    { estado: "PB", nome: "João Azevêdo", partido: "PSB", promessas: 8, cumpridas: 3, andamento: 4, descumpridas: 1 },
    { estado: "PE", nome: "Raquel Lyra", partido: "PSDB", promessas: 9, cumpridas: 3, andamento: 5, descumpridas: 1 },
    { estado: "PI", nome: "Rafael Fonteles", partido: "PT", promessas: 7, cumpridas: 3, andamento: 3, descumpridas: 1 },
    { estado: "PR", nome: "Ratinho Júnior", partido: "PSD", promessas: 11, cumpridas: 5, andamento: 4, descumpridas: 2 },
    { estado: "RJ", nome: "Cláudio Castro", partido: "PL", promessas: 12, cumpridas: 4, andamento: 6, descumpridas: 2 },
    { estado: "RN", nome: "Fátima Bezerra", partido: "PT", promessas: 8, cumpridas: 4, andamento: 3, descumpridas: 1 },
    { estado: "RO", nome: "Marcos Rocha", partido: "União Brasil", promessas: 6, cumpridas: 2, andamento: 3, descumpridas: 1 },
    { estado: "RR", nome: "Antonio Denarium", partido: "PP", promessas: 5, cumpridas: 2, andamento: 2, descumpridas: 1 },
    { estado: "RS", nome: "Eduardo Leite", partido: "PSDB", promessas: 10, cumpridas: 4, andamento: 5, descumpridas: 1 },
    { estado: "SC", nome: "Jorginho Mello", partido: "PL", promessas: 9, cumpridas: 4, andamento: 4, descumpridas: 1 },
    { estado: "SE", nome: "Fábio Mitidieri", partido: "PSD", promessas: 7, cumpridas: 3, andamento: 3, descumpridas: 1 },
    { estado: "SP", nome: "Tarcísio de Freitas", partido: "Republicanos", promessas: 15, cumpridas: 6, andamento: 7, descumpridas: 2 },
    { estado: "TO", nome: "Wanderlei Barbosa", partido: "Republicanos", promessas: 6, cumpridas: 2, andamento: 3, descumpridas: 1 }
  ];

  const estadosNomes = {
    "AC": "Acre", "AL": "Alagoas", "AP": "Amapá", "AM": "Amazonas", "BA": "Bahia",
    "CE": "Ceará", "DF": "Distrito Federal", "ES": "Espírito Santo", "GO": "Goiás",
    "MA": "Maranhão", "MT": "Mato Grosso", "MS": "Mato Grosso do Sul", "MG": "Minas Gerais",
    "PA": "Pará", "PB": "Paraíba", "PR": "Paraná", "PE": "Pernambuco", "PI": "Piauí",
    "RJ": "Rio de Janeiro", "RN": "Rio Grande do Norte", "RS": "Rio Grande do Sul",
    "RO": "Rondônia", "RR": "Roraima", "SC": "Santa Catarina", "SP": "São Paulo",
    "SE": "Sergipe", "TO": "Tocantins"
  };

  const getPartidoColor = (partido: string) => {
    const colors = {
      "PT": "bg-red-100 text-red-800",
      "PL": "bg-blue-100 text-blue-800", 
      "MDB": "bg-green-100 text-green-800",
      "PSDB": "bg-blue-100 text-blue-800",
      "PP": "bg-purple-100 text-purple-800",
      "PSB": "bg-orange-100 text-orange-800",
      "PSD": "bg-yellow-100 text-yellow-800",
      "União Brasil": "bg-indigo-100 text-indigo-800",
      "Republicanos": "bg-cyan-100 text-cyan-800",
      "Novo": "bg-emerald-100 text-emerald-800",
      "Solidariedade": "bg-pink-100 text-pink-800"
    };
    return colors[partido as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const calculateProgress = (gov: any) => {
    return Math.round(((gov.cumpridas * 100) + (gov.andamento * 50)) / gov.promessas);
  };

  const filteredGovernadores = governadores.filter(gov =>
    gov.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    gov.estado.toLowerCase().includes(searchTerm.toLowerCase()) ||
    estadosNomes[gov.estado as keyof typeof estadosNomes].toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        {/* Title and Search */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Governadores Estaduais
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Monitore as promessas de campanha dos 27 governadores do Brasil. 
            Transparência e accountability em todos os estados.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar por estado ou governador..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/80"
            />
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center border border-blue-200">
            <div className="text-2xl font-bold text-gray-800">27</div>
            <div className="text-sm text-gray-600">Estados + DF</div>
          </div>
          <div className="bg-green-100/60 backdrop-blur-sm rounded-lg p-4 text-center border border-green-200">
            <div className="text-2xl font-bold text-green-600">
              {governadores.reduce((acc, gov) => acc + gov.cumpridas, 0)}
            </div>
            <div className="text-sm text-green-600">Promessas cumpridas</div>
          </div>
          <div className="bg-yellow-100/60 backdrop-blur-sm rounded-lg p-4 text-center border border-yellow-200">
            <div className="text-2xl font-bold text-yellow-600">
              {governadores.reduce((acc, gov) => acc + gov.andamento, 0)}
            </div>
            <div className="text-sm text-yellow-600">Em andamento</div>
          </div>
          <div className="bg-red-100/60 backdrop-blur-sm rounded-lg p-4 text-center border border-red-200">
            <div className="text-2xl font-bold text-red-600">
              {governadores.reduce((acc, gov) => acc + gov.descumpridas, 0)}
            </div>
            <div className="text-sm text-red-600">Descumpridas</div>
          </div>
        </div>

        {/* Governors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGovernadores.map((governador) => (
            <Card 
              key={governador.estado} 
              className="cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-xl bg-white/60 backdrop-blur-sm"
              onClick={() => navigate(`/governador/${governador.estado.toLowerCase()}`)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <MapPin className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        {governador.estado}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {estadosNomes[governador.estado as keyof typeof estadosNomes]}
                      </p>
                    </div>
                  </div>
                  <Badge className={getPartidoColor(governador.partido)}>
                    {governador.partido}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg leading-tight">
                  {governador.nome}
                </CardTitle>
                
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm text-gray-600">
                    {governador.promessas} promessas
                  </span>
                  <Badge variant="outline" className="text-sm font-bold">
                    {calculateProgress(governador)}% progresso
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-green-50 rounded-lg p-2">
                    <div className="text-lg font-bold text-green-600">
                      {governador.cumpridas}
                    </div>
                    <div className="text-xs text-green-600">Cumpridas</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-2">
                    <div className="text-lg font-bold text-yellow-600">
                      {governador.andamento}
                    </div>
                    <div className="text-xs text-yellow-600">Andamento</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-2">
                    <div className="text-lg font-bold text-red-600">
                      {governador.descumpridas}
                    </div>
                    <div className="text-xs text-red-600">Descumpridas</div>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  size="sm"
                >
                  Ver promessas detalhadas
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredGovernadores.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500 mb-4">
              <User className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Nenhum governador encontrado</p>
              <p className="text-sm">Tente buscar por outro termo</p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-white/60 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Quer acompanhar seu estado mais de perto?
              </h3>
              <p className="text-gray-600 mb-6">
                Clique no card do seu governador para ver todas as promessas detalhadas e fontes verificadas.
              </p>
              <Button 
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                onClick={() => navigate('/denuncia')}
              >
                Fazer uma cobrança
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Governadores;
