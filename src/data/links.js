import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaWhatsapp, FaFileAlt, FaUsers, FaGlobe, FaEnvelope } from 'react-icons/fa';

export const profile = {
  username: 'Marketvry',
  bio: 'FROM CLICKS TO CLIENTS',
  avatar: '/logo.jpeg',
};

export const links = [
  { id: 1, label: 'Share your Inquiry', url: '#',                       icon: FaEnvelope, target: '_self'  },
  { id: 2, label: 'Visit our Website',  url: 'https://marketvry.com/',  icon: FaGlobe,    target: '_blank' },
  { id: 3, label: 'Book a Demo',        url: '#',                       icon: FaUsers,    target: '_self'  },
  { id: 4, label: 'Join Our Team',      url: '#',                       icon: FaUsers,    target: '_self'  },
  { id: 5, label: 'Company Brochure',   url: '/seo.pdf',                icon: FaFileAlt,  target: '_blank' },
];

export const socials = [
  { icon: FaInstagram, url: 'https://www.instagram.com/marketvry?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',                                          color: '#E1306C' },
  { icon: FaFacebook,  url: 'https://www.facebook.com/people/Marketvry/61587304114705/',                     color: '#1877F2' },
  { icon: FaWhatsapp,  url: 'https://wa.me/9001702542',                                                                color: '#25D366' },
  { icon: FaYoutube,   url: 'https://www.youtube.com/@marketvry',                                            color: '#FF0000' },
  { icon: FaLinkedin,  url: 'https://www.linkedin.com/company/marketvry',                                    color: '#0A66C2' },
];
