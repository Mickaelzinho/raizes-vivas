'use strict';
function alternarTema() {
  const claro = document.body.classList.toggle('claro');
  const botao = document.getElementById('temaBtn');
  botao.innerHTML = claro ? '☾ <span>Modo escuro</span>' : '☼ <span>Modo claro</span>';
  botao.setAttribute('aria-label', claro ? 'Ativar modo escuro' : 'Ativar modo claro');
  try { localStorage.setItem('raizes-tema-claro', String(claro)); } catch (erro) {}
}
function alternarDetalhes(id, botao) {
  const painel = document.getElementById(id);
  if (!painel) return;
  const abrir = painel.hidden;
  painel.hidden = !abrir;
  botao.setAttribute('aria-expanded', String(abrir));
}
function responder(opcao, botao) {
  const area = botao.closest('.quiz-box');
  const botoes = area.querySelectorAll('.opcoes button');
  if ([...botoes].some(item => item.disabled)) return;
  botoes.forEach((item, indice) => {
    item.disabled = true;
    if (indice === 1) item.classList.add('certa');
  });
  if (opcao !== 1) botao.classList.add('errada');
  const feedback = document.getElementById('quiz-feedback');
  feedback.textContent = opcao === 1 ? '✓ Correto! O território reúne memória, cultura, direitos e modos de vida.' : 'Não foi dessa vez. A resposta correta é B: o território reúne cultura, ancestralidade, direitos e modos de vida.';
}
function reiniciarQuiz() {
  document.querySelectorAll('.opcoes button').forEach(botao => {
    botao.disabled = false;
    botao.classList.remove('certa', 'errada');
  });
  document.getElementById('quiz-feedback').textContent = '';
}
function alternarMenu() {
  const menu = document.getElementById('menu-links');
  const botao = document.querySelector('.menu-toggle');
  const aberto = menu.classList.toggle('aberto');
  botao.setAttribute('aria-expanded', String(aberto));
  botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  botao.textContent = aberto ? '✕' : '☰';
}
document.querySelectorAll('#menu-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-links').classList.remove('aberto');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
    document.querySelector('.menu-toggle').textContent = '☰';
  });
});
try { if (localStorage.getItem('raizes-tema-claro') === 'true') alternarTema(); } catch (erro) {}
