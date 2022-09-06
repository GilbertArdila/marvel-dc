import React from 'react'
import { useMyStates } from '../../Heroes/Components/CustomHooks'
import  './Modal.css'

const Modal = ({image1,image2,image3,name}) => {



   
    return (
        <div className='modal flex justify-center absolute w-full h-3/4 bg-black  z-10'>
            <div className="modal_container gid  relative bg-black  w-full h-full "
           >
                <div className="modal_content_slider w-full h-full ">
                    <input type="radio" name="slider-1" id="radio-1" defaultChecked  className='hidden'/>
                    <input type="radio" name="slider-1" id="radio-2" className='hidden'/>
                    <input type="radio" name="slider-1" id="radio-3" className='hidden' />

                    <div className="cards relative w-full h-full">
                        <label htmlFor="radio-1" className="card absolute w-1/2 h-full left-0 right-0 my-0 mx-auto cursor-pointer grid items-center" id="card-1">
                            <img src={image1} alt={name} id="radio-1_img"  className='w-full max-h-[350px]'/>
                        </label>
                        <label htmlFor="radio-2" className="card absolute w-1/2 h-full left-0 right-0 my-0 mx-auto cursor-pointer grid items-center" id="card-2">
                            <img src={image2} alt={name} id="radio-2_img" className='w-full max-h-[350px] ' />
                        </label>
                        <label htmlFor="radio-3" className="card absolute w-1/2 h-full left-0 right-0 my-0 mx-auto cursor-pointer grid items-center" id="card-3">
                            <img src={image3} alt={name} id="radio-3_img" className='w-full max-h-[350px] '/>
                        </label>
                    </div>
                </div>
                
            </div>
        </div>


    )
}

export { Modal }