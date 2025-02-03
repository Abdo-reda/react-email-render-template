import ErrorViewComponent from "./errorView";

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
    return { default: () =>  <ErrorViewComponent errorMsg={errorMsg} /> };
  }
}

const EmailImport = await safeImport(() => import("./email"));

function App() {
  return <EmailImport.default {...EmailImport.PreviewProps} />;
}

export default App;
