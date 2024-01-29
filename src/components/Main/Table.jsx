import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startEditingTask } from "../../redux/actions";

const Table = ({ data }) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.data.searchTerm);
  const filteredData = data.filter((item) => item.name.includes(searchTerm));
  return (
    <div>
      {/* Your component JSX goes here */}
      <div className="col-12 mb-3">
        <table className="table">
          <thead className="custom-thead-background">
            <tr>
              <th colSpan={4}>
                <h4 className="custom-h4-left">ListTask</h4>
              </th>
            </tr>
            <tr>
              <th scope="col" className="text-center" style={{ width: "5%" }}>
                #
              </th>
              <th scope="col" className="text-center" style={{ width: "50%" }}>
                Task
              </th>
              <th scope="col" className="text-center" style={{ width: "15%" }}>
                Level
              </th>
              <th scope="col" className="text-center" style={{ width: "30%" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <th scope="row" className="text-center">
                  {item.id}
                </th>
                <td className="text-center">{item.name}</td>
                <td className="text-center">{levelToString(item.level)}</td>
                <td className="text-center">
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => dispatch(startEditingTask(item))}
                  >
                    <i className="fas fa-edit" /> Sửa
                  </button>
                  <button className="btn btn-danger btn-sm">
                    <i className="fas fa-trash" /> Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const levelToString = (level) => {
  const levelMap = {
    0: "Low",
    1: "Medium",
    2: "High",
  };
  return levelMap[level] || "Unknown";
};
export default Table;
