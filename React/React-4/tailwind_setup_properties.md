npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# we need to make this file 
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

* "./index.html",
* "./src/**/*.{js,ts,jsx,tsx}",

# Then put these into index.css
```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```


# Properties
height -> h-[unit]
background-color -> bg-[custumColor]
flex -> flex
justify-content -> justify-center
align-items -> items-center
width -> w-[60%]
color -> text-color_name / text-[#]
border -> border
border-buttom -> border-b-
padding -> px-[]/py-[]
cursor-pointer -> cursor-pointer

## Extension
* Tailwind intellisense
* inline fold -> hide tailwind classes
* ES7+ React/Redux/React-Native Snippets