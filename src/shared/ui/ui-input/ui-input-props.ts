export interface UiInputProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  className?: string
  size?: string
}
