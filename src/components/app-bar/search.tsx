'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { SearchIconOutline } from '../icons/outline'
import Input from '../input/input'

const Search = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const { handleSubmit, control } = useForm({
    defaultValues: {
      search: searchParams.get('q') || '',
    },
  })

  const submit = (val: { search: string }) => {
    router.push(`/?q=${val.search.toLocaleLowerCase()}`)
  }

  return (
    <div className="flex-grow">
      <div className="max-w-[507px] mx-auto">
        <form onSubmit={handleSubmit(submit)} noValidate>
          <Controller
            name="search"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Search name Pokémon ..."
                icon={<SearchIconOutline />}
              />
            )}
          />
        </form>
      </div>
    </div>
  )
}

export default Search
