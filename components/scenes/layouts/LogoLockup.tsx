import Image from "next/image"

export function LogoLockup({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-line bg-navy shadow-sm">
          <Image src="/brand/mahatransco.svg" alt="" width={36} height={36} className="object-cover" />
        </div>
        <span className="font-display font-bold text-navy text-sm leading-none">MahaTransco</span>
      </div>
    )
  }

  return (
    <div className="mb-6 flex flex-col items-center gap-3 md:mb-8">
      <div className="flex items-center gap-3">
        <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-white/80 bg-navy shadow-md ring-4 ring-accent/10 md:h-16 md:w-16">
          <Image
            src="/brand/mahatransco.svg"
            alt="MahaTransco"
            width={64}
            height={64}
            className="object-cover"
            priority
          />
        </div>
        <div className="text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted">
            Government of Maharashtra
          </p>
          <p className="font-display text-xl font-bold leading-none text-navy md:text-2xl">MahaTransco</p>
        </div>
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        Interactive AI Workshop · Administrative Leadership
      </p>
    </div>
  )
}
