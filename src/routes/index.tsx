import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemons/pokemon-image';

export default component$(() => {

  const pokemonId = useSignal(1); // primitivos, booleans, strings
  const pokemonView = useSignal(false);
  const pokemonIsVisible = useSignal(true);

  const changePokemonId = $((value: number): void => {
    if ((pokemonId.value + value) <= 0) return;
    pokemonId.value += value;
    pokemonView.value = false;
    pokemonIsVisible.value = true;
  });

  const changeView = $((): void => {
    pokemonView.value = !pokemonView.value;
  })

  const changeVisible = $((): void => {
    pokemonIsVisible.value = !pokemonIsVisible.value;
  })

  return (
    <>
      <span class="text-2xl">Buscador simple</span>

      <span class="text-9xl">{pokemonId}</span>

      <PokemonImage id={pokemonId.value} backImage={pokemonView.value} isVisible={pokemonIsVisible.value} />

      <div>
        <button onClick$={() => changePokemonId(-1)} class="btn btn-primary">Anterior</button>
        <button onClick$={() => changePokemonId(+1)} class="btn btn-primary">Siguiente</button>
        <button onClick$={() => changeView()} class="btn btn-primary">Front/Back</button>
        <button onClick$={() => changeVisible()} class="btn btn-primary">Revelar/Ocultar</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'CursoQwik',
  meta: [
    {
      name: 'CursoQwik',
      content: 'Curso Qwik 2023',
    },
  ],
};
