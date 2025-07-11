
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Pesquisa = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #2c5aa0 0%, #1e3c72 100%)',
          color: 'white',
          padding: '40px',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '2.5em',
            marginBottom: '10px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Promessômetro Brasil
          </h1>
          <p style={{
            fontSize: '1.2em',
            opacity: 0.9
          }}>
            Formulário de Levantamento de Requisitos
          </p>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #f8f9ff 0%, #e8f0fe 100%)',
          padding: '40px',
          borderBottom: '3px solid #2c5aa0'
        }}>
          <div>
            <h2 style={{
              color: '#2c5aa0',
              fontSize: '2.2em',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              O que é o Promessômetro Brasil?
            </h2>
            <p style={{
              fontSize: '1.1em',
              lineHeight: 1.8,
              color: '#444',
              marginBottom: '30px',
              textAlign: 'justify'
            }}>
              O <strong>Promessômetro Brasil</strong> é uma plataforma digital inovadora que promove a transparência e accountability democrática no país. Nossa missão é acompanhar, monitorar e avaliar o cumprimento das promessas feitas por políticos durante campanhas eleitorais e mandatos.
            </p>
            
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <Button 
                onClick={() => navigate('/dashboard')}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold px-8 py-6 text-lg rounded-full"
                size="lg"
              >
                Acessar o Promessômetro Brasil
              </Button>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '25px',
              margin: '40px 0'
            }}>
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                textAlign: 'center',
                border: '2px solid transparent'
              }}>
                <div style={{
                  fontSize: '3em',
                  marginBottom: '15px'
                }}>🏛️</div>
                <h3 style={{
                  color: '#2c5aa0',
                  fontSize: '1.4em',
                  marginBottom: '15px'
                }}>Transparência Política</h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.95em',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Monitore as promessas de Presidentes e Governadores com dados verificados e atualizados em tempo real.
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                textAlign: 'center',
                border: '2px solid transparent'
              }}>
                <div style={{
                  fontSize: '3em',
                  marginBottom: '15px'
                }}>📊</div>
                <h3 style={{
                  color: '#2c5aa0',
                  fontSize: '1.4em',
                  marginBottom: '15px'
                }}>Acompanhamento Visual</h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.95em',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Gráficos e indicadores claros mostram o progresso das promessas: cumpridas, em andamento ou descumpridas.
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                textAlign: 'center',
                border: '2px solid transparent'
              }}>
                <div style={{
                  fontSize: '3em',
                  marginBottom: '15px'
                }}>🔍</div>
                <h3 style={{
                  color: '#2c5aa0',
                  fontSize: '1.4em',
                  marginBottom: '15px'
                }}>Verificação Rigorosa</h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.95em',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Cada promessa é verificada por nossa equipe com base em fontes oficiais, dados governamentais e evidências concretas.
                </p>
              </div>
              
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                textAlign: 'center',
                border: '2px solid transparent'
              }}>
                <div style={{
                  fontSize: '3em',
                  marginBottom: '15px'
                }}>📱</div>
                <h3 style={{
                  color: '#2c5aa0',
                  fontSize: '1.4em',
                  marginBottom: '15px'
                }}>Participação Cidadã</h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.95em',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  Os cidadãos podem contribuir com informações, denunciar descumprimentos e acompanhar temas de seu interesse.
                </p>
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #2c5aa0 0%, #1e3c72 100%)',
              color: 'white',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center',
              margin: '30px 0'
            }}>
              <h3 style={{
                fontSize: '1.8em',
                marginBottom: '15px'
              }}>🚀 Ajude-nos a Construir essa Ferramenta!</h3>
            </div>
          </div>
        </div>

        <div style={{
          padding: '40px'
        }}>
          <form id="surveyForm">
            {/* Dados Pessoais */}
            <div style={{
              marginBottom: '40px',
              padding: '30px',
              background: 'linear-gradient(135deg, #f8f9ff 0%, #e8f0fe 100%)',
              borderRadius: '15px',
              borderLeft: '5px solid #2c5aa0'
            }}>
              <h3 style={{
                color: '#2c5aa0',
                fontSize: '1.5em',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span>👤</span> Dados Pessoais
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#333'
                }}>Idade:</label>
                <input 
                  type="number" 
                  min="16" 
                  max="120" 
                  required 
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#333'
                }}>Estado:</label>
                <select 
                  required 
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                >
                  <option value="">Selecione seu estado</option>
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
                </select>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#333'
                }}>Sexo:</label>
                <select 
                  required 
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                >
                  <option value="">Selecione</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              style={{
                background: 'linear-gradient(135deg, #2c5aa0 0%, #1e3c72 100%)',
                color: 'white',
                padding: '15px 40px',
                border: 'none',
                borderRadius: '50px',
                fontSize: '18px',
                fontWeight: 600,
                cursor: 'pointer',
                width: '100%',
                marginTop: '20px'
              }}
            >
              Enviar Respostas
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pesquisa;
