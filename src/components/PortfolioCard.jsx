import React from 'react'
import { Link } from 'react-router-dom'
import { FiExternalLink } from "react-icons/fi";

const PortfolioCard = ({ data }) => {
    return (
        <div className='w-full grid grid-cols-2  items-center gap-8'>
            <div className={`w-full ${data?.id % 2 == 0 ? 'order-1' : ''}`}>
                <img src={data?.img} className='w-full rounded-md' alt="" />
            </div>
            <div className="portfolio_card_content  flex justify-start text-center ">
                <div className='flex flex-col gap-6'>
                    <div className=' text-xl font-semibold text-primary'>
                        {data?.title}
                        <p className='text-black text-sm'>
                            {data?.description}
                        </p>
                    </div>

                    <div className='flex gap-4 mt-6 justify-center'>
                        {data?.technology?.map((item, index) => (
                            <span className='bg-secondary text-white rounded py-2 px-4'>{item}</span>
                        ))}
                    </div>
                    <div>
                        <Link to={data?.url} className='flex items-center gap-2'>
                            live demo <FiExternalLink />
                        </Link>
                        <Link to={data.github}>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PortfolioCard