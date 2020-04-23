const _ = require('underscore');

const vertices = ['1', '2', '3', '4', '5'];
const arestas = [
  ['1', '2', 2],
  ['1', '4', 3],
  ['2', '3', 1],
  ['2', '4', 5],
  ['2', '5', 4],
  ['3', '5', 7],
  ['4', '5', 5]
];

function kruskal(vertices, arestas) {
  const agm = [];

  let floresta = _.map(vertices, function (vertice) {
    return [vertice];
  });

  const arestasOrdenadas = _.sortBy(arestas, function (aresta) {
    return -aresta[2];
  });

  while (floresta.length > 1) {
    const aresta = arestasOrdenadas.pop();
    const vertice1 = aresta[0];
    const vertice2 = aresta[1];

    const arvore1 = _.filter(floresta, function (arvore) {
      return _.include(arvore, vertice1);
    });

    const arvore2 = _.filter(floresta, function (arvore) {
      return _.include(arvore, vertice2);
    });

    if (arvore1 != arvore2) {
      floresta = _.without(floresta, arvore1[0], arvore2[0]);
      floresta.push(_.union(arvore1[0], arvore2[0]));
      agm.push(aresta);
    }
  }
  return agm;
}

console.log(kruskal(vertices, arestas));
