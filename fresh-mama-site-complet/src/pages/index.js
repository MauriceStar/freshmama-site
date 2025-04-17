
import { useState } from "react";
import { ShoppingCart, PhoneCall } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Fresh Mama Bio 1.5L",
    price: 2000,
    volume: "1.5L",
    description: "Liqueur de vin de palme 100% bio.",
    image: "/images/fresh1500.png",
  },
  {
    id: 2,
    name: "Fresh Mama Bio 1L",
    price: 1200,
    volume: "1L",
    description: "Liqueur de vin de palme 100% bio.",
    image: "/images/fresh1000.png",
  },
  {
    id: 3,
    name: "Fresh Mama Bio 25L",
    price: 25000,
    volume: "25L",
    description: "Liqueur de vin de palme 100% bio - format économique.",
    image: "/images/fresh25000.png",
  },
];

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const checkout = () => {
    const message = cart.map(p => `- ${p.name} (${p.volume}) : ${p.price} F CFA`).join("%0A");
    const total = cart.reduce((acc, p) => acc + p.price, 0);
    window.open(`https://wa.me/22890354241?text=Bonjour%2C%20je%20souhaite%20commander%20:%0A${message}%0ATotal%20:%20${total}%20F%20CFA`, "_blank");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Boutique Fresh Mama</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="rounded-2xl shadow-md border p-4 space-y-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-contain rounded-xl"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-lg font-bold text-green-600">
              {product.price} F CFA
            </p>
            <button onClick={() => addToCart(product)} className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded-xl flex justify-center items-center">
              <ShoppingCart className="mr-2 h-5 w-5" /> Ajouter au panier
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-20 right-4">
          <button
            onClick={checkout}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full shadow-lg"
          >
            Finaliser la commande ({cart.length})
          </button>
        </div>
      )}

      <div className="fixed bottom-4 right-4">
        <a
          href="https://wa.me/22890354241"
          className="bg-green-600 text-white px-5 py-3 rounded-full flex items-center shadow-lg hover:bg-green-700"
        >
          <PhoneCall className="mr-2" /> Commander via WhatsApp
        </a>
      </div>
    </div>
  );
}
