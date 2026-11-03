import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {

    return (
        <div id='right' className='h-full w-2/3 p-6 flex flex-nowrap gap-10 overflow-auto rounded-4xl'>
            {props.users.map((ele, index) => {
                return <RightCard key={index} id={index} img={ele.img} tag={ele.tag} intro={ele.intro} color={ele.color} />
            })}
        </div>
    )
}

export default RightContent
