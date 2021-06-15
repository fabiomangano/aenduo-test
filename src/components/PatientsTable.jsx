import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

const columns = [
  {
    dataField: "id",
    text: "Id",
  },
  {
    dataField: "name",
    text: "Nominativo",
    filter: textFilter(),
    sort: true,
  },
  {
    dataField: "cf",
    text: "CF",
  },
  {
    dataField: "gender",
    text: "Sesso",
  },
  {
    dataField: "district",
    text: "Distretto",
  },
  {
    dataField: "state",
    text: "Stato",
  },
  {
    dataField: "prescription",
    text: "Prescrizione",
  },
  {
    dataField: "prescriptionId",
    text: "Id prescrizione",
  },
  {
    dataField: "prescriptionStartDate",
    text: "Inizio prescrizione",
    sort: true,
  },
  {
    dataField: "prescriptionEndDate",
    text: "Fine prescrizione",
  },
  {
    dataField: "therapyDays",
    text: "Giorni terapia",
  },
  {
    dataField: "provisionsCount",
    text: "Provvigioni",
  },
];

const defaultSorted = [
  {
    dataField: "name",
    order: "desc",
  },
  {
    dataField: "prescriptionStartDate",
    order: "desc",
  },
];

const PatientsTable = ({ patients }) => {
  return (
    <BootstrapTable
      keyField="id"
      data={patients}
      columns={columns}
      filter={filterFactory()}
      defaultSorted={defaultSorted}
    />
  );
};

export default PatientsTable;
