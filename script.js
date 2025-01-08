document.addEventListener('DOMContentLoaded', () => {
    // Modal Pedir Ajuda
    const btnPedirAjuda = document.getElementById('btn-pedir-ajuda');
    const modalAjuda = document.getElementById('modal-ajuda');
    const closeAjuda = document.getElementById('close-ajuda');

    btnPedirAjuda.addEventListener('click', () => {
        modalAjuda.style.display = 'flex';
    });

    closeAjuda.addEventListener('click', () => {
        modalAjuda.style.display = 'none';
    });

    // Modal Fale com o Criador
    const btnFaleCriador = document.getElementById('btn-fale-criador');
    const modalCriador = document.getElementById('modal-criador');
    const closeCriador = document.getElementById('close-criador');

    btnFaleCriador.addEventListener('click', () => {
        modalCriador.style.display = 'flex';
    });

    closeCriador.addEventListener('click', () => {
        modalCriador.style.display = 'none';
    });

    // Feedback para WhatsApp
    const btnFeedback = document.getElementById('btn-feedback');
    btnFeedback.addEventListener('click', () => {
        const mensagem = prompt('Escreva sua mensagem de feedback:');
        if (mensagem) {
            const whatsappURL = `https://api.whatsapp.com/send?phone=5561994119277&text=${encodeURIComponent(mensagem)}`;
            window.open(whatsappURL, '_blank');
        }
    });

    // Modais dos Cards
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal'); // Modal dos cards
    const modalTexto = document.getElementById('modal-texto');
    const closeModal = document.getElementById('close-modal');

    // Função para abrir o modal dos cards
    function abrirModal(sentimento) {
        let conteudo = '';
        if (sentimento === 'triste') {
            conteudo = `
                <h2>Me sinto triste</h2>
                <p>A tristeza faz parte da vida. Permita-se sentir, mas não se prenda a ela.</p>
                <p>Dicas: Ouça uma música relaxante, converse com alguém ou faça uma caminhada.</p>
            `;
        } else if (sentimento === 'alegre') {
            conteudo = `
                <h2>Me sinto alegre</h2>
                <p>Que ótimo que você está feliz! Compartilhe essa energia com os outros.</p>
                <p>Dicas: Faça algo criativo ou ajude alguém para espalhar positividade.</p>
            `;
        } else if (sentimento === 'instavel') {
            conteudo = `
                <h2>Me sinto instável</h2>
                <p>É normal se sentir assim às vezes. Tente focar no momento presente.</p>
                <p>Dicas: Pratique respiração profunda ou meditação para estabilizar suas emoções.</p>
            `;
        } else if (sentimento === 'desafiador') {
            conteudo = `
                <h2>Sinto que hoje será desafiador</h2>
                <p>Desafios nos tornam mais fortes. Dê um passo de cada vez.</p>
                <p>Dicas: Planeje seu dia e celebre pequenas vitórias.</p>
            `;
        } else if (sentimento === 'incapaz') {
            conteudo = `
                <h2>Não sou capaz</h2>
                <p>Você é mais forte do que imagina. Todos têm momentos de dúvida.</p>
                <p>Dicas: Lembre-se de suas conquistas passadas e confie no seu potencial.</p>
            `;
        } else if (sentimento === 'nao-amado') {
            conteudo = `
                <h2>Não sou amado</h2>
                <p>Você é importante e valioso. Às vezes, é difícil perceber o amor ao nosso redor.</p>
                <p>Dicas: Conecte-se com amigos ou familiares e pratique o autocuidado.</p>
            `;
        }

        modalTexto.innerHTML = conteudo;
        modal.style.display = 'flex';
    }

    // Adiciona evento de clique nos cards
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const sentimento = card.getAttribute('data-sentimento');
            abrirModal(sentimento);
        });
    });

    // Fecha o modal dos cards
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fecha qualquer modal ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
        if (event.target === modalAjuda) {
            modalAjuda.style.display = 'none';
        }
        if (event.target === modalCriador) {
            modalCriador.style.display = 'none';
        }
    });
});
