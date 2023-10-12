import PokemonList from '@/core/pokemon-list/pokemon-list'

export default function Home() {
  return (
    <div className="bg-white">
      <main className="app-container mx-auto px-4 pb-14 min-h-screen">
        <PokemonList />
      </main>
    </div>
  )
}
