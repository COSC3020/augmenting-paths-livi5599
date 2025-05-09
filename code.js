function augmentingPath(graph, start, end) {
    if (start == end) {
        return [start];
    }
    if (!(start in graph) || !(end in graph)) {
        return [];
    }
    var unvisited = [];
    var path = [];
    path.push(start);
    let keys = Object.keys(graph);
    console.log("keys = ", keys);
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] == start) {
            continue;
        }
        else {
            unvisited.push(keys[i]);
        }
    }
    console.log("unvisited = ", unvisited);

    let result = DFS(graph, path, unvisited, start, end);
    return result ? result : [];
}

function DFS(graph, path, unvisited, start, end) {
    if (start == end) {
        return path;
    }
    for (let neighbor of Object.keys(graph[start])) {
        if (graph[start][neighbor] > 0 && unvisited.includes(neighbor)) {
            unvisited = unvisited.filter(n => n !== neighbor);
            path.push(neighbor);
            let result = DFS(graph, path, unvisited, neighbor, end);
            if (result) return result;
            path.pop();
        }
    }
    return null;
}
