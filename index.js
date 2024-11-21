import http from 'node:http';

const port = process.env.PORT || 8080;

// Simulate an expensive operation (e.g., calculating Fibonacci)
function expensiveOperation(n) {
  if (n <= 1) return n;
  return expensiveOperation(n - 1) + expensiveOperation(n - 2);
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/example') {
    // Simulate expensive computation
    const input = 40;
    const result = expensiveOperation(input);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Expensive computation complete!', result }));
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Perf test!\n');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});