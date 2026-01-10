
import React, { useState } from 'react';
import { SERVICES, PORTFOLIO, WHATSAPP_LINK } from './constants';
import BeforeAfterSlider from './components/BeforeAfterSlider';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src="/logo.png" alt="MasterLimp Logo" className="h-12 object-contain" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#servicos" className="text-sm font-bold text-gray-600 hover:text-master-blue transition">O que fazemos</a>
              <a href="#sobre" className="text-sm font-bold text-gray-600 hover:text-master-blue transition">A Empresa</a>
              <a href="#resultados" className="text-sm font-bold text-gray-600 hover:text-master-blue transition">Galeria</a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="bg-master-green hover:bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-black transition shadow-lg shadow-green-100"
              >
                Pedir Orçamento
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-master-blue">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-6 px-4 flex flex-col gap-4 shadow-xl">
            <a href="#servicos" className="font-bold text-lg py-2" onClick={() => setIsMenuOpen(false)}>O que fazemos</a>
            <a href="#sobre" className="font-bold text-lg py-2" onClick={() => setIsMenuOpen(false)}>A Empresa</a>
            <a href="#resultados" className="font-bold text-lg py-2" onClick={() => setIsMenuOpen(false)}>Galeria</a>
            <a href={WHATSAPP_LINK} className="bg-master-green text-white px-6 py-4 rounded-2xl font-black text-center shadow-lg">Falar com Consultor</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative py-16 lg:py-28 overflow-hidden bg-master-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-master-green text-white rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                <i className="fas fa-certificate"></i> Qualidade Garantida
              </div>
              <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[1.1] text-white">
                Transformamos o seu <span className="text-master-green">ambiente</span> com perfeição.
              </h1>
              <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                Seja após uma obra cansativa ou para manter sua empresa impecável, a MasterLimp entrega o brilho e a organização que você procura.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={WHATSAPP_LINK} className="bg-white hover:bg-gray-100 text-master-blue px-10 py-5 rounded-2xl font-black text-lg text-center transition-all shadow-xl shadow-white/20 flex items-center justify-center gap-3">
                  <i className="fab fa-whatsapp text-2xl"></i>
                  Solicitar Orçamento
                </a>
                <a href="#servicos" className="bg-master-green hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg text-center transition shadow-xl shadow-green-100">
                  Ver Serviços
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-master-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-white text-sm font-black uppercase tracking-[0.3em] mb-4">Soluções Completas</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Como podemos te ajudar hoje?</h3>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">Escolha o serviço que melhor atende à sua necessidade e deixe o trabalho pesado com a gente.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-master-green p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-transparent hover:border-green-200">
                <h4 className="text-2xl font-black mb-4 text-white">{service.title}</h4>
                <p className="text-white/90 leading-relaxed mb-8 text-base">
                  {service.description}
                </p>
                <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 text-white font-black hover:gap-4 transition-all">
                  Pedir Cotação <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-master-blue text-sm font-black uppercase tracking-[0.3em] mb-6">Quem somos</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Especialistas em fazer você se sentir bem no seu ambiente.
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A <strong>MasterLimp</strong> nasceu com a missão de descomplicar a vida de quem acabou de passar por uma obra ou precisa de uma gestão de limpeza profissional e confiável.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Não somos apenas uma empresa de limpeza. Somos parceiros que entendem que um ambiente limpo é sinônimo de saúde, produtividade e qualidade de vida. Atuamos em toda São Paulo com agilidade e os melhores produtos do mercado.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="block text-3xl font-black text-master-blue mb-2">100%</span>
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Satisfação</span>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="block text-3xl font-black text-master-green mb-2">+500</span>
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Obras Limpas</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80"
                  alt="Time MasterLimp"
                  className="w-full h-full object-cover aspect-video lg:aspect-square"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-master-blue text-white p-10 rounded-[2.5rem] shadow-2xl hidden md:block max-w-[280px]">
                <i className="fas fa-quote-left text-3xl text-master-green mb-4 block"></i>
                <p className="font-bold text-lg leading-tight">"Nossa entrega vai além da limpeza, entregamos tranquilidade."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="resultados" className="py-24 bg-master-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-white text-sm font-black uppercase tracking-[0.3em] mb-4">Galeria de Resultados</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-white">Veja o brilho que entregamos</h3>
            <p className="text-white/90 mt-6 max-w-2xl mx-auto text-lg">Deslize a barra para ver a transformação que realizamos nos ambientes de nossos clientes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <BeforeAfterSlider
              title=""
              before="/1 ANTES.jpeg"
              after="/1 DEPOIS.jpeg"
            />
            <BeforeAfterSlider
              title=""
              before="/2 ANTES.jpeg"
              after="/2 DEPOIS.jpeg"
            />
            <BeforeAfterSlider
              title=""
              before="/3 ANTES.jpeg"
              after="/3 DEPOIS.jpeg"
            />
            <BeforeAfterSlider
              title=""
              before="/4 ANTES.jpeg"
              after="/4 DEPOIS.jpeg"
            />
          </div>

          <div className="mt-20 p-12 bg-master-blue text-white rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
            <div className="max-w-2xl text-center md:text-left">
              <h4 className="text-3xl font-black mb-4 uppercase italic">Sua empresa em boas mãos</h4>
              <p className="text-blue-100 text-lg">Nosso serviço de manutenção corporativa garante um giro de produtividade até 18% maior em ambientes organizados.</p>
            </div>
            <a href={WHATSAPP_LINK} className="bg-master-green text-white px-12 py-6 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition shrink-0">
              Falar com Comercial
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative overflow-hidden bg-master-blue">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-tight">Chega de sujeira. <br className="hidden sm:block" />Chame a <span className="underline decoration-master-blue">MasterLimp</span>.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={WHATSAPP_LINK} className="bg-white text-master-green px-12 py-6 rounded-full font-black text-2xl flex items-center gap-4 shadow-2xl hover:bg-gray-100 transition">
              <i className="fab fa-whatsapp text-3xl"></i>
              ORÇAMENTO RÁPIDO
            </a>
            <a href="https://instagram.com/masterlimp.sp" target="_blank" className="bg-master-blue text-white px-12 py-6 rounded-full font-black text-2xl flex items-center gap-4 shadow-2xl hover:bg-blue-800 transition">
              <i className="fab fa-instagram text-3xl"></i>
              INSTAGRAM
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div>
              <div className="flex items-center mb-8">
                <img src="/logo.png" alt="MasterLimp Logo" className="h-10 object-contain" />
              </div>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Referência em limpeza técnica e pós-obra em São Paulo. Excelência, sustentabilidade e compromisso com o resultado.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/masterlimp.sp" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-master-blue hover:text-white transition"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            <div>
              <h5 className="font-black text-gray-900 mb-8 uppercase tracking-widest text-xs">O que fazemos</h5>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li><a href="#servicos" className="hover:text-master-blue">Limpeza Pós-Obra</a></li>
                <li><a href="#servicos" className="hover:text-master-blue">Pré e Pós-Mudança</a></li>
                <li><a href="#servicos" className="hover:text-master-blue">Clínicas e Escritórios</a></li>
                <li><a href="#servicos" className="hover:text-master-blue">Limpeza de Comércios</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-black text-gray-900 mb-8 uppercase tracking-widest text-xs">Acesso Rápido</h5>
              <ul className="space-y-4 text-gray-500 font-medium">
                <li><a href="#sobre" className="hover:text-master-blue">A Empresa</a></li>
                <li><a href="#resultados" className="hover:text-master-blue">Galeria de Antes e Depois</a></li>
                <li><a href="#servicos" className="hover:text-master-blue">Nossos Diferenciais</a></li>
                <li><a href={WHATSAPP_LINK} className="hover:text-master-blue">Solicitar Orçamento</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-black text-gray-900 mb-8 uppercase tracking-widest text-xs">Fale com a gente</h5>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <i className="fab fa-whatsapp text-2xl text-master-green"></i>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">WhatsApp</p>
                    <p className="font-black text-gray-900">(11) 96867-4496</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <i className="far fa-envelope text-2xl text-master-blue"></i>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase">E-mail</p>
                    <p className="font-black text-gray-900 text-sm">contratemasterlimp@gmail.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-400 text-sm font-medium">© {new Date().getFullYear()} MasterLimp. CNPJ: 52.827.420/0001-09. São Paulo/SP.</p>
            <div className="flex items-center gap-2 text-gray-400 text-xs font-bold">
              <span>DESIGNED BY MASTERLIMP TEAM</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WA Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-[0_10px_40px_rgba(34,197,94,0.4)] hover:scale-110 active:scale-95 transition-all z-50"
      >
        <i className="fab fa-whatsapp"></i>

      </a>
    </div>
  );
};

export default App;
