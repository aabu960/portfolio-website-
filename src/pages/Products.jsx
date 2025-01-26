import React, { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Cocoa Beans", quantity: 100, amount: 5000, sales: 20 },
    { id: 2, name: "Shea Butter", quantity: 50, amount: 2500, sales: 15 },
    { id: 3, name: "Cashew Nuts", quantity: 30, amount: 1200, sales: 5 },
    { id: 4, name: "Coffee", quantity: 80, amount: 4000, sales: 18 },
    { id: 5, name: "Mangoes", quantity: 200, amount: 7000, sales: 25 },
    { id: 6, name: "Pineapples", quantity: 300, amount: 6000, sales: 30 },
    { id: 7, name: "Bananas", quantity: 150, amount: 5000, sales: 22 },
    { id: 8, name: "Avocado", quantity: 90, amount: 4500, sales: 16 },
    { id: 9, name: "Tomatoes", quantity: 120, amount: 3000, sales: 12 },
    { id: 10, name: "Peppers", quantity: 110, amount: 3500, sales: 10 },
    { id: 11, name: "Cabbage", quantity: 95, amount: 2800, sales: 8 },
    { id: 12, name: "Onions", quantity: 150, amount: 4000, sales: 14 },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterField, setFilterField] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: "", quantity: "", amount: "", sales: "" });

  const itemsPerPage = 10;

  const filteredProducts = products.filter((product) =>
    product[filterField].toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (isEditing) {
      setEditProduct((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleEdit = (product) => {
    setIsEditing(true);
    setEditProduct(product);
    setShowModal(true);
  };

  const handleSave = () => {
    if (isEditing) {
      setProducts((prev) =>
        prev.map((product) =>
          product.id === editProduct.id ? { ...editProduct, id: product.id } : product
        )
      );
    } else {
      const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
      setProducts((prev) => [...prev, { ...newProduct, id: newId }]);
    }
    closeModal();
  };

  const openAddModal = () => {
    setIsEditing(false);
    setNewProduct({ name: "", quantity: "", amount: "", sales: "" });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditProduct(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Products</h2>

      <div className="flex items-center mb-4 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-lg w-full"
        />
        <select
          value={filterField}
          onChange={(e) => setFilterField(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="name">Product Name</option>
          <option value="quantity">Quantity</option>
          <option value="amount">Amount</option>
          <option value="sales">Sales</option>
        </select>
        <button
          onClick={openAddModal}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Add Product
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full text-left">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Amount (GHS)</th>
              <th className="px-4 py-3">Sales</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((product) => (
              <tr key={product.id} className="border-t hover:bg-gray-100 transition duration-200">
                <td className="px-4 py-2">{product.id}</td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.quantity}</td>
                <td className="px-4 py-2">{product.amount}</td>
                <td className="px-4 py-2">{product.sales}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleEdit(product)}
                    className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">
              {isEditing ? "Edit Product" : "Add Product"}
            </h3>
            <form className="grid gap-4">
              <input
                type="text"
                name="name"
                value={isEditing ? editProduct?.name : newProduct.name}
                onChange={handleInputChange}
                placeholder="Product Name"
                className="p-2 border rounded-lg"
              />
              <input
                type="number"
                name="quantity"
                value={isEditing ? editProduct?.quantity : newProduct.quantity}
                onChange={handleInputChange}
                placeholder="Quantity"
                className="p-2 border rounded-lg"
              />
              <input
                type="number"
                name="amount"
                value={isEditing ? editProduct?.amount : newProduct.amount}
                onChange={handleInputChange}
                placeholder="Amount (GHS)"
                className="p-2 border rounded-lg"
              />
              <input
                type="number"
                name="sales"
                value={isEditing ? editProduct?.sales : newProduct.sales}
                onChange={handleInputChange}
                placeholder="Sales"
                className="p-2 border rounded-lg"
              />
            </form>
            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                {isEditing ? "Update Product" : "Add Product"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
