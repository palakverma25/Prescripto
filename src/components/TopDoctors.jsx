import React from 'react'
import { useContext } from 'react'
// import { doctors } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate=useNavigate()
    const {doctors}=useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sw:w-1/3 text-center text-sm'>Simply browse through our list of trusted doctors.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0,8).map((item,index)=>(
            <div onClick={() => {navigate(`/appointment/${item._id}`);scrollTo(0,0)}} className='border border-violet-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'key={index}>
                <img className='bg-violet-50' src={item.image} alt="" />
                <div className='p-4'> 
                    <div className='flex items-center gap-2 text-sm text-center text-green-500 rounded-full'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p> {/*doctors name*/}
                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
            </div>
        ))}
      </div>
      <button onClick={() => {navigate('/doctors'); scrollTo(0,0)}} className='bg-violet-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
    </div>
  )
}

export default TopDoctors