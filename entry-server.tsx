import { StrictMode } from "react";
import { renderToPipeableStream } from "react-dom/server";
import App from "./App";
import ErrorBoundary from "./errorBoundry.tsx";

export function render(_url: string, options?: any) {
  return renderToPipeableStream(
    <StrictMode>
      <ErrorBoundary>
        <App url={_url} />
      </ErrorBoundary>
    </StrictMode>,
    options
  );
}
