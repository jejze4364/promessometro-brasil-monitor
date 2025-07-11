
import { UseFormRegister, FieldErrors } from "react-hook-form";

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

interface TechnologyUsageProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const TechnologyUsage = ({ register, errors }: TechnologyUsageProps) => {
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
  );
};

export default TechnologyUsage;
