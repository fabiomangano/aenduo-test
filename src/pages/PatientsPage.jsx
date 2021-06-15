import { useEffect } from "react";
import { connect } from "react-redux";
import PatientsTable from "../components/PatientsTable";
import { fetchPatients } from "../actions/patients";
import { Card } from "react-bootstrap";

const rightCardStyle = {
  width: "80%",
  float: "right",
};

const leftCardStyle = {
  width: "20%",
  backgroundColor: "#eee",
  float: "left",
  minHeight: "100vh",
};

const ConnectedPatientsPage = ({
  patients,
  fetchPatientsFromApi,
  isLoading,
}) => {
  useEffect(() => {
    fetchPatientsFromApi(
      "https://aedevelopment.blob.core.windows.net/assessments/test.json"
    );
  }, [fetchPatientsFromApi]);

  return (
    <div>
      <Card style={leftCardStyle}>
        <Card.Title>Filtro: </Card.Title>
        <Card.Body></Card.Body>
      </Card>
      <Card style={rightCardStyle}>
        <Card.Title>Tabella Pazienti</Card.Title>
        <Card.Body>
          {isLoading ? (
            <h2>Loading ...</h2>
          ) : (
            <PatientsTable patients={patients} />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    patients: state.patients,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPatientsFromApi: (url) => dispatch(fetchPatients(url)),
  };
};

const PatientsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedPatientsPage);

export default PatientsPage;
