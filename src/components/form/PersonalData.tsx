
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { Input } from "@/components/ui/input";

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

interface PersonalDataProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const PersonalData = ({ register, errors }: PersonalDataProps) => {
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
  );
};

export default PersonalData;
