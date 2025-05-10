function augmentingPath(graph, start, end) { //O(V*E)
    if (start == end) { //O(1)
        return [start];
    }
    if (!(start in graph) || !(end in graph)) { //O(1)
        return [];
    }
    var unvisited = []; //O(1)
    var path = []; //O(1)
    path.push(start); //O(1)
    let keys = Object.keys(graph); //O(V)
    for (let i = 0; i < keys.length; i++) { //runs keys v length times -> O(V)
        if (keys[i] == start) { //O(1)
            continue;
        }
        else {
            unvisited.push(keys[i]); //O(1)
        }
    }

    let result = DFS(graph, path, unvisited, start, end); //O(V*E)
    return result ? result : []; //O(1)
}

function DFS(graph, path, unvisited, start, end) { //O(V*E)
    if (start == end) { //O(1)
        return path;
    }
    for (let neighbor of Object.keys(graph[start])) { //O(E)
        if (graph[start][neighbor] > 0 && unvisited.includes(neighbor)) {
            unvisited = unvisited.filter(n => n !== neighbor); //O(V)
            path.push(neighbor); //O(1)
            let result = DFS(graph, path, unvisited, neighbor, end); //O(V)
            if (result) return result; //O(1)
            path.pop(); //O(1)
        }
    }
    return null; //O(1)
}
