import {mkdirSync,copyFileSync} from 'node:fs';
mkdirSync('dist',{recursive:true});
for(const file of ['index.html','styles.css','app.js','favicon.svg','demo.html'])copyFileSync(file,'dist/'+file);
console.log('Built static Salon Desk marketing website and interactive demo.');
