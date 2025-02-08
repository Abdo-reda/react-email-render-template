import ErrorViewComponent from "./errorView";
import { render } from "@react-email/render";

async function safeImport(importFn) {
  try {
    return await importFn();
  } catch (error) {
    let errorMsg = "";
    if (error instanceof Error) {
      errorMsg = `${error.name}: ${error.message}`;
    } else if (typeof error === "string") {
      errorMsg = error;
    }
    return { default: () => <ErrorViewComponent errorMsg={errorMsg} /> };
  }
}

const EmailImport = await safeImport(() => import("./email"));
const EmailComponent = <EmailImport.default {...EmailImport.PreviewProps} />;
const EmailHtml = await render(EmailComponent, {
  pretty: true,
});
const EmailText = await render(EmailComponent, {
  plainText: true,
});

function App({url}) {
  if (url === "html") return <pre>{EmailHtml}</pre>;
  if (url === "text") return <pre>{EmailText}</pre>;
  return EmailComponent;
}

export default App;
