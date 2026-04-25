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



    function mostrarMensagem() {
        const conteinerMensagem = document.getElementById("conteinerMensagem");
        conteinerMensagem.classList.remove('modal-hidden')

        let texto = `
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

    let i = 0;
    let velocidade = 50
    let terminal = document.getElementById("textoTerminal")
    terminal.innerHTML = ""
    
    function digitar() {
    if(i < texto.length) {
        terminal.textContent += texto.charAt(i)
        i++
        setTimeout(digitar, velocidade)
    }

    }
    digitar()

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