import React, { useState } from "react";
import { 
  Wifi, 
  AlertTriangle, 
  Users, 
  ShieldCheck, 
  Phone, 
  PackageCheck, 
  HeadphonesIcon,
  CheckCircle,
  MessageCircle,
  Send
} from "lucide-react";

import zeladorChuva from "@assets/Zelador_chuva_site_1773428455055.png";
import graficoIdru from "@assets/Gráfico_iDru_1773427982000.png";
import semAgua from "@assets/Sem_água_site_1773427357418.png";
import versaoDevice from "@assets/Versão_2_jan26_1773424579443.jpg";
import tiagoIcon from "@assets/image_1773432433488.png";
import tiagoImage from "@assets/image_1773432642675.png";
import logoPreto from "@assets/iDru_Preto_(transp)_sem_slogan_1773440366162.png";
import logoBranco from "@assets/iDru_Branco_(transp)_sem_slogan_1773440366167.png";
import sergioImage from "../assets/sergio.png";
import matheusImage from "../assets/matheus.png";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" viewBox="0 0 24 24" 
    fill="currentColor" stroke="none" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.48-1.638-1.653-1.935-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const SectionHeading = ({ title, subtitle, className = "" }: { title: React.ReactNode, subtitle?: string, className?: string }) => (
  <div className={`mb-12 ${className}`}>
    <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-extrabold text-idru-slate-800 leading-[1.15] tracking-[-0.02em] mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-idru-slate-500 font-normal max-w-[600px] leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, colorClass = "text-idru-blue" }: any) => (
  <div className="bg-white rounded-2xl p-8 border border-idru-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-idru-blue/20 hover:shadow-[0_8px_32px_rgba(37,99,235,0.10)] transition-all duration-300 ease-out flex flex-col gap-4">
    <div className={`w-14 h-14 rounded-xl bg-idru-blue-subtle flex items-center justify-center ${colorClass}`}>
      <Icon size={32} strokeWidth={1.75} />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-idru-slate-800 mb-2">{title}</h3>
      <p className="text-idru-slate-500">{description}</p>
    </div>
  </div>
);

const EMOJI_CONFIG = [
  { emoji: "🤬", left: "-5%", delay: "0s", duration: "4s", size: "text-3xl" },
  { emoji: "🚨", left: "15%", delay: "1.2s", duration: "3.5s", size: "text-4xl" },
  { emoji: "😡", left: "30%", delay: "0.5s", duration: "4.2s", size: "text-3xl" },
  { emoji: "👎", left: "45%", delay: "2.1s", duration: "3.8s", size: "text-2xl" },
  { emoji: "😤", left: "60%", delay: "1.5s", duration: "4.5s", size: "text-4xl" },
  { emoji: "🔔", left: "75%", delay: "3s", duration: "3.2s", size: "text-2xl" },
  { emoji: "🤬", left: "90%", delay: "2.5s", duration: "4s", size: "text-3xl" },
  { emoji: "⚠️", left: "100%", delay: "0.8s", duration: "3.9s", size: "text-4xl" },
  { emoji: "😡", left: "10%", delay: "3.5s", duration: "4.1s", size: "text-3xl" },
  { emoji: "👎", left: "85%", delay: "4s", duration: "3.6s", size: "text-4xl" },
  { emoji: "🔔", left: "55%", delay: "0.2s", duration: "3.3s", size: "text-3xl" },
  { emoji: "🤬", left: "20%", delay: "4.5s", duration: "4.8s", size: "text-5xl" },
];

const EMOJI_CONFIG_ZELADOR = [
  { emoji: "⚡", left: "-5%", delay: "0s", duration: "4s", size: "text-3xl" },
  { emoji: "🌧️", left: "15%", delay: "1.2s", duration: "3.5s", size: "text-4xl" },
  { emoji: "🤕", left: "30%", delay: "0.5s", duration: "4.2s", size: "text-3xl" },
  { emoji: "⚠️", left: "45%", delay: "2.1s", duration: "3.8s", size: "text-2xl" },
  { emoji: "💧", left: "60%", delay: "1.5s", duration: "4.5s", size: "text-4xl" },
  { emoji: "🌩️", left: "75%", delay: "3s", duration: "3.2s", size: "text-2xl" },
  { emoji: "🧗", left: "90%", delay: "2.5s", duration: "4s", size: "text-3xl" },
  { emoji: "🚨", left: "100%", delay: "0.8s", duration: "3.9s", size: "text-4xl" },
  { emoji: "😨", left: "10%", delay: "3.5s", duration: "4.1s", size: "text-3xl" },
  { emoji: "🌧️", left: "85%", delay: "4s", duration: "3.6s", size: "text-4xl" },
  { emoji: "🚑", left: "55%", delay: "0.2s", duration: "3.3s", size: "text-3xl" },
  { emoji: "⚡", left: "20%", delay: "4.5s", duration: "4.8s", size: "text-5xl" },
];

export default function LandingPage() {
  const appUrl = "https://app.idru.com.br";
  const whatsappUrl = "https://wa.me/5547999999999";
  const whatsappContactUrl = "https://con.idru.com.br/i1";
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqs = [
    {
      q: "Quanto custa instalar a iDru?",
      a: "Planos a partir de R$ 0,99 por apartamento.",
      link: "https://con.idru.com.br/svalor"
    },
    {
      q: "Precisa quebrar alguma tubulação?",
      a: "Sem quebrar canos. Nossos sensores importados são instalados sem gerar mudanças estruturais nas caixas e cisternas.",
      link: "https://con.idru.com.br/squebra"
    },
    {
      q: "Funciona em qualquer reservatório?",
      a: "Qualquer reservatório e de qualquer tamanho. Como nós fazemos a instalação, garantimos que a aferição está sendo feita de forma correta.",
      link: "https://con.idru.com.br/squalquer"
    },
    {
      q: "Como recebo os alertas?",
      a: "Oferecemos um app próprio, feito especificamente para esse tipo de mensagem, para evitar conflito com outros apps do dia a dia.",
      link: "https://con.idru.com.br/salertas"
    },
    {
      q: "O que acontece se faltar internet?",
      a: "Os sensores continuam coletando os dados, mesmo sem sinal! Assim que o dispositivo volta a ter acesso novamente, os dados coletados são sincronizados com o app.",
      link: "https://con.idru.com.br/sinter"
    }
  ];

  return (
    <div className="min-h-screen bg-idru-bg-b text-idru-slate-500 font-sans selection:bg-idru-blue-subtle selection:text-idru-blue overflow-x-hidden">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-idru-slate-200 h-[72px] flex items-center transition-all duration-300 shadow-[0_1px_0_rgba(0,0,0,0.06)]">
        <div className="max-w-[1200px] w-full mx-auto px-8 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src={logoPreto} alt="iDru Logo" className="h-10 md:h-12 w-auto" />
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-idru-slate-800">
            <a href="#inicio" className="hover:text-idru-blue transition-colors">Início</a>
            <a href="#funcionalidades" className="hover:text-idru-blue transition-colors">Funcionalidades</a>
            <a href="#depoimentos" className="hover:text-idru-blue transition-colors">Depoimentos</a>
            <a href="#como-funciona" className="hover:text-idru-blue transition-colors">Como funciona</a>
            <a href="#contato" className="hover:text-idru-blue transition-colors">Contato</a>
          </nav>
          
          <div className="flex items-center gap-2">
            <a
              href={appUrl}
              className="inline-flex items-center justify-center bg-idru-blue text-white rounded-full px-4 sm:px-5 py-2.5 font-semibold text-[14px] sm:text-[15px] hover:bg-[#1D4ED8] hover:-translate-y-0.5 transition-all shadow-sm"
            >
              Entrar
            </a>
            <a
              href={whatsappContactUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Fale pelo WhatsApp"
              title="Fale pelo WhatsApp"
              className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-idru-whatsapp text-white rounded-full hover:bg-[#1fba58] hover:-translate-y-0.5 transition-all shadow-sm"
            >
              <WhatsappIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </header>
      <main>
        {/* Section 1 — Hero */}
        <section id="inicio" className="bg-pattern relative md:pt-0 md:pb-[20px] pt-0 pb-[20px] overflow-hidden border-b border-idru-slate-200/50">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-idru-blue-subtle rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center relative z-10">
            {/* Col 1 */}
            <div className="flex flex-col items-start animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="inline-flex items-center gap-2 bg-idru-blue-subtle text-[#1D4ED8] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-8">
                <span>💧</span> Monitoramento Hídrico Inteligente
              </div>
              
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-idru-slate-800 leading-[1.1] tracking-[-0.03em] mb-6">
                Deixe de ser o <span className="text-idru-blue">último</span> a saber que a água acabou.
              </h1>
              
              <p className="text-lg md:text-xl text-idru-slate-500 font-normal max-w-[520px] mb-10 leading-relaxed">
                Reduza reclamações e evite surpresas com monitoramento inteligente dos reservatórios do seu condomínio.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <a 
                  href="https://con.idru.com.br/i1"
                  className="bg-idru-blue text-white rounded-full px-9 py-4 font-semibold text-[15px] hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] transition-all flex items-center gap-2"
                >
                  Assuma o controle da água!
                </a>
                <a
                  href={appUrl}
                  className="inline-flex items-center justify-center border-2 border-idru-blue text-idru-blue rounded-full px-8 py-3.5 font-semibold text-[15px] hover:bg-idru-blue hover:text-white hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.20)] transition-all"
                >
                  Entrar
                </a>
                <a href="#como-funciona" className="text-idru-blue font-semibold text-[15px] hover:underline flex items-center gap-1 group">
                  Ver como funciona <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
            
            {/* Col 2 */}
            <div className="relative animate-in fade-in slide-in-from-bottom-12 duration-700 delay-150 transform scale-[0.85] origin-center">
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border-4 border-white">
                <img 
                  src={semAgua} 
                  alt="Pessoa no banho sem água" 
                  className="w-full h-auto object-cover aspect-[4/5] sm:aspect-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Emojis replacing previous badges */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                {EMOJI_CONFIG.map((conf, i) => (
                  <div
                    key={i}
                    className={`absolute bottom-0 emoji-float ${conf.size}`}
                    style={{
                      left: conf.left,
                      animationDelay: conf.delay,
                      animationDuration: conf.duration,
                      textShadow: "0 2px 10px rgba(0,0,0,0.2)"
                    }}
                  >
                    {conf.emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 — Why iDru */}
        <section id="funcionalidades" className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-8">
            <SectionHeading 
              title="O fim do 'vai lá ver quanto tem de água'."
              subtitle="Sensores inteligentes que monitoram reservatórios em tempo real, ajudando síndicos e administradoras a tomar decisões com base em dados."
              className="text-center flex flex-col items-center mb-20"
            />
            
            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
              <div className="order-2 lg:order-1 relative flex justify-center">
                <div className="absolute inset-0 bg-idru-blue-subtle/50 rounded-[2.5rem] transform -rotate-2 scale-105 max-w-[340px] mx-auto"></div>
                <div className="relative z-10 w-full max-w-[340px]">
                  <img 
                    src={graficoIdru} 
                    alt="Gráfico de monitoramento iDru" 
                    className="w-full rounded-3xl shadow-[0_16px_48px_rgba(0,0,0,0.10)] border border-idru-slate-200"
                  />
                  
                  {/* Floating badges */}
                  <div className="absolute top-1/4 -right-4 md:-right-8 bg-white rounded-xl p-3 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10)] border-l-4 border-idru-green flex items-center gap-2 animate-[bounce_4s_infinite]">
                    <CheckCircle className="text-idru-green" size={20} strokeWidth={2.5} />
                    <span className="font-bold text-idru-slate-800 text-[13px] whitespace-nowrap">100% Cheio</span>
                  </div>
                  
                  <div className="absolute bottom-1/4 -left-4 md:-left-8 bg-white rounded-xl p-3 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10)] border-l-4 border-idru-orange flex items-center gap-2 animate-[bounce_3s_infinite]">
                    <AlertTriangle className="text-idru-orange" size={20} strokeWidth={2.5} />
                    <span className="font-bold text-idru-slate-800 text-[13px] whitespace-nowrap">Nível Baixo</span>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 flex flex-col gap-6">
                <FeatureCard 
                  icon={Wifi} 
                  title="Monitoramento contínuo" 
                  description="Saiba o nível exato dos reservatórios em tempo real pelo app."
                />
                <FeatureCard 
                  icon={AlertTriangle} 
                  title="Antecipe Emergências" 
                  description="Receba alertas no seu celular antes que a água acabe."
                  colorClass="text-idru-orange"
                />
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex flex-col gap-6">
                <FeatureCard 
                  icon={Users} 
                  title="Proteja seu time" 
                  description="Deixe de colocar em risco os colaboradores da sua equipe ao subir em telhados ou locais perigosos."
                />
                <FeatureCard 
                  icon={ShieldCheck} 
                  title="Proteja o Caixa" 
                  description="Evite queima de bombas e os vazamentos silenciosos que destroem o orçamento."
                  colorClass="text-idru-green"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.10)] transform -rotate-1">
                <img 
                  src={zeladorChuva} 
                  alt="Zelador na chuva" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10 pointer-events-none"></div>
                
                {/* Floating Emojis */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  {EMOJI_CONFIG_ZELADOR.map((conf, i) => (
                    <div
                      key={i}
                      className={`absolute bottom-0 emoji-float ${conf.size}`}
                      style={{
                        left: conf.left,
                        animationDelay: conf.delay,
                        animationDuration: conf.duration,
                        textShadow: "0 2px 10px rgba(0,0,0,0.2)"
                      }}
                    >
                      {conf.emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — iDru Answers */}
        <section className="py-24 md:py-32 bg-pattern-accent border-y border-idru-blue/10">
          <div className="max-w-[1200px] mx-auto px-8 flex flex-col items-center">
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-extrabold text-idru-slate-800 leading-[1.15] tracking-[-0.02em] mb-12 text-center max-w-2xl">
              Descubra já como funciona no seu condomínio.
            </h2>
            
            {/* Chat UI Component */}
            <div className="w-full max-w-[640px] bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.10)] border border-idru-slate-200 overflow-hidden flex flex-col">
              <div className="px-6 py-5 border-b border-idru-slate-100 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-idru-blue-light animate-pulse"></div>
                <h3 className="font-semibold text-idru-slate-800 text-[15px]">Pergunte-me qualquer coisa sobre iDru</h3>
              </div>
              <div className="p-2 flex flex-col flex-grow max-h-[400px] overflow-y-auto">
                {faqs.map((faq, i) => (
                  <div key={i} className="flex flex-col">
                    <button 
                      onClick={() => setActiveQuestion(activeQuestion === i ? null : i)}
                      className={`text-left px-5 py-3.5 text-[15px] font-medium border-l-[3px] transition-all duration-200 rounded-r-lg group flex items-center justify-between
                        ${activeQuestion === i 
                          ? 'border-idru-blue bg-idru-blue-subtle text-idru-blue' 
                          : 'text-idru-slate-500 border-transparent hover:border-idru-blue hover:bg-idru-blue-subtle hover:text-idru-blue'
                        }`}
                    >
                      {faq.q}
                      <MessageCircle size={16} className={`transition-all duration-300 ${activeQuestion === i ? 'opacity-100 scale-110' : 'opacity-0 group-hover:opacity-100'}`} />
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out px-5 ${
                        activeQuestion === i ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
                      }`}
                    >
                      <div className="pl-4 border-l-2 border-idru-blue/20">
                        <p className="text-idru-slate-600 text-[14px] leading-relaxed">
                          {faq.a}
                        </p>
                        <a 
                          href={faq.link || whatsappUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-idru-blue hover:text-[#1D4ED8] hover:underline"
                        >
                          Quero saber mais!
                          <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-idru-slate-100 bg-idru-bg-a">
                <a 
                  href="https://con.idru.com.br/soutras"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between w-full bg-white border border-idru-slate-200 rounded-full px-5 py-3 text-idru-slate-500 hover:border-idru-blue hover:text-idru-blue hover:shadow-sm transition-all group"
                >
                  <span className="text-sm">Faça sua pergunta...</span>
                  <div className="bg-idru-blue text-white rounded-full p-1.5 group-hover:scale-110 transition-transform">
                    <Send size={14} />
                  </div>
                </a>
              </div>
            </div>
            
          </div>
        </section>

        {/* Section 4 — Social Proof */}
        <section id="depoimentos" className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="text-center mb-16">
              <div className="inline-block relative">
                <h2 className="text-4xl md:text-5xl font-black text-idru-blue mb-2">3 cidades e 12 condomínios</h2>
                <p className="text-lg font-medium text-idru-slate-500">já monitorados com iDru</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  text: "Além de serem meus parceiros, o pessoal é rápido e efetivo nas manutenções. Sempre que marcam, comparecem e resolvem.\nCom certeza recomendo!",
                  author: "Tiago Jacaré",
                  role: "Hidro&Eletro Jacaré",
                  link: "https://www.instagram.com/hidroeletrojacare/",
                  image: tiagoIcon
                },
                {
                  text: "Depois que instalamos o iDru, nunca mais tivemos surpresa com falta d'água. Os alertas chegam antes do problema acontecer.",
                  author: "Tiago",
                  role: "Coordenador – IFSC Itajaí",
                  image: tiagoImage
                },
                {
                  text: "A equipe da iDru foi muito profissional na instalação e o suporte é excelente. Recomendo!",
                  author: "Sérgio",
                  role: "Síndico Profissional (BC, NVG e ITJ)",
                  image: sergioImage
                },
                {
                  text: "Ficava o dia todo subindo e descendo pra checar a caixa. Agora só olho no celular. Ganhamos tempo e evitamos problema.",
                  author: "Matheus",
                  role: "Zelador – Art de Viver (ITJ)",
                  image: matheusImage
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-idru-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] relative z-0 flex flex-col justify-between">
                  <div>
                    <div className="absolute -top-4 -left-2 text-[#DBEAFE] font-serif text-[6rem] leading-none opacity-50 -z-10 select-none">"</div>
                    <p className="text-idru-slate-800 text-lg leading-relaxed mb-6 font-medium whitespace-pre-line">"{testimonial.text}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    {testimonial.image ? (
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        {/* Only render secondary icon if it exists */}
                        {(testimonial as any).icon && (
                          <img 
                            src={(testimonial as any).icon} 
                            alt="Logo" 
                            className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white border border-white shadow-sm object-cover"
                          />
                        )}
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-idru-blue-subtle flex items-center justify-center text-idru-blue font-bold text-lg border-2 border-white shadow-sm">
                        {testimonial.author.charAt(0)}
                      </div>
                    )}
                    <div>
                      {testimonial.link ? (
                        <a href={testimonial.link} target="_blank" rel="noreferrer" className="font-bold text-idru-slate-800 text-[15px] hover:text-idru-blue transition-colors">
                          {testimonial.author}
                        </a>
                      ) : (
                        <h4 className="font-bold text-idru-slate-800 text-[15px]">{testimonial.author}</h4>
                      )}
                      <p className="text-sm text-idru-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — How It Works */}
        <section id="como-funciona" className="py-24 md:py-32 bg-pattern-accent border-y border-idru-blue/10">
          <div className="max-w-[1200px] mx-auto px-8 text-center">
            <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-extrabold text-idru-slate-800 leading-[1.15] tracking-[-0.02em] mb-16">
              Como funciona
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
              {[
                {
                  icon: Phone,
                  title: "Contato Inicial e Avaliação Técnica Gratuita",
                  desc: "Após seu contato, entendemos as necessidades do seu condomínio."
                },
                {
                  icon: PackageCheck,
                  title: "Proposta personalizada e Custo ZERO de Instalação",
                  desc: "Sem cobrança pela montagem, instalação e configuração. Sistema funcionando em poucas horas."
                },
                {
                  icon: HeadphonesIcon,
                  title: "Suporte e treinamento inclusos na mensalidade",
                  desc: "Assistência técnica, manutenção preventiva e capacitação sem custos adicionais."
                }
              ].map((step, i) => (
                <div key={i} className="bg-idru-blue rounded-3xl p-8 flex flex-col text-left shadow-lg relative overflow-hidden group">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>
                  
                  <div className="flex justify-between items-start w-full mb-8 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-idru-blue shrink-0">
                      <step.icon size={32} strokeWidth={1.5} />
                    </div>
                    <div className="h-16 flex items-center justify-end font-black text-[64px] text-white/20 leading-none select-none">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug relative z-10">{step.title}</h3>
                  <p className="text-blue-50 text-[15px] leading-relaxed relative z-10">{step.desc}</p>
                </div>
              ))}
              
              {/* Full width fourth card */}
              <div className="md:col-span-3 bg-idru-blue rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-left shadow-lg relative overflow-hidden group gap-8 border-t border-white/10 mt-2">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
                
                <div className="flex flex-col relative z-10 max-w-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-idru-blue shrink-0">
                      <ShieldCheck size={32} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 leading-snug">Garantia e Monitoramento Contínuo</h3>
                  <p className="text-blue-50 text-[16px] leading-relaxed">Seu condomínio passa a ser monitorado 24 horas por dia. Nossa equipe acompanha os dados e qualquer anomalia gera alertas imediatos para que você possa agir antes que falte água.</p>
                </div>
                
                <div className="relative z-10 shrink-0 w-full md:w-auto">
                  <a 
                    href="https://con.idru.com.br/sja"
                    className="flex w-full md:w-auto items-center justify-center gap-2 bg-white text-idru-blue rounded-full px-8 py-4 font-bold text-[16px] hover:bg-blue-50 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(255,255,255,0.2)] transition-all"
                  >
                    Começar agora
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
            
            <a 
              href="https://con.idru.com.br/sja"
              className="inline-flex items-center gap-2 bg-idru-blue text-white rounded-full px-9 py-4 font-semibold text-[15px] hover:bg-[#1D4ED8] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] transition-all"
            >
              Quero assumir o controle da água!
            </a>
          </div>
        </section>

        {/* Section 6 — Final CTA */}
        <section id="contato" className="py-24 md:py-32 bg-white">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="bg-idru-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
              {/* Abstract decorative shape */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-idru-blue rounded-full blur-[100px] opacity-30 -translate-y-1/2 translate-x-1/3"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 md:p-16 flex flex-col justify-center relative z-10">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                    Assuma o controle da água do seu condomínio
                  </h2>
                  <p className="text-idru-slate-200 text-lg mb-10">
                    Evite surpresas e reduza emergências hoje mesmo.
                  </p>
                  
                  <div>
                    <a 
                      href="https://con.idru.com.br/sagenda"
                      className="inline-flex items-center gap-3 bg-idru-whatsapp text-white rounded-full px-8 py-4 font-bold text-[16px] hover:bg-[#1fba58] hover:-translate-y-1 hover:shadow-lg transition-all"
                    >
                      <WhatsappIcon className="w-6 h-6" />
                      Agendar avaliação pelo WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="relative min-h-[300px] lg:min-h-[400px] hidden sm:block">
                  <img 
                    src={versaoDevice} 
                    alt="Dispositivo iDru" 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-idru-slate-800 via-idru-slate-800/40 to-transparent lg:w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-[#0F172A] text-white pt-20 pb-8">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="col-span-1">
              <a href="#" className="block mb-6 -ml-2.5 -mt-2.5">
                <img src={logoBranco} alt="iDru Logo" className="h-14 md:h-16 w-auto" />
              </a>
              <p className="text-idru-slate-500 text-[15px] max-w-xs">
                Inteligência no controle da água.
              </p>
            </div>
            
            <div className="col-span-1">
              <h4 className="font-semibold text-white mb-6 text-[15px] uppercase tracking-wider">Site</h4>
              <ul className="flex flex-col gap-4">
                <li><a href="#inicio" className="text-idru-slate-500 hover:text-white transition-colors">Início</a></li>
                <li><a href="#funcionalidades" className="text-idru-slate-500 hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#depoimentos" className="text-idru-slate-500 hover:text-white transition-colors">Depoimentos</a></li>
                <li><a href="#como-funciona" className="text-idru-slate-500 hover:text-white transition-colors">Como funciona</a></li>
              </ul>
            </div>
            
            <div className="col-span-1">
              <h4 className="font-semibold text-white mb-6 text-[15px] uppercase tracking-wider">Legal</h4>
              <ul className="flex flex-col gap-4">
                <li className="text-idru-slate-500">empresa do grupo SoluVentures</li>
                <li><a href="#" className="text-idru-slate-500 hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-idru-slate-500 hover:text-white transition-colors">Termos e Condições</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-idru-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-idru-slate-500 text-sm">
              © {new Date().getFullYear()} iDru. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
