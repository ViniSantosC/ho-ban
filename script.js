const pessoas = document.getElementById("pessoas");

const overlay = document.getElementById('modal-overlay');
const modalNome = document.getElementById('modal-nome');
const modalDesc = document.getElementById('modal-desc');
const btnFechar = document.getElementById('btn-fechar');
const imgAlunos = document.getElementById("imgAluno")

const mostarInfos = (caminhoImg, nome , detalhes) => {
    imgAlunos.src = caminhoImg
    modalNome.textContent = nome;
    modalDesc.textContent = detalhes;
    overlay.classList.remove('modal-hidden');
}
btnFechar.addEventListener('click', () => {
    overlay.classList.add('modal-hidden');
});


const acoes = {
  pessoa1: () =>
    mostarInfos(
      "img/pedro viana (2).jpg",
      "Pedro Viana",
      "''Por mais que a tristeza de te ver indo embora seja grande, eu ainda me sinto feliz por ter tido a oportunidade de ser seu aluno e também seu amigo, ao longo desse tempo, você não foi apenas um professor, mas alguém que realmente marcou a minha vida, você se tornou uma inspiração pra mim, alguém que me fez acreditar no meu potencial mesmo quando eu duvidava de mim mesmo. Suas palavras, sua paciência (q não é muita kkkkk)e sua forma de ensinar fizeram toda a diferença, não só nos estudos, mas também na forma como eu passei a enxergar minhas próprias capacidades, vou sentir muita saudade das aulas, das conversas e de tudo que aprendi com você Mas tenho certeza de que tudo isso vai continuar comigo, me guiando nos próximos passos''",
    ),
  pessoa2: () =>
    mostarInfos(
      "img/carlos.jpg",
      "Carlos Eduardo",
      "''Olha João, você vacilou com a gente, mas por mais que eu esteja bravo e triste com a sua saída do curso técnico eu ainda estou feliz, feliz por você, por que você vai ter uma oportunidade maior, de fazer o que você sempre sonhou, e mesmo estando irritado, eu sempre aprendi que as pessoas sempre precisam de uma segunda chance, e a segunda chance é essa, espero que você possa ser alguém muito sucedido na sua vida e não esqueça dos seus alunos queridos, nem das amizades que você fez na escola, e espero que onde você trabalhe tenha café gratuito também kkkk, bom é isso, isso é uma mensagem minha para você, até e sucesso na sua vida, te admiro João''",
    ),
  pessoa3: () =>
    mostarInfos(
      "img/lucas (1).jpg",
      "Lucas",
      "''João vc foi um professor incrível, se não fosse por vc eu não saberia muito do que sei sobre programação, mesmo sendo meio preguiçoso (de acordo com vc mesmo) vc ainda estava disposto a tirar nossas dúvidas e a nos ensinar''",
    ),
  pessoa4: () =>
    mostarInfos(
      "img/Felipe .jpg",
      "Felipe Correa",
      "''João, eu tenho que te agradecer por ter me acolhido mesmo que muitas das vezes a gente nem era tão próximo, obrigado por ter me ensinado e me ajudado, obrigado por ter sido um bom professor do seu próprio jeito''",
    ),
  pessoa5: () =>
    mostarInfos(
      "img/João nicolas.jpg",
      "João Nicolas",
      "''Fala professor João, vou sentir sua falta, gostei muito de aprender com você, gostaria de receber o meu diploma da sua mão, mas não será possível, eu agradeço cada momento que passamos e cada ensinamento.Você é um professor muito bom, será difícil achar um professor de banco de dados como, agradeço tudo que me ensinou, nos vemos por aí algum dia.''",
    ),
  pessoa6: () =>
    mostarInfos(
      "img/Cezar.jpg",
      "César",
      "''Cê me ensinou que nenhuma tentativa é em vão, é sempre para que eu melhore, mesmo que o código já tenha quebrado 28 vezes com erro na mesma linha (que não tem nada escrito)''",
    ),
  pessoa7: () =>
    mostarInfos(
      "img/clara  (1) (1).jpg",
      "Clara Santana",
      "''Olá João, tudo bem?Passando para agradecer por aquilo que você pôde fazer por nós, muito obrigada, espero que sua jornada seja iluminada e que tudo dê certo, espero também que você tenha menos dor de cabeça daqui pra frente, você é uma pessoa incrível e vai fazer falta. Bjss da clarinha''",
    ),
  pessoa8: () =>
    mostarInfos(
      "img/Emerson.jpg",
      "Francisco Emerson",
      "''João, foi um prazer conhecer você. Você é uma pessoa incrível e, sem dúvida, um dos melhores professores que já passaram por esse técnico. Nem sei como teria sido sem a sua ajuda e dedicação.''",
    ),
  pessoa9: () =>
    mostarInfos(
      "img/Gabriel .jpg",
      "Gabriel",
      "''João, foi bom te conhecer por todo esse tempo, esses dois anos vc tem me ensinado muita coisa, e assim como vc disse, e eu gostaria muito q acontecesse, tomara q a gnt se encontre nesse mundo da ti no futuro, em toda minha vida, nunca tive professores tão fechamento q nem vc e o Luan, principalmente vc, q nunca faltou com compromisso e respeito com a gnt.De verdade, dá até um vazio saber q vc não vai mais estar ali no dia a dia, explicando, zoando com a gnt e ao mesmo tempo cobrando quando precisava. Vc conseguiu ser aquele tipo de professor q não fica só na matéria, mas q marca a vida da gnt, tá ligado? Ensinou não só sobre TI, mas tbm sobre responsabilidade, postura e correr atrás do q a gnt quer.Pode ter certeza q muita coisa q eu vou levar pra frente foi por sua causa, pelas dicas, pelas broncas e até pelas conversas mais tranquilas. Nem todo mundo tem a sorte de ter alguém assim no caminho, então sou grato de verdade por isso.Espero q essa nova fase seja ainda melhor pra vc, q dê tudo certo nos seus planos e q vc continue impactando a vida de outras pessoas do mesmo jeito q impactou a nossa. E se depender de mim, esse reencontro no mundo da TI vai acontecer sim, e vai ser brabo, Tmj.Obrigado por tudo mesmo, João. Vai fazer falta dms.''",
    ),
  pessoa10: () =>
    mostarInfos(
      "img/glledesson.jpg",
      "Glledesson",
      "''Iae, João! Espero que você tenha muito sucesso na sua nova jornada, que seja muito feliz. Te desejo tudo de bom nessa nova etapa e que ainda sobre um tempinho pra um joguinho à noite!''",
    ),
  pessoa11: () =>
    mostarInfos(
      "img/gui.jpg",
      "Guilherme Bueno",
      "''Fala João! Guilherme aqui, primeiramente quero agradecer a você por tudo que você nos  ensinou e o que você me ensinou também, com certeza você foi um dos melhores professor que já tive e sem duvidas a noticia que você vai sair e ingressar em uma nova carreira vai deixar nós triste, mas feliz de saber que você está indo atrás dos seus objetivos, então estou aqui para te desejar muito sucesso nessa nova etapa de vida/carreira, e é isso, Desejo tudo de bom para você João!''",
    ),
  pessoa12: () =>
    mostarInfos("img/kecio.jpg", "Kecio", "''🍎Maracujá Maracujá 🍎''"),
  pessoa13: () =>
    mostarInfos(
      "img/larisao.jpg",
      "Larissão",
      `João, quando você me falou que iria sair, fiquei muito feliz e muito triste ao mesmo tempo.

Feliz por você estar alcançando lugares mágicos na sua carreira, mas triste por perder um amigo que sempre estava aqui para conversar com a gente e deixar um clima de paz.

Às vezes a gente dá umas mancadas, mas saiba que te amamos muito.

Te desejo tudo de bom nessa sua nova caminhada e muita sabedoria. Você é foda!

Vamos sentir muita saudade, então vê se não esquece da gente, hein?

Queremos você na nossa formatura e no interclasse!

Te amamos.

Com carinho,
Larissão 🤍`,
    ),
  pessoa14: () =>
    mostarInfos(
      "img/Victor hugo.jpg",
      "Victor",
      "''Por mais q tenha muito pouco tempo que estou na escola, percebi que vc é um bom professor mesmo sendo jovem como nós. Deus abençoe sua trajetória e felicidades!!''",
    ),
  pessoa15: () =>
    mostarInfos(
      "img/xavier.jpg",
      "Matheus Xavier",
      "''Você é uma das pessoas mais incríveis que já conheci na vida. Para mim, você é mais do que um professor; é um exemplo de ser humano. Você é uma inspiração para mim, não só como profissional, mas como homem. Fico triste por nossa jornada juntos estar acabando, mas fico feliz porque ela aconteceu.''",
    ),
  pessoa16: () =>
    mostarInfos(
      "img/vini.jpg",
      "Vinicius Santos",
      "''João, você sempre brincava dizendo que o Luan iria embora, e na primeira vez que isso aconteceu eu fiquei muito mal. Tentei disfarçar com raiva, mas no fundo aquilo só mostrou o quanto vocês significam para mim. E isso não é à toa, passamos o dia inteiro no Salotti, convivendo juntos, aprendendo e vivendo momentos que vou levar comigo.Ter pessoas como você e o Luan na nossa vida é sinal de sorte. Pessoas que deixam o ambiente leve, que sabem brincar, ensinar e também se colocar no lugar dos outros são raras de encontrar.Parece ironia, mas depois de momentos difíceis sempre veio algo bom. O segundo ano estava sem professor, e então você apareceu. Depois o Valdiram saiu, e chegou o Luan. Como se a vida sempre desse um jeito de colocar as pessoas certas no caminho.Tenho certeza de que, onde quer que vocês estejam, serão muito felizes e continuarão marcando a vida de muitas pessoas, assim como marcaram a minha.''",
    ),
  pessoa17: () =>
    mostarInfos(
      "img/athos.jpg",
      "Athos",
      "''Obrigado João, sou grato pelos seus ensinamentos e você é muito resenha, tmj''",
    ),
  pessoa18: () =>
    mostarInfos(
      "img/rian silva.jpg",
      "Rian",
      "''Obrigado por tudo que me ensinou João, seus ensinamentos não foram apenas escolares, mas , sim pra vida, obrigado por ser meu professor de t.i!''",
    ),
  pessoa19: () =>
    mostarInfos(
      "img/isabelle (2).jpg",
      "Isabelle",
      "''Oi, João.Seja menos chato com os próximos alunos (se for dar aula) e sucesso na sua nova carreira e conquistas. Sei que ser professor não é fácil e mesmo assim você continuou dando aula pra gente, obrigado!(Ps:  você consegue ser resenha quando quer)''",
    ),
  pessoa20: () =>
    mostarInfos(
      "img/David .jpg",
      "David",
      "''E aí, João! Beleza? Venho por meio desta mensagem demonstrar o quanto sou grato por você. Agradeço por todos os momentos divertidos que nos proporcionou, repletos de risadas e felicidade. E devo dizer que você é muito mais do que apenas nosso professor. Você é um modelo que todos nós queremos seguir, uma inspiração de quem podemos nos tornar em um futuro próximo. Tenho certeza de que, com todo o apoio que você nos deu, eu pelo menos vou chegar um pouco perto disso kkkk.As palavras chegam a ser um meio até meio limitado para descrever o quanto você é importante para todos nós. E, mesmo que você esteja indo embora, acho injusto me sentir triste por isso, pois desejo toda a felicidade e prosperidade para você, mesmo que isso signifique sua partida.Nunca perca a sua essência, João. Continue sendo essa pessoa incrível e maravilhosa que você sempre foi!''",
    ),
  pessoa21: () =>
    mostarInfos(
      "img/João lucas.jpg",
      "João Lucas",
      "''Querido professor, João, agradeço pelo direcionamento que você deu neste campo chamado tecnologia da informação, um instrutor bom de uma area da complexa como essa deve sim ter reconhecimento, agradeço por todas as conversas risadas, e por toda aventura desses longos 2 anos, que la na frente possamos nos encontrar…''",
    ),
  pessoa22: () =>
    mostarInfos(
      "img/Kauan.jpg",
      "Kauan",
      "''queria agradecer por toda a sua dedicação e paciência. Suas aulas fazem diferença de verdade e me ajudaram muito a aprender e crescer. Obrigado por acreditar nos alunos e por todo o esforço que você coloca no que faz''",
    ),
  pessoa23: () =>
    mostarInfos(
      "img/luis.jpg",
      "Luis",
      "''João muito obrigado por tudo até agora, você foi um professor excepcional, não só um professor mas um amigo também, espero que sua vida seja próspera e que Deus o abençoe sempre''",
    ),
  pessoa24: () =>
    mostarInfos(
      "img/Vinícius sousa.jpg",
      "Vinicius Souza",
      "''Obrigado por tudo João, nos falamos pouco mas suas aulas significaram muito pra mim, boa sorte na sua nova jornada''",
    ),
  pessoa25: () =>
    mostarInfos(
      "img/Luan .jpg",
      "Luan Quaresma",
      "''bora trabalha que passarinho que não acorda cedo morre de sede''",
    ),
  pessoa26: () =>
    mostarInfos(
      "img/valadares.jpg",
      "Matheus Valadares",
      "''Despedidas são sempre estranhas, um misto de nostalgia pelo que passou e um desafio pelo o que está por vim. Mas prefiro não ver isso como um ponto final, e sim como uma mudança de capítulo. As histórias que vc viveu com a gente continuaram guardadas, as resenhas, as broncas que serviram como aprendizado para todos nós e a torcida pelo seu sucesso permanece exatamente a mesma.Obrigado por ter feito parte da minha jornada e de todos nós. Que o seu caminho continue sendo iluminado e abençoado por Deus.Ass: Valadares''",
    ),
  pessoa27: () =>
    mostarInfos(
      "img/Victor .jpg",
      "Victor Correa",
      "''Não sei se eu deveria fazer algo grande ou pequeno devido a proximidade que você tinha com toda a turma, mas decidi por divagar e tentar expor aqui algo que pensei que fosse legal de você ler. Obrigado por todos esses anos conosco(mesmo que em momentos breves), por ter ensinado toda a turma tudo e mais um pouco para que a gente pudesse hoje trilhar um caminho profissional de cabeça erguida, foi gratificante ter você como um professor mesmo que não nos falássemos tanto, não sei ao certo o que se passa em sua vida ou o que se passou ao certo, mas tenho fé de que as coisas seguiram bem seja aonde estiver, agradeço por tudo o que me ensinou e por todo este tempo conosco, espero que possamos nos encontrar de novo e que eu possa agradecer pessoalmente e de verdade todo o conhecimento que foi passado. Deus lhe abençoe seja aonde for, Bom dia, Boa tarde, Boa Noite, câmbio Desligo''",
    ),
  pessoa28: () =>
    mostarInfos(
      "img/emanu 2.jpg",
      "Emanu",
      "''Oi, João Nem acredito que o momento de você ir embora chegou. Tô te escrevendo isso com o coração apertado e com lágrimas que não consigo esconder, porque cada uma delas carrega um peso,a tristeza de ver meu professor favorito e um grande amigo partindo, mas também a felicidade de saber que você vai conquistar o mundo.Vou sentir uma falta absurda de quando você começa a cantar do nada, sentir falta das suas broncas, que a gente sempre sabe que é por cuidado, e das nossas risadas em tantos outros momentos. O jeito que você trata a gente e a forma como você nos compreende fala muito sobre quem você é, mas também fala muito sobre nós. É raro achar alguém que nos entenda de verdade e que tenha um espírito tão igual ao nosso.Se hoje eu sou apaixonada pela tecnologia, o mérito é todo seu. Mas o que eu guardo com mais força não é só a matéria, são os seus conselhos. Eles são como a minha chave primária pra vida, sabe? Aquilo que é único e que organiza todo o resto, e eu vou levar cada um deles comigo para sempre. Dói saber que não vou ter seu sorriso e seu abraço por perto agora, mas sei que encerramos esse ciclo para abrir outro em breve, onde a gente possa se reencontrar.Obrigada por ser esse homem incrível. Você não passa pela vida de ninguém sem deixar uma marca, e na minha, você é para todo o sempre o meu eterno professor favorito.''",
    ),
  pessoa29: () =>
    mostarInfos(
      "img/gusttavo.jpg",
      "Gusttavo",
      "''Professor João, confesso que é difícil sua despedida. Ao mesmo tempo que fico triste por saber que você não estará mais com a gente, também sinto uma enorme gratidão por tudo o que você fez por nós. Obrigado por cada aula, por cada explicação foda, por cada incentivo e por nunca desistir da gente, mesmo nos momentos mais difíceis. Você não foi apenas um professor, mas alguém que realmente fez diferença na nossa caminhada, tanto nos estudos quanto como pessoas. Te desejo muito sucesso nesse novo emprego, que você seja tão incrível lá quanto foi com a gente.''",
    ),
};

pessoas.addEventListener('click', (e) => {
    const botao = e.target.closest('button');
    if(!botao) return;

    const acaoDesejada = botao.dataset.action;

    if (acoes[acaoDesejada]) {
        acoes[acaoDesejada]()
    }
})



    function mostrarMensagem() {
        const conteinerMensagem = document.getElementById("conteinerMensagem");
        conteinerMensagem.classList.remove('modal-hidden')

       let texto = `
> Conectando ao sistema...
> Banco de dados carregado com sucesso.

mysql> SELECT nome, materia, impacto
FROM professores
WHERE marcaram = true;

+--------------------------+----------------+-------------------------------------------------+
| nome                     | materia        | impacto                                         |
+--------------------------+----------------+-------------------------------------------------+
| João Gabriel de Lucca    | Banco de Dados | Ensinou com leveza, virou amigo da turma.       |
| Luan                     | Front-End      | Acreditou em nós, incentivou nosso crescimento. |
+--------------------------+----------------+-------------------------------------------------+

2 rows in set.

mysql> INSERT INTO professores_que_nos_marcaram
(nome, materia, motivo)
VALUES
('Chegou e marcou nossa turma, ensinando com leveza,
 mostrando que código não é um bicho de sete cabeças e nos fazendo pensar por nós mesmos.');

Query OK, 1 row affected.

mysql> SELECT mensagem FROM turma
WHERE professor = 'João Gabriel de Lucca';

"O que a gente tem que aprender é a logica, porque o codigo até um macaco escreve."

mysql> SELECT legado FROM professores
WHERE nome = 'João Gabriel de Lucca';

"Quando faltava professor, apareceu alguém que virou referência."

mysql> COMMIT;

Query OK.
Mudanças salvas com sucesso.

mysql> SELECT status FROM memoria_da_turma;

+----------------------+
| status               |
+----------------------+
| Gratidão eterna.     |
+----------------------+
`;

  let i = 0;
  let velocidade = 50;

  let textoTerminal = document.getElementById("textoTerminal");
  let terminalBox = document.getElementById("terminal");

  textoTerminal.innerHTML = "";

  function digitar() {
    if (i < texto.length) {
      textoTerminal.textContent += texto.charAt(i);

      terminalBox.scrollTop = terminalBox.scrollHeight;

      i++;
      setTimeout(digitar, velocidade);
    }
  }

  digitar();

    const btnFecharT = document.getElementById("btnFecharT")

    btnFecharT.addEventListener('click', () => {
        conteinerMensagem.classList.add('modal-hidden');
    });

    }

`caso o texto do terminal não estaja ficando bom e ficando errado varias versões diferentess: 
Versão padrão: 
mysql> INSERT INTO professores_que_nos_marcaram 
(nome, materia, motivo)
VALUES 
('João Gabriel de Lucca', 'Banco de Dados', 
'Porque ensinou com paciência, entendeu nossas dificuldades e marcou nossa turma.');

mysql> SELECT * FROM professores_que_nos_marcaram;

+--------------------------+----------------+--------------------------------------------------------------+
| nome                     | materia        | motivo                                                       |
+--------------------------+----------------+--------------------------------------------------------------+
| Luan                     | Front-End      | Porque acreditou no nosso potencial e deixou o código leve. |
| João Gabriel de Lucca    | Banco de Dados | Porque nos entendeu, teve paciência e ensinou de verdade.   |
+--------------------------+----------------+--------------------------------------------------------------+

mysql> COMMIT;
Query OK. Memória salva com sucesso.
mysql> SELECT mensagem FROM turma WHERE professor = 'João Gabriel de Lucca';

"Obrigado por transformar Banco de Dados em algo mais leve, humano e possível para todos nós."

versão tela dividida:

mysql> INSERT INTO professores_que_nos_marcaram 
(nome, materia, motivo)
VALUES 
('João Gabriel de Lucca', 'Banco de Dados', 
'Porque ensinou com paciência, entendeu nossas dificuldades e marcou nossa turma.');

mysql> SELECT * FROM professores_que_nos_marcaram;

+--------------------------+----------------+--------------------------------------------------------------+
| nome                     | materia        | motivo                                                       |
+--------------------------+----------------+--------------------------------------------------------------+
| Luan                     | Front-End      | Porque acreditou no nosso potencial e deixou o código leve.  |
| João Gabriel de Lucca    | Banco de Dados | Porque nos entendeu, teve paciência e ensinou de verdade.    |
+--------------------------+----------------+--------------------------------------------------------------+

mysql> COMMIT;
Query OK. Memória salva com sucesso.
mysql> SELECT mensagem FROM turma WHERE professor = 'João Gabriel de Lucca';

"Obrigado por transformar Banco de Dados em algo mais leve, humano e possível para todos nós."

`