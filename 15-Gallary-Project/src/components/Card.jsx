import React from 'react'

const Card = (props) => {
    return (
        <div>

            <a href={props.ele.url} target='_blank'>
                <div className='h-52 w-full overflow-hidden bg-zinc-800 rounded-2xl shadow-lg border border-zinc-800 transition-all duration-300 group-hover:border-amber-400/50 group-hover:shadow-amber-400/10'>
                    <img
                        className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
                        src={props.ele.download_url}
                        alt=""
                    />
                </div>
                <h2 className='font-bold text-base text-gray-300 mt-3 mb-1 truncate transition-colors duration-300 group-hover:text-amber-400'>
                    {props.ele.author}
                </h2>
            </a>
        </div>
    )
}

export default Card