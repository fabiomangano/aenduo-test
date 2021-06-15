import moment from "moment";

class Patients {
  constructor(patient) {
    this.id = patient.id;
    this.name = patient.firstName + " " + patient.lastName;
    this.cf = patient.cF;
    this.gender = patient.gender === "M" ? "Maschio" : "Femmina";
    this.district = patient.districtName;
    this.state = patient.patientState;
    this.prescription = patient.prescriptionDetailDescription;
    this.prescriptionId = patient.prescriptionDetailId;
    this.prescriptionStartDate = moment(
      patient.prescriptionDetailStartDate
    ).format("DD-MM-YYYY");
    this.prescriptionEndDate = patient.prescriptionDetailEndDate
      ? moment(patient.prescriptionDetailEndDate).format("DD-MM-YYYY")
      : "";
    this.therapyDays = patient.therapyDays;
    this.provisionsCount = patient.provisionsCount;
  }
}

export default Patients;
