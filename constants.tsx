
import { Service, BeforeAfterImage } from './types';

export const WHATSAPP_NUMBER = "5511968674496";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SERVICES: Service[] = [
  {
    id: 'pos-obra',
    title: 'Limpeza Pós-Obra',
    description: 'Eliminamos todo o pó, restos de obra e manchas de pintura para que você possa aproveitar seu novo espaço imediatamente.',
    icon: 'fa-trowel-bricks'
  },
  {
    id: 'pre-mudanca',
    title: 'Pré-Mudança',
    description: 'Garantimos uma higienização profunda de armários, banheiros e pisos antes de você levar suas malas para o novo lar.',
    icon: 'fa-truck-ramp-box'
  },
  {
    id: 'escritorios',
    title: 'Empresas e Escritórios',
    description: 'Manutenção profissional para garantir um ambiente de trabalho produtivo, limpo e que transmita credibilidade aos seus clientes.',
    icon: 'fa-briefcase'
  },
  {
    id: 'residencial',
    title: 'Limpeza Residencial',
    description: 'Cuidados minuciosos com cada detalhe da sua casa, proporcionando o conforto e a saúde que sua família merece.',
    icon: 'fa-house-chimney-window'
  },
  {
    id: 'eventos',
    title: 'Pós-Evento',
    description: 'Sua festa acabou e a bagunça ficou? Nossa equipe entra em ação para deixar tudo organizado e limpo em tempo recorde.',
    icon: 'fa-champagne-glasses'
  },
  {
    id: 'clinicas',
    title: 'Clínicas e Consultórios',
    description: 'Protocolos rigorosos de desinfecção para garantir a segurança biológica e o bem-estar de pacientes e profissionais.',
    icon: 'fa-hand-holding-medical'
  }
];

export const PORTFOLIO: BeforeAfterImage[] = [
  {
    id: 1,
    title: 'Revitalização de Fachadas',
    before: 'https://images.unsplash.com/photo-1581850518616-bcb8186c443e?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Finalização de Reforma',
    before: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  }
];
