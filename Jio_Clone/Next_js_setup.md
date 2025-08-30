### Create Next.js + tailwind v4 + Shadcn

## Next.js Setup -> install without tailwind
1. npx create-next-app@latest my-project
2. cd my-project

## Tailwind setup
1. npm install tailwindcss @tailwindcss/postcss postcss

## Create a `postcss.config.mjs` file in the root of your project and add the @tailwindcss/postcss plugin to your PostCSS configuration. -> add this file
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;

## Add an `@import "tailwindcss";` to ./app/globals.css that imports Tailwind CSS.

## Install Shadcn ui
* `npx shadcn@latest init -`

## Need to install another version of tailwind
* `npm i tailwindcss@next postcss autoprefixer`

## Then You can add components
