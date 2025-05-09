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

    let result = DFS(graph, keys, path, unvisited, start, end);
    return result ? result : [];
}

function DFS(g, keys, path, unvisited, s, e) {
    if (s == e) {
        return path;
    }
    for (let key of keys) {
        unvisited = unvisited.filter(k => k !== key);
        //console.log("unvisited after filter = ", unvisited);
        console.log("Object.keys(g[", key, "]) = ", Object.keys(g[key]));
        for (let neighbor of Object.keys(g[key])) {
            console.log("neighbor = ", neighbor);
            if (g[key][neighbor] > 0 && unvisited.includes(neighbor)) {
                console.log("found a visitable neighbor!");
                unvisited = unvisited.filter(k => k !== neighbor);
                console.log("unvisited after filtering out neighbor = ", unvisited);
                path.push(neighbor);
                console.log("updated path = ", path);
                if (DFS(g, keys, path, unvisited, neighbor, e)) {
                    return path;
                }
                path.pop();
            }
        }
    }
    return null;
}
