import React from 'react'
import homeImage from '../assets/homePage.jpeg';
import {IconsContacto} from '../components/IconsContacto'




export const HomePage = () => {
    return (
        <div>

            <section style={{ backgroundImage: `url(${homeImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 className="text-center" style={{ fontSize: '5.5rem', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Massage Trainer Ibiza</h1>
                <h3 className="text-center" style={{ fontSize: '3.5rem', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Sergio Oyrigoyen</h3>
                <h2 className="text-center" style={{ fontSize: '2rem', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Quiromasaje / trainer</h2>
            </section>

            <section>

                <p className='text-center m-5 fs-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores libero molestiae, voluptate id ea atque, quia officia eligendi quidem sint adipisci architecto sapiente optio minima, aliquid explicabo nostrum ex ut!
                </p>

                <p className='text-center m-5 fs-2'>
                    Quaerat praesentium adipisci excepturi nobis minus eveniet ratione, modi atque magni alias qui consectetur ipsam delectus earum, vel numquam sapiente. Quas nulla eligendi unde eos quis aliquid sint! Harum, cupiditate.
                </p>

                <p className='text-center m-5 fs-2'>
                    Magnam, ut doloremque eaque rem non minima id corporis iusto itaque soluta, totam adipisci delectus praesentium deserunt dolore! Fugiat ipsum minima ullam in pariatur explicabo deleniti? Sapiente ex possimus atque?
                    Illo at inventore ipsa aperiam nobis, autem, animi recusandae blanditiis magni, obcaecati assumenda delectus? Libero, ab enim obcaecati, corrupti consequuntur aut dolorem deleniti officiis exercitationem doloribus perferendis natus fugit iure.
                </p>

            </section>

            <section className='bg-secondary bg-opacity-75'>

                <div className="d-flex justify-content-center flex-wrap gap-3 py-5">
                    <div>
                        <img src="https://img.freepik.com/fotos-gratis/close-up-feminino-nas-costas-fazendo-uma-massagem-de-repouso-horizontal_186202-4821.jpg" alt="" />
                    </div>

                    <div>
                        <img src="https://media.istockphoto.com/id/482266425/pt/foto/massagem-na-horizontal.jpg?s=612x612&w=0&k=20&c=BIqTnE4gbA5Q2C8g9R-EbPpM2zWIunHY8HyGRTXhDiY=" alt="" />
                    </div>

                    <div>
                        <img src="https://img.freepik.com/fotos-gratis/homem-a-dar-massagem-ao-paciente_23-2150649777.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1711756800&semt=ais" alt="" />
                    </div>

                    <div>
                        <img src="https://thumbs.dreamstime.com/b/homem-sendo-massageado-no-salão-spa-horizontal-partir-de-cima-homens-irreconhecíveis-receber-massagem-relaxante-moderno-170508617.jpg" alt="" />
                    </div>
                </div>



            </section>

            <section>
         
            <p className='fs-1 text-center p5'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, ab, delectus corrupti omnis architecto nesciunt voluptatum incidunt officiis odit molestiae at natus tenetur? Enim sed eveniet dolor at animi tempore.</p>
  
            </section>

        </div>
    )
}
