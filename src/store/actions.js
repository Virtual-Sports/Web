export const INITIALIZE = data => ({
    type: 'init',
    payload: data,
})

export const CHANGE_CATEGORY_SELECTANCE = isSelected => ({
    type: 'change_category_selectance',
    payload: isSelected,
})

export const CHANGE_PROVIDER_SELECTANCE = isSelected => ({
    type: 'change_provider_selectance',
    payload: isSelected,
})
