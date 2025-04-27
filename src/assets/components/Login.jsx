import React from 'react'
import { Link } from 'react-router-dom'
import InputBox from './InputBox'

Link

const Login = () => {
    return (
        <div className='px-5 pb-70 '>
            <div className=' w-[231px] mt-10'>
                <h1 className=' text-[24px] text-left text-[#1D2226] font-medium leading-9'>Signin to your <br /> PopX account </h1>

                <p className='text-[#1D2226] opacity-60 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className='mt-4'>

                <InputBox name="Email Address" type='email' placeholder="Enter email address" requireStar={false} />
                <InputBox name="Password" type='password' placeholder="Enter password" requireStar={false} />

            </div>
            <Link to="/account">
                <button className='bg-[#CBCBCB] w-full text-center text-sm text-white p-2 rounded-[6px] mt-2  font-medium cursor-pointer opacity-100'>Login</button>
            </Link>

        </div >
    )
}

export default Login