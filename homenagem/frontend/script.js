const pessoas = document.getElementById("pessoas");

const InfConteiner = document.getElementById("modal")
const nomeTxt = document.getElementById("nome-aluno")
const detalheTxt = document.getElementById("detalhe-aluno")
const imgAluno = document.getElementById("aluno-img")

const mostarInfos = (caminhoImg, nome , detalhes) => {
    imgAluno.src = caminhoImg
    nomeTxt.textContent = nome
    detalheTxt.textContent = detalhes
    InfConteiner.classList.remove('hidden');
    InfConteiner.classList.add('modal')
}
const fechar = document.getElementById("fechar");

fechar.addEventListener('click', () => {
    InfConteiner.classList.add('hidden')
    InfConteiner.classList.remove('modal')
})

const acoes = {
    pessoa1: () => mostarInfos("img/alunos.jpg","Vinicius Santos", "Um aluno"),
    pessoa2: () => mostarInfos("img/alunos.jpg","Vinicius Santos Camelo", "Outro aluno"),
    pessoa3: () => mostarInfos("img/alunos.jpg","Vinicius", "-1 aluno"),
    pessoa4: () => mostarInfos("img/alunos.jpg","Vinicius 2", "Não sei o que colocar"),
    pessoa5: () => mostarInfos("img/alunos.jpg","Vinicus 3 o inimigo agora é outro", "acho que você sabe o que fazer"),
    pessoa6: () => mostarInfos("img/alunos.jpg","Vinicius 4 a volta dos que não se foram", "PC ta morrendo"),
    pessoa7: () => mostarInfos("img/alunos.jpg","Vinciussss","asfas"),
    pessoa8: () => mostarInfos("img/alunos.jpg","nbjsdngfs", "sdjndçj")
}

pessoas.addEventListener('click', (e) => {
    const botao = e.target.closest('button');
    if(!botao) return;

    const acaoDesejada = botao.dataset.action;

    if (acoes[acaoDesejada]) {
        acoes[acaoDesejada]()
    }
})