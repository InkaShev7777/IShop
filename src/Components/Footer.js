import React from 'react'
import { FaFacebookF, FaYoutube,FaInstagram } from "react-icons/fa"
function Footer() {
  return (
    <footer>
        {/* Test Text &copy; */}
        <section className='footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3 col-6'>
                <h4>Информация</h4>
                <ul className='list-unstyled'>
                    <li><a href='#'>Главная</a></li>
                    <li><a href='#'>О магазине</a></li>
                    <li><a href='#'>Оплата и доставка</a></li>
                    <li><a href='#'>Контакры</a></li>
                </ul>
              </div>
              <div className='col-md-3 col-6'>
                <h4>Время работы</h4>
                <ul className='list-unstyled'>
                    <li>г. Киев, ул. Пушкина, 1</li>
                    <li>пн-вс: 9:00 - 18:00</li>
                    <li>без перерыва</li>
                </ul>
              </div>
              <div className='col-md-3 col-6'>
                <h4>Контакты</h4>
                <ul className='list-unstyled'>
                    <li><a href='tel:0981037234'>098 103-72-34</a></li>
                    <li><a href='tel:0981037234'>099 103-72-34</a></li>
                    <li><a href='tel:0981037234'>093 103-72-34</a></li>
                </ul>
              </div>
              <div className='col-md-3 col-6'>
                <h4>Мы в сети</h4>
                <div className='footer-icons'>
                 <a href='#'><FaFacebookF/></a>
                 <a href='#'> <FaYoutube/></a>
                  <a href='#'><FaInstagram/></a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </footer>
  )
}

export default Footer