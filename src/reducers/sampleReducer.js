import Constants from '../utils/constants';

export default function sampleReducer(state = '', { type, payload }) {
    switch (type) {
    case Constants.UPDATE_TEST_ATTR:
        return payload.testAttr;
    default:
        return state;
    }
}