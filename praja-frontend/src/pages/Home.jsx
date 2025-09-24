import Shops from "./Shops";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-6 text-orange-500">
        Bem-vindo ao Prajá!
      </h1>
      <Shops />
    </div>
  );
}
