import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTask, setSearchTerm } from "../../redux/actions";

function Search() {
  const showTaskComponent = useSelector(
    (state) => state.data.showTaskComponent
  );
  const dispatch = useDispatch();
  const [localSearchTerm, setLocalSearchTerm] = React.useState("");

  const handleToggle = () => {
    dispatch(toggleTask());
  };

  const handleSearchChange = (event) => {
    setLocalSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    dispatch(setSearchTerm(localSearchTerm));
  };

  return (
    <div>
      <div className="col-12">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={localSearchTerm}
                onChange={handleSearchChange}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handleSearchSubmit}
                >
                  Go!
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3">
            <div className="row">
              <div className="col-6">
                <div className="btn-group custom-border-button w-100">
                  <button type="button" className="btn">
                    Action
                  </button>
                  <button
                    type="button"
                    className="btn dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-warning w-100">
                  Info
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 mb-3">
            <button
              className={`btn w-100 ${
                showTaskComponent ? "btn-danger" : "btn-primary"
              }`}
              type="button"
              onClick={handleToggle}
            >
              {showTaskComponent ? "Hide Task" : "Add Task"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
