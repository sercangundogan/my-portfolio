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
  const isPortrait = image.height > image.width;

  return (
    <figure
      className={cn(
        "overflow-hidden border border-border bg-surface-2",
        isPortrait && "mx-auto max-w-md sm:max-w-lg",
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full",
          isPortrait ? "bg-[linear-gradient(180deg,var(--surface-2),var(--border))]" : "",
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          quality={92}
          sizes={
            isPortrait
              ? "(max-width: 640px) 100vw, (max-width: 1024px) 28rem, 32rem"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 920px"
          }
          className="h-auto w-full"
        />
      </div>
      {image.caption || image.placeholder ? (
        <figcaption className="border-t border-border px-3 py-2 font-mono text-[11px] tracking-wide text-muted-2">
          {image.placeholder ? "Placeholder asset — " : null}
          {image.caption ?? image.alt}
        </figcaption>
      ) : null}
    </figure>
  );
}
