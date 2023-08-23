import Link from 'next/link'

export default function CustomLink({
  href,
  title,
  as = '',
  download,
  children,
  target = '',
  className = '',
  passHref = true,
}) {
  return (
    <Link
      as={as}
      href={href}
      title={title}
      target={target}
      passHref={passHref}
      download={download}
      className={className}
      rel={target == '_blank' ? 'noopener noreferrer' : ''}
    >
      {children}
    </Link>
  )
}
