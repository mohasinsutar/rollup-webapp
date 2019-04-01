# Roll up Starter app for web

Sample project to bundle your js in IIFE format and use it in browser.

## Building js project
```bash
yarn run build
```
This will package your js files from src folder and put it in dist.

## Rollup Config file
```js
input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'mybundle',
    sourcemap: true,
  }
```
## Usage in browser script tags
IIFE bundle will be available with name mybundle and used as follows in index.html

```html
<script src="dist/bundle.js">
    </script>
    <script type="text/javascript">
        function foo(){
            mybundle.sayHello();
        }
        function bar(){
            mybundle.sayHi();
        }
    </script>
```

