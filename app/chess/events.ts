import type { Settings } from "../schemas.js";
import type { MoveFacts } from "./game.js";

export type CutsceneKind =
  | "none"
  | "checkmate"
  | "promotion"
  | "queen-falls"
  | "sacrifice"
  | "en-passant"
  | "capture"
  | "castle"
  | "check";

export const cutsceneFor = (
  facts: MoveFacts,
  setting: Settings["cutscenes"]
): CutsceneKind => {
  if (setting === "off") return "none";
  if (facts.checkmate) return "checkmate";
  if (facts.promotion) return "promotion";
  if (facts.captured?.role === "queen") return "queen-falls";
  if (facts.sacrifice) return "sacrifice";
  if (facts.enPassant) return "en-passant";
  if (
    facts.captured &&
    (facts.captured.role !== "pawn" || setting === "captures")
  )
    return "capture";
  if (facts.rook) return "castle";
  if (facts.check) return "check";
  return "none";
};
