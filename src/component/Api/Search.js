import axios from "axios";
import React, { useEffect, useState } from "react";

function Search() {
  const [search, setSearch] = useState(1);
  const [id, setId] = useState(1);
  const [data, setData] = useState([{}]);
  useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
}, [id]);
  return (
    <>
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search By id..."
        />
        <button onClick={()=>setId(search)}>Search</button>
      </div>
      <div className="product">
      {
        data.map((data)=>{
            return <div key={data.id} className=" cards">
                <h2>{data.name}</h2>
                <h4>{data.email}</h4>
                <p>{data.body}</p>
            </div>

        })
      }
      </div>
    </>
  );
}
export default Search;
