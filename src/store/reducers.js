import {
    INITIALIZE,
    CHANGE_CATEGORY_SELECTANCE,
    CHANGE_PROVIDER_SELECTANCE,
} from './actions'

const changeSelectance = (array, id) => {
    array.find(x => x.id === id).isSelected = !array.find(x => x.id === id)
        .isSelected
    return array
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case INITIALIZE().type:
            return {
                ...state,
                providers: payload.providers.map(provider => ({
                    ...provider,
                    isSelected: false,
                })),
                categories: payload.categories.map(category => ({
                    ...category,
                    isSelected: false,
                })),
                tags: payload.tags,
                games: payload.games,
            }

        case CHANGE_CATEGORY_SELECTANCE().type:
            return {
                ...state,
                categories: changeSelectance([...state.categories], payload),
            }

        case CHANGE_PROVIDER_SELECTANCE().type:
            return {
                ...state,
                providers: changeSelectance([...state.providers], payload),
            }

        default:
            return state
    }
}

export default reducer
