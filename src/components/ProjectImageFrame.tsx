import Image from "next/image";
import type { ProjectImage } from "@/content/types";
import { cn } from "@/lib/cn";

type ProjectImageFrameProps = {
  image: ProjectImage;
  className?: string;
  priority?: boolean;
};

export function ProjectImageFrame({
  image,
  className,
  priority = false,
}: ProjectImageFrameProps) {
  return (
    <figure className={cn("overflow-hidden border border-border bg-surface-2", className)}>
      <div className="relative aspect-[16/10]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </div>
      {image.caption || image.placeholder ? (
        <figcaption className="border-t border-border px-3 py-2 font-mono text-[11px] tracking-wide text-muted-2">
          {image.placeholder ? "Placeholder asset — " : ""}
          {image.caption ?? image.alt}
        </figcaption>
      ) : null}
    </figure>
  );
}
