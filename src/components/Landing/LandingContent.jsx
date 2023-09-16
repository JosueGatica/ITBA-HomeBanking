import React from 'react'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../styles/LandingContent.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../img/3d-casual-life-guy-shopping-online.png'
import img2 from '../img/experimental-3d-morphis-finance-grow-1.png'
import img3 from '../img/3d-flame-man-presenting-business-idea-on-laptop.png'
import img4 from '../img/3d-casual-life-mobile-banking-cashback.png'
import img5 from '../img/3d-casual-life-man-using-laptop-with-statistics-chart-on-background.png'
import img6 from '../img/3d-business-cash-and-coins.png'
import img7 from '../img/business-3d-bitcoin-mining-with-phone.png'
import img8 from '../img/casual-life-3d-side-view-of-white-calculator.png'
import i1 from '../img/icons8-gráfico-circular-94.png'
import i2 from '../img/icons8-account-94.png'
import i3 from '../img/icons8-card-94.png'
import i4 from '../img/icons8-fund-accounting-94.png'
import i5 from '../img/icons8-calculadora-94.png'

const LandingContent = () => {

    const [rates, setRates] = useState([])
    const [userInput, setUserInput] = useState('')
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('')
  
    useEffect(() => {
      fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
        .then((data) => setRates(data["rates"]))
        .catch((error) => console.log("El error es " + error))
    }, [])
    console.log(rates);
  
    /* Recorto los valores del objeto para capturar SOLAMENTE las keys y utilizarlas en el select */
    const ratesAbreviaturas = {}
  
    Object.keys(rates).forEach((moneda) => {
      ratesAbreviaturas[moneda] = null
    })
  
  /* Recorto los valores de cada key del objeto para que queden 2 decimales */
    const cotizacionesRecortadas = {}
    for(const [abreviatura, valor] of Object.entries(rates)) {
      cotizacionesRecortadas[abreviatura] = parseFloat(valor.toFixed(2))
    }

  return (
    <main>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='swiper-contenido'>
                <div className='flex flex-col'>
                    <h2 className='sm:text-xl 2xl:text-5xl text-center'>¡Aprovecha Nuestros Beneficios!</h2>
                    <p className="mt-3 sm:text-sm 2xl:text-xl text-center">Acumulá puntos ITBA con tus compras con tarjeta de créditos y cambialos por distintos beneficios</p>
                    <p className="fs-5 sm:text-sm 2xl:text-xl text-center ">Hacete miembro ITBA y recibí tu tarjeta de crédito <span className='font-black'>100% bonificada.</span></p>
                    <div className='swiper-button flex flex-col gap-1 mt-5'>
                        <button>Hacete Miembro</button>
                        <button>Conoce los Beneficios</button>
                    </div>
                </div>
                <div className='swiper-img'>
                    <img src={img1} alt='guy shopping online'/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swiperSlide2'>
            <div className='swiper-contenido'>
                <div className='flex flex-col'>
                    <h2 className='sm:text-xl 2xl:text-5xl text-center'>¡Impulsamos Todos los Negocios!</h2>
                    <p className="mt-3 sm:text-sm 2xl:text-xl text-center">Conoce todas nuestras propuestas para <span class="font-black">Comercios, Pymes, Empresas y el Agro</span></p>
                    <div className='swiper-button mt-5'>
                        <button>Conoce las Propuestas</button>
                    </div>
                </div>
                <div className='swiper-img'>
                    <img src={img2} alt='finance grow'/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='swiperSlide3'>
            <div className='swiper-contenido'>
            <div className='flex flex-col'>
                    <h2 className='sm:text-xl 2xl:text-5xl text-center'>¡Gestiona tus otras cuentas sin salir de ITBA!</h2>
                    <p className="mt-3 sm:text-sm 2xl:text-xl text-center">Descubrí la nueva funcionalidad que te permite ingresar el dinero de las cuentas de tus otros bancos, ¡sin salirte de ITBA!</p>
                    <div className='swiper-button mt-5'>
                        <button>Conoce Más</button>
                    </div>
                </div>
                <div className='swiper-img'>
                    <img src={img3} alt='man with laptop'/>
                </div>
            </div>
        </SwiperSlide>
        </Swiper>

        <div class="contenedor-items w-100 mt-5 flex justify-center ">
        <div class="items-logo flex justify-center gap-3 flex-wrap">
            <a href="" class="item-link text-center">
            <div class="item-icon flex flex-col items-center justify-end">
                <img class="item-img" src={i1} alt="Discount icon" />
                <p class="item-text">Promociones</p>
            </div>
            </a>
            <a href="" class="item-link text-center">
            <div class="item-icon flex flex-col items-center content-end">
                <img class="item-img " src={i2} alt="Discount icon" />
                <p class="item-text">Cuentas</p>
            </div>
            </a>
            <a href="" class="item-link text-center">
            <div class="item-icon flex flex-col items-center content-end">
                <img class="item-img" src={i3} alt="Discount icon" />
                <p class="item-text">Tarjetas</p>
            </div>
            </a>
            <a href="" class="item-link text-center">
            <div class="item-icon flex flex-col items-center content-end">
                <img class="item-img" src={i4} alt="Discount icon" />
                <p class="item-text">Préstamos</p>
            </div>
            </a>
            <a href="#conversor" class="item-link text-center">
            <div class="item-icon flex flex-col items-center content-end">
                <img class="item-img" src={i5} alt="Discount icon" />
                <p class="item-text text-center">Conversor</p>
            </div>
            </a>
        </div>
    </div>

    <div className="divisor flex justify-center items-center">
        <div className="divisor-contenido flex items-center gap-5">
            <img src={img4} alt="Phone with banking cashback" />
            <div className="divisor-texto">
                <h5 className='font-bold'>¿Qué estás esperando para convertirte en un miembro ITBA?</h5>
                <p class="text-slate-500 text-center ">Sacá tu tarjeta y viaja por Argentina y el mundo.</p>
            </div>
            <button>Conocé más</button>
        </div>
    </div>

    <div className="seccion-finanzas">
        <div className="finanzas-texto w-100">
            <h2 className="font-bold text-center">Manejá tus finanzas mucho más fácil, rápido y seguro.</h2>
            <p className="text-slate-500 text-center">Tenemos todas las soluciones y herramientas para vos.</p>
        </div>
    </div>

    <div className='flex justify-center'>
    <div className="container justify-center">
        <div className="contenido1">
            <div className="contenido1-img flex justify-center">
                <img src={img5} alt="man using laptop" />
            </div>
            <div>
                <h2 className="font-bold text-center">¡Gestioná tus cuentas sin salir de ITBA!</h2>
                <p className="text-slate-500 text-center italic">Descubrí la nueva funcionalidad que te permite ingresar el dinero de las cuentas de tus otros bancos, ¡sin salirte de ITBA!</p>
            </div>
        </div>
        <div className="contenido2">
            <div className="flex items-center pt-5">
                <div className="contenido2-img h-100 flex items-center justify-center">
                    <img src={img6} alt="Finance Health Illustration" />
                </div>
                <div className="contenido2-texto flex flex-col justify-center ps-5 gap-2">
                    <p className="font-bold">Salud Financiera</p>
                    <p className="text-slate-500 w-75 italic">Podés controlar día a día el estado de tus cuentas.</p>
                    <a className="font-bold text-blue-700">Conoce más</a>
                </div>
            </div>
        </div>
        <div className="contenido3">
            <div className="flex h-100">
                <div className="contenido3-img h-100 flex items-center justify-center">
                    <img src={img7} alt="Mobile phone with chart and statistics" />
                </div>
                <div className="contenido2-texto flex flex-col  justify-center ps-5 gap-2">
                    <p className="font-bold">App ITBA</p>
                    <p className="text-slate-500 w-75 italic">Descargá la App y empezá a hacer tus operaciones más simples y seguras.</p>
                    <a className="font-bold text-blue-700">Conoce más</a>
                </div>
            </div>
        </div>
    </div>
    </div>

    <div className="hero bg-base-200 mt-32">
  <div className="hero-content flex-col lg:flex-row gap-10">
    <img src={img8} className='rounded-lg max-w-[15%] shadow-2xl' />
    <div>
      <h1 className="text-5xl font-bold text-white">Conversor de Moneda</h1>
      <p className="py-6 text-slate-100">Selecciona la moneda a convertir.</p>
      <select className='bg-white' value={opcionSeleccionada} onChange={(e) => setOpcionSeleccionada(e.target.value)}>
                    <option value={''}>Selecciona Una Moneda</option>
                        {
                            Object.keys(ratesAbreviaturas).map((clave) => (
                            <option key={clave} value={clave}>{clave}</option>
                            ))
                        }
                </select>
                <input className='mt-3 bg-white' style={{height:'30px'}} type='number' onChange={(e) => setUserInput(e.target.value)}/>
                <h2 className='text-slate-500 text-4xl mt-2'>Precio ${userInput > 0 ? cotizacionesRecortadas[opcionSeleccionada] * userInput : ''} ARS</h2>
    </div>
  </div>
</div>

    <div >
        <div className='bg-white max-h-5 text-white'>---</div>
    </div>

    </main>
  )
}

export default LandingContent