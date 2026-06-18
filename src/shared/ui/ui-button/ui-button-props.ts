import type { UiSize } from '@/shared/models/ui-size.model.ts'
import type { UiVariant } from '@/shared/models/ui-variant.model.ts'

export interface UiButtonProps extends React.ComponentProps<'button'> {
  className?: string
  variant?: UiVariant
  size?: UiSize
  asChild?: boolean
  disabled?: boolean
  isRoundedFull?: boolean
}
