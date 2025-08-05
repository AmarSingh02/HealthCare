import { useState } from "react";
import { Mail, Pen, Trash } from "lucide-react";
import { Link } from "react-router-dom";

interface Patient {
  id: number;
  name: string;
  diagnosis: string;
  lastCons: string;
  treatment: string;
  status: "green" | "red";
  Image: string;
}

interface PatientTableProps {
  needAction: boolean;
  patients: Patient[];
}

const PatientListTable = ({ needAction, patients }: PatientTableProps) => {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Patient | null;
    direction: "ascending" | "descending" | "original";
  }>({
    key: null,
    direction: "original",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sorting logic
  const sortedPatients = [...patients].sort((a, b) => {
    if (sortConfig.key && sortConfig.direction !== "original") {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
    }
    return 0;
  });

  // Handle column sorting
  const requestSort = (key: keyof Patient) => {
    let direction: "ascending" | "descending" | "original" = "ascending";

    if (sortConfig.key === key) {
      if (sortConfig.direction === "ascending") {
        direction = "descending";
      } else if (sortConfig.direction === "descending") {
        direction = "original";
      }
    }

    setSortConfig({ key, direction });
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    sortConfig.direction === "original"
      ? patients.slice(indexOfFirstItem, indexOfLastItem)
      : sortedPatients.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > Math.ceil(patients.length / itemsPerPage)) return;
    setCurrentPage(pageNumber);
  };

  // Row selection
  const handleRowSelect = (index: number) => {
    const newSelectedRows = new Set(selectedRows);
    newSelectedRows.has(index) ? newSelectedRows.delete(index) : newSelectedRows.add(index);
    setSelectedRows(newSelectedRows);
  };

  // Select all on current page
  const handleSelectAll = () => {
    if (selectedRows.size === currentItems.length) {
      setSelectedRows(new Set());
    } else {
      const newSelectedRows = new Set<number>();
      currentItems.forEach((_, index) =>
        newSelectedRows.add(indexOfFirstItem + index)
      );
      setSelectedRows(newSelectedRows);
    }
  };

  const isAllSelected =
    currentItems.length > 0 &&
    currentItems.every((_, index) =>
      selectedRows.has(indexOfFirstItem + index)
    );

  return (
    <>
      <table className="w-full text-left">
        <thead>
          <tr className="text-xs text-text-gray uppercase bg-text-gray bg-opacity-5">
            <th className="p-4 py-4 ">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
                className="w-4 h-4 text-primary-bg "
              />
            </th>
            <th className="p-2  font-semibold text-xs text-text-gray whitespace-nowrap">
              ID
            </th>
            <th
              className="p-2  font-semibold text-xs text-text-gray whitespace-nowrap cursor-pointer"
              onClick={() => requestSort("name")}
            >
              Name
              <span className="ml-1">
                {sortConfig.key === "name"
                  ? sortConfig.direction === "ascending"
                    ? "↑"
                    : sortConfig.direction === "descending"
                    ? "↓"
                    : "⇅"
                  : "⇅"}
              </span>
            </th>
            <th className="p-2  font-semibold text-xs text-text-gray whitespace-nowrap">
              Diagnosis
            </th>
            <th
              className="p-2  font-semibold text-xs text-text-gray whitespace-nowrap cursor-pointer"
              onClick={() => requestSort("lastCons")}
            >
              Last Cons.
            </th>
            <th className="p-2  font-semibold text-xs text-text-gray whitespace-nowrap">
              Report
            </th>
            <th className="p-2 font-semibold text-xs text-text-gray whitespace-nowrap">
              Current Treatment
            </th>
            {needAction && (
              <th className="p-2 font-semibold text-xs text-text-gray whitespace-nowrap">
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((patient, index) => {
            const absoluteIndex = indexOfFirstItem + index;
            return (
              <tr
                key={patient.id}
                className={`text-sm border-t border-gray-100 ${
                  selectedRows.has(absoluteIndex)
                    ? "bg-blue-50"
                    : "hover:bg-gray-50"
                }`}
              >
                <td className="p-2 ps-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(absoluteIndex)}
                    onChange={() => handleRowSelect(absoluteIndex)}
                    className="w-4 h-4 text-primary-bg border-text-gray border-opacity-5 rounded"
                  />
                </td>
                <td className="p-2 text-text-gray">{patient.id}</td>
                <td className="p-2 flex items-center">
                  <Link to="/patients/profile" className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-2 overflow-hidden">
                      <img
                        src={patient.Image}
                        alt="patients"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-text-gray">{patient.name}</span>
                  </Link>
                </td>
                <td className="p-2 text-text-gray">{patient.diagnosis}</td>
                <td className="p-2 flex items-center">
                  <span
                    className={`w-3 h-3 rounded-full mr-2 ${
                      patient.status === "green" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  <span className="text-text-gray">{patient.lastCons}</span>
                </td>
                <td className="p-2">
                  <button className="text-primary-bg hover:underline">
                    View
                  </button>
                </td>
                <td className="p-2 text-text-gray">{patient.treatment}</td>

                {needAction && (
                  <td className="p-2 flex space-x-2">
                    <button className="text-text-gray">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="text-text-gray">
                      <Pen className="w-4 h-4" />
                    </button>
                    <button className="text-text-gray">
                      <Trash className="w-4 h-4" />
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center my-4 space-x-2">
        <button
          className="bg-text-gray bg-opacity-15 w-6 h-6 rounded-md"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {[...Array(Math.ceil(patients.length / itemsPerPage)).keys()].map(
          (number) => (
            <button
              key={number + 1}
              className={`w-6 h-6 ${
                currentPage === number + 1
                  ? "bg-gray-800 text-white"
                  : "text-text-gray hover:bg-text-gray hover:bg-opacity-15"
              } rounded-md`}
              onClick={() => paginate(number + 1)}
            >
              {number + 1}
            </button>
          )
        )}
        <button
          className="bg-text-gray bg-opacity-15 w-6 h-6 rounded-md"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(patients.length / itemsPerPage)}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default PatientListTable;
