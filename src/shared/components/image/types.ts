import { TSize } from "@/shared/types/types";

export interface IImageProps {
  src: string;
  alt?: string;
  size?: TSize | number;
  width?: number;
  height?: number;
  className?: string;
}
