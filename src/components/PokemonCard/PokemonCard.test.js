import { render, screen } from '@testing-library/react';
import PokemonCard from './PokemonCard';

const data = {
  name: "pikachu",
  sprites: {
      front_default: "test",
      back_default: "test"
  }
};

test('renders pokemon card properly', () => {
  render(<PokemonCard {...data} />);
  const pokemonTitleElement = screen.getByText(/Pokemon/i);
  expect(pokemonTitleElement).toBeInTheDocument();
});

test('renders pokemon name properly', () => {
  render(<PokemonCard {...data} />);
  const pokemonName = screen.getByTestId('pokemon-name');
  expect(pokemonName).toBeInTheDocument();
  expect(pokemonName).toHaveTextContent(data.name);
});

test('renders pokemon image properly', () => {
  render(<PokemonCard {...data} />);
  const pokemonImage = screen.getByTestId('pokemon-image');
  expect(pokemonImage).toBeInTheDocument();
  expect(pokemonImage.src).toContain(data.sprites.front_default);
});

test('matches the snapshot', () => {
  render(<PokemonCard {...data} />);
  const pokemonCard = screen.getByTestId('pokemon-card');
  expect(pokemonCard).toMatchSnapshot();
});

