import Image from 'next/image'

export default function CustomImage(props) {
  const { src, alt, className } = props
  return (
    <Image
      {...props}
      src={src || '/common-placeholder.svg'}
      alt={alt || src || 'image'}
      blurDataURL={src || '/common-placeholder.svg'}
      placeholder="blur"
      fill={true}
      className={`absolute inset-0 h-full w-full max-w-full object-cover ${className}`}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
    />
  )
}
