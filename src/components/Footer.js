import React from 'react'

// Styles
import '../App.css'

// Components
import FooterItem from './FooterItem';

// Icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';


export default function Footer() {

    const footerItems = [
        {
            title: 'Popular Categories',
            items: ['Cars', 'Flats for rent', 'Jobs', 'Mobile Phones'],
        },
        {
            title: 'Trending Searches',
            items: ['Bikes', 'Watches', 'Books', 'Dogs'],
        },
        {
            title: 'About Us',
            items: ['About OLX Group', 'OLX Blog', 'Contact Us', 'OLX for Businesses'],
        },
        {
            title: 'OLX',
            items: ['Help', 'Sitemap', 'Legal & Privacy information'],
        }
    ];

    return (
        <footer className="footer">
            <div className="bigFooter">
                <div className="footerItems">
                    <div className="items__footer">
                        { footerItems.map((item, index) => (
                            <FooterItem key={ index } title={ item.title } items={ item.items } />
                        )) }
                    </div>
                    <div className="social__footer">
                        <h4 className="item__title">Follow Us</h4> 
                        <div className="social__icons">
                            <FacebookIcon fontSize="small" className="social__icon" />
                            <TwitterIcon fontSize="small"  className="social__icon" />
                            <YouTubeIcon fontSize="small"  className="social__icon" />
                            <InstagramIcon fontSize="small"  className="social__icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="smallFooter">
                <div className="copyright">
                    <span className="cp__heading">Other Countries</span>
                    <span className="cp_ft_text">India - South Africa - Indonesia</span>
                </div>
                <div className="copyright">
                    <span className="cp__heading">Free Classifieds in Pakistan</span>
                    <span className="cp_ft_text">&copy; 2006-2020 OLX</span>
                </div>
            </div>
        </footer>
    )
}
