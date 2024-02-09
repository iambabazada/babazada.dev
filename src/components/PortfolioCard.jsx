import React from 'react'
import { Link } from 'react-router-dom'
import { FiExternalLink } from "react-icons/fi";

const PortfolioCard = ({ data }) => {
    return (
        <div className='w-full grid grid-cols-2 max-[972px]:grid-cols-1 items-center gap-8'>
            <div className={`w-full ${data?.id % 2 == 0 ? 'order-1' : ''} max-[972px]:order-none`}>
                <img src={data?.img} className='w-full rounded-md' alt="" />
            </div>
            <div className="portfolio_card_content  flex justify-start text-start ">
                <div className='flex flex-col gap-6'>
                    <div className=' text-2xl space-y-6 font-semibold text-primary'>
                        <p>
                            {data?.title}
                        </p>
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
                        <Link to={data?.url} className='flex  justify-center gap-2'>
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