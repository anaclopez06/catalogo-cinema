const grade = document.querySelector('.grid');
const campoBusca = document.querySelector('#busca');
const contador = document.querySelector('#contador');

function mostrarData(data) {
  const partes = data.split('-');
  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

function montarCards(lista) {
  grade.innerHTML = '';
  contador.textContent = `${lista.length} resultado(s)`;

  if (lista.length === 0) {
    grade.innerHTML = '<p class="sem-resultado">Nenhum nome encontrado. Tente outra busca.</p>';
    return;
  }

  lista.forEach((pessoa) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${pessoa.foto}" alt="Foto de ${pessoa.nome}" loading="lazy">
      <div class="info-card">
        <h2>${pessoa.nome}</h2>
        <p><strong>País:</strong> ${pessoa.pais}</p>
        <p><strong>Nascimento:</strong> ${mostrarData(pessoa.nascimento)}</p>
      </div>
    `;
    grade.appendChild(card);
  });
}

function filtrarAtores() {
  const termo = campoBusca.value.trim().toLowerCase();
  const resultado = atores.filter((pessoa) =>
    pessoa.nome.toLowerCase().includes(termo)
  );
  montarCards(resultado);
}

montarCards(atores);
