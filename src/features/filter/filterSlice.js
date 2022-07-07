/* eslint-disable default-case */
import produce from 'immer'

export const StatusFilters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed'
}

const initState = {
    status: StatusFilters.All,
    colors: []
}

const filterReducer = produce((state, action) => {
    switch (action.type) {
        case 'filters/statusFilterChanged':
            state.status = action.payload
            break
        case 'filters/colorFilterChanged':
            const { colors } = state
            const { color, changeType } = action.payload
            switch (changeType) {
                case 'added':
                    state.colors.push(color)
                    break
                case 'removed':
                    state.colors = colors.filter(c => c !== color)
            }
    }
}, initState)

export default filterReducer

export const selectStatusFilter = state => state.filters.status
export const selectColorsFilter = state => state.filters.colors

export const statusFilterChanged = (status) => ({
    type: 'filters/statusFilterChanged',
    payload: status
})

export const colorFilterChanged = (color, changeType) => ({
    type: 'filters/colorFilterChanged',
    payload: {
        color,
        changeType
    }
})