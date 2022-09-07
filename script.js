const url = 'https://entregavel.polijrinternal.com/produtos';
  
  fetch(url)
  .then(response => response.json() )
  .then(data => {
    console.log(data)
    
    for(let valor of data) {
      document.querySelector('.produtos').innerHTML += `
      <div class="card mx-2 col" >
      <img src="${valor.foto}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${valor.nome}</h5>
        <p class="card-intensidade">Intensidade: ${valor.intensidade}</p>
        <p class="card-preco">R$ ${valor.preco}</p>
        <p class="card-descricao">${valor.descricao}</p>
      </div>
    </div>
      `
    }
  })