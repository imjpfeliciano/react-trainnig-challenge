import React from 'react';
import PokemonCard from './PokemonCard';

export default {
    title: 'PokemonCard',
    component: PokemonCard,
}

const Template = (args) => <PokemonCard {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
    name: 'Pikachu',
    sprites: {
        front_default: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3997ebc-1e83-48f2-9854-eb28c8c6a97b/debkf0q-ea4fb2bf-81e6-447f-99ff-3ab9bd7aad36.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IzOTk3ZWJjLTFlODMtNDhmMi05ODU0LWViMjhjOGM2YTk3YlwvZGVia2YwcS1lYTRmYjJiZi04MWU2LTQ0N2YtOTlmZi0zYWI5YmQ3YWFkMzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PHxKCx2V24Lng7AyDk6SuDsnuby-nHpRD0E5O4IY-jY',
        back_default: 'https://www.kindpng.com/picc/m/79-794624_pikachu-back-png-transparent-png.png'
    }
}