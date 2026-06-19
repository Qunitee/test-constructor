import { UiButton } from '@/shared/ui/ui-button/ui-button.tsx'
import type { UiVariant } from '@/shared/models/ui-variant.model.ts'
import type { UiSize } from '@/shared/models/ui-size.model.ts'
import { useApplyTheme } from '@/shared/hooks/use-apply-theme.tsx'
import { Theme } from '@/shared/models/theme-type.ts'
import { useThemeStore } from '@/shared/store/theme-store/theme-store.ts'
import { UiInput } from '@/shared/ui/ui-input/input.tsx'

const variants: UiVariant[] = [
  'default',
  'primary',
  'secondary',
  'accent',
  'accent-soft',
  'muted',
  'destructive',
  'destructive-soft',
  'success',
  'success-soft',
  'warning',
  'warning-soft',
  'outline',
  'ghost',
  'link',
]

const sizes: UiSize[] = ['xs', 'sm', 'default', 'lg', 'xl', 'xxl', '3xl', '4xl', '5xl', '6xl']

export function App() {
  useApplyTheme()

  const theme = useThemeStore(s => s.theme)
  const toggleTheme = useThemeStore(s => s.toggleTheme)

  return (
    <div className="p-8 flex flex-col gap-10">
      <div className="fixed top-4 right-4 z-50">
        <UiButton variant="outline" size="sm" onClick={toggleTheme}>
          {theme === Theme.Light ? 'Dark' : 'Light'}
        </UiButton>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-4">Variants</h2>
        <div className="flex flex-wrap gap-3 items-center">
          {variants.map(variant => (
            <UiButton key={variant} variant={variant}>
              {variant}
            </UiButton>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Sizes</h2>
        <div className="flex flex-wrap gap-3 items-center">
          {sizes.map(size => (
            <UiButton key={size} variant="primary" size={size}>
              {size}
            </UiButton>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Matrix</h2>
        <div className="flex flex-col gap-4">
          {variants.map(variant => (
            <div key={variant} className="flex flex-wrap gap-3 items-center">
              <span className="w-32 text-sm text-muted-foreground">{variant}</span>
              {sizes.slice(0, 5).map(size => (
                <UiButton key={size} variant={variant} size={size}>
                  {size}
                </UiButton>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">States</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <UiButton variant="primary">Normal</UiButton>
          <UiButton variant="primary" disabled>
            Disabled
          </UiButton>
          <UiButton variant="primary" isRoundedFull>
            Rounded full
          </UiButton>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Input sizes</h2>
        <div className="flex flex-col gap-3 max-w-sm">
          {sizes.map(size => (
            <UiInput key={size} size={size} placeholder={`size: ${size}`} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Input states</h2>
        <div className="flex flex-col gap-3 max-w-sm">
          <UiInput placeholder="Normal" />
          <UiInput placeholder="Disabled" disabled />
          <UiInput placeholder="Invalid" aria-invalid />
          <UiInput placeholder="With value" defaultValue="Hello world" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Input types</h2>
        <div className="flex flex-col gap-3 max-w-sm">
          <UiInput type="text" placeholder="Text" />
          <UiInput type="email" placeholder="email@example.com" />
          <UiInput type="password" placeholder="Password" />
          <UiInput type="number" placeholder="Number" />
          <UiInput type="search" placeholder="Search..." />
        </div>
      </section>
    </div>
  )
}
