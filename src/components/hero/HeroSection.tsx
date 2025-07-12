import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleScrollToForm = () => {
    const surveyForm = document.getElementById("surveyForm");
    if (surveyForm) {
      surveyForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-[#2c5aa0] to-[#1e3c72] text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-md">
          Promessômetro Brasil
        </h1>
        <p className="text-xl opacity-90">
          Formulário de Levantamento de Requisitos
        </p>
      </section>

      <section className="bg-gradient-to-br from-[#f8f9ff] to-[#e8f0fe] py-16 border-b-4 border-[#2c5aa0]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-[#2c5aa0] text-3xl font-semibold text-center mb-6">
            O que é o Promessômetro Brasil?
          </h2>
          <p className="text-[#444] text-lg leading-relaxed text-justify mb-10">
            O <strong>Promessômetro Brasil</strong> é uma plataforma digital inovadora que promove a transparência e accountability democrática no país. Nossa missão é acompanhar, monitorar e avaliar o cumprimento das promessas feitas por políticos durante campanhas eleitorais e mandatos.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <Button
              onClick={() => navigate("/dashboard")}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold px-8 py-6 text-lg rounded-full"
            >
              Acessar o nosso protótipo
            </Button>

            <Button
              onClick={handleScrollToForm}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-6 text-lg rounded-full"
            >
              Responder o Formulário
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
            {[
              {
                icon: "🏛️",
                title: "Transparência Política",
                text: "Monitore as promessas de Presidentes e Governadores com dados verificados e atualizados em tempo real.",
              },
              {
                icon: "📊",
                title: "Acompanhamento Visual",
                text: "Gráficos e indicadores claros mostram o progresso das promessas: cumpridas, em andamento ou descumpridas.",
              },
              {
                icon: "🔍",
                title: "Verificação Rigorosa",
                text: "Cada promessa é verificada por nossa equipe com base em fontes oficiais, dados governamentais e evidências concretas.",
              },
              {
                icon: "📱",
                title: "Participação Cidadã",
                text: "Os cidadãos podem contribuir com informações, denunciar descumprimentos e acompanhar temas de seu interesse.",
              },
            ].map(({ icon, title, text }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-xl shadow-md text-center border-2 border-transparent"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-[#2c5aa0] text-xl font-semibold mb-3">
                  {title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#2c5aa0] to-[#1e3c72] text-white p-8 rounded-xl text-center mt-10">
            <h3 className="text-2xl font-bold">🚀 Ajude-nos a Construir essa Ferramenta!</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

