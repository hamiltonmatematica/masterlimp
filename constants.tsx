
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
    title: 'Pré e Pós-Mudança',
    description: 'Garantimos uma higienização profunda de armários, banheiros e pisos antes de você levar suas malas para o novo lar.',
    icon: 'fa-truck-ramp-box'
  },
  {
    id: 'clinicas-escritorios',
    title: 'Clínicas e Escritórios',
    description: 'Pacotes fixos com manutenção profissional para garantir um ambiente de trabalho produtivo, limpo e que transmita credibilidade.',
    icon: 'fa-briefcase'
  },
  {
    id: 'comercios',
    title: 'Limpeza de Comércios',
    description: 'Serviços especializados para restaurantes, lojas e academias. Mantemos seu estabelecimento sempre impecável e acolhedor.',
    icon: 'fa-store'
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

export const DIFFERENTIALS = [
  {
    id: 1,
    icon: 'fa-users',
    title: 'Equipe Especializada',
    description: 'Profissionais treinados e certificados para garantir a melhor limpeza técnica e pós-obra.'
  },
  {
    id: 2,
    icon: 'fa-spray-can',
    title: 'Produtos Profissionais',
    description: 'Utilizamos apenas produtos de qualidade premium, seguros e eficazes para cada tipo de limpeza.'
  },
  {
    id: 3,
    icon: 'fa-clock',
    title: 'Atendimento Rápido',
    description: 'Resposta em até 2 horas e agendamento flexível para atender sua urgência.'
  },
  {
    id: 4,
    icon: 'fa-shield-check',
    title: 'Resultados Garantidos',
    description: 'Se não ficar satisfeito, voltamos e refazemos o serviço sem custo adicional.'
  },
  {
    id: 5,
    icon: 'fa-file-invoice-dollar',
    title: 'Orçamento Transparente',
    description: 'Sem taxas ocultas. Você sabe exatamente o que está pagando antes de começarmos.'
  },
  {
    id: 6,
    icon: 'fa-broom',
    title: 'Pós-Obra Completo',
    description: 'Não apenas limpamos, mas deixamos seu ambiente pronto para uso imediato.'
  }
];

export const STATS = [
  {
    id: 1,
    number: 500,
    suffix: '+',
    label: 'Projetos Realizados'
  },
  {
    id: 2,
    number: 10,
    suffix: '+',
    label: 'Anos de Experiência'
  },
  {
    id: 3,
    number: 98,
    suffix: '%',
    label: 'Clientes Satisfeitos'
  },
  {
    id: 4,
    number: 24,
    suffix: 'h',
    label: 'Atendimento Disponível'
  }
];

