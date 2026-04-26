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
      "img/pedro viana.jpg",
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
      "img/lucas.jpg",
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
      "img/alunos.jpg",
      "Vinicius 4 a volta dos que não se foram",
      "PC ta morrendo",
    ),
  pessoa7: () => mostarInfos("img/alunos.jpg", "Vinciussss", "asfas"),
  pessoa8: () => mostarInfos("img/alunos.jpg", "nbjsdngfs", "sdjndçj"),
};

pessoas.addEventListener('click', (e) => {
    const botao = e.target.closest('button');
    if(!botao) return;

    const acaoDesejada = botao.dataset.action;

    if (acoes[acaoDesejada]) {
        acoes[acaoDesejada]()
    }
})