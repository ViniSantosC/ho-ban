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
      "img/clara  (1).jpg",
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
      "''Fala João! Guilherme aqui, primeiramente quero agradecer a você por tudo que você nos  ensinou e o que você me ensinou também, com certeza você foi um dos melhores professor que já tive e sem duvidas a noticia que você vai sair e ingressar em uma nova carreira vai deixar nós triste, mas feliz de que saber de você está indo atrás dos seus objetivos, então estou aqui para te desejar muito sucesso nessa nova etapa de vida/carreira, e é isso, Desejo tudo de bom para você João!''",
    ),
  pessoa12: () =>
    mostarInfos("img/kecio.jpg", "Kecio", "''🍎Maracujá Maracujá 🍎''"),
  pessoa13: () =>
    mostarInfos(
      "img/larisão .jpg",
      "Larisão",
      "''João, quando você me falou que iria sair, fiquei muito feliz e muito triste ao mesmo tempo. Feliz por você estar alcançando lugares mágicos na sua carreira, mas triste por perder um amigo que sempre estava aqui para conversar com a gente e deixar um clima de paz.Às vezes a gente dá umas mancadas, mas saiba que te amamos muito! Te desejo tudo de bom nessa sua nova caminhada e muita sabedoria. Você é foda! Vamos sentir muita saudade, então vê se não esquece da gente, hein? Queremos você na nossa formatura e no interclasse!Te amamos. Com carinho, Larissão.''",
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
  pessoa16: () => mostarInfos("img/vini.jpg", "Vinicius Santos", "''João, você sempre brincava dizendo que o Luan iria embora, e na primeira vez que isso aconteceu eu fiquei muito mal. Tentei disfarçar com raiva, mas no fundo aquilo só mostrou o quanto vocês significam para mim. E isso não é à toa, passamos o dia inteiro no Salotti, convivendo juntos, aprendendo e vivendo momentos que vou levar comigo.Ter pessoas como você e o Luan na nossa vida é sinal de sorte. Pessoas que deixam o ambiente leve, que sabem brincar, ensinar e também se colocar no lugar dos outros são raras de encontrar.Parece ironia, mas depois de momentos difíceis sempre veio algo bom. O segundo ano estava sem professor, e então você apareceu. Depois o Valdiram saiu, e chegou o Luan. Como se a vida sempre desse um jeito de colocar as pessoas certas no caminho.Tenho certeza de que, onde quer que vocês estejam, serão muito felizes e continuarão marcando a vida de muitas pessoas, assim como marcaram a minha.''"),
  pessoa17: () => mostarInfos("img/alunos.jpg", "nbjsdngfs", "sdjndçj"),
  pessoa18: () => mostarInfos("img/alunos.jpg", "nbjsdngfs", "sdjndçj"),
  pessoa19: () => mostarInfos("img/alunos.jpg", "nbjsdngfs", "sdjndçj"),
  pessoa20: () => mostarInfos("img/alunos.jpg", "nbjsdngfs", "sdjndçj"),
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

"Obrigado por ensinar com paciência, acreditar na nossa turma e provar que aprender pode ser leve."

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
  let velocidade = 30;

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