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