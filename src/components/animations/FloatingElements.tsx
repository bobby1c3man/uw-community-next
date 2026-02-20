import { floatingElements } from '@/data/floating-elements'

export function FloatingElements() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {floatingElements.map((el, i) => (
        <div
          key={i}
          className={`float-element ${el.hideOnMobile ? 'float-hide-mobile' : ''}`}
          style={{
            top: el.top,
            left: el.left,
            width: el.size,
            height: el.size,
            '--float-dur-x': `${el.durX}s`,
            '--float-dur-y': `${el.durY}s`,
            '--float-delay': `${el.delay}s`,
          } as React.CSSProperties}
        >
          <div className={`float-drift-x-${el.driftVariant}`}>
            <div className={`float-drift-y-${el.driftVariant}`}>
              <div className="float-breathe">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={el.src}
                  alt=""
                  width={el.size}
                  height={el.size}
                  loading="lazy"
                  decoding="async"
                  style={{
                    transform: `rotate(${el.rotation}deg)`,
                  }}
                  className="block h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
