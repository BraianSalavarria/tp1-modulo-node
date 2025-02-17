import fs from 'fs'

fs.writeFileSync('example.txt','hola node.js')
console.log(fs.readFileSync('example.txt','utf8'))
