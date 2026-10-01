import NextImage, { type ImageProps } from "next/image";
import { withBasePath } from "@/lib/basePath";

export default function Img({ src, ...rest }: ImageProps) {
  const resolvedSrc = typeof src === "string" ? withBasePath(src) : src;
  return <NextImage src={resolvedSrc} {...rest} />;
}
