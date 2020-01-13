import pic01 from '../images/pic01.jpg'
import villa from '../images/villa.jpg'
import React from 'react'


export const sections = [
  {
    id: 'ricevimento',
    title: 'RICEVIMENTO',
    image: villa,
    body: (<><p>Il ricevimento si terrà presso la splendida Villa Il Geraneo, a Monvalle</p>
      <p>La cerimonia avrà inizio alle ore 11:30</p></>),
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
    id: 'contatti', title: 'CONTATTI', image: pic01, body: (<>
      <p>Ale: 3478858916</p>
      <p>Giulia: 3463075899</p>
      <ul className="icons">
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
        <li>
          <a
            href="https://twitter.com/axel92dev"
            className="icon fa-twitter"
            target="_blank"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
      </ul>
    </>),
  },

]
