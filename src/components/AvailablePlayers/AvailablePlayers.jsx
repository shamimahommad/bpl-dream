import React, { use } from 'react';
import userImg from "../../assets/Group.png"
import countryFlag from "../../assets/country_flag.png"

const AvailablePlayers = ({ playersPromise }) => {
    const playerData = use(playersPromise);
    console.log(playerData);

    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>

            {
                playerData.map(player => <div className="card p-4 bg-base-100  shadow-sm">
                    <figure>
                        <img className='w-full h-[300px] object-cover'
                            src={player.player_image}
                            alt="Shoes" />
                    </figure>
                    <div className="mt-4">
                        <div className='flex'>
                            <img src={userImg} alt="" />
                            <h2 className="card-title ml-2">{player.player_name}</h2>
                        </div>
                        <div className='flex justify-between mt-4 border-b-1 border-gray-400 pb-2'>
                            <div className='flex items-center'>
                                <img className='w-[20px] h-[20px]' src={countryFlag} alt="" />
                                <span className='ml-2'>{player.player_country}</span>
                            </div>
                            <button className='btn'>{player.playing_role}</button>
                        </div>

                        <div className='flex font-bold justify-between'>
                            <span>Rating</span>
                            <span>{player.rating}</span>
                        </div>
                        <div className='flex  justify-between mt-4'>
                            <span className='font-bold'>{player.bating_style}</span>
                            <span>{player.bowling_style}</span>
                        </div>

                        <div className="card-actions mt-4 flex justify-between items-center">
                            <p className='font-bold'>Price: $ {player.price}</p>
                            <button className="btn ">Choose Player</button>
                        </div>
                    </div>
                </div>)
            }


        </div>
    );
};

export default AvailablePlayers;