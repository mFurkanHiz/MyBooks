import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../API";
import { AppContext } from "../context/GlobalContext";

function KitapListesi() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const { favoriler, favorilereEkle, favorilerdenCikar } =
    useContext(AppContext);

  const favoriKontrol = (x) => {
    const secim = favoriler.some((falan) => falan.id == x);
    return secim;
  };
  // hook
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <div className="row">
          {books.map((book, index) => (
            <div className="col-md-4 my-3 ">
              <div
                className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                style={{ width: "22rem", height: "550px" }}
              >
                <img
                  src={book.image_url}
                  className="card-img-top m-auto"
                  alt="..."
                  style={{ height: "300px", cursor: "pointer", width: "200px" }}
                  onClick={() => navigate(`kitap/${book.id}`)}
                />
                <div className="card-body">
                  <h6 className="card-title">{book.title}</h6>
                  <p className="card-text">
                    Tür: {book.genres.slice(0, 50)}...
                  </p>
                  <p className="card-text">{book.authors}</p>
                  {favoriKontrol(book.id) ? (
                    <button
                      className="btn btn-danger "
                      onClick={() => favorilerdenCikar(book.id)}
                    >
                      FAVORİLERDEN ÇIKAR
                    </button>
                  ) : (
                    <button
                      className="btn btn-warning "
                      onClick={() => favorilereEkle(book)}
                    >
                      FAVORİLERE EKLE
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KitapListesi;
