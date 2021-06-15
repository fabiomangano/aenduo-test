import {
  PATIENTS_FETCH_IS_LOADING,
  PATIENTS_FETCH_SUCCESS,
  PATIENTS_FETCH_FAILURE,
} from "../types/patients";

import PatientModel from "../models/patients";

const patients = (state = [], action) => {
  if (action.type === PATIENTS_FETCH_SUCCESS) {
    const patients = action.patients.map(
      (patient) => new PatientModel(patient)
    );
    return [...patients, ...state];
  }
  return state;
};

const isLoading = (state = false, action) => {
  if (action.type === PATIENTS_FETCH_IS_LOADING) {
    return action.isLoading;
  }
  return state;
};

const hasError = (state = false, action) => {
  if (action.type === PATIENTS_FETCH_FAILURE) {
    return action.error;
  }
  return state;
};

export { patients, isLoading, hasError };
