# Jak's Tech — Birthday Site

A Node.js + TypeScript site built for Jak's 26th birthday. Express serves two
pages: a fully animated version and a quick, simple one.

## Run it

```bash
npm install
npm run build
npm start
```

Then open:
- Fancy version → http://localhost:3000/
- Simple version → http://localhost:3000/simple

## Dev mode (no build step needed)

```bash
npm install
npm run dev
```

## Project structure

```
src/server.ts     -> Express + TypeScript server
public/index.html -> the fancy animated page (terminal boot + speedometer)
public/simple.html -> the simple page
tsconfig.json     -> TypeScript config
package.json      -> scripts & dependencies
```

`npm run build` compiles `src/` to `dist/` with `tsc`. `npm start` runs the
compiled JS. Port defaults to 3000, override with the `PORT` env var.
