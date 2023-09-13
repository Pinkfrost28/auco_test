"use client"
import { useState } from 'react';

const AboutPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageName) => {
        setSelectedImage(imageName);
    };

    let stageDescription = '';

    switch (selectedImage) {
        case 'Pasado':
            stageDescription = "Cuando Laura era tan solo una niña, ya era una apasionada por la tecnología, amante de los videojuegos siempre se cuestionaba como se hacían estos y que había detrás, esto la llevó a investigar y a conocer el mundo de la programación"
            break;
        case 'Presente':
            stageDescription = 'Laura decide estudiar ingenieria de sistemas, le apasiona pero no podía decidirse si le gustaba más el front o el back, Laura se da cuenta que lo más le gusta es hacer funcionar las cosas que tiene en mente, pero también que se vean estéticas, es por eso que prefiere enfocarse en el front, pero ella es conciente que todavía tiene mucho que aprender en sus buenas practicas y sobre todo en estilos, Laura está dispuesta a estudiar lo necesario  y así poder aprobar la prueba técnica para AUCO';
            break;
        case 'Futuro':
            stageDescription = 'Laura ahora trabaja para AUCO, empresa con la que siempre estará agradecida por darle la oportunidad de tener su primer empleo y seguir creciendo en lo que más le apasiona, Laura ahora tiene un gran conocimiento sobre estilos y nuevas tecnologías, pero aquí no acaba todo, porque ella es una mujer soñadora que siempre espera mejorar sus conocimientos. PD: Laura también pudo comprar la moto de sus sueños';
            break;
        default:
            stageDescription = '';
    }

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-3xl font-semibold mb-4">SELECCIONA UNA ETAPA DE LA VIDA DE LAURA</h1>
            <p className="text-gray-600 mb-8">
                Aquí podrás elegir alguna etapa en la vida de Laura Machetá, pasado, presente o futuro.
            </p>
            <div className="flex space-x-4">
                <img
                    src="/pasado.jpg"
                    alt="Pasado"
                    onClick={() => handleImageClick('Pasado')}
                    className={`cursor-pointer transition-transform duration-300 ease-in-out ${selectedImage === 'Pasado' ? 'border-4 border-indigo-500' : ''
                        }`}
                    style={{ maxWidth: '200px' }}
                />
                <img
                    src="/presente.jpg"
                    alt="Presente"
                    onClick={() => handleImageClick('Presente')}
                    className={`cursor-pointer transition-transform duration-300 ease-in-out ${selectedImage === 'Presente' ? 'border-4 border-indigo-500' : ''
                        }`}
                    style={{ maxWidth: '200px' }}
                />
                <img
                    src="/futuro.jpg"
                    alt="Futuro"
                    onClick={() => handleImageClick('Futuro')}
                    className={`cursor-pointer transition-transform duration-300 ease-in-out ${selectedImage === 'Futuro' ? 'border-4 border-indigo-500' : ''
                        }`}
                    style={{ maxWidth: '200px' }}
                />
            </div>
            {selectedImage && (
                <div className="mt-4 mx-auto w-[400px] p-4 bg-gray-300 rounded-lg text-center">
                    <h2 className="text-xl font-semibold mb-2">Etapa: {selectedImage}</h2>
                    <p>{stageDescription}</p>
                </div>
            )}
        </div>
    );
};

export default AboutPage;