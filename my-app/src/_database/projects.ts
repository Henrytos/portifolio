export interface Project {
  id: string;
  name: string;
  description: string;
  linkPage: string;
  linkRepo: string;
  srcImg: string;
  isFavorite?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Next Anime",
    description:
      "Site desenvolvido para ajudar na escolha do seu proximo anime ou mangá",
    linkPage: "https://anime-next-ruby.vercel.app/",
    linkRepo: "https://github.com/Henrytos/anime-next",
    srcImg: "/imgs/projects/next-anime.png",
    isFavorite: true,
  },
  {
    id: "2",
    name: "Academia Xhealth",
    description:
      "Aplicação web feita como desafio de um hackaton onde o intuito é fazer um Site de uma academia imaginária",
    linkPage: "https://academia-xhealth.vercel.app/",
    linkRepo: "https://github.com/Henrytos/Academia-XHEALTH",
    srcImg: "/imgs/projects/academia-x-health.png",
    isFavorite: true,
  },
  {
    id: "3",
    name: "One bit X",
    description:
      "Um site desenvolvido e inspirado no site da Space X com Temas de Foguetes e planetas",
    linkPage: "https://onebit-x-xi.vercel.app/home.html",
    linkRepo: "https://github.com/Henrytos/onebitX",
    srcImg: "/imgs/projects/one-bit-x.png",
    isFavorite: true,
  },
  {
    id: "4",
    name: "Imposto de Renda",
    description:
      "Aplicação web para conscientizar pessoas sobre o imposto de renda e fazer cálculo de Imposto de renda",
    linkPage: "https://spotify-raqf.vercel.app/",
    linkRepo: "https://github.com/Henrytos/imposto-de-renda",
    srcImg: "/imgs/projects/imposto-de-renda.png",
  },
  {
    id: "5",
    name: "Hunger in Afric",
    description:
      "Um site desenvolvido com o intuito de conscientizar as pessoas sobre a fome na África",
    linkPage: "https://hunger-in-africa.vercel.app/",
    linkRepo: "https://github.com/Henrytos/hungerInAfrica",
    srcImg: "/imgs/projects/hunger-in-africa.png",
  },
  {
    id: "6",
    name: "Genereto Qr",
    description:
      "Um site que tem a capacidade de gerar qr code para qualquer caractere. Utilizei uma Biblioteca para isso",
    linkPage: "https://henrytos.github.io/Genereto/",
    linkRepo: "https://github.com/Henrytos/Genereto",
    srcImg: "/imgs/projects/genereto-qr.png",
  },
];
