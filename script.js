var listaProdutos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFymGnH3ttCXKgCoj6XXm0dtdh5lM2GtYeDg&usqp=CAU",
  "https://i.ytimg.com/vi/mdjyOTWdLTc/maxresdefault.jpg",
  "https://static.sweetcare.pt/img/sld/v-636869095296568518/rene-furterer-karite-oleo-nutritivo-sld-3276.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwBmZec7ILQNd9QwYBICcmnNihhr5LP6zuQ&usqp=CAU.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW9IQQohCxt1tMOdfh4QdC1vlr2hNQwsZnuA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk7n1xFa3ZJMjqAZNzuHmXYFFNqgiBBf6viw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMUK0DZj6Zel_9UKnEi1yMmYoCJt11e20zug&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8uZn00baiYC4lvU2ZI72PEUkVNqtTVb9bSA&usqp=CAU"
];

for (var i = 0; i < listaProdutos.length; i++) {
  document.write("<img src=" + listaProdutos[i] + ">");
}

function adicionarProduto() {
  var produtoPreferido = document.getElementById("produto").value;
  var elementoProdutoPreferido = "<img src=" + produtoPreferido + ">";
  var listaProdutos = document.getElementById("listaProdutos");
  listaProdutos.innerHTML = elementoProdutoPreferido;
}

console.log(produtoPreferido);
console.log(elementoProdutoPreferido);
console.log(listaProdutos);