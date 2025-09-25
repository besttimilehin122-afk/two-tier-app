import { useEffect, useState } from "react";

function Data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://54.195.219.233:5000//data")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((err) => console.error("API call error:", err));
  }, []);

  return (
    <div>
      <h1>
        Hi there I am here to test my two tier application. Hope this works
        lol😂
      </h1>
      {data ? <div>{data.message}</div> : "Loading..."}
    </div>
  );
}

export default Data;
