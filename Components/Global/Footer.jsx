import Link from 'next/link'

export default function Footer() {
  return (
      <section className="section __footer">
          <img src="https://shop.berre.ca/wp-content/uploads/2022/01/berre-watermark-hq.png" alt="" className="footer__watermark"/>
          <div className="container">
            <div className="columns">
                <div className="column is-3">
                    <h4>Our products</h4>
                    <ul>
                        <li><Link href="/deals"><a>Sales</a></Link></li>
                        <li><Link href="/products"><a>All products</a></Link></li>
                        <li><Link href="/products/4-seater-sofa"><a>4 Seater Sofas</a></Link></li>
                        <li><Link href="/products/love-seat"><a>Love Seat Sofas</a></Link></li>
                        <li><Link href="/products/armchair"><a>Armchairs</a></Link></li>
                        <li><Link href="/products/sofa-set"><a>Sofa Sets</a></Link></li>
                        <li><Link href="/products/bed-bedding"><a>Bed & Bedding</a></Link></li>
                        <li><Link href="/products/sofa"><a>Sofas</a></Link></li>
                        <li><Link href="/products/sofa-bed"><a>Sofa Beds</a></Link></li>
                        <li><Link href="/products/3-seater-sofa"><a>3 Seater Sofas</a></Link></li>
                        <li><Link href="/products/sectional-sofa"><a>Sectional Sofas</a></Link></li>
                    </ul>
                </div>
                <div className="column is-3">
                    <h4>Furniture Styles</h4>
                    <ul>
                        <li><Link href="/style/compact-furniture"><a>Compact Furniture</a></Link></li>
                        <li><Link href="/style/middle-eastern-furniture"><a>Middle Eastern Furniture</a></Link></li>
                        <li><Link href="/style/italian-furniture"><a>Italian Furniture</a></Link></li>
                        <li><Link href="/style/european-furniture"><a>European Furniture</a></Link></li>
                        <li><Link href="/style/modern-furniture"><a>Modern Furniture</a></Link></li>
                        <li><Link href="/style/turkish-furniture"><a>Turkish Furniture</a></Link></li>
                    </ul>
                </div>
                <div className="column is-3">
                    <h4>About Us</h4>
                    <ul>
                        <li><Link href="/about-us"><a>About us</a></Link></li>
                        <li><Link href="/blogs"><a>Our Blogs</a></Link></li>
                        <li><Link href="/contact"><a>Contact us</a></Link></li>
                        
                    </ul>
                </div>
                <div className="column is-3">
                    <h4>More information</h4>
                    <ul>
                          <li><Link href="/policies"><a>Policies</a></Link></li>
                          <li><Link href="/return-policy"><a>Return Policy</a></Link></li>
                        <li><Link href="/terms-conditions"><a>Terms and Conditions</a></Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__right">
                    <img src="/berre-icon.png" alt="" />
                    <p>Copyright Berre 2022 All Rights Reserved</p>
                    <p>Created by <a href="https://www.wellpromotion.ba/" style={{color: "rgba(255, 172, 54, 0.92)"}}>Well Business Promotion</a></p>
                </div>
            </div>
          </div>
      </section>
  );
}
