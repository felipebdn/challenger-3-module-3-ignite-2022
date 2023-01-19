import { useForm } from 'react-hook-form'
import { ShearchInssuesContainer } from './styles'
import * as zod from 'zod'

interface ShearchInssuesProps {
  getIssues: (data: string) => void
  amountIssues: number
}

const searchFormSchema = zod.object({
  query: zod.string(),
})

type searchFormInputType = zod.infer<typeof searchFormSchema>

export function ShearchInssues({
  getIssues,
  amountIssues,
}: ShearchInssuesProps) {
  const { handleSubmit, register } = useForm<searchFormInputType>()

  function hadleGetIssue({ query }: searchFormInputType) {
    getIssues(query)
  }

  return (
    <ShearchInssuesContainer onSubmit={handleSubmit(hadleGetIssue)}>
      <div>
        <h2>Publicações</h2>
        <span>{amountIssues} publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </ShearchInssuesContainer>
  )
}
