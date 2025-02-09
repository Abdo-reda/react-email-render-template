import Fastify from "fastify";
import { render } from "@react-email/render";
import React from "react";

const port = process.argv.slice(2)[0]
const EmailComponent = await getEmailComponent();

const fastify = Fastify({
  logger: false,
});

fastify.get("/html", async (request, reply) => {
  const html = await render(EmailComponent, {
    pretty: true,
  });
  return { data: html };
});

fastify.get("/text", async (request, reply) => {
  const text = await render(EmailComponent, {
    plainText: true,
  });
  return { data: text };
});

fastify.listen({ port: port });

async function getEmailComponent() {
  const EmailImport = await import("./email");
  return React.createElement(EmailImport.default, EmailImport.PreviewProps);
}