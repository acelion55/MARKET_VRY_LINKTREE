import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { X, Link2 } from 'lucide-react';
import { FaFacebook, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { profile } from '../data/links';

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
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 17px;
  font-weight: 700;
  color: #111;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

const Card = styled.div`
  background: #6b0f2b;
  border-radius: 18px;
  padding: 32px 20px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28px;
`;

const AvatarCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #fff;
  overflow: hidden;
  margin-bottom: 16px;
  border: 3px solid rgba(255,255,255,0.8);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`;

const CardName = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const CardUrl = styled.p`
  color: rgba(255,255,255,0.7);
  font-size: 13px;
`;

const ShareRow = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 4px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
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

const shareOptions = [
  {
    label: 'Copy Link',
    bg: '#f0f0f0',
    color: '#333',
    icon: Link2,
    action: () => navigator.clipboard.writeText(window.location.href),
  },
  {
    label: 'X',
    bg: '#000',
    color: '#fff',
    icon: FaXTwitter,
    action: () => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`),
  },
  {
    label: 'Facebook',
    bg: '#1877f2',
    color: '#fff',
    icon: FaFacebook,
    action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`),
  },
  {
    label: 'WhatsApp',
    bg: '#25d366',
    color: '#fff',
    icon: FaWhatsapp,
    action: () => window.open(`https://wa.me/?text=${window.location.href}`),
  },
  {
    label: 'LinkedIn',
    bg: '#0a66c2',
    color: '#fff',
    icon: FaLinkedin,
    action: () => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`),
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
            <CloseBtn onClick={onClose}><X size={20} /></CloseBtn>
          </Header>

          <Card>
            <AvatarCircle>
              <img src={profile.avatar} alt={profile.name} />
            </AvatarCircle>
            <CardName>{profile.username}</CardName>
            <CardUrl>marketvry.com</CardUrl>
          </Card>

          <ShareRow>
            {shareOptions.map((opt) => (
              <ShareItem key={opt.label} onClick={() => { opt.action(); if (opt.label === 'Copy Link') onClose(); }}>
                <IconCircle
                  $bg={opt.bg}
                  $color={opt.color}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <opt.icon size={opt.label === 'Copy Link' ? 20 : 22} />
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
