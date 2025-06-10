var produtos = [
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        titulo: "nike air max",
        descricao: "Eleve seu estilo com o clássico reinventado. Conforto supremo encontra design inovador",
        preco: 499.99,
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        titulo: "fila recovry",
        descricao: "conforto e desempenho",
        preco: 399.90,
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        titulo: "adidas Runfalcon 5",
        descricao: "Da pista à esteira, corra em busca dos seus objetivos com este tênis de corrida adidas.",
        preco: 371.91,
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        titulo: "fila server branco marinho e vermelho",
        descricao: "Supere os seus desafios! O Tênis Fila Serve é perfeito para acompanhar a sua rotina de treino",
        preco: 29.99,
    },
    {
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfoZtCnNC6hfeO4bSBfG7MryO0v4X-KXDKcw&s",
        titulo: "olympikus",
        descricao: "O Tênis Olympikus Clic foi desenvolvido para oferecer estilo, conforto",
        preco: 499.99,
    },
    
]

var divProdutos = document.querySelector(".produtos")

for(var i = 0; i < produtos.length; i++) {
    divProdutos.innerHTML += `<div class="card">
                <img src="${produtos[i].imagem}"#">
                <div class="content">
                    <div class="title">
                        <h2>${produtos[i].titulo}</h2>
                        <p>${produtos[i].descricao}</p>
                    </div>
                    <div class="btns">
                        <p>${produtos[i].preco}</p>
                        <button>Comprar agora</button>
                    </div>
                    <div class="freight">
                        <i class="fa-solid fa-truck-fast"></i>
                        <p>Frete grátis para todo o Brasil</p>
                    </div>
                </div>  
            </div>`
}