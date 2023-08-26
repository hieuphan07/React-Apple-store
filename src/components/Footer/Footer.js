import classes from './Footer.module.css'

import DUMMY_FOOTER from '../../dummyData/dummyFooter.json'

export function loader() {
  const footerData = DUMMY_FOOTER;
  return footerData;
}

const Footer = ({ footerData }) => {
  return (
    <footer className={classes.footer}>
      <ul>

        {/* Main title */}
        {Object.keys(footerData).map(key => <li key={key}>
          <h4>{key}</h4>
          <ul>

            {/* Children content */}
            {footerData[key].map(curr => <li key={curr.id}>
              {curr.title}
            </li>)}

          </ul>
        </li>)}

      </ul>
    </footer>
  )
}

export default Footer;