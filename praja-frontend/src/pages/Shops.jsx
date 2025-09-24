import { useEffect, useState } from "react";
import api from "../services/api.js";
import "../components/style.css";

export default function Shops() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    api
      .get("/shops", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setShops(res.data.shops))
      .catch((err) => {
        console.error(err);
        setShops(mockShops);
      });
  }, []);

  // Mock de lojas estilo delivery com nomes específicos
  const mockShops = [
    {
      id: 1,
      nome: "Lúcia Bolos",
      descricao: "Bolos caseiros e doces artesanais",
      foto: "https://picsum.photos/300/200?random=1",
      tempo: "25-35 min",
      taxa: "R$ 3,99",
    },
    {
      id: 2,
      nome: "Pizzaria Bella Massa",
      descricao: "Pizzas tradicionais e especiais",
      foto: "https://picsum.photos/300/200?random=2",
      tempo: "30-45 min",
      taxa: "R$ 4,99",
    },
    {
      id: 3,
      nome: "Burger House",
      descricao: "Hambúrguers artesanais e batatas",
      foto: "https://picsum.photos/300/200?random=3",
      tempo: "20-30 min",
      taxa: "R$ 2,99",
    },
    {
      id: 4,
      nome: "Sushi Yamato",
      descricao: "Sushi e comida japonesa fresca",
      foto: "https://picsum.photos/300/200?random=4",
      tempo: "35-50 min",
      taxa: "R$ 5,99",
    },
    {
      id: 5,
      nome: "Açaí da Praia",
      descricao: "Açaí cremoso e vitaminas naturais",
      foto: "https://picsum.photos/300/200?random=5",
      tempo: "15-25 min",
      taxa: "R$ 1,99",
    },
    {
      id: 6,
      nome: "Farmácia Saúde+",
      descricao: "Medicamentos e produtos de higiene",
      foto: "https://picsum.photos/300/200?random=6",
      tempo: "20-30 min",
      taxa: "R$ 2,99",
    },
    {
      id: 7,
      nome: "Padaria do Bairro",
      descricao: "Pães frescos e café da manhã",
      foto: "https://picsum.photos/300/200?random=7",
      tempo: "15-25 min",
      taxa: "R$ 2,49",
    },
    {
      id: 8,
      nome: "Mercado Express",
      descricao: "Produtos essenciais e hortifrúti",
      foto: "https://picsum.photos/300/200?random=8",
      tempo: "25-40 min",
      taxa: "R$ 3,49",
    },
  ];

  const displayShops = shops.length > 0 ? shops : mockShops;

  return (
    <div className="delivery-container">
      <header className="delivery-header">
        <h1>Lojas próximas a você</h1>
        <p>Entrega rápida na sua região</p>
      </header>

      <div className="shops-grid">
        {displayShops.map((shop) => (
          <div key={shop.id} className="shop-card">
            <div className="shop-image-container">
              <img
                src={shop.foto || "https://via.placeholder.com/150x100"}
                alt={shop.nome}
                className="shop-image"
              />
            </div>

            <div className="shop-info">
              <h3 className="shop-name">{shop.nome}</h3>
              <p className="shop-description">{shop.descricao}</p>

              <div className="shop-details">
                <span className="delivery-time">🕒 {shop.tempo}</span>
                <span className="delivery-fee">🚚 {shop.taxa}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
