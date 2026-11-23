import { createRoot } from "react-dom/client";
import { ApiProvider } from "./api/client.js";
import { StatusBoundary } from "./components/utilities.js";
import { config } from "./config.js";
import { useCacheNamed } from "./lib/utils.js";
import { en } from "./locales/en.js";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes.js";
import { Failure } from "./views/failure.js";

// -----------------------------------------------------------------------------
// Errors
// -----------------------------------------------------------------------------
export const reportError = (error: unknown): void => {
  console.error(error);
};

window.addEventListener("error", (event) =>
  reportError(event.error ?? event.message)
);
window.addEventListener("unhandledrejection", (event) =>
  reportError(event.reason)
);

// -----------------------------------------------------------------------------
// Start
// -----------------------------------------------------------------------------
useCacheNamed(config.assetCache);
document.title = en.pageTitle;

createRoot(document.getElementById("root") as HTMLElement).render(
  <ApiProvider>
    <StatusBoundary
      loading={
        <div className="veil is-up">
          <div className="veil-card" role="status">
            <p className="veil-label">{en.loading.board}</p>
            <div className="veil-track is-waiting">
              <span className="veil-fill" />
            </div>
          </div>
        </div>
      }
      fallback={(error, reset) => <Failure error={error} reset={reset} />}
      onError={reportError}
    >
      <RouterProvider router={router} />
    </StatusBoundary>
  </ApiProvider>
);
