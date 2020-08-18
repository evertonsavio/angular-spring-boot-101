# TypeScript é incrível!

### Rodando o código:

```
tsc --noEmitOnError .\customer.ts
node .\customer.js
rm Customer.js
tsc --target ES5 --noEmitOnError .\customer.ts
```

### Criando uma tsconfig.json file

```
tsc --init
```

- Adicionar as configuracoes:

```
"target": "es5" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
    "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    "noEmitOnError": true,
```

- Para compilar:

```
tsc
node .\custumer.js
```
