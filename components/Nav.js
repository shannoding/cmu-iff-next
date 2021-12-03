const { basePublicPath } = require('../next.config')
import { Component } from 'react'

import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      endDate: new Date(props.endDate)
    }
    this.tick = this.tick.bind(this);
    setInterval(this.tick, 1000);
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    let ms_diff = this.state.endDate.getTime() - this.state.date.getTime()
    const day_diff = Math.floor(ms_diff / (1000 * 60 * 60 * 24))
    const hhmmss_diff = new Date(ms_diff).toISOString().substr(11, 8)
    return (<div className="topbar">Festival begins in {day_diff} days and {hhmmss_diff}</div>);
  }
}

export default function Nav({ activeItem }) {
  return (
  <div>
  <Topbar endDate="3/1/2022" />
  <nav className="navbar navbar-expand-lg navbar-light" id="nav">
    <Link href="/"><a className="navbar-brand">
    <img src={`${basePublicPath}/CMU-IFF_Logo.svg`} alt="CMU IFF logo" />
    </a></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className={"nav-item dropdown" + (activeItem == 1 ? ' active' : '')}>
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            2022 Festival
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
            <Link href="/theme"><a className="dropdown-item">Theme</a></Link>
            <Link href="/schedule"><a className="dropdown-item">Schedule</a></Link>
            {/*<div className="dropdown-divider"></div>*/}
            <Link href="/sponsors"><a className="dropdown-item">Sponsors</a></Link>
            {/*<Link href="/news"><a className="dropdown-item">News & Stories</a></Link>*/}
            <Link href="/sfc"><a className="dropdown-item">Short Film Competition</a></Link>
          </div>
        </li>

        <li className={"nav-item dropdown" + (activeItem == 2 ? ' active' : '')}>
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            About Us
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown2">
            <Link href="/about"><a className="dropdown-item">Mission & History</a></Link>
            <Link href="/team"><a className="dropdown-item">Team</a></Link>
            <Link href="/previous_festivals"><a className="dropdown-item">Previous Festivals</a></Link>
            <Link href="/education"><a className="dropdown-item">Education</a></Link>
            <Link href="/contact"><a className="dropdown-item">Contact</a></Link>
          </div>
        </li>

        <li className={"nav-item dropdown" + (activeItem == 3 ? ' active' : '')}>
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Support Us
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
            <Link href="/sponsor"><a className="dropdown-item">Sponsorship</a></Link>
            <Link href="/ad_opportunities"><a className="dropdown-item">Ad Opportunities</a></Link>
          </div>
        </li>

        <li className={"nav-item" + (activeItem == 4 ? ' active' : '')}>
          <Link href="/internships"><a className="nav-link">Get Involved</a></Link>
        </li>

        <li className="nav-item">
            <Link href="https://cmu.secure.force.com/pmtx/giftselect?id=a41f4000000eIV5,a41f4000000eHw6&appeal=A4700">
            <a>
                <button className="btn btn-primary" type="button">Donate</button>
            </a></Link>
        </li>
        <li className="nav-item">
            <Link href="/tickets">
            <a>
                <button className="btn btn-primary" type="button">Buy Tickets</button>
            </a></Link>  
        </li>

      </ul>
    </div>
  </nav>
  </div>
  );
}