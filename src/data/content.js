export const educationalContent = {
  fisica: {
    mecanica: {
      tradicional: {
        title: "Mecânica - Física",
        content: `# Mecânica - Física\n\n## Definição\nA Mecânica é o ramo da Física que estuda o movimento dos corpos e as forças que atuam sobre eles. Este tópico abrange os princípios fundamentais que governam desde o movimento de partículas até sistemas complexos.`
      },
      historia: {
        title: "A Jornada Épica da Mecânica",
        content: `# A Jornada Épica da Mecânica\n\n## O Início da Aventura\nEra uma vez, em um reino chamado Física, onde os estudantes enfrentavam o grande desafio do vestibular. Nossa história começa quando um jovem aprendiz se depara com o mistério da **Mecânica** - uma força ancestral que governa todos os movimentos do universo.`
      },
      "cultura-pop": {
        title: "Mecânica: Uma Aventura Épica! 🎬",
        content: `# Mecânica: Uma Aventura Épica! 🎬\n\n## Se Mecânica fosse um filme da Marvel...\nImagine que **Mecânica** é como o filme "Vingadores: Ultimato". Cada conceito é um super-herói com poderes únicos que precisam trabalhar juntos para salvar o universo (ou passar no vestibular)!`
      },
      personagens: {
        title: "Mecânica explicada pelos nossos especialistas",
        content: `# Mecânica explicada pelos nossos especialistas\n\n## 👨‍🔬 Dr. Newton Explica:\n"Olá, jovem padawan da Física! Como seu mentor científico, vou te mostrar que a Mecânica é fascinante quando entendemos sua lógica interna.`
      },
      analogias: {
        title: "Mecânica: Como Dirigir um Carro 🚗",
        content: `# Mecânica: Como Dirigir um Carro 🚗\n\n## A Analogia Perfeita\nAprender Mecânica é exatamente como aprender a dirigir um carro. Você precisa entender os controles (conceitos), as regras de trânsito (leis), e praticar até se tornar natural!`
      },
      visual: {
        title: "Mecânica: Mapa Mental Visual 🧠",
        content: `# Mecânica: Mapa Mental Visual 🧠\n\n## 🎯 Conceito Central\nA **MECÂNICA** está no centro de tudo, como o sol em nosso sistema solar, irradiando conhecimento para todas as áreas da Física.`
      }
    }
  },
  matematica: {
    funcoes: {
      "cultura-pop": {
        title: "Funções: Desvendando o Código da Realidade 🎮",
        content: `# Funções: Desvendando o Código da Realidade 🎮\n\n## Se Funções fossem um jogo...\nImagine que as **Funções** são como os códigos de um videogame que definem como o mundo funciona. Cada função é uma regra que diz: "Se acontecer X, então faça Y".`
      }
    }
  },
  historia: {
    "idade-contemporanea": {
      tradicional: {
        title: "Idade Contemporânea - História",
        content: `# Idade Contemporânea - História\n\n## Definição\nA Idade Contemporânea é o período histórico que se estende da Revolução Francesa (1789) até os dias atuais. É marcada por profundas transformações sociais, políticas, econômicas e culturais.`
      },
      personagens: {
        title: "Idade Contemporânea: Vozes da História",
        content: `# Idade Contemporânea: Vozes da História\n\n## 👑 Napoleão Bonaparte, o Estrategista\n\n"A Revolução foi um vendaval que varreu a velha ordem. Eu, com meu Código Civil, trouxe ordem ao caos e espalhei os ideais de liberdade e igualdade pela Europa. Minhas batalhas redesenharam o mapa do continente, mas meu legado é a modernização do Estado. A glória é efêmera, mas a obscuridade é para sempre!"\n\n## ✊ Karl Marx, o Filósofo da Revolução\n\n"Trabalhadores de todos os países, uni-vos! A história da humanidade é a história da luta de classes. A Idade Contemporânea é o palco onde o capitalismo revela suas contradições, e a revolução proletária se torna inevitável. Não basta interpretar o mundo, é preciso transformá-lo!"\n\n## 🕊️ Mahatma Gandhi, o Apóstolo da Não-Violência\n\n"A força não provém da capacidade física, mas de uma vontade indomável. Contra o imperialismo e a injustiça, a não-violência é a arma mais poderosa. A Índia conquistou sua independência não pela espada, mas pela alma. Seja a mudança que você deseja ver no mundo!"\n\n## 🔬 Marie Curie, a Cientista Pioneira\n\n"Nada na vida deve ser temido, apenas compreendido. Agora é a hora de compreender mais, para que possamos temer menos. Minhas descobertas sobre a radioatividade não apenas revolucionaram a física e a química, mas também abriram portas para as mulheres na ciência. O progresso não tem limites!"\n\n## 🗣️ Martin Luther King Jr., o Sonhador\n\n"Eu tenho um sonho! Um sonho de que meus quatro pequenos filhos um dia viverão em uma nação onde não serão julgados pela cor de sua pele, mas pelo conteúdo de seu caráter. A luta pelos direitos civis marcou a Idade Contemporânea, mostrando que a justiça e a igualdade são ideais pelos quais vale a pena lutar e morrer."`
      }
    }
  }
};

export function getContent(subject, topic, style) {
  if (educationalContent[subject] && educationalContent[subject][topic] && educationalContent[subject][topic][style]) {
    return educationalContent[subject][topic][style];
  }
  return null;
}

export function generateContent(subject, topic, style, subjects) {
  const subjectData = subjects[subject];
  const styleData = explanationStyles.find(s => s.id === style);

  return {
    title: `${topic} - ${subjectData.name}`,
    content: `# ${topic} - ${subjectData.name}\n\n## Conteúdo em Desenvolvimento\n\nEste tópico está sendo desenvolvido para o estilo "${styleData?.name}".\n\n### Conceitos Principais\n- Fundamentos de ${topic}\n- Aplicações em ${subjectData.name}\n- Exercícios práticos\n- Dicas para o vestibular\n\n### Metodologia\nO conteúdo será apresentado de forma ${style === 'tradicional' ? 'objetiva e direta' : style === 'historia' ? 'narrativa e envolvente' : style === 'cultura-pop' ? 'com referências da cultura pop' : style === 'personagens' ? 'através de diferentes personas' : style === 'analogias' ? 'com analogias do cotidiano' : 'visual e interativa'}.\n\n---\n*Sistema de tutoria em desenvolvimento - mais conteúdos serão adicionados em breve!*`
  };
}

