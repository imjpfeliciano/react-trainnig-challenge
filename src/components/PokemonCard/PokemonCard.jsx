import PropTypes from 'prop-types';
import styled from 'styled-components';

const PokemonCardWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  width: 50%;

  img {
    width: 200px;
  }
`;

const PokemonCard = ({ name, sprites }) => (
  <PokemonCardWrapper data-testid="pokemon-card">
    <span>
      Pokemon Name:
      <b data-testid="pokemon-name">{name}</b>
    </span>
    <img data-testid="pokemon-image" src={sprites.front_default} alt="pokemon" />
  </PokemonCardWrapper>
);

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  sprites: PropTypes.shape({
    front_default: PropTypes.string.isRequired,
    back_default: PropTypes.string.isRequired,
  }),
};

PokemonCard.defaultProps = {
  sprites: {
    front_default: '',
    back_default: '',
  },
};

export default PokemonCard;

