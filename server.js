import express from "express";
import ViteExpress from "vite-express";
import { render } from "@react-email/render";
import React from "react";

const port = process.argv.slice(2)[0] ?? 7777;
const EmailComponent = await getEmailComponent();

async function getEmailComponent() {
  const EmailImport = await import("./email");
  return React.createElement(EmailImport.default, EmailImport.PreviewProps);
}

const app = express();

app.get("/html", async (_, res) => {
  const html = await render(EmailComponent, {
    pretty: true,
  });
  res.send({ data: html });
});

app.get("/text", async (_, res) => {
  const text = await render(EmailComponent, {
    plainText: true,
  });
  res.send({ data: text });
});

ViteExpress.listen(app, port, () => console.log(`Server is running on port ${port}...`));
