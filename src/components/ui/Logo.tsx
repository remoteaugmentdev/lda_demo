interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 48, className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.png"
        alt="SmartVend Logo"
        style={{ display: 'block', maxHeight: `${size}px`, width: 'auto', height: 'auto' }}
      />
    </div>
  )
}
