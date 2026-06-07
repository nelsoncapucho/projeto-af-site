/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: O Cookie - Loja de Cookies
Aluno: Nelson Capucho Neto - RA: 252079
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/

// =============================================
// 1 - BOTÃO VOLTAR AO TOPO
// =============================================
const btnTopo = document.querySelector('#btnTopo');

if (btnTopo) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            btnTopo.classList.add('mostrar');
        } else {
            btnTopo.classList.remove('mostrar');
        }
    });

    btnTopo.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =============================================
// 2 - VALIDAÇÃO DO FORMULÁRIO DE CONTATO
// =============================================
const formulario = document.querySelector('#formContato');

if (formulario) {
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.querySelector('#nome').value.trim();
        const email = document.querySelector('#email').value.trim();
        const assunto = document.querySelector('#assunto').value;
        const mensagem = document.querySelector('#mensagem').value.trim();

        if (nome === '' || email === '' || assunto === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos obrigatórios antes de enviar.');
            return;
        }

        // Validação básica de e-mail
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        alert('Mensagem enviada com sucesso! Em breve retornaremos o contato. 🍪');
        formulario.reset();
    });
}

// =============================================
// 3 - FILTROS DA GALERIA
// =============================================
const btnsFiltro = document.querySelectorAll('.btn-filtro');
const itensGaleria = document.querySelectorAll('.item-galeria');

if (btnsFiltro.length > 0) {
    btnsFiltro.forEach(function (btn) {
        btn.addEventListener('click', function () {

            // Remove "ativo" de todos os botões
            btnsFiltro.forEach(function (b) {
                b.classList.remove('ativo');
            });

            // Marca o botão clicado como ativo
            btn.classList.add('ativo');

            const filtro = btn.getAttribute('data-filtro');

            itensGaleria.forEach(function (item) {
                if (filtro === 'todos') {
                    item.classList.remove('oculto');
                } else if (item.classList.contains(filtro)) {
                    item.classList.remove('oculto');
                } else {
                    item.classList.add('oculto');
                }
            });
        });
    });
}

// =============================================
// 4 - DESTAQUE VISUAL NOS CARDS (DOM)
// =============================================
const cards = document.querySelectorAll('.card');

cards.forEach(function (card) {
    card.addEventListener('mouseenter', function () {
        card.classList.add('card-destaque-js');
    });

    card.addEventListener('mouseleave', function () {
        card.classList.remove('card-destaque-js');
    });
});

// =============================================
// 5 - NAVBAR MUDA DE COR AO ROLAR
// =============================================
const navbar = document.querySelector('#navbar');

if (navbar) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(44, 24, 16, 1)';
        } else {
            navbar.style.backgroundColor = 'rgba(44, 24, 16, 0.96)';
        }
    });
}
