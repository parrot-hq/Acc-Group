import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        construction: 'Construction.html',
        contractors: 'Contractors.html',
        covid: 'Covid-19.html',
        healthcare: 'Healthcare.html',
        hospitality: 'Hospitality.html',
        privacy: 'Privacy.html',
        professionals: 'Professionals.html',
        property: 'Property.html',
        retail: 'Retail-and-wholesale.html',
        tax: 'Tax-assessment.html',
        who: 'Who-we-are.html',
      }
    }
  }
})
