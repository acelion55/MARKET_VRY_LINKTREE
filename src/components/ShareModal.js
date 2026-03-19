import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { Link2, MoreHorizontal } from 'lucide-react';
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { profile } from '../data/links';
import LightRays from './LightRays';

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  z-index: 200;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Sheet = styled(motion.div)`
  width: 100%;
  max-width: 480px;
  background: #fff;
  border-radius: 24px 24px 0 0;
  padding: 24px 24px 40px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 17px;
  font-weight: 700;
  color: #111;
`;

const Card = styled.div`
  border-radius: 18px;
  padding: 32px 20px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28px;
  position: relative;
  overflow: hidden;
  background: #ffffff;
`;

const AvatarCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff;
  overflow: hidden;
  margin-bottom: 16px;
  border: 3px solid rgba(0,0,0,0.15);
  position: relative;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`;

const CardName = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
  position: relative;
  z-index: 1;
`;

const CardUrl = styled.p`
  color: rgba(0,0,0,0.6);
  font-size: 13px;
  position: relative;
  z-index: 1;
`;

const ShareRow = styled.div`
  display: flex;
  gap: 0;
  justify-content: space-between;
  width: 100%;
`;

const ShareItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  flex-shrink: 0;
`;

const IconCircle = styled(motion.div)`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${({ $bg }) => $bg || '#eee'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color || '#333'};
  font-size: 22px;
`;

const IconLabel = styled.span`
  font-size: 11px;
  color: #555;
  text-align: center;
`;

const url = encodeURIComponent(window.location.href);
const text = encodeURIComponent('Check out Market VRY: ' + window.location.href);

const shareOptions = [
  {
    label: 'Copy Link',
    bg: '#f0f0f0',
    color: '#333',
    icon: Link2,
    action: () => navigator.clipboard.writeText(window.location.href),
    close: true,
  },
  {
    label: 'WhatsApp',
    bg: '#25d366',
    color: '#fff',
    icon: FaWhatsapp,
    action: () => window.open(`https://wa.me/?text=${text}`),
  },
  {
    label: 'Facebook',
    bg: '#1877f2',
    color: '#fff',
    icon: FaFacebook,
    action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`),
  },
  {
    label: 'Instagram',
    bg: '#e1306c',
    color: '#fff',
    icon: FaInstagram,
    action: () => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = `instagram://share?url=${url}`;
        setTimeout(() => window.open(`https://www.instagram.com/`), 1500);
      } else {
        window.open(`https://www.instagram.com/`);
      }
    },
  },
  {
    label: 'LinkedIn',
    bg: '#0a66c2',
    color: '#fff',
    icon: FaLinkedin,
    action: () => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = `linkedin://shareArticle?mini=true&url=${url}`;
        setTimeout(() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`), 1500);
      } else {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
      }
    },
  },
  {
    label: 'Other',
    bg: '#f0f0f0',
    color: '#333',
    icon: MoreHorizontal,
    action: () => navigator.share?.({ title: 'Market VRY', url: window.location.href }),
  },
];

export default function ShareModal({ onClose }) {
  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <Sheet
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={e => e.stopPropagation()}
        >
          <Header>
            <Title>Share Market VRY</Title>
          </Header>

          <Card>
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <LightRays
                raysOrigin="top-center"
                raysColor="#000000"
                raysSpeed={1}
                lightSpread={0.5}
                rayLength={3}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0}
                distortion={0}
                pulsating={false}
                fadeDistance={1}
                saturation={1}
              />
            </div>
            <AvatarCircle>
              <img src={profile.avatar} alt={profile.username} />
            </AvatarCircle>
            <CardName>{profile.username}</CardName>
            <CardUrl>marketvry.com</CardUrl>
          </Card>

          <ShareRow>
            {shareOptions.map((opt) => (
              <ShareItem key={opt.label} onClick={() => { opt.action(); if (opt.close) onClose(); }}>
                <IconCircle
                  $bg={opt.bg}
                  $color={opt.color}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <opt.icon size={22} />
                </IconCircle>
                <IconLabel>{opt.label}</IconLabel>
              </ShareItem>
            ))}
          </ShareRow>
        </Sheet>
      </Overlay>
    </AnimatePresence>
  );
}
