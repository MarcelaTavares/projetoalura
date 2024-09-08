function pesquisar() {
    // 1. Obtém o valor digitado no campo de pesquisa
    let energetico = document.getElementById("energetico").value;

  // 2. Procura o objeto correspondente no array 'dados' (definido em outro arquivo)
    let dado = dados.find(d => d.titulo.toLowerCase() === energetico.toLowerCase());
// 3. Verifica se um objeto foi encontrado
    if (dado) {
        // Função para gerar o HTML da nova página // 4. Se encontrado, cria uma função para gerar o HTML da nova página
        function gerarHTML(dado) {
            // 5. Retorna uma string contendo o HTML da nova página,
             //    preenchendo os dados dinamicamente
            return `
                <!DOCTYPE html>
                <html>
                <head>
                 <link rel="stylesheet" href="novaguia.css"> <!--estou chamando nosso CSS-->
                    <title>${dado.titulo}</title>
                </head>
                <body>
                    <h1>${dado.titulo}</h1>
                    <p>${dado.review}</p>
                    <p>${dado.descricao}</p>
                    <a href="${dado.link}">Acompanhe os Reviews</a>
                </body>
                </html>
            `;
        }

        // Abre uma nova janela e insere o HTML gerado
        let novaJanela = window.open();
        novaJanela.document.write(gerarHTML(dado));
    } else {
        // 7. Se não encontrar o objeto, exibe um alerta
        alert("Por favor, digite usando os exemplos a baixo.");
    }
    


}


