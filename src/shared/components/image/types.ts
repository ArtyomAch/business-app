import { TSize, TSizeValue } from "@/shared/types/types";

export interface IImageProps {
  src: string;
  alt?: string;
  size?: TSize | TSizeValue;
  width?: number;
  height?: number;
  className?: string;
}
