import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import { Loader } from '../../Heroes/Components/Loader'
import { useEffect } from 'react'
import hulk from '../../assets/hulk.png'
import batman from '../../assets/batman.png'


const LoginPage = () => {
  const navigation = useNavigate()
  const Login = () => {
    navigation("/inicio", {
      replace: true
    })
  }
const [load, setLoad] = React.useState(true)

  useEffect(() => {
    setTimeout(function () {
      setLoad(false)
    }, 2000);
  }, [])
  
   

  
  return (


    <>
      {load&& <div className='w-screen h-screen flex justify-center items-center bg-black'><Loader /></div>}
      {!load &&

      <div className='grid grid-cols-3 grid-rows-[(200px,_1fr)] w-screen h-screen'>



        <div className='col-start-1 col-end-4 row-start-1 row-end-2 w-full h-16 flex justify-center items-center'>
          <h1 className='text-black text-lg p-3'>MARVEL VS DC</h1>
        </div>

        <div className={`batman-login w-full  h-[700px] col-start-1 col-end-2 row-start-2 row-end-3  bg-center bg-no-repeat bg-contain`}
        ><img src={batman}alt='Batman'/></div>

        <div className='flex justify-center w-full max-w-sm h-screen col-start-2 col-end-3 row-start-2 row-end-3'>

          <button className='button-login w-20 h-15 p-2 border-solid border-2 border-red-500 bg-black text-white font-semibold font-mono text-sm  self-center  md:text-3xl md:w-40 hover:scale-75 delay-150 duration-300'
            onClick={Login}
          >Ingresar</button>

        </div>


        <div className='hulk-login col-start-3 col-end-4 row-start-2 row-end-3 w-full h-[800px] bg-center bg-no-repeat bg-contain'><img src={hulk} alt='Hulk'/></div>



      </div>}
    </>
  )
}

export { LoginPage }