import intersection from "lodash/intersection";
import isEmpty from "lodash/isEmpty";
import { store } from "./Store";
export const isAuthentic = (State) => {
    try {
        let Roles = store.getState().authentication.user['hasura_roles'];
        return !isEmpty(intersection(State, Roles));
    } catch (error) {
        return false;
    }
};