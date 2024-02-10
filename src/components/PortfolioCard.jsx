import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight } from "react-icons/fi";

const PortfolioCard = ({ data }) => {
    return (
        <div className='w-full grid grid-cols-2 max-[972px]:grid-cols-1 items-center gap-8'>
            <div className={`w-full ${data?.id % 2 == 0 ? 'order-1' : ''} max-[972px]:order-none`}>
                <img src={data?.img} className='w-full rounded-md' alt="" />
            </div>
            <div className="portfolio_card_content  flex justify-start text-start ">
                <div className='flex flex-col gap-6'>
                    <div className='space-y-6 font-semibold text-primary'>
                        <Link to={data?.url} className='text-3xl flex items-center gap-2'>
                            {data?.title} <FiArrowUpRight />
                        </Link>
                        <p className='text-black font-light text-sm'>
                            {data?.description}
                        </p>
                    </div>

                    <div className='flex gap-4 mt-6 '>
                        {data?.technology?.map((item, index) => (
                            <span key={index} class="whitespace-nowrap rounded-sm bg-primary px-2.5 py-0.5 text-sm text-white">
                                {item}
                            </span>
                        ))}
                    </div>
                    <div>
                        <Link to={data.github}>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default PortfolioCard