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
        { question: "Para Galileu o movimento é um conceito relativo assim o que podemos afirmar sobre o estado de movimento de uma pessoa sentada em um trem que se desloca entre duas cidades?", answer: "Podemos afirmar que este estado depende do referencial adotado aos olhos da pessoa." }
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