import { Suspense, lazy } from 'react';

// Componentes críticos (Carregam imediatamente para evitar flickeio)
import Header from "./components/sections/header";
import Hero from "./components/sections/hero";

// Componentes não-críticos (Carregados apenas quando necessário)
const Services = lazy(() => import("./components/sections/services"));
const AboutMe = lazy(() => import("./components/sections/about-me"));
const FAQ = lazy(() => import("./components/sections/faq"));
const Footer = lazy(() => import("./components/sections/footer"));
const WhatsAppButton = lazy(() => import("./components/wpp-button"));

const App = () => {
  return (
    <div>
      {/* O Header e Hero aparecem instantaneamente para o usuário */}
      <Header />
      <Hero />

      {/* O Suspense gerencia o carregamento dos demais componentes em segundo plano */}
      <Suspense fallback={<div style={{ height: '20vh', backgroundColor: '#fdfdfd' }} />}>
        <Services />
        <AboutMe />
        <FAQ />
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default App;