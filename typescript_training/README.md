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
"target": "es5",
"module": "commonjs",
"noEmitOnError": true,
```

- Para compilar:

```
tsc
node .\custumer.js
```
