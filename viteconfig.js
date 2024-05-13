// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default ({
    base: '/Stargazers-Insurance-Company',
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          system: resolve(__dirname, 'system.html'),
          agents: resolve(__dirname, 'agents.html'),
          investors: resolve(__dirname, 'investors.html'),
          contacts: resolve(__dirname, 'contacts.html'),
          quotes: resolve(__dirname, 'quotes.html'),
        },
      },
    },
  });