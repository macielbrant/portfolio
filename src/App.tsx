import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

/**
 * GITHUB PAGES CONFIGURATION:
 * 
 * O basename="/portfolio/" é necessário para que o app funcione corretamente no GitHub Pages
 * quando deployado em https://username.github.io/portfolio/
 * 
 * Este valor deve corresponder ao `base` configurado no vite.config.ts para produção.
 * 
 * Em desenvolvimento local, o basename será "/" (ver vite.config.ts).
 * 
 * IMPORTANTE: 
 * - Sempre use <Link to="/path"> do react-router-dom para navegação interna (não use <a href>)
 * - Rotas diretas (refresh ou acesso direto) são tratadas pelo public/404.html
 * - Para adicionar novas rotas, insira-as ACIMA da rota catch-all "*"
 */

const basename = import.meta.env.MODE === "development" ? "/" : "/portfolio/";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* Exemplo: <Route path="/about" element={<About />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
