import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
  size: number;
  className?: string;
  priority?: boolean;
};

// The source photo is a half-body shot, so it is zoomed towards the face.
export function Avatar({ src, alt, size, className = "", priority }: AvatarProps) {
  return (
    <div className={`relative shrink-0 overflow-hidden ${className}`} style={{ width: size, height: size }}>
      <Image
        src={src}
        alt={alt}
        width={size * 3}
        height={size * 3}
        priority={priority}
        className="h-full w-full origin-[57%_0%] scale-[2.2] object-cover"
      />
    </div>
  );
}
