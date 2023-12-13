//WHAT IS A GRAPH?


// A graph is a data structure made up of nodes or verticles and edges or the connection between nodes.

// HOW CAN WE REPRESENT A GRAPH IN CODE?

const findAdjacent = function(node){
    const verticles = ['A', 'B', 'C', 'D', 'E'];

    const edges = [
    ['A', 'B'],
    ['A', 'D'],
    ['B', 'C'],
    ['C', 'D'],
    ['C', 'E'],
    ['D', 'E']
    ]

    const adjacentNodes = [];

    for (let edge of edges){
        const nodeIdx = edge.indexOf(node);
        if (nodeIdx > -1){
            adjacentNode = nodeIdx === 0 ? edge[1] : edge[0];

            adjacentNodes.push(adjacentNode)
        }

       


    }
    return adjacentNodes;
}

console.log(findAdjacent('A')); // Output: ['B', 'D']