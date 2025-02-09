import react from "@vitejs/plugin-react-swc";
import express from 'express'
import { defineConfig } from 'vite'
import { render } from "@react-email/render";
import React from "react";

const app = express()
const EmailComponent = await getEmailComponent();

app.get('/api/html', async (req, res) => {
   const html = await render(EmailComponent, {
     pretty: true,
   });
   res.send({ data: html });
})

const proxy = { '/api': {}  }


export default defineConfig({
  plugins: [react(), expressPlugin()]
})



function expressPlugin() {
  return {
    name: 'express-plugin',
    config() {
      return {
        server: { proxy },
        preview: { proxy }
      }
    },
    configureServer(server) {
      server.middlewares.use(app)
    }
  }
}

async function getEmailComponent() {
  const EmailImport = await import("./email");
  return React.createElement(EmailImport.default, EmailImport.PreviewProps);
}
