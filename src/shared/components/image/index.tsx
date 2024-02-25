import { IImageProps } from "./types";

const Image = ({
  src,
  size,
  width,
  height,
  alt = "",
  className = "",
}: IImageProps): JSX.Element => {
  const imageWidth = size
    ? typeof size === "number"
      ? size
      : size.width
    : width
    ? width
    : "100%";
  const imageHeight = size
    ? typeof size === "number"
      ? size
      : size.height
    : height
    ? height
    : "100%";
  return (
    <img
      src={src}
      alt={alt}
      width={imageWidth}
      height={imageHeight}
      className={className}
    />
  );
};

export default Image;
