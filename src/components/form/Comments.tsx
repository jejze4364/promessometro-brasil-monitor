
import { UseFormRegister } from "react-hook-form";

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

interface CommentsProps {
  register: UseFormRegister<FormData>;
}

const Comments = ({ register }: CommentsProps) => {
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
  );
};

export default Comments;
