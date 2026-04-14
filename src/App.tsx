/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Leaf, 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Gift, 
  Award, 
  ChevronRight,
  Copy,
  Instagram,
  MessageCircle
} from 'lucide-react';

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    phone: '',
    instagram: ''
  });
  const [copied, setCopied] = useState(false);

  const pixKey = "12.345.678/0001-90"; // Placeholder CNPJ

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1 && formData.date && formData.time) {
      setStep(2);
    } else if (step === 2 && formData.name && formData.phone) {
      setStep(3);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Fiz o pagamento do sinal (R$60) para o Workshop de Café & Matcha.\n\n` +
    `Nome: ${formData.name}\n` +
    `Data escolhida: ${formData.date === '13' ? '13 de maio' : '16 de maio'}\n` +
    `Horário: ${formData.time === 'morning' ? 'Manhã (09:00 - 12:00)' : 'Tarde (13:00 - 16:00)'}\n\n` +
    `Segue o meu comprovante:`
  );

  return (
    <div className="min-h-screen font-sans selection:bg-matcha-200 selection:text-matcha-900">
      {/* Navigation / Header */}
      <header className="absolute top-0 left-0 right-0 p-6 flex justify-center z-10">
        <img 
          src="https://i.imgur.com/tAzJXkO.jpeg" 
          alt="Café Oasis Logo" 
          className="h-20 w-auto rounded-full shadow-md border-2 border-sand-200"
          referrerPolicy="no-referrer"
        />
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sand-200 to-sand-100"></div>
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30" 
             style={{ backgroundImage: 'radial-gradient(var(--color-matcha-300) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-matcha-100 text-matcha-800 font-medium text-sm mb-6"
          >
            <Leaf className="w-4 h-4" />
            <span>Vagas Limitadas</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-coffee-950 leading-tight mb-6"
          >
            Workshop <br className="hidden md:block" />
            <span className="text-matcha-600 italic">Café & Matcha</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-coffee-800 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Não perca nosso primeiro workshop com baristas especializados. 
            Aprenda a dominar a <span className="font-semibold text-coffee-900 underline decoration-matcha-400 decoration-2 underline-offset-4">Latte Art</span>, descubra os segredos do matcha e conecte-se com outros <span className="font-semibold text-coffee-900">Cafelovers</span>!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#registration" className="inline-flex items-center justify-center gap-2 bg-coffee-900 text-sand-50 px-8 py-4 rounded-full font-medium text-lg hover:bg-coffee-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
              Quero minha vaga agora
              <ChevronRight className="w-5 h-5" />
            </a>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-sand-100 shadow-sm"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-matcha-500 border-2 border-sand-100 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                +40
              </div>
              <span className="ml-4 text-sm text-coffee-600 font-medium self-center">Cafelovers inscritos</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-coffee-950 mb-4">Experiência Sensorial: Café & Matcha com Baristas</h2>
                <p className="text-coffee-700 leading-relaxed text-lg">
                  Para você que é <span className="font-semibold text-coffee-900">Cafelover</span> e busca viver uma experiência sensorial profunda. Durante 4 horas, você vai mergulhar neste universo com degustação guiada e técnicas profissionais.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-sand-50 p-6 rounded-2xl border border-sand-200">
                  <Calendar className="w-8 h-8 text-matcha-600 mb-4" />
                  <h3 className="font-semibold text-coffee-900 mb-1">Datas</h3>
                  <p className="text-coffee-700">13 e 16 de maio</p>
                </div>
                <div className="bg-sand-50 p-6 rounded-2xl border border-sand-200">
                  <Clock className="w-8 h-8 text-matcha-600 mb-4" />
                  <h3 className="font-semibold text-coffee-900 mb-1">Horários</h3>
                  <p className="text-coffee-700">09h às 12h<br/>ou 13h às 16h</p>
                </div>
                <div className="bg-sand-50 p-6 rounded-2xl border border-sand-200">
                  <MapPin className="w-8 h-8 text-matcha-600 mb-4" />
                  <h3 className="font-semibold text-coffee-900 mb-1">Local</h3>
                  <p className="text-coffee-700">Rua Axinim 3 - Cosmos<br/>Campo Grande, RJ</p>
                </div>
                <div className="bg-sand-50 p-6 rounded-2xl border border-sand-200">
                  <Coffee className="w-8 h-8 text-matcha-600 mb-4" />
                  <h3 className="font-semibold text-coffee-900 mb-1">Investimento</h3>
                  <p className="text-coffee-700">R$ 160,00 total<br/><span className="text-sm">(Sinal de R$ 60,00)</span></p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-matcha-200 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
              <div className="bg-coffee-900 text-sand-50 rounded-3xl p-8 md:p-10 shadow-xl">
                <h3 className="font-serif text-2xl mb-6">O que está incluso?</h3>
                <ul className="space-y-4">
                  {[
                    "4 horas de imersão e aprendizado",
                    "Degustação guiada de cafés e matchas",
                    "Petiscos deliciosos durante o evento",
                    "Certificado de participação",
                    "Brindes surpresa especiais"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-matcha-400 shrink-0" />
                      <span className="text-sand-200">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-8 border-t border-coffee-800 space-y-6">
                  <h4 className="font-serif text-xl text-sand-50 mb-4">Conheça os Baristas</h4>
                  <div className="flex flex-col gap-6">
                    {/* Lisandra */}
                    <div className="flex items-center gap-4">
                      <img 
                        src="https://instagram.fsdu11-1.fna.fbcdn.net/v/t51.82787-15/663236007_17966076063055137_28361390338424922_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=Mzg3MjQxMTc1Mjc2Mzg0MDQ4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjgyOHgxMTA0LnNkci5DMyJ9&_nc_ohc=cZKYbMhLcF0Q7kNvwHaSQtQ&_nc_oc=AdrARX7l2BpANCaLXP79PCApo4mkdS0Qzb8AlNSQmDhiQ0sQTsl1y7gV13HmYTMGfOTxn2vtNb1q3t9BRTUCvySk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsdu11-1.fna&_nc_gid=rUdsTo8E8KBshleOT5qwUQ&_nc_ss=7a32e&oh=00_Af2Pk76bSeUOh3C-IesBCoR1xbeU2Lmt3j-fIyRp5iZwzQ&oe=69E3016C" 
                        alt="Lisandra" 
                        className="w-14 h-14 rounded-full border-2 border-matcha-400 object-cover" 
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="font-serif text-lg text-sand-50">Lisandra Coelho</p>
                        <p className="text-xs text-matcha-300 mb-1">Arte do matcha com barista profissional</p>
                        <a href="https://instagram.com/lisandrabcoelho" target="_blank" rel="noreferrer" className="text-sand-400 text-xs hover:text-matcha-400 flex items-center gap-1">
                          <Instagram className="w-3 h-3" /> @lisandrabcoelho
                        </a>
                      </div>
                    </div>

                    {/* Rony */}
                    <div className="flex items-center gap-4">
                      <img 
                        src="https://i.imgur.com/2Xz48Uf.jpeg" 
                        alt="Rony Guedez" 
                        className="w-14 h-14 rounded-full border-2 border-coffee-400 object-cover" 
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="font-serif text-lg text-sand-50">Rony Guedez</p>
                        <p className="text-xs text-coffee-300 mb-1">Do grão à xícara com barista profissional</p>
                        <a href="https://instagram.com/rony_guedez" target="_blank" rel="noreferrer" className="text-sand-400 text-xs hover:text-coffee-400 flex items-center gap-1">
                          <Instagram className="w-3 h-3" /> @rony_guedez
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-6 bg-sand-50 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-coffee-950 mb-4">O que dizem nossos Cafelovers</h2>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Award key={s} className="w-5 h-5 text-matcha-500 fill-matcha-500" />
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mariana Silva",
                text: "Uma experiência transformadora! Aprendi técnicas de Latte Art que nunca imaginei conseguir fazer em casa.",
                role: "Entusiasta de Café"
              },
              {
                name: "João Pedro",
                text: "O workshop de matcha foi incrível. A Lisandra explica com uma paixão que contagia a todos.",
                role: "Matcha Lover"
              },
              {
                name: "Carla Mendes",
                text: "Melhor investimento que fiz esse ano. O ambiente é acolhedor e os baristas são extremamente técnicos.",
                role: "Frequentadora Oasis"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-sand-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-coffee-700 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sand-200"></div>
                  <div>
                    <p className="font-bold text-coffee-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-coffee-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="registration" className="py-20 px-6 bg-sand-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-coffee-950 mb-4">Garanta sua vaga</h2>
            <p className="text-coffee-700">Preencha o formulário e faça o pagamento do sinal para confirmar sua presença.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-sand-200">
            {/* Progress Bar */}
            <div className="flex bg-sand-50 border-b border-sand-200">
              <div className={`flex-1 py-4 text-center text-sm font-medium transition-colors ${step >= 1 ? 'text-coffee-900 border-b-2 border-matcha-500' : 'text-sand-400'}`}>
                1. Pagamento do Sinal
              </div>
              <div className={`flex-1 py-4 text-center text-sm font-medium transition-colors ${step >= 2 ? 'text-coffee-900 border-b-2 border-matcha-500' : 'text-sand-400'}`}>
                2. Seus Dados
              </div>
            </div>

            <div className="p-6 md:p-10">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.form 
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={handleNextStep}
                    className="space-y-8"
                  >
                    <div className="space-y-6">
                      <h3 className="font-serif text-2xl text-coffee-900">Escolha sua turma</h3>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-coffee-800">Data</label>
                          <select 
                            required
                            value={formData.date}
                            onChange={e => setFormData({...formData, date: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-matcha-500 focus:border-matcha-500 outline-none transition-all"
                          >
                            <option value="">Selecione uma data</option>
                            <option value="13">13 de Maio</option>
                            <option value="16">16 de Maio</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-coffee-800">Horário</label>
                          <select 
                            required
                            value={formData.time}
                            onChange={e => setFormData({...formData, time: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-matcha-500 focus:border-matcha-500 outline-none transition-all"
                          >
                            <option value="">Selecione um horário</option>
                            <option value="morning">Manhã (09:00 - 12:00)</option>
                            <option value="afternoon">Tarde (13:00 - 16:00)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="bg-matcha-50 rounded-2xl p-6 border border-matcha-200">
                      <h3 className="font-serif text-xl text-coffee-900 mb-4">Pagamento do Sinal</h3>
                      <p className="text-coffee-700 text-sm mb-6">
                        Para garantir sua vaga, é necessário o pagamento de um sinal de <strong>R$ 60,00</strong> via Pix. O restante (R$ 100,00) poderá ser pago no dia do evento.
                        <br/><br/>
                        <span className="text-xs text-coffee-600">⚠️ Atenção: Não fazemos devolução do valor do sinal em caso de desistência.</span>
                      </p>

                      <div className="bg-white p-4 rounded-xl border border-sand-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex-1 truncate">
                          <p className="text-xs text-sand-500 uppercase tracking-wider font-semibold mb-1">Chave Pix (CNPJ)</p>
                          <p className="font-mono text-coffee-900 font-medium truncate">{pixKey}</p>
                        </div>
                        <button 
                          type="button"
                          onClick={handleCopyPix}
                          className="flex items-center gap-2 px-4 py-2 bg-sand-100 hover:bg-sand-200 text-coffee-900 rounded-lg font-medium transition-colors shrink-0"
                        >
                          {copied ? <CheckCircle2 className="w-4 h-4 text-matcha-600" /> : <Copy className="w-4 h-4" />}
                          {copied ? 'Copiado!' : 'Copiar Chave'}
                        </button>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-4 bg-coffee-900 text-sand-50 rounded-xl font-medium text-lg hover:bg-coffee-800 transition-all flex items-center justify-center gap-2"
                    >
                      Já fiz o pagamento do Pix
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </motion.form>
                )}

                {step === 2 && (
                  <motion.form 
                    key="step2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={handleNextStep}
                    className="space-y-6"
                  >
                    <h3 className="font-serif text-2xl text-coffee-900 mb-2">Quase lá!</h3>
                    <p className="text-coffee-700 text-sm mb-6">Preencha seus dados para que possamos confirmar sua inscrição e associar ao seu pagamento.</p>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-coffee-800">Nome Completo</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          placeholder="Como gostaria de ser chamado(a)?"
                          className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-matcha-500 focus:border-matcha-500 outline-none transition-all"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-coffee-800">WhatsApp</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          placeholder="(21) 99999-9999"
                          className="w-full px-4 py-3 rounded-xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-matcha-500 focus:border-matcha-500 outline-none transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-coffee-800">Instagram (Opcional)</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <span className="text-sand-400">@</span>
                          </div>
                          <input 
                            type="text" 
                            value={formData.instagram}
                            onChange={e => setFormData({...formData, instagram: e.target.value})}
                            placeholder="seu.usuario"
                            className="w-full pl-8 pr-4 py-3 rounded-xl border border-sand-300 bg-sand-50 focus:ring-2 focus:ring-matcha-500 focus:border-matcha-500 outline-none transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex gap-4">
                      <button 
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-4 bg-sand-100 text-coffee-900 rounded-xl font-medium hover:bg-sand-200 transition-all"
                      >
                        Voltar
                      </button>
                      <button 
                        type="submit"
                        className="flex-1 py-4 bg-matcha-600 text-white rounded-xl font-medium text-lg hover:bg-matcha-700 transition-all shadow-md hover:shadow-lg"
                      >
                        Concluir Inscrição
                      </button>
                    </div>
                  </motion.form>
                )}

                {step === 3 && (
                  <motion.div 
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="w-20 h-20 bg-matcha-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-matcha-600" />
                    </div>
                    
                    <h3 className="font-serif text-3xl text-coffee-900">Inscrição Registrada!</h3>
                    <p className="text-coffee-700 max-w-md mx-auto">
                      Seus dados foram salvos com sucesso. Para finalizar e garantir sua vaga, precisamos que você nos envie o comprovante do Pix.
                    </p>

                    <div className="pt-6">
                      <a 
                        href={`https://wa.me/5521999999999?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white rounded-xl font-medium text-lg hover:bg-[#20bd5a] transition-all shadow-md hover:shadow-lg"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Enviar Comprovante no WhatsApp
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-950 text-sand-300 py-12 px-6 border-t border-coffee-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            {/* Left Side: Café Oasis Info */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <img 
                  src="https://i.imgur.com/tAzJXkO.jpeg" 
                  alt="Café Oasis Logo" 
                  className="h-14 w-14 rounded-full opacity-90 shadow-lg border border-coffee-800"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center md:text-left">
                  <p className="font-serif text-2xl text-sand-50">Café Oasis</p>
                  <p className="text-sm text-coffee-400 mt-0.5">Workshop & Experiências</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              <a href="https://instagram.com/cafesoasis" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-coffee-900 flex items-center justify-center text-sand-300 hover:bg-matcha-600 hover:text-white transition-all shadow-md">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-coffee-900/50 text-sm">
            <p className="opacity-60 text-center md:text-left">
              © 2024 Café Oasis. Todos os direitos reservados.
            </p>
            
            {/* Right Side: Eagle Digital Credit */}
            <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-[10px] uppercase tracking-widest font-medium text-coffee-400">Desenvolvido por</span>
              <a 
                href="https://eagledigital.site" 
                target="_blank" 
                rel="noreferrer" 
                className="group flex items-center"
                title="Eagle Digital"
              >
                <img 
                  src="https://i.imgur.com/JMe6OUY.png" 
                  alt="Eagle Digital Logo" 
                  className="h-6 w-auto grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
