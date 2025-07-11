
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

interface FormData {
  age: number;
  state: string;
  gender: string;
  smartphone: string;
  appUsage: string;
  features: string[];
  comments: string;
  consent: string;
}

const Pesquisa = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>();
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      if (selectedFeatures.length >= 3) {
        toast({
          title: "Limite excedido",
          description: "Você pode selecionar no máximo 3 funcionalidades.",
          variant: "destructive",
        });
        return;
      }
      setSelectedFeatures([...selectedFeatures, feature]);
    } else {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    }
    setValue('features', selectedFeatures);
  };

  const onSubmit = async (data: FormData) => {
    if (data.consent === 'nao') {
      toast({
        title: "Consentimento necessário",
        description: "Para prosseguir, é necessário autorizar o uso dos dados fornecidos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = {
        ...data,
        features: selectedFeatures,
        timestamp: serverTimestamp(),
        submittedAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
        language: navigator.language
      };

      const docRef = await addDoc(collection(db, 'pesquisas'), formData);
      
      toast({
        title: "✅ Respostas enviadas com sucesso!",
        description: `Obrigado por contribuir! ID: ${docRef.id}`,
      });

      // Reset form
      setSelectedFeatures([]);
      
    } catch (error) {
      console.error("Erro ao salvar documento:", error);
      toast({
        title: "❌ Erro ao enviar respostas",
        description: "Ocorreu um erro ao enviar suas respostas. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      margin: 0,
      padding: '20px',
      boxSizing: 'border-box',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh'
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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <Input 
                  type="number" 
                  min="16" 
                  max="120" 
                  {...register('age', { required: 'Idade é obrigatória', min: 16, max: 120 })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                />
                {errors.age && <span style={{color: 'red', fontSize: '14px'}}>{errors.age.message}</span>}
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#333'
                }}>Estado:</label>
                <select 
                  {...register('state', { required: 'Estado é obrigatório' })}
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
                {errors.state && <span style={{color: 'red', fontSize: '14px'}}>{errors.state.message}</span>}
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#333'
                }}>Sexo:</label>
                <select 
                  {...register('gender', { required: 'Sexo é obrigatório' })}
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
                {errors.gender && <span style={{color: 'red', fontSize: '14px'}}>{errors.gender.message}</span>}
              </div>
            </div>

            {/* Uso de Tecnologia */}
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
                <span>📱</span> Uso de Tecnologia
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#333'
                }}>Você possui smartphone?</label>
                <select 
                  {...register('smartphone', { required: 'Campo obrigatório' })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                >
                  <option value="">Selecione</option>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
                {errors.smartphone && <span style={{color: 'red', fontSize: '14px'}}>{errors.smartphone.message}</span>}
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#333'
                }}>Com que frequência você utiliza aplicativos móveis?</label>
                <select 
                  {...register('appUsage', { required: 'Campo obrigatório' })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                >
                  <option value="">Selecione</option>
                  <option value="diariamente">Diariamente</option>
                  <option value="semanalmente">Semanalmente</option>
                  <option value="mensalmente">Mensalmente</option>
                  <option value="raramente">Raramente</option>
                  <option value="nunca">Nunca</option>
                </select>
                {errors.appUsage && <span style={{color: 'red', fontSize: '14px'}}>{errors.appUsage.message}</span>}
              </div>
            </div>

            {/* Expectativas sobre o App */}
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
                <span>⚙️</span> Expectativas sobre o App
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#333'
                }}>Quais funcionalidades você considera mais importantes? (Selecione até 3)</label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '15px',
                  marginTop: '10px'
                }}>
                  {[
                    'Acompanhamento das promessas',
                    'Notificações sobre atualizações', 
                    'Denúncia de descumprimento',
                    'Comparativo entre promessas e ações'
                  ].map((feature) => (
                    <div key={feature} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px',
                      background: selectedFeatures.includes(feature) ? '#e8f0fe' : 'white',
                      borderRadius: '8px',
                      border: `2px solid ${selectedFeatures.includes(feature) ? '#2c5aa0' : '#e0e0e0'}`,
                      cursor: 'pointer'
                    }}>
                      <input 
                        type="checkbox" 
                        checked={selectedFeatures.includes(feature)}
                        onChange={(e) => handleFeatureChange(feature, e.target.checked)}
                        style={{ margin: 0 }}
                      />
                      <label style={{ cursor: 'pointer', margin: 0 }}>{feature}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Comentários Adicionais */}
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
                <span>💬</span> Comentários
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#333'
                }}>Comentários adicionais sobre o aplicativo:</label>
                <textarea 
                  {...register('comments')}
                  rows={4} 
                  placeholder="Compartilhe suas sugestões, dúvidas ou expectativas sobre o Promessômetro Brasil..."
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px',
                    resize: 'vertical'
                  }}
                />
              </div>
            </div>

            {/* Consentimento */}
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
                <span>🔒</span> Consentimento
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: 600,
                  color: '#333'
                }}>Você autoriza o uso dos dados fornecidos para o desenvolvimento e aprimoramento do aplicativo?</label>
                <select 
                  {...register('consent', { required: 'Consentimento é obrigatório' })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px'
                  }}
                >
                  <option value="">Selecione</option>
                  <option value="sim">Sim, autorizo</option>
                  <option value="nao">Não autorizo</option>
                </select>
                {errors.consent && <span style={{color: 'red', fontSize: '14px'}}>{errors.consent.message}</span>}
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{
                background: isSubmitting ? '#ccc' : 'linear-gradient(135deg, #2c5aa0 0%, #1e3c72 100%)',
                color: 'white',
                padding: '15px 40px',
                border: 'none',
                borderRadius: '50px',
                fontSize: '18px',
                fontWeight: 600,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                width: '100%',
                marginTop: '20px'
              }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Respostas'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Pesquisa;
