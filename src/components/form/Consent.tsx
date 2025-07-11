
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

interface ConsentProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const Consent = ({ register, errors }: ConsentProps) => {
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
  );
};

export default Consent;
