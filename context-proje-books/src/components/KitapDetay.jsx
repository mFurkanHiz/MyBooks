import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { KITAP_DETAY_URL } from "../API";

function KitapDetay() {
  const { id } = useParams();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${KITAP_DETAY_URL}/${id}`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="container">
      <h1 className="display-2">{books.title}</h1>
      <div className="row">
        <div className="col-md-4 my-5">
          <img src={books.image_url} alt="" />
        </div>
        <div className="col-md-8 my-5">
          <h2>Yazar Adı: {books.authors}</h2>
          <h3>Özet</h3>
          <p>{books.description}</p>
        </div>
      </div>
    </div>
  );
}

export default KitapDetay;
