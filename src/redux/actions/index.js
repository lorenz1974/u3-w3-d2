export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'
export const GET_SEARCH = 'GET_SEARCH'
export const SET_SEARCH_ERROR = 'SET_SEARCH_ERROR'
export const SET_SEARCH_LOADING = 'SET_SEARCH_LOADING'
export const MANAGE_FAVOURITES = 'MANAGE_FAVOURITES'

export const setSearchQuery = (query) => {
    return {
        type: SET_SEARCH_QUERY,
        payload: query,
    }
}

export const setSearchResults = (results) => {
    return {
        type: SET_SEARCH_RESULTS,
        payload: results,
    }
}

export const manageFavourites = (company) => {
    return {
        type: MANAGE_FAVOURITES,
        payload: company,
    }
}

export const setSearchLoading = (loading) => {
    return {
        type: SET_SEARCH_LOADING,
        payload: loading,
    }
}

export const setSearchError = (error) => {
    return {
        type: SET_SEARCH_ERROR,
        payload: error,
    }
}

export const fetchJobs = (query) => {
    return async (dispatch) => {
        const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='
        try {
            const response = await fetch(`${baseEndpoint}${query}&limit=20`)
            if (response.ok) {
                const { data } = await response.json()
                console.log('fetchJobs - data', data)
                dispatch(setSearchResults(data))
                dispatch(setSearchLoading(false))
            } else {
                alert('Error fetching results')
            }
        } catch (error) {
            console.error('Fetch error:', error)
            dispatch(setSearchError(true))
        }
    }
}
