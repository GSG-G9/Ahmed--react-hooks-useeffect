import { useState, useEffect } from "react";

const Giphy = () => {
  const [input, setInput] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC`
    )
      .then((res) => res.json())
      .then((res) => {
        setImages(res.data.slice(0, 10));
      });
  }, [input]);

  const handelValue = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  console.log(images);
  return (
    <div>
      <label>
        Giphy:
        <input onChange={handelValue} type="text" />
      </label>
      {images.length > 0 ? (
        images.map((image) => <img src={image.images.preview_gif.url} alt="Giphy" />)
      ) : (
        <p style={{ hight: "100px", display: "block", color: "Red" }}>
          Sorry No Data
        </p>
      )}
    </div>
  );
};

export default Giphy;
