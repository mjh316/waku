/* eslint-disable @typescript-eslint/no-unused-vars */
import { pokemon } from './pokemon.js';

/**
 * Mock database
 * @param {TemplateStringsArray} query: mock query string
 */
export const sql = async (query: TemplateStringsArray) => {
  const shuffledPokemon = shuffle(pokemon).slice(0, 9);

  return { rows: shuffledPokemon };
};

const shuffle = (array: Array<any>) => {
  return array
    .map((value: any) => ({ value, sort: Math.random() }))
    .sort((a: any, b: any) => a.sort - b.sort)
    .map(({ value }: any) => value);
};

/**
 * Mock static paths
 */
export const getPokemonPaths = async () => {
  return pokemon.map((row) => row.slug);
};
