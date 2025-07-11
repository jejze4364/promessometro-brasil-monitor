
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pesquisa from "./pages/Pesquisa";
import Index from "./pages/Index";
import Presidente from "./pages/Presidente";
import Governadores from "./pages/Governadores";
import GovernadorDetalhes from "./pages/GovernadorDetalhes";
import Denuncia from "./pages/Denuncia";
import Sobre from "./pages/Sobre";
import Estatisticas from "./pages/Estatisticas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pesquisa />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/presidente" element={<Presidente />} />
          <Route path="/governadores" element={<Governadores />} />
          <Route path="/governador/:estado" element={<GovernadorDetalhes />} />
          <Route path="/denuncia" element={<Denuncia />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/estatisticas" element={<Estatisticas />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
