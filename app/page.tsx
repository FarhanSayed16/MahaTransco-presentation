import { PresentationProvider } from "@/lib/navigation/PresentationContext"
import { KeyboardManager } from "@/components/shell/KeyboardManager"
import { ProgressBar } from "@/components/shell/ProgressBar"
import { NavChrome } from "@/components/shell/NavChrome"
import { OverviewGrid } from "@/components/shell/OverviewGrid"
import { SceneSwitcher } from "@/components/scenes/SceneSwitcher"
import { PresenterPanel } from "@/components/presenter/PresenterPanel"
import { DemoTray } from "@/components/presenter/DemoTray"
import { NotesOverlay } from "@/components/presenter/NotesOverlay"
import { WorkshopBackground } from "@/components/visuals/WorkshopBackground"
import { getAllScenes } from "@/lib/content/loaders"

export default function WorkshopShell() {
  const scenes = getAllScenes()

  return (
    <PresentationProvider scenes={scenes}>
      <div className="relative h-[100dvh] overflow-hidden">
        <WorkshopBackground />
        <KeyboardManager />
        <ProgressBar />
        <PresenterPanel />
        <DemoTray />
        <NotesOverlay />

        {/* Exact band above fixed nav — true vertical center */}
        <main className="absolute inset-x-0 top-0 bottom-[5.75rem] z-10 flex items-center justify-center overflow-y-auto px-4 md:px-8">
          <div className="my-auto w-full flex justify-center py-4">
            {scenes.length > 0 ? (
              <SceneSwitcher />
            ) : (
              <div className="text-xl text-ink-muted">No scenes found in content/scenes/</div>
            )}
          </div>
        </main>

        <NavChrome />
        <OverviewGrid />
      </div>
    </PresentationProvider>
  )
}
