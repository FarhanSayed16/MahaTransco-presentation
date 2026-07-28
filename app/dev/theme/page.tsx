import { Button } from "@/components/ui/Button"
import { Chip } from "@/components/ui/Chip"
import { Divider } from "@/components/ui/Divider"
import { IconButton } from "@/components/ui/IconButton"
import { Kbd } from "@/components/ui/Kbd"
import { Surface } from "@/components/ui/Surface"
import { Settings } from "lucide-react"

export default function ThemePage() {
  return (
    <div className="p-12 max-w-4xl mx-auto space-y-12">
      <div>
        <h1 className="text-5xl font-bold mb-4 text-navy">Design System QA</h1>
        <p className="text-ink-muted text-lg">
          Verify tokens, fonts, and base primitives.
        </p>
      </div>

      <Surface className="p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-navy">Typography</h2>
          <div className="space-y-4">
            <h1 className="text-5xl">Display 1 (Fraunces)</h1>
            <h2 className="text-4xl">Display 2 (Fraunces)</h2>
            <h3 className="text-3xl">Display 3 (Fraunces)</h3>
            <p className="text-xl">Body Text Large (Manrope) - The quick brown fox jumps over the lazy dog.</p>
            <p className="text-base text-ink-muted">Body Text Regular (Manrope) - The quick brown fox jumps over the lazy dog.</p>
          </div>
        </section>

        <Divider />

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-navy">Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorSwatch bg="bg-bg" name="Background" border />
            <ColorSwatch bg="bg-surface" name="Surface" border />
            <ColorSwatch bg="bg-surface-muted" name="Surface Muted" />
            <ColorSwatch bg="bg-ink" name="Ink" text="text-surface" />
            <ColorSwatch bg="bg-ink-muted" name="Ink Muted" text="text-surface" />
            <ColorSwatch bg="bg-navy" name="Navy" text="text-surface" />
            <ColorSwatch bg="bg-navy-soft" name="Navy Soft" />
            <ColorSwatch bg="bg-accent" name="Accent" text="text-surface" />
            <ColorSwatch bg="bg-accent-soft" name="Accent Soft" />
            <ColorSwatch bg="bg-warn" name="Warn" text="text-surface" />
            <ColorSwatch bg="bg-warn-soft" name="Warn Soft" />
            <ColorSwatch bg="bg-good" name="Good" text="text-surface" />
            <ColorSwatch bg="bg-bad" name="Bad" text="text-surface" />
          </div>
        </section>

        <Divider />

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-navy">Buttons & Interactions</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="warn">Danger Zone</Button>
            <IconButton><Settings className="w-5 h-5" /></IconButton>
          </div>
        </section>

        <Divider />

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-navy">Chips & Indicators</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Chip>Default Chip</Chip>
            <Chip active>Active Chip</Chip>
            <Chip variant="good">Success / Strong</Chip>
            <Chip variant="warn">Warning</Chip>
            <Chip variant="bad">Error / Weak</Chip>
          </div>
        </section>

        <Divider />

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-navy">Keyboard Hints</h2>
          <p className="text-ink-muted">
            Press <Kbd>Space</Kbd> or <Kbd>→</Kbd> to continue. Use <Kbd>G</Kbd> for grid view.
          </p>
        </section>
      </Surface>
    </div>
  )
}

function ColorSwatch({ bg, name, text = "text-ink", border = false }: { bg: string, name: string, text?: string, border?: boolean }) {
  return (
    <div className={`p-4 rounded-lg flex flex-col justify-end h-24 ${bg} ${text} ${border ? 'border border-line' : ''}`}>
      <span className="text-sm font-semibold">{name}</span>
    </div>
  )
}
