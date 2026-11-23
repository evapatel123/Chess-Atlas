import { Button } from "../components/controls.js";
import { en } from "../locales/en.js";

export const Failure = ({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) => (
  <div className="sheet failure" role="alert">
    <h1>{en.errors.title}</h1>
    <p className="note">{error.message}</p>
    <Button kind="primary" onClick={reset}>
      {en.errors.retry}
    </Button>
  </div>
);