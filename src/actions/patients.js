import axios from "axios";
import {
  PATIENTS_FETCH_IS_LOADING,
  PATIENTS_FETCH_SUCCESS,
  PATIENTS_FETCH_FAILURE,
} from "../types/patients";

const patientsFetchIsLoading = (isLoading) => {
  return {
    type: PATIENTS_FETCH_IS_LOADING,
    isLoading,
  };
};

const patientsFetchSuccess = (patients) => {
  return {
    type: PATIENTS_FETCH_SUCCESS,
    patients,
  };
};

const patientsFetchFailure = (error) => {
  return {
    type: PATIENTS_FETCH_FAILURE,
    error,
  };
};

const fetchPatients = (url) => {
  return (dispatch) => {
    dispatch(patientsFetchIsLoading(true));

    axios
      .get(url)
      .then((res) => {
        dispatch(patientsFetchIsLoading(false));
        dispatch(patientsFetchSuccess(res.data.data.patientsReview.nodes));
      })
      .catch((error) => {
        dispatch(patientsFetchIsLoading(false));
        dispatch(patientsFetchFailure(error));
      });
  };
};

export {
  patientsFetchIsLoading,
  patientsFetchSuccess,
  patientsFetchFailure,
  fetchPatients,
};
