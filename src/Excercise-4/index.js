import { useState, useEffect } from "react";
function Robohash() {
  const [input, setInput] = useState("");
  const [images, setImages] = useState([]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    setImages(`https://robohash.org/${input}`);
  }, [input]);

  return (
    <div>
      <label>Robohash:
        <input type="text" value={input} onChange={handleChange} />
      </label>
       {input?<img src={images} alt="img" />:"No Data"}
    </div>
  );
}
export default Robohash;
