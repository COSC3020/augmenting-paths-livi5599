# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
start and end node are the same, it should return a list containing only this
node. If there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

-----

The worst-case complexity is big $\Theta(v^2)$, where v is the number of vertices in the graph.  This comes from the DFS function, which has a complexity of big $\Theta(v^2)$ that comes from a for loop and a line that filters from the unvisited array.  I included comments in my code that further explains how I got my answer.

-----

I received help from Ali, the "Depth-First Search Pseudocode" lecture slide, and ChatGPT.  Originally, I did not use a depth-first search in my implementation, and Ali was the one who told me I need to implement that.  I used the lecture slide mentioned as a guide for implementing the DFS function.  ChatGPT helped me with certain debugging.  For example, as shown in a previous commit, I iterated over all of the keys of the adjacency list instead of just the neighbors of the current vertex, and ChatGPT pointed that out, leading me to know what needed fixing.

I started this assignment last semester.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models.  All of the work is my own, except where stated otherwise.  I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
