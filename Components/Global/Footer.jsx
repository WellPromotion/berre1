import Link from 'next/link'

export default function Footer() {
  return (
      <section className="section __footer">
          <img src="https://shop.berre.ba/wp-content/uploads/2022/01/berre-watermark-hq.png" alt="" className="footer__watermark"/>
          <div className="container">
            <div className="columns">
                <div className="column is-one-fifth">
                    <h4>Naši proizvodi</h4>
                    <ul>
                        <li><Link href="/rasprodaja"><a>Rasprodaja</a></Link></li>
                        <li><Link href="/proizvodi"><a>Svi proizvodi</a></Link></li>
                        <li><Link href="/proizvodi/cetvorosjed"><a>Četvorosjed</a></Link></li>
                        <li><Link href="/proizvodi/dvosjed"><a>Dvosjed</a></Link></li>
                        <li><Link href="/proizvodi/fotelja"><a>Fotelja</a></Link></li>
                        <li><Link href="/proizvodi/garniture"><a>Garniture</a></Link></li>
                        <li><Link href="/proizvodi/kreveti"><a>Kreveti</a></Link></li>
                        <li><Link href="/proizvodi/sofe-na-razvlacenje"><a>Sofe na razvlacenje</a></Link></li>
                        <li><Link href="/proizvodi/stolovi-stolice-i-ostalo"><a>Stolovi, stolice i ostalo</a></Link></li>
                        <li><Link href="/proizvodi/trosjed"><a>Trosjed</a></Link></li>
                        <li><Link href="/proizvodi/ugaone-garniture"><a>Ugaone garniture</a></Link></li>
                    </ul>
                </div>
                <div className="column is-one-fifth">
                    <h4>Stilovi namještaja</h4>
                    <ul>
                        <li><Link href="/stilovi/compact-furniture"><a>Kompaktni Namještaj</a></Link></li>
                        <li><Link href="/stilovi/middle-eastern-furniture"><a>Funkcionalni Namještaj</a></Link></li>
                        <li><Link href="/stilovi/italian-furniture"><a>Stilski Namještaj</a></Link></li>
                        <li><Link href="/stilovi/european-furniture"><a>Klasični Namještaj</a></Link></li>
                        <li><Link href="/stilovi/modern-furniture"><a>Moderni Namještaj</a></Link></li>
                        <li><Link href="/stilovi/turkish-furniture"><a>Turski Namještaj</a></Link></li>
                    </ul>
                </div>
                <div className="column is-one-fifth">
                    <h4>O nama</h4>
                    <ul>
                        <li><Link href="/o-nama"><a>O nama</a></Link></li>
                        <li><Link href="/blogs"><a>Naši blogovi</a></Link></li>
                        <li><Link href="/kontakt"><a>Kontaktiraj nas</a></Link></li>
                        
                    </ul>
                </div>
                <div className="column is-one-fifth">
                    <h4>Više informacija</h4>
                    <ul>
                        {/* <li><Link href="/uslovi-isporuke"><a>Uslovi isporuke</a></Link></li> */}
                          <li><Link href="/odredbe-i-uslovi"><a>Odredbe i uslovi</a></Link></li>
                          <div className="socialDiv">
                          <li className='socialIconz'>
                            <a href="https://www.facebook.com/namjestajberre.ba"><img src="../../facebook.png" alt="facebook-icon" /></a>
                        </li>
                        <li className='socialIconz'>
                            <a href="https://www.instagram.com/namjestajberre.ba/"><img src="../../instagram.png" alt="instagram-icon" /></a>
                        </li>
                          </div>
                    </ul>
                </div>
                <div className="column is-one-fifth">
                    <h4>Salon namještaja BERRE</h4>
                      <ul>
                      <li><a href="https://maps.app.goo.gl/SVpkAMvZN8LAtDM66" target="_blank">Braće Mulić 65, Dobrinja 71000 Sarajevo</a></li>
                        {/* <li><a href="https://g.page/namjestajberre?share" target="_blank">Novo Sarajevo: Kolodvorska 12b, 71000 (do Rama-Glasa)</a></li> */}
                        <li><a href="tel:38761606023">Telefon +387 61 60 60 23</a></li>
                        <li><a href="mailto:info@berre.ba">E-mail: info@berre.ba</a></li> 
                    </ul>      
                </div>   
            </div>
            <div className="footer__bottom">
                <div className="footer__right">
                    <img src="/berre-icon.png" alt="" />
                    <p>Copyright Berre 2023 Sva prava pridržana</p>
                    <p>Created by <a href="https://www.wellpromotion.ba/" style={{color: "rgba(255, 172, 54, 0.92)"}}>Well Business Promotion</a></p>
                </div>
            </div>
          </div>
      </section>
  );
}
