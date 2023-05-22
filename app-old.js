const http = require('http');

http.createServer((req, res) => {

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});
    
    // res.write('id; nombre\n');
    // res.write('1; Chi\n');
    // res.write('2; Charito\n');
    // res.write('3; Miki\n');
    // res.write('4; Toby\n');
    // res.end();

    res.write('Hola mundo');
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto', 8080)