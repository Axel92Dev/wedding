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
             <strong>11:00</strong> Accoglienza
          </li>
          <li>
             <strong>11:30</strong> Cerimonia
          </li>
          <li>
             <strong>12:00</strong> Inizio ricevimento
          </li>
          <li>
             <strong>17:00</strong> Taglio torta ed inizio Wedding Party
          </li>
          <li>
             <strong>18:00</strong> Apertura piscina
          </li>
          <li>
             <strong>20:00</strong> Chiusura piscina
             Inizio buffet di Grigliata e Fritti + Open Bar
          </li>
          <li>
             <strong>21:00</strong> PARTY HARD!
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
