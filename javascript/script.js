function copiarEmail() {
    const email = 'rafaelsilva.orizona@gmail.com';
    const inputTemp = document.createElement('input');
    inputTemp.value = email;
    document.body.appendChild(inputTemp);
    inputTemp.select();
    document.execCommand('copy');
    document.body.removeChild(inputTemp);
    alert('E-mail copiado para a área de transferência!');
}

let switchState = false; // Estado inicial do switch

function alternarProjetos() {
    const slider = document.querySelector('.switch-slider');
    const conteudo1 = document.getElementById('conteudo1');
    const conteudo2 = document.getElementById('conteudo2');

    // Alterna o estado do switch
    switchState = !switchState;

    if (switchState) {
        // Mostrar "Projetos em Equipe"
        slider.style.transform = 'translateX(100%)';
        conteudo1.classList.remove('ativo');
        conteudo2.classList.add('ativo');
    } else {
        // Mostrar "Meus Projetos"
        slider.style.transform = 'translateX(0)';
        conteudo1.classList.add('ativo');
        conteudo2.classList.remove('ativo');
    }
}
