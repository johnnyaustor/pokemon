import { MyPokemon } from "../models/my-pokemon";
import * as PokemonAction from "./../actions/pokemon.actions";

const initialState: MyPokemon = {
    id: 1,
    name: 'pokemon-name',
    alias: 'pokemon-alias',
    image: 'image',
    url: 'url-string'
}

export function reducer(state: MyPokemon[] = [], action: PokemonAction.Actions) {
    switch (action.type) {
        case PokemonAction.ADD_POKEMON:
            return [
                ...state,
                action.payload
            ];
        case PokemonAction.REMOVE_POKEMON:
            state.splice(action.payload, 1);
            return state;
        default:
            return state;
    }
}