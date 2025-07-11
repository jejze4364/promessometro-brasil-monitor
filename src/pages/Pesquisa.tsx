
import { useForm } from "react-hook-form";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import HeroSection from "@/components/hero/HeroSection";
import PersonalData from "@/components/form/PersonalData";
import TechnologyUsage from "@/components/form/TechnologyUsage";
import AppExpectations from "@/components/form/AppExpectations";
import Comments from "@/components/form/Comments";
import Consent from "@/components/form/Consent";

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
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>();
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      setSelectedFeatures([...selectedFeatures, feature]);
    } else {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    }
    setValue('features', checked ? [...selectedFeatures, feature] : selectedFeatures.filter(f => f !== feature));
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
        <HeroSection />

        <div style={{
          padding: '40px'
        }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PersonalData register={register} errors={errors} />
            <TechnologyUsage register={register} errors={errors} />
            <AppExpectations 
              selectedFeatures={selectedFeatures} 
              onFeatureChange={handleFeatureChange} 
            />
            <Comments register={register} />
            <Consent register={register} errors={errors} />

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
