# Roll up Starter app for web

Sample project to bundle your js in IIFE format and use it in browser.

## Building js project
```bash
yarn install
yarn run build
```
This will package your js files from src folder and put it in dist.

## Running project
In Development Mode with http-server and rollup watch support
```bash
yarn run dev
```
For Production
```bash
yarn run build
```

## Rollup Config file
```js
export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'mybundle',
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ]
};
```
If you put following declaration in rollup.config.js then faker will be treated as external and will not be loaded with your library
```js
external: ['faker']
```
## Usage in browser script tags
IIFE bundle will be available with name mybundle and used as follows in index.html

```html
<script src="bundle.js"></script>
<script type="text/javascript">
    function foo(){
        mybundle.sayHello();
    }
    function bar(){
        mybundle.sayHi();
    }
    function print(){
        document.getElementById('result').innerHTML = mybundle.printDemo();
    }
</script>
```

