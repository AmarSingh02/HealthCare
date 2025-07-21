import React, { useState } from 'react'

const TablePrescription = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const products = [
    { id: 1, MecidineName: "cisplantin 120mmgh", Status: "Taken", dateTime: "05/06/2025", doctorName: "Dr.Sarath T" },
    { id: 2, MecidineName: "cisplantin 120mmgh", Status: "Pending", dateTime: "06/06/2025 ", doctorName: "Dr.Sarath T" },
    { id: 3, MecidineName: "cisplantin 120mmgh", Status: "Pending", dateTime: "06/06/2025", doctorName: "Dr.Sarath T" },
    { id: 4, MecidineName: "cisplantin 120mmgh", Status: "Taken", dateTime: "07/06/2025", doctorName: "Dr.Sarath T" },
    { id: 5, MecidineName: "cisplantin 120mmgh", Status: "Gold", dateTime: "08/06/2025", doctorName: "Dr.Sarath T" },
    { id: 6, MecidineName: "cisplantin 120mmgh", Status: "Taken", dateTime: "13/06/2025", doctorName: "Dr.Sarath T" }
  ]

  const filteredProducts = products.filter(product =>
    product.MecidineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.Status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.dateTime.toLowerCase().includes(searchTerm.toLowerCase())
  )



  const handleSelectItem = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const isAllSelected = filteredProducts.length > 0 && selectedItems.length === filteredProducts.length

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="pb-4 bg-white dark:bg-gray-900 p-4">
          <label htmlFor="table-search" className="sr-only">Search</label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
              type="text" 
              id="table-search" 
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search for items"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                {/* <div className="flex items-center">
                  <input 
                    id="checkbox-all-search" 
                    type="checkbox" 
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked={isAllSelected}
                    onChange={handleSelectAll}
                  /> */}
                  {/* <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label> */}
                {/* </div> */}
              </th>
              <th scope="col" className="px-6 py-3">
                Medcine Name
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                doctorName
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  {/* <div className="flex items-center">
                    <input 
                      id={`checkbox-table-${product.id}`} 
                      type="checkbox" 
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      checked={selectedItems.includes(product.id)}
                      onChange={() => handleSelectItem(product.id)}
                    />
                    <label htmlFor={`checkbox-table-${product.id}`} className="sr-only">checkbox</label>
                  </div> */}
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.MecidineName}
                </th>
                <td className="px-6 py-4">
                  {product.Status}
                </td>
                <td className="px-6 py-4">
                  {product.dateTime}
                </td>
                <td className="px-6 py-4">
                  {product.doctorName}
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TablePrescription