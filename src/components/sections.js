import pic01 from '../images/pic01.jpg'
import villa from '../images/villa.jpg'
import React from 'react'

const whatsappMessage = encodeURI('Parteciperemo in 2 al vostro matrimonio e al party serale!');
const encodedGiulia = encodeURI('+393463075899');

export const sections = [
  {
    id: 'cerimonia',
    title: 'CERIMONIA',
    image: villa,
    body: (<><p></p></>),
  },
  {
    id: 'ricevimento', title: 'RICEVIMENTO', image: pic01, body: (<><p>La cerimonia parte alle 11:30</p>
      <p>Dalle 12 si parte con antipasto</p></>),
  },
  {
    id: 'party', title: 'PARTY', image: pic01, body: (<><p>This is an work</p>
      <p>With the work</p></>),
  },
  {
    id: 'viaggio', title: 'VIAGGIO', image: pic01, body: (<><p>This is an work</p>
      <p>With the work</p></>),
  },
  {
    id: 'contatti', title: 'CONTATTI', body: <>
      <h3>È gradita risposta entro il 30 Aprile</h3>
      <h4>Giulia</h4>
      <ul className="icons">
        <li>
          <a href={`https://wa.me/+393463075899?text=${whatsappMessage}`} className="icon fa-whatsapp" target="_blank">
            <span className="label">Whatsapp</span>
          </a>
        </li>
        <li>
          <a href={`https://wa.me/0393463075899?text=${whatsappMessage}`} className="icon fa-whatsapp" target="_blank">
            <span className="label">Whatsapp</span>
          </a>
        </li>
        <li>
          <a href={`https://wa.me/00393463075899?text=${whatsappMessage}`} className="icon fa-whatsapp" target="_blank">
            <span className="label">Whatsapp</span>
          </a>
        </li>
        <li>
          <a href={`https://wa.me/${encodedGiulia}?text=${whatsappMessage}`} className="icon fa-whatsapp" target="_blank">
            <span className="label">Whatsapp</span>
          </a>
        </li>
        <li>
          <a href={`tel:+393463075899`} className="icon fa-phone" target="_blank">
            <span className="label">Telefono</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/giuly732" className="icon fa-facebook" target="_blank">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/giuly732" className="icon fa-instagram" target="_blank">
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
      <h4>Alessandro</h4>
      <ul className="icons">
        <li>
          <a href={`https://wa.me/+393478858916?text=${whatsappMessage}`} className="icon fa-whatsapp" target="_blank">
            <span className="label">Whatsapp</span>
          </a>
        </li>
        <li>
          <a href={`tel:+393478858916`} className="icon fa-phone" target="_blank">
            <span className="label">Telefono</span>
          </a>
        </li>
      </ul>
    </>,
  },

]
