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
      <p><a href="http://www.villailgeraneo.com/" target="_blank" rel="noopener noreferrer">Villa Il Geraneo</a> &egrave; una location suggestiva, incorniciata dal Lago Maggiore, a Monvalle in provincia di Varese. </p>
      <p className="center">🚘 <a href="https://goo.gl/maps/yoXr6cs7R9CZmsA38" target="_blank" rel="noopener noreferrer">Portami alla Villa!</a> 🚘</p>
    </>),
  },
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
             <span>17:00</span> Wedding Cake <br />
             🎉<span className="hidden">20:000</span>Inizio Wedding Party
          </li>
          <li>
             <span>18:00</span> Pool Party
          </li>
          <li>
             <span>20:00</span> Stop swim, start drink!<br />
             🍖<span className="hidden">20:000</span>Buffet di Grigliata e Fritti<br />
             🍹<span className="hidden">20:000</span>Open Bar All Night
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
        <p>Bora Bora è lontana... Ma se volete aiutarci a raggiungerla:</p>
        <p>IBAN: <span className="easy-copy">IT15H0301503200000005625049</span></p>
        <p>Intestato a: <span className="easy-copy">Alessandro Romano</span></p>
      </>
    ),
  },
  {
    id: 'contatti',
    title: 'CONTATTI',
    body: <>
      <p>Giulia</p>
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
      <p>Alessandro</p>
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
      <p>È gradita risposta entro il 15 Agosto </p>
    </>,
  },

]
