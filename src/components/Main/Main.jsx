import React from "react";
import Search from "./Search";
import Task from "./Task";
import Table from "./Table";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRawData } from '../../redux/actions';

const Main = () => {
    const dispatch = useDispatch();
    const rawData = useSelector((state) => state.data.rawData);
    const showTaskComponent = useSelector(state => state.data.showTaskComponent);
    useEffect(() => {
        const initialData = [
          { id: 1, name: 'John Doe', level: 0 },
          { id: 2, name: 'Jane Smith', level: 1 },
          { id: 3, name: 'William Black', level: 2 }
        ];
        dispatch(setRawData(initialData));
      }, [dispatch]);
  return (
    <div>
      {/* Your component content goes here */}
      <main>
        <div className="row">
          {/* Search */}
          <Search />
          {/* Task */}
          {showTaskComponent && <Task />}
          {/* tableTask */}
          <Table data={rawData} />
        </div>
      </main>
    </div>
  );
};


export default Main;
