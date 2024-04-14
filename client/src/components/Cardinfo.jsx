import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Review from './Review';
import hbg from '../../src/images/homebg2.svg'
import Navbar from './Navbar';

const Cardinfo = () => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5005/games/gameinfo/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch game details');
        }
        const gameData = await response.json();
        setGameDetails(gameData);
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };

    fetchGameDetails();
  }, [id]);

  return (
    <>
    <Navbar />
    <div className="bg-black bg-opacity-50 bg-cover bg-center min-h-screen flex flex-col justify-center items-center"  style={{
      backgroundImage: `url(${hbg})`}}>
      {gameDetails ? (
        <div className='relatiev'>
        <div className="game-details flex flex-wrap justify-center items-start">
          <h2 className='text-start p-10 font-body3 text-white' style={{ fontSize: '60px' }}>{gameDetails.name}</h2>
          </div>
          <div className="game-details flex flex-wrap justify-center items-start">
  <div className='relative px-10'>
    <img src={gameDetails.background_image} alt={gameDetails.name} className='h-80 w-auto mb-8 mx-auto rounded-2xl drop-shadow-[0px_4px_6px_rgba(0,0,0,0.5)]' />
  </div>
  <div className='font-body3 text-white text-lg bg-white bg-opacity-50 p-3 rounded-2xl w-96'>
    <p className='pb-1 sm:ml-2'>Release Year: {new Date(gameDetails.released).getFullYear()}</p>
    <p className='pb-1 sm:ml-2'>Playtime: {gameDetails.playtime} hours</p>
    <p className='pb-1 sm:ml-2'>Platforms: {gameDetails.platforms.join(', ')}</p>
    <p className='pb-1 sm:ml-2'>Rating: {gameDetails.rating}</p>
    <p className='pb-1 sm:ml-2'>Metacritic Score: {gameDetails.metacritic}</p>
    <p className='pb-1 sm:ml-2'>Genres: {gameDetails.genres.join(', ')}</p>
    <p className='pb-1 sm:ml-2'>Developers: {gameDetails.developers.join(', ')}</p>
  </div>
</div>
          <div className='text-center font-body3 text-white text-6xl pt-4' style={{ fontSize: '35px' }}>SCREENSHOTS
          <div className="relative flex items-center pt-12">
          <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
            {gameDetails.short_screenshots.map((screenshot, index) => (
              <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} className='inline-block h-60 w-auto mx-auto p-2 rounded-2xl drop-shadow-[0px_4px_6px_rgba(0,0,0,0.5)] hover:scale-95 transition duration-150 ease-in-out'/>
            ))}
            </div>
          </div>
          </div>
          </div>
      ) : (
        <p>Loading...</p>
      )}
    <Review gameId={id} />
    </div>
    </>
  );
};

export default Cardinfo;
