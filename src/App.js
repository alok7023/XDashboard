import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    image:
      "https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg",
  });
  const [userId, setUserId] = useState(null);
  const fetchData = async (id) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      console.log(response.data.data);
      const userData = response.data.data;
      setUser({
        name: userData.first_name + " " + userData.last_name,
        email: userData.email,
        image: userData.avatar,
      });
    } catch (error) {
      alert("Failed to fetch data");
    }
  };
  useEffect(() => {
    fetchData();
  }, [userId]);
  return (
    <div className="App">
      <h1 style={{ marginLeft: "20px" }}>User Dashboard</h1>
      <button onClick={(e) => fetchData(e.target.innerText)}>{1}</button>
      <button onClick={(e) => fetchData(e.target.innerText)}>{2}</button>
      <button onClick={(e) => fetchData(e.target.innerText)}>{3}</button>
      <button onClick={(e) => fetchData(e.target.innerText)}>{100}</button>
      <ul>
        <li>Email: {user.email}</li>
        <li>Name: {user.name}</li>
      </ul>
      <img src={user.image} alt={user.name} />
    </div>
  );
}

export default App;
