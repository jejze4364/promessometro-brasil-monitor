
import { useToast } from "@/hooks/use-toast";

interface AppExpectationsProps {
  selectedFeatures: string[];
  onFeatureChange: (feature: string, checked: boolean) => void;
}

const AppExpectations = ({ selectedFeatures, onFeatureChange }: AppExpectationsProps) => {
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
    }
    onFeatureChange(feature, checked);
  };

  return (
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
  );
};

export default AppExpectations;
