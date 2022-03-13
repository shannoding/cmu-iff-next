const { basePublicPath } = require('../next.config')
import Link from 'next/link'

export default function Footer({ activeItem }) {
  return (
    <footer id="footer">
    <div className="container">
    <div className="row">
      <div className="col-md-5 col-sm-12">
      <h4>Connect</h4>
      <p>Stay updated on early discounts, special events, and upcoming films!</p>
      <Link href="http://lb.benchmarkemail.com/listbuilder/signupnew?7PVqr1DZMmC1N1wrbOhu%252FKjeOq6S3efoZZRe6SX02HP5mj5OqPbK3uMzIjNtMjwz">
      <a target="_blank"><button className="btn btn-light">Sign up for our newsletter!</button></a></Link>
      <p className="footer-icon-container">
        <Link href="https://www.facebook.com/cmufaces"><a target="_blank">
          <img src={`${basePublicPath}/assets/icons/fb-icon.svg`} />
        </a></Link>
        <Link href="https://www.instagram.com/cmu_iff/"><a target="_blank">
          <img src={`${basePublicPath}/assets/icons/insta-icon.svg`} />
        </a></Link>
        <Link href="https://twitter.com/cmu_faces"><a target="_blank">
          <img src={`${basePublicPath}/assets/icons/twitter-icon.svg`} />
        </a></Link>
      </p>
      </div>

      <div className="col-md-3 col-sm-4">
        
        <a href=".footer-collapse-1" data-toggle="collapse" aria-expanded="true" aria-controls="footer-collapse-1">
          <h4>2022 Festival</h4>              
        </a>
        <div className="footer-collapse-1 collapse show">
          <ul>
          <li><Link href="/theme"><a>Theme</a></Link></li>
          <li><Link href="/schedule"><a>Schedule</a></Link></li>
          {/*<li><Link href="/sponsors"><a>Sponsors</a></Link></li>*/}
          {/*<li><Link href="/news"><a>News & Stories</a></Link></li>*/}
          {/*<li><Link href="/sfc"><a>Short Film Competition</a></Link></li>*/}
          </ul>
        </div>
      </div>

      <div className="col-md-2 col-sm-4">
        <a href=".footer-collapse-2" data-toggle="collapse" aria-expanded="true" aria-controls="footer-collapse-2">
          <h4>About</h4>              
        </a>

        <div className="footer-collapse-2 collapse show">
          <ul>
          <li><Link href="/about"><a>Mission & History</a></Link></li>
          <li><Link href="/team"><a>Team</a></Link></li>
          <li><Link href="/previous_festivals"><a>Previous Festivals</a></Link></li>
          {/*<li><Link href="/education"><a>Education</a></Link></li>*/}
          <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </div>      
      </div>

      <div className="col-md-2 col-sm-4">
        <a href=".footer-collapse-3" data-toggle="collapse" aria-expanded="true" aria-controls="footer-collapse-3">
          <h4>Support</h4>              
        </a>

        <div className="footer-collapse-3 collapse show">
          <ul>
          <li><Link href="/sponsor"><a>Sponsorship</a></Link></li>
          <li><Link href="/ad_opportunities"><a>Ad Opportunities</a></Link></li>
          <li><Link href="/internships"><a>Get Involved</a></Link></li>
          <li><Link href="https://cmu.secure.force.com/pmtx/giftselect?id=a41f4000000eIV5,a41f4000000eHw6&appeal=A4700"><a target="_blank">Donate</a></Link></li>
          </ul>
        </div>
      </div>

      <div className="col-lg-12 footer-copyright">
      <p>© 2022 Carnegie Mellon International Film Festival</p>
      </div>
    </div>
    </div>
    </footer>
  );
}