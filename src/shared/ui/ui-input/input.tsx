import { cn } from '@/shared/utils/utils.ts'
import type { UiInputProps } from '@/shared/ui/ui-input/ui-input-props.ts'
import './styles/ui-input.scss'

function UiInput({ className, size = 'default', type, ...props }: UiInputProps) {
  return (
    <input
      data-slot="input"
      data-size={size}
      type={type}
      className={cn('input', className)}
      {...props}
    />
  )
}

export { UiInput }
