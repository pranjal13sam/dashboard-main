import { Link } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { DemoFilterDropdown } from "./DemoFilterDropdown";
import { cn } from "../utils/cn-merge";
import { toSentenceCase } from "../utils/change-casing";
import { currentCurrency } from "../common/constants";

const sortFilterOptions = ["Ascending", "Descending"];

const statusFilterOptions = ["All", "Paid", "Cancelled", "Refunded"];

const OrderDataTable = ({ rows, columns, title }) => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="overflow-hidden p-6">
        <div className="flex flex-wrap items-center justify-between sm:justify-between">
          <h2 className="text-xl font-semibold text-default-800">{title}</h2>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <DemoFilterDropdown
              filterType="Sort"
              filterOptions={sortFilterOptions}
            />
            <DemoFilterDropdown
              filterType="Status"
              filterOptions={statusFilterOptions}
            />
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <div className="min-w-full">
          <table className="w-full divide-y divide-default-200">
            <thead className="bg-default-100">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className="px-6 py-3 text-sm font-medium text-default-800"
                  >
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-default-200">
              {rows.map((row, idx) => (
                <tr key={idx}>
                  {columns.map((column) => {
                    const tableData = row[column.key];
                    switch (column.key) {
                      case "dish_id":
                        const dish = row.dish;
                        return (
                          <td
                            key={`${column.key}-${idx}`}
                            className="px-6 py-4"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-18 h-18">
                                <img
                                  src={dish?.images[0] || ""}
                                  className="w-full h-full object-cover"
                                  alt={dish?.name || ""}
                                />
                              </div>
                              <div className="flex flex-col">
                                <p className="text-sm font-medium text-default-800">
                                  {dish?.name}
                                </p>
                                <div className="flex items-center gap-1">
                                  {Array.from(Array(Math.floor(dish?.review?.stars || 0))).map((_, i) => (
                                    <FaStar key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                                  ))}
                                  {dish?.review?.stars && !Number.isInteger(dish.review.stars) && (
                                    <FaStarHalf size={18} className="text-yellow-400" />
                                  )}
                                  {Array.from(Array(5 - Math.ceil(dish?.review?.stars || 0))).map((_, i) => (
                                    <FaStar key={i} size={18} className="text-default-400" />
                                  ))}
                                  <span className="text-xs text-default-500">({dish?.review?.count || 0})</span>
                                </div>
                              </div>
                            </div>
                          </td>
                        );
                      case "status":
                        const colorClassName = {
                          paid: "bg-green-500/10 text-green-500",
                          refunded: "bg-pink-500/10 text-pink-500",
                          cancelled: "bg-yellow-500/10 text-yellow-500"
                        }[tableData.toLowerCase()] || "bg-gray-300 text-gray-700";
                        return (
                          <td key={`${column.key}-${idx}`} className="px-6 py-4">
                            <span className={cn("rounded-md px-3 py-1 text-xs font-medium", colorClassName)}>
                              {toSentenceCase(tableData)}
                            </span>
                          </td>
                        );
                      case "id":
                        return (
                          <td key={`${column.key}-${idx}`} className="px-6 py-4">
                            {row.id && (
                              <Link to={`/admin/orders/${row.id.slice(1).toUpperCase()}`} className="text-primary-500 hover:text-primary-700">
                                {row.id.toUpperCase()}
                              </Link>
                            )}
                          </td>
                        );
                      default:
                        return (
                          <td key={`${column.key}-${idx}`} className="px-6 py-4 text-sm font-medium text-default-500">
                            {column.key === "amount" && currentCurrency}
                            {tableData}
                          </td>
                        );
                    }
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDataTable;
