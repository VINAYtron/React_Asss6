import React, { createContext, useState } from "react";

export const store = createContext();

const Detail = (props) => {
  const [students, setStudents] = useState([
    {
      Name: "Tron",
      Age: "21",
      Course: "HTML",
      Batch: "August",
      id: "1",
    },

    {
      Name: "Obito",
      Age: "22",
      Course: "Css",
      Batch: "September",
      id: "2",
    },
    {
      Name: "Drax",
      Age: "23",
      Course: "React",
      Batch: "December",
      id: "3",
    },

    {
      Name: "Lock",
      Age: "24",
      Course: "Nodejs",
      Batch: "January",
      id: "4",
    },
    {
      Name: "Jhon",
      Age: "25",
      Course: "Database",
      Batch: "April",
      id: "5",
    },
  ]);
  return (
    <div>
      <store.Provider value={[students, setStudents]}>
        {props.children}
      </store.Provider>
    </div>
  );
};

export default Detail;
