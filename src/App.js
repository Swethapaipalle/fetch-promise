import React, { useState, useEffect } from "react";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiData=fetch(`https://jsonplaceholder.typicode.com/users`).then((response) =>
      response.json()
    );
    console.log("apiData",apiData)
    const results=Promise.all([apiData]).then(res=>{setData(res[0])})
  
  }, []);
console.log("data", data)
  return (
    <div className="App">
      <table>
        {data.map((item, index) => {
          console.log("item", item);
          return (
            <tr key={index}>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          );
        })}
      </table>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}