import ricevimento from '../images/ricevimento.png'
import villa from '../images/villa.jpg'
import party from '../images/party.png'
import bora from '../images/bora.jpg'
import React from 'react'

export const sections = [
  {
    id: 'cerimonia',
    title: 'LOCATION',
    image: villa,
    body: (<>
      <h3>La cerimonia si svolger&agrave; alle ore 11:00</h3>
      <p>Presso <a href="https://goo.gl/maps/a7nZXtzyB7zfdMKd8" target="_blank">Villa il Geraneo</a></p>
    </>),
  },
  // {
  //   id: 'ricevimento',
  //   title: 'RICEVIMENTO',
  //   image: ricevimento,
  //   body: (
  //     <>
  //       <h3>A seguire</h3>
  //       <p>Presso <a href="https://goo.gl/maps/a7nZXtzyB7zfdMKd8" target="_blank">Villa il Geraneo</a></p>
  //     </>
  //   ),
  // },
  {
    id: 'party',
    title: 'AGENDA',
    image: party,
    body: (
      <>
        <ul id="agenda">
          <li>
             <span>11:00</span> Accoglienza
          </li>
          <li>
             <span>11:30</span> Cerimonia
          </li>
          <li>
             <span>12:00</span> Ricevimento
          </li>
          <li>
             <span>17:00</span> Taglio torta <br />
             <span className="hidden">20:00</span>Inizio Wedding Party
          </li>
          <li>
             <span>18:00</span> Apertura piscina
          </li>
          <li>
             <span>20:00</span> Chiusura piscina <br />
             <span className="hidden">20:00</span>Inizio buffet di Grigliata e Fritti <br />
             <span className="hidden">20:00</span>Apertura Open Bar
          </li>
          <li>
             <span>21:00</span> PARTY HARD!
          </li>
        </ul>
        <p>Portate costume, ciabatte ed asciugamano!</p>
      </>
    ),
  },
  {
    id: 'viaggio',
    title: 'LISTA NOZZE',
    image: bora,
    body: (
      <>
        <h3>Bora Bora è lontana... Ma se volete aiutarci a raggiungerla:</h3>
        <p style={{marginBottom: '0.1rem'}}>IBAN: <h3 style={{display: 'inline-block', letterSpacing: '0.1rem'}}>IT15H0301503200000005625049</h3></p>
        <p>Intestato a: <h3 style={{display: 'inline-block', letterSpacing: '0.1rem'}}>Alessandro Romano</h3></p>
      </>
    ),
  },
  {
    id: 'contatti',
    title: 'CONTATTI',
    body: <>
      <h3>È gradita risposta entro il 15 Agosto </h3>
      <h4>Giulia</h4>
      <ul className="icons">
        <li>
          <a href={`https://wa.me/0393463075899`} className="icon fa-whatsapp" target="_blank">
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
          <a href={`https://wa.me/0393478858916`} className="icon fa-whatsapp" target="_blank">
            <span className="label">Whatsapp</span>
          </a>
        </li>
        <li>
          <a href={`tel:+393478858916`} className="icon fa-phone" target="_blank">
            <span className="label">Telefono</span>
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
    </>,
  },

]
