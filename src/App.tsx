import { UiButton } from '@/shared/ui/ui-button/ui-button.tsx'
import { useState } from 'react'

export function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <div className="size-full flex flex-row gap-2">
        <UiButton variant="primary" onClick={() => setCounter(counter + 1)}>
          MyButton
        </UiButton>
        <h1 className="text-3xl">{counter}</h1>
      </div>
    </>
  )
}
