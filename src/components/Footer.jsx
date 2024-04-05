import React from 'react';
import { FaFacebook, FaInstagram, kedin, FaYoutube, FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='flex flex-col border-t border-gray-500 '>


            <div className='w-full max-w-7xl m-auto'>

                <div className=' flex justify-between flex-wrap gap-10 px-5 py-10'>
                    <div>
                        <img className='w-[250px]' src="/pop-planet-logo.png" alt="" />
                    </div>


                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl text-[#ee6c4d]'>About Us</h2>
                        <a href="#">Media Center</a>
                        <a href="#">Foundation</a>
                        <a href="#">Investors</a>
                        <a href="#">Policies</a>
                        <a href="#">Careers</a>



                    </div>





                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl text-[#ee6c4d]'>Need Help?</h2>
                        <a href="#">FAQ</a>
                        <a href="#">Contact Us</a>
                        <a href="#">International</a>


                    </div>




                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl text-[#ee6c4d]'>Social</h2>

                        <div className='flex gap-3'>
                            <a href="#">
                                <span><FaYoutube size={30} /></span>
                            </a>
                            <a href="#">
                                <span>
                                    < FaSquareXTwitter size={30} />

                                </span>
                            </a>

                            <a href="#">
                                <span>< FaLinkedin size={30} /></span>
                            </a>

                            <a href="#">
                                <span>< FaInstagram size={30} /></span>
                            </a>

                        </div>

                    </div>




                </div>




                <div className='p-5 w-full  text-center border-t border-gray-500'>
                    <code>&#169; Arpit Singh. All right reserved.</code>
                </div>



            </div>





        </div>
    );
}

export default Footer;
