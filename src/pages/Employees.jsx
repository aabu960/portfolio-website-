import React, { useState } from "react";

const Employees = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);

  const handleOpenModal = (employee = null) => {
    setIsEditMode(!!employee);
    setCurrentEmployee(employee);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentEmployee(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for creating or updating an employee
    console.log("Form submitted");
    handleCloseModal();
  };

  return (
    <div className="p-6 bg-light-gray h-screen">
      {/* Page Title */}
      <h2 className="text-3xl font-montserrat text-dark-gray mb-6">Employees</h2>

      {/* Create Employee Button */}
      <div className="mb-4">
        <button
          onClick={() => handleOpenModal()}
          className="bg-dark-teal text-white px-4 py-2 rounded-lg hover:bg-highlight-yellow transition duration-200"
        >
          Add Employee
        </button>
      </div>

      {/* Employee Table */}
      <div className="overflow-x-auto bg-white shadow-3xl rounded-lg">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-dark-teal text-white">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Position</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3].map((id) => (
              <tr
                key={id}
                className="border-t hover:bg-light-gray transition duration-150"
              >
                <td className="px-4 py-2">EMP00{id}</td>
                <td className="px-4 py-2">Jane Smith</td>
                <td className="px-4 py-2">janesmith@example.com</td>
                <td className="px-4 py-2">Software Engineer</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() =>
                      handleOpenModal({
                        id: `EMP00${id}`,
                        name: "Jane Smith",
                        email: "janesmith@example.com",
                        position: "Software Engineer",
                      })
                    }
                    className="bg-highlight-yellow text-white px-2 py-1 rounded-md mr-2 hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-xl font-montserrat mb-4">
              {isEditMode ? "Edit Employee" : "Add Employee"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  defaultValue={isEditMode ? currentEmployee?.name : ""}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  defaultValue={isEditMode ? currentEmployee?.email : ""}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Position</label>
                <input
                  type="text"
                  defaultValue={isEditMode ? currentEmployee?.position : ""}
                  className="w-full px-3 py-2 border rounded-lg"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-300 px-4 py-2 rounded-lg mr-2 hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-dark-teal text-white px-4 py-2 rounded-lg hover:bg-highlight-yellow transition"
                >
                  {isEditMode ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employees;
