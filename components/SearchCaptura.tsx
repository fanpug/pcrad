"use client";

import React, {useState, useEffect} from "react";

import Spinner from "./ui/Spinner";

function SearchCaptura() {
  //setear los hooks useState
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  
  //función para traer los datos de la API
  const URL = "https://jsonplaceholder.typicode.com/users";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    //console.log(data)
    setUsers(data);
  };
  //función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  //metodo de filtrado
  const results = !search ? users : users.filter((dato)=> dato.name.toLowerCase().includes(search.toLocaleLowerCase()));

  useEffect(() => {
    showData();
  }, []);

  //renderizamos la vista
  return (
    <div className="">
      <input
        type="text"
        value={search}
        onChange={searcher}
        placeholder="Buscar docentes"
        className="bg-gray-50 border border-gray-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
      />
      <div className="overflow-x-auto flex mt-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="">
              <th>NAME</th>
              <th>USER NAME</th>
            </tr>
          </thead>
          <tbody>
            {results.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchCaptura;
