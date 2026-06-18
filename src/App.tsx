import { UiButton } from '@/shared/ui/ui-button/ui-button.tsx'
import type { UiVariant } from '@/shared/models/ui-variant.model.ts'
import type { UiSize } from '@/shared/models/ui-size.model.ts'

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
  return (
    <div className="p-8 flex flex-col gap-10">
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
    </div>
  )
}
