import {
  IconArrowBackUp,
  IconBook2,
  IconBulb,
  IconCheck,
  IconChessBishopFilled,
  IconChessFilled,
  IconChessKingFilled,
  IconChessKnightFilled,
  IconChessQueenFilled,
  IconChessRookFilled,
  IconChevronLeft,
  IconChevronRight,
  IconFlag,
  IconListDetails,
  IconPalette,
  IconPlayerSkipForward,
  IconSettings,
  IconSwords
} from "@tabler/icons-react";
import type { Role } from "../chess/game.js";

const sized = { size: 18, stroke: 1.7, "aria-hidden": true } as const;

export const TakeBackIcon = () => <IconArrowBackUp {...sized} />;
export const StudyIcon = () => <IconBook2 {...sized} />;
export const HintIcon = () => <IconBulb {...sized} />;
export const CheckMarkIcon = () => <IconCheck {...sized} />;
export const BackIcon = () => <IconChevronLeft {...sized} />;
export const NextIcon = () => <IconChevronRight {...sized} />;
export const ResignIcon = () => <IconFlag {...sized} />;
export const SkipIcon = () => <IconPlayerSkipForward {...sized} />;
export const SettingsIcon = () => <IconSettings {...sized} />;
export const CasualIcon = () => <IconSwords {...sized} />;
export const ScoresheetIcon = () => <IconListDetails {...sized} />;
export const StyleIcon = () => <IconPalette {...sized} />;

const roles = {
  pawn: IconChessFilled,
  knight: IconChessKnightFilled,
  bishop: IconChessBishopFilled,
  rook: IconChessRookFilled,
  queen: IconChessQueenFilled,
  king: IconChessKingFilled
};

export const PieceIcon = ({
  role,
  size = 18
}: {
  role: Role;
  size?: number;
}) => {
  const Icon = roles[role];
  return <Icon size={size} aria-hidden={true} />;
};
