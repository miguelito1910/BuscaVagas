const enc = s => encodeURIComponent(s);

export const PLATFORMS = [
  {
    id: 'linkedin',
    name: 'LinkedIn Jobs',
    sub: 'Maior rede profissional — alto volume de estágios',
    icon: 'ti-brand-linkedin',
    color: '#1a8cff',
    bg: 'rgba(26,140,255,.12)',
    build: (q, t) => {
      let u = `https://www.linkedin.com/jobs/search/?keywords=${enc(q + ' São Paulo')}&location=S%C3%A3o%20Paulo&f_E=1`;
      if (t === 'remoto') u += '&f_WT=2';
      else if (t === 'presencial') u += '&f_WT=1';
      else if (t === 'hibrido') u += '&f_WT=3';
      return u;
    }
  },
  {
    id: 'indeed',
    name: 'Indeed Brasil',
    sub: 'Alta densidade de vagas com filtro estágio',
    icon: 'ti-briefcase',
    color: '#4b9eff',
    bg: 'rgba(75,158,255,.12)',
    build: (q, t) => {
      let u = `https://br.indeed.com/jobs?q=${enc(q)}&l=S%C3%A3o+Paulo%2C+SP&jt=internship`;
      if (t === 'remoto') u += '&remotejob=1';
      return u;
    }
  },
  {
    id: 'gupy',
    name: 'Gupy',
    sub: 'Preferida por fintechs: Nubank, PicPay, C6',
    icon: 'ti-rocket',
    color: '#a371f7',
    bg: 'rgba(163,113,247,.12)',
    build: (q) => `https://portal.gupy.io/job-search/term=${enc(q)}`
  },
  {
    id: 'glassdoor',
    name: 'Glassdoor',
    sub: 'Vagas com avaliações de salário e cultura',
    icon: 'ti-building-skyscraper',
    color: '#3fb950',
    bg: 'rgba(63,185,80,.12)',
    build: (q) => `https://www.glassdoor.com.br/Vaga/s%C3%A3o-paulo-${enc(q)}-vagas-SRCH_IL.0,9_IC2479061_KO10,${10 + q.length}.htm`
  },
  {
    id: 'vagas',
    name: 'Vagas.com',
    sub: 'Foco no mercado brasileiro — boa cobertura SP',
    icon: 'ti-map-pin',
    color: '#d29922',
    bg: 'rgba(210,153,34,.12)',
    build: (q) => `https://www.vagas.com.br/vagas-de-${enc(q.replace(/ /g, '-'))}?where=S%C3%A3o+Paulo`
  },
  {
    id: 'catho',
    name: 'Catho',
    sub: 'Grande base de recrutadores brasileiros',
    icon: 'ti-users',
    color: '#f0997b',
    bg: 'rgba(240,153,123,.12)',
    build: (q) => `https://www.catho.com.br/vagas/${enc(q.replace(/ /g, '-'))}/sao-paulo/`
  },
  {
    id: 'infojobs',
    name: 'InfoJobs',
    sub: 'Forte em tech e startups paulistanas',
    icon: 'ti-device-laptop',
    color: '#a371f7',
    bg: 'rgba(163,113,247,.12)',
    build: (q) => `https://www.infojobs.com.br/empregos-em-sao-paulo.aspx?palabra=${enc(q)}`
  },
  {
    id: 'ciee',
    name: 'CIEE',
    sub: 'Maior intermediadora de estágios do Brasil',
    icon: 'ti-school',
    color: '#3fb950',
    bg: 'rgba(63,185,80,.12)',
    build: (q) => `https://portal.ciee.org.br/vagas/?busca=${enc(q)}&estado=SP&cidade=S%C3%A3o+Paulo`
  },
];
