const decks = [
    { name: "React", cards: [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ] },
    { name: "Física", cards: [
        { question: "O que é a física?", answer: "É a ciencia que estuda os fenomenos da natureza" },
        { question: "Cite alguns fenomenos fisicos", answer: "Mecanicos, elétricos, termicos e opticos" },
        { question: "Quais foram os primeiros ensinamentos obtidos ao observar o ceu?", answer: "A escolha da melhor época para plantar, colher e caçar com base nas temperaturas e clima de cada época" },
        { question: "Quando datam os primeiros registros astronomicos e para que foram utilizados?", answer: "Datam de 3000AC. Para construir os primeiros calendários" },
        { question: "Qual foi o período e a região em que ocorreu o maior desenvolvimento de ideias sobre o céu e a Terra?", answer: "600AC a 300DC. Principalmente na Grécia" },
        { question: "Na classificação dos astros na antiguidade o que significa o firmamento?", answer: "É a estrutura que continha as estrelas fixas que giravam ao redor da Terra, de leste e oeste" },
        { question: "Quais eram os astros chamados errantes e explique o motivo do nome", answer: "Lua, Mercúrio, Venus, Sol, Marte, Júppiter e Saturno. Porque não acompanhavam o movimento das estrelas fixas" },
        { question: "Porque temos a sensação de que todos os astros se movem em relação a Terra?", answer: "Porque o nosso sistema de referencia corresponde ao de observadores que se encontram na Terra" },
        { question: "Para Galileu o movimento é um conceito relativo assim o que podemos afirmar sobre o estado de movimento de uma pessoa sentada em um trem que se desloca entre duas cidades?", answer: "Podemos afirmar que este estado depende do referencial adotado aos olhos da pessoa." },
        { question: "Proponha uma situação em que um corpo encontra-se em repouso em relação a um referencial em movimento em relação a outro referencial", answer: "Quando voce esta no carro e parece que o Sol está seguindo voce" },
        { question: "Explique porque a linha do horizonte dificulta a conclusão de que a Terra é esférica", answer: "Porque quando olhamos para o horizonte temos a impressão de que a Terra é plana" },
        { question: "Explique a contradição entre a concepção do formato plano da Terra e a observação de diferentes constelações a partir de locais distintos do planeta", answer: "Algumas constelações sao visíveis apenas no hemisfério sul e outras no norte e isso nao ocorreria se a Terra fosse plana." },
        { question: "Como Cristóvão Colombo contribuiu para a discussão sobre o formato da Terra", answer: "Ele argumentou que quando observamos um navio no horizonte vemos primeiro a parte inferior do barco." },
        { question: "Descreva o experimento realizado por Erastostones para comprovar a esfericidade da Terra", answer: "Erastóstenes utilizou a ideia de que se a Terra fosse plana a sombra em um mastro em Siena e Alexandria seria igual porém elas foram diferentes" },
        { question: "Em que época viveu Erastóstenes", answer: "276 AC a 194 AC" },
        { question: "Como Erastostenes conseguiu determinar o comprimento da Terra", answer: "Medindo a sombra de um objeto em duas cidades distintas e verificando a diferença no angulo da sombra e com isso calculou o raio da Terra" },
        { question: "Qual é o comprimento real aproximado da Terra?", answer: "Aproximadamente 45.000km" },
        { question: "De que povos os gregos herdaram conhecimento científicos importantes? Em que areas estavam concentrados tais conhecimentos?", answer: "Mesopotamicos e Egípicios. Matemática e Astronomia" },
        { question: "Quais foram as principais contribuiçoes de Tales de Mileto para a ciencia desenvolvida pelos gregos?", answer: "Geometria na astronomia" },
        { question: "Que forma geométricas consideraram os pitagóricos para a descrição dos corpos celestes e seus movimentos?", answer: "Esferas e círculos" },
        { question: "Quais elementos celestes eram conhecidos à época de Pitagoras de Samos", answer: "Terra, Lua, Sol, Mercúrio, Venus, Marte, Jupiter, Saturno e a esfera onde estariam fixas as estrelas" },
        { question: "Para Aristósteles como estariam dispostos geometricamente os corpos celestes conhecidos?", answer: "Esferas concentricas e transparentes" },
        { question: "O que o método de poço de Siena nos diz sobre o formato da Terra?", answer: "Que a Terra é esférica porque ele colocou um pedaço de madeira fincado no chão em Siena e em Alexandria no mesmo dia e hora. Em Siena nao tinha sombra, Alexandria sim!" },

    ]},
    { name: "Biologia", cards: [
        { question: "O que a genética estuda?", answer: "Estuda os mecanismos de transmissão das características de geração à geração" },
        { question: "O que a anatomia estuda?", answer: "Estuda a forma e estrutura" },
        { question: "O que a botãnica estuda?", answer: "Estuda as plantas" },
        { question: "O que a ecologia estuda?", answer: "Estuda as relações entre os seres vivos e o ambiente que ocupam" },
        { question: "O que a fisiologia estuda?", answer: "Estuda as funções dos órgãos" },
        { question: "O que a zoologia estuda?", answer: "Estuda os animais" }
    ] }
]

export default decks