'use client';

import Image from 'next/image';

const ProjectImage = ({
  src,
  alt,
  fit = 'cover',
  className = '',
  priority = false,
}) => {
  if (!src) return null;

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-[var(--bg-primary)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
        className={`transition-transform duration-500 group-hover:scale-[1.02] ${
          fit === 'contain' ? 'object-contain p-2' : 'object-cover object-top'
        }`}
      />
    </div>
  );
};

export default ProjectImage;
