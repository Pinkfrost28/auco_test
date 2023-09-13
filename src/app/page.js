import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-indigo-400 to-blue-500 text-white w-[700px] h-[500px] shadow-md rounded">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">¡Bienvenido a Mi Prueba Técnica</h1>
        <p className="text-lg mb-6">Aquí podrás encontrar los mejores posts y conocer más sobre mí.</p>
        <div className="space-x-4">
          <Link href="/posts" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md font-semibold transition duration-300 ease-in-out">  
              Ver Posts
          </Link>
          <Link href="/about" className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold transition duration-300 ease-in-out">
              Acerca de Mí
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
