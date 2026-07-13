import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginValidationSchema } from '@/shared/schemas/login-validation-schema.ts'
import { localStorageService } from '@/shared/services/local-storage-service/local-storage.service.ts'
import type { DefaultUserI } from '@/shared/models/user/default-user.model.ts'

interface useLoginFormHookI {
  onSuccess?: () => void
}

export function useLoginFormHook({ onSuccess }: useLoginFormHookI) {
  const { ...methods } = useForm({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const userId: string = crypto.randomUUID()
  const userName: string = methods.getValues('email').split('@')[0]
  const user: DefaultUserI = {
    id: userId,
    name: userName,
    ...methods.getValues(),
  }

  const submit = methods.handleSubmit(() => {
    try {
      localStorageService.setItem('user', JSON.stringify(user))
      localStorageService.getItem('user')
      onSuccess?.()
    } catch (error) {
      throw new Error('Під час логіну виникла помилка', { cause: error })
    }
  })

  return { submit, ...methods }
}
