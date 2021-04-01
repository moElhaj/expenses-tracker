export default (state, action) => {
    switch (action.type) {
        case 'GET':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'Error':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}