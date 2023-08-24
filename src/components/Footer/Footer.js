import classes from './Footer.module.css'

import data from './Footer.json'

export function loader() {
  const footerData = data;
  return footerData;
}

const Footer = ({ footerData }) => {
  return <footer className={classes.footer}>
    <ul>
      {Object.keys(footerData).map(key => <li key={key}>
        <h4>{key}</h4>
        <ul>
          {footerData[key].map(curr => <li key={curr.id}>
            {curr.title}
          </li>)}
        </ul>
      </li>)}
    </ul>
  </footer>
}

export default Footer;