
import { Lesson } from './types';

export const LESSONS: Lesson[] = [
  {
    id: 26,
    title: "Past Simple Review",
    vocabulary: [
      { id: "v1", english: "like", extra: "liked", portuguese: "gostar", extraPortuguese: "gostou/gostava" },
      { id: "v2", english: "study", extra: "studied", portuguese: "estudar", extraPortuguese: "estudou" },
      { id: "v3", english: "work", extra: "worked", portuguese: "trabalhar", extraPortuguese: "trabalhou" },
      { id: "v4", english: "play", extra: "played", portuguese: "jogar/tocar", extraPortuguese: "jogou/tocou" },
      { id: "v5", english: "want", extra: "wanted", portuguese: "querer", extraPortuguese: "quis" },
      { id: "v6", english: "remember", extra: "remembered", portuguese: "lembrar", extraPortuguese: "lembrou" },
      { id: "v7", english: "talk", extra: "talked", portuguese: "conversar", extraPortuguese: "conversou" },
      { id: "v8", english: "walk", extra: "walked", portuguese: "caminhar", extraPortuguese: "caminhou" },
      { id: "v9", english: "cook", extra: "cooked", portuguese: "cozinhar", extraPortuguese: "cozinhou" },
      { id: "v10", english: "look", extra: "looked", portuguese: "olhar", extraPortuguese: "olhou" },
      { id: "v11", english: "need", extra: "needed", portuguese: "precisar", extraPortuguese: "precisou" },
      { id: "v12", english: "learn", extra: "learned", portuguese: "aprender", extraPortuguese: "aprendeu" },
      { id: "v13", english: "travel", extra: "traveled", portuguese: "viajar", extraPortuguese: "viajou" },
      { id: "v14", english: "eat", extra: "ate", portuguese: "comer", extraPortuguese: "comeu" },
      { id: "v15", english: "drink", extra: "drank", portuguese: "beber", extraPortuguese: "bebeu" },
      { id: "v16", english: "have", extra: "had", portuguese: "ter", extraPortuguese: "teve/tinha" },
      { id: "v17", english: "speak", extra: "spoke", portuguese: "falar", extraPortuguese: "falou" },
      { id: "v18", english: "go", extra: "went", portuguese: "ir", extraPortuguese: "foi" },
      { id: "v19", english: "do", extra: "did", portuguese: "fazer", extraPortuguese: "fez" },
      { id: "v20", english: "make", extra: "made", portuguese: "fazer/criar", extraPortuguese: "fez/criou" },
      { id: "v21", english: "run", extra: "ran", portuguese: "correr", extraPortuguese: "correu" },
      { id: "v22", english: "sleep", extra: "slept", portuguese: "dormir", extraPortuguese: "dormiu" },
      { id: "v23", english: "read", extra: "read", portuguese: "ler", extraPortuguese: "leu" },
      { id: "v24", english: "write", extra: "wrote", portuguese: "escrever", extraPortuguese: "escreveu" },
      { id: "v25", english: "take", extra: "took", portuguese: "pegar/levar", extraPortuguese: "pegou/levou" },
      { id: "v26", english: "pay", extra: "paid", portuguese: "pagar", extraPortuguese: "pagou" },
      { id: "v27", english: "forget", extra: "forgot", portuguese: "esquecer", extraPortuguese: "esqueceu" },
      { id: "v28", english: "buy", extra: "bought", portuguese: "comprar", extraPortuguese: "comprou" },
      { id: "v29", english: "sell", extra: "sold", portuguese: "vender", extraPortuguese: "vendeu" },
      { id: "v30", english: "know", extra: "knew", portuguese: "saber/conhecer", extraPortuguese: "soube/conheceu" },
      { id: "v31", english: "try", extra: "tried", portuguese: "tentar", extraPortuguese: "tentou" },
      { id: "v32", english: "begin", extra: "began", portuguese: "começar", extraPortuguese: "começou" },
    ],
    phrases: [
      { id: "p1", english: "I worked yesterday.", portuguese: "Eu trabalhei ontem." },
      { id: "p2", english: "Did you study last night?", portuguese: "Você estudou ontem à noite?" },
      { id: "p3", english: "Where did she go?", portuguese: "Aonde ela foi?" },
      { id: "p4", english: "He didn't eat his breakfast.", portuguese: "Ele não comeu o café da manhã dele." },
      { id: "p5", english: "When did they arrive?", portuguese: "Quando eles chegaram?" },
      { id: "p6", english: "Who did you see at the mall?", portuguese: "Quem você viu no shopping?" },
      { id: "p7", english: "How did he fix the car?", portuguese: "Como ele consertou o carro?" },
      { id: "p8", english: "We traveled to London last year.", portuguese: "Nós viajamos para Londres no ano passado." },
    ],
    exercises: {
      dialogue: [
        { speaker: "John", text: "Did you watch the movie yesterday?" },
        { speaker: "Sarah", text: "No, I didn't. I was very tired and I slept early." },
        { speaker: "John", text: "That's too bad. I really liked it." }
      ],
      sentenceOrdering: [
        { id: "e1", sentence: "I worked yesterday afternoon", translation: "Eu trabalhei ontem à tarde" },
        { id: "e2", sentence: "Where did you go last night", translation: "Aonde você foi ontem à noite" },
        { id: "e3", sentence: "She studied for the test", translation: "Ela estudou para a prova" },
        { id: "e4", sentence: "They ate a delicious pizza", translation: "Eles comeram uma pizza deliciosa" },
        { id: "e5", sentence: "Did you see my car", translation: "Você viu meu carro" },
        { id: "e6", sentence: "He didn't remember the name", translation: "Ele não lembrou o nome" }
      ]
    }
  },
  {
    id: 27,
    title: "In / On / At (Time)",
    vocabulary: [
      { id: "v1", english: "January", portuguese: "Janeiro" },
      { id: "v2", english: "February", portuguese: "Fevereiro" },
      { id: "v3", english: "March", portuguese: "Março" },
      { id: "v4", english: "April", portuguese: "Abril" },
      { id: "v5", english: "May", portuguese: "Maio" },
      { id: "v6", english: "June", portuguese: "Junho" },
      { id: "v7", english: "July", portuguese: "Julho" },
      { id: "v8", english: "August", portuguese: "Agosto" },
      { id: "v9", english: "September", portuguese: "Setembro" },
      { id: "v10", english: "October", portuguese: "Outubro" },
      { id: "v11", english: "November", portuguese: "Novembro" },
      { id: "v12", english: "December", portuguese: "Dezembro" },
      { id: "v13", english: "Monday", portuguese: "Segunda-feira" },
      { id: "v14", english: "Tuesday", portuguese: "Terça-feira" },
      { id: "v15", english: "Wednesday", portuguese: "Quarta-feira" },
      { id: "v16", english: "Thursday", portuguese: "Quinta-feira" },
      { id: "v17", english: "Friday", portuguese: "Sexta-feira" },
      { id: "v18", english: "Saturday", portuguese: "Sábado" },
      { id: "v19", english: "Sunday", portuguese: "Domingo" },
      { id: "v20", english: "noon", portuguese: "meio-dia" },
      { id: "v21", english: "midnight", portuguese: "meia-noite" },
      { id: "v22", english: "night", portuguese: "noite" },
      { id: "v23", english: "Christmas", portuguese: "Natal" },
      { id: "v24", english: "Easter", portuguese: "Páscoa" },
      { id: "v25", english: "New Year", portuguese: "Ano Novo" },
      { id: "v26", english: "three o'clock", portuguese: "três horas" },
    ],
    phrases: [
      { id: "p1", english: "I was born in July.", portuguese: "Eu nasci em Julho." },
      { id: "p2", english: "I study on Monday.", portuguese: "Eu estudo na segunda-feira." },
      { id: "p3", english: "I wake up at seven o'clock.", portuguese: "Eu acordo às sete horas." },
      { id: "p4", english: "She travels in December.", portuguese: "Ela viaja em Dezembro." },
      { id: "p5", english: "They work on weekends.", portuguese: "Eles trabalham nos fins de semana." },
      { id: "p6", english: "We go out at night.", portuguese: "Nós saímos à noite." },
      { id: "p7", english: "The meeting is at noon.", portuguese: "A reunião é ao meio-dia." },
      { id: "p8", english: "See you on Friday.", portuguese: "Vejo você na sexta-feira." },
    ],
    exercises: {
      dialogue: [
        { speaker: "Mark", text: "When is your birthday?" },
        { speaker: "Lucy", text: "It is on May 15th. In May, it's usually sunny." },
        { speaker: "Mark", text: "My birthday is in December, at Christmas time." }
      ],
      sentenceOrdering: [
        { id: "e1", sentence: "I study English on Monday", translation: "Eu estudo inglês na segunda-feira" },
        { id: "e2", sentence: "He wakes up at noon", translation: "Ele acorda ao meio-dia" },
        { id: "e3", sentence: "My birthday is in September", translation: "Meu aniversário é em Setembro" },
        { id: "e4", sentence: "The meeting is at three o'clock", translation: "A reunião é às três horas" },
        { id: "e5", sentence: "We travel to Brazil in July", translation: "Nós viajamos para o Brasil em Julho" },
        { id: "e6", sentence: "The store is closed on Sunday", translation: "A loja está fechada no domingo" }
      ]
    }
  },
  {
    id: 28,
    title: "This / That / These / Those",
    vocabulary: [
      { id: "v1", english: "passport", portuguese: "passaporte" },
      { id: "v2", english: "ring", portuguese: "anel" },
      { id: "v3", english: "camera", portuguese: "câmera" },
      { id: "v4", english: "purse", portuguese: "bolsa" },
      { id: "v5", english: "magazine", portuguese: "revista" },
      { id: "v6", english: "sunglasses", portuguese: "óculos de sol" },
      { id: "v7", english: "comb", portuguese: "pente" },
      { id: "v8", english: "umbrella", portuguese: "guarda-chuva" },
      { id: "v9", english: "lipstick", portuguese: "batom" },
      { id: "v10", english: "wallet", portuguese: "carteira" },
      { id: "v11", english: "keys", portuguese: "chaves" },
      { id: "v12", english: "helmet", portuguese: "capacete" },
      { id: "v13", english: "knife", portuguese: "faca" },
      { id: "v14", english: "phone", portuguese: "telefone" },
      { id: "v15", english: "needle", portuguese: "agulha" },
      { id: "v16", english: "this", portuguese: "este/esta (perto, singular)" },
      { id: "v17", english: "that", portuguese: "aquele/aquela (longe, singular)" },
      { id: "v18", english: "these", portuguese: "estes/estas (perto, plural)" },
      { id: "v19", english: "those", portuguese: "aqueles/aquelas (longe, plural)" },
      { id: "v20", english: "my", portuguese: "meu/minha" },
      { id: "v21", english: "your", portuguese: "seu/sua" },
      { id: "v22", english: "his", portuguese: "dele" },
      { id: "v23", english: "her", portuguese: "dela" },
      { id: "v24", english: "its", portuguese: "dele/dela (coisas/animais)" },
      { id: "v25", english: "our", portuguese: "nosso/nossa" },
      { id: "v26", english: "their", portuguese: "deles/delas" },
    ],
    phrases: [
      { id: "p1", english: "This is my helmet.", portuguese: "Este é o meu capacete." },
      { id: "p2", english: "These are my keys.", portuguese: "Estas são as minhas chaves." },
      { id: "p3", english: "That is her purse.", portuguese: "Aquela é a bolsa dela." },
      { id: "p4", english: "Those are his sunglasses.", portuguese: "Aqueles são os óculos de sol dele." },
      { id: "p5", english: "This magazine is interesting.", portuguese: "Esta revista é interessante." },
      { id: "p6", english: "These rings are expensive.", portuguese: "Estes anéis são caros." },
      { id: "p7", english: "Is that your wallet?", portuguese: "Aquela é a sua carteira?" },
      { id: "p8", english: "Are those our passports?", portuguese: "Aqueles são os nossos passaportes?" },
    ],
    exercises: {
      dialogue: [
        { speaker: "Paul", text: "Are these your sunglasses?" },
        { speaker: "Anna", text: "No, those are my sunglasses on the table." },
        { speaker: "Paul", text: "And this ring? Is it yours?" },
        { speaker: "Anna", text: "Yes, this is my ring. Thank you!" }
      ],
      sentenceOrdering: [
        { id: "e1", sentence: "This is my helmet", translation: "Este é o meu capacete" },
        { id: "e2", sentence: "These are my keys", translation: "Estas são as minhas chaves" },
        { id: "e3", sentence: "That is a beautiful ring", translation: "Aquele é um anel bonito" },
        { id: "e4", sentence: "Those are her sunglasses", translation: "Aqueles são os óculos de sol dela" },
        { id: "e5", sentence: "This magazine belongs to me", translation: "Esta revista pertence a mim" },
        { id: "e6", sentence: "Is that your passport", translation: "Aquele é o seu passaporte" }
      ]
    }
  },
  {
    id: 29,
    title: "Modal Verbs (Could / Must)",
    vocabulary: [
      { id: "v1", english: "tray", portuguese: "bandeja" },
      { id: "v2", english: "hanger", portuguese: "cabide" },
      { id: "v3", english: "rug", portuguese: "tapete pequeno" },
      { id: "v4", english: "carpet", portuguese: "carpete" },
      { id: "v5", english: "doorknob", portuguese: "maçaneta" },
      { id: "v6", english: "cupboard", portuguese: "armário de louça" },
      { id: "v7", english: "tomorrow", portuguese: "amanhã" },
      { id: "v8", english: "tonight", portuguese: "hoje à noite" },
      { id: "v9", english: "now", portuguese: "agora" },
      { id: "v10", english: "with you", portuguese: "com você" },
    ],
    phrases: [
      { id: "p1", english: "She must clean the carpet.", portuguese: "Ela deve limpar o carpete." },
      { id: "p2", english: "I couldn't find the tray.", portuguese: "Eu não conseguia encontrar a bandeja." },
      { id: "p3", english: "Can I go with you?", portuguese: "Posso ir com você?" },
      { id: "p4", english: "You must finish it tonight.", portuguese: "Você deve terminar isso hoje à noite." },
      { id: "p5", english: "Could you help me tomorrow?", portuguese: "Você poderia me ajudar amanhã?" },
      { id: "p6", english: "They must stay here now.", portuguese: "Eles devem ficar aqui agora." },
      { id: "p7", english: "He couldn't open the doorknob.", portuguese: "Ele não conseguia abrir a maçaneta." },
      { id: "p8", english: "Must she leave tomorrow?", portuguese: "Ela deve partir amanhã?" },
    ],
    exercises: {
      dialogue: [
        { speaker: "Officer", text: "You must show your ID now." },
        { speaker: "Lady", text: "I couldn't find my ID in my purse." },
        { speaker: "Officer", text: "Could you look in your cupboard at home?" }
      ],
      sentenceOrdering: [
        { id: "e1", sentence: "I couldn't find the tray", translation: "Eu não conseguia encontrar a bandeja" },
        { id: "e2", sentence: "She must clean the carpet", translation: "Ela deve limpar o carpete" },
        { id: "e3", sentence: "You must finish your homework", translation: "Você deve terminar sua lição de casa" },
        { id: "e4", sentence: "Could you open the doorknob", translation: "Você poderia abrir a maçaneta" },
        { id: "e5", sentence: "They must stay with you", translation: "Eles devem ficar com você" },
        { id: "e6", sentence: "I couldn't see the rug", translation: "Eu não conseguia ver o tapete" }
      ]
    }
  },
  {
    id: 30,
    title: "There is / There are",
    vocabulary: [
      { id: "v1", english: "living room", portuguese: "sala de estar" },
      { id: "v2", english: "bedroom", portuguese: "quarto" },
      { id: "v3", english: "kitchen", portuguese: "cozinha" },
      { id: "v4", english: "bathroom", portuguese: "banheiro" },
      { id: "v5", english: "dining room", portuguese: "sala de jantar" },
      { id: "v6", english: "garage", portuguese: "garagem" },
      { id: "v7", english: "table", portuguese: "mesa" },
      { id: "v8", english: "chair", portuguese: "cadeira" },
      { id: "v9", english: "sofa", portuguese: "sofá" },
      { id: "v10", english: "bed", portuguese: "cama" },
      { id: "v11", english: "wardrobe", portuguese: "guarda-roupa" },
      { id: "v12", english: "fridge", portuguese: "geladeira" },
    ],
    phrases: [
      { id: "p1", english: "There is a table in the living room.", portuguese: "Tem uma mesa na sala de estar." },
      { id: "p2", english: "There are two chairs in the kitchen.", portuguese: "Tem duas cadeiras na cozinha." },
      { id: "p3", english: "Is there a fridge in the garage?", portuguese: "Tem uma geladeira na garagem?" },
      { id: "p4", english: "There are many beds in the bedroom.", portuguese: "Tem muitas camas no quarto." },
      { id: "p5", english: "Are there chairs in the dining room?", portuguese: "Tem cadeiras na sala de jantar?" },
      { id: "p6", english: "There isn't a sofa in the bathroom.", portuguese: "Não tem um sofá no banheiro." },
      { id: "p7", english: "There is a wardrobe in my bedroom.", portuguese: "Tem um guarda-roupa no meu quarto." },
      { id: "p8", english: "There are no cars in the garage.", portuguese: "Não tem carros na garagem." },
    ],
    exercises: {
      dialogue: [
        { speaker: "Guest", text: "Is there a bathroom near here?" },
        { speaker: "Host", text: "Yes, there is a bathroom next to the kitchen." },
        { speaker: "Guest", text: "Are there any towels there?" },
        { speaker: "Host", text: "Yes, there are many towels in the cupboard." }
      ],
      sentenceOrdering: [
        { id: "e1", sentence: "There is a table in the kitchen", translation: "Tem uma mesa na cozinha" },
        { id: "e2", sentence: "Are there two chairs in the living room", translation: "Tem duas cadeiras na sala de estar" },
        { id: "e3", sentence: "There are many beds in the house", translation: "Tem muitas camas na casa" },
        { id: "e4", sentence: "Is there a fridge in the garage", translation: "Tem uma geladeira na garagem" },
        { id: "e5", sentence: "There is a wardrobe in the bedroom", translation: "Tem um guarda-roupa no quarto" },
        { id: "e6", sentence: "There are no sofas in the bathroom", translation: "Não tem sofás no banheiro" }
      ]
    }
  },
];
