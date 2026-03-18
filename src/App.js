import { useState } from 'react';
import { motion } from 'framer-motion';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Share2 } from 'lucide-react';
import { profile, links, socials } from './data/links';
import LinkButton from './components/LinkButton';
import SocialIcon from './components/SocialIcon';
import ShareModal from './components/ShareModal';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', sans-serif;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
`;

/* Full page — deep teal base */
const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #0b5e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 60px;
  position: relative;
  overflow: hidden;
`;

/* Top hero section — teal to slightly lighter teal */
const Hero = styled.div`
  width: 100%;
  background: linear-gradient(160deg, #0e7490 0%, #0b5e6e 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 24px 40px;
  position: relative;

  /* orange accent arc at bottom */
  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 140%;
    height: 60px;
    background: #0b5e6e;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
  }
`;

/* Decorative orange circle blobs */
const Blob = styled.div`
  position: absolute;
  border-radius: 50%;
  background: #c2622d;
  opacity: 0.12;
  filter: blur(40px);
  pointer-events: none;
`;

const ShareBtn = styled(motion.button)`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(255,255,255,0.15);
  border: 2px solid rgba(255,255,255,0.35);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  backdrop-filter: blur(8px);
`;

const AvatarRing = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, #c2622d, #e8855a);
  box-shadow: 0 0 0 4px rgba(194,98,45,0.25), 0 8px 24px rgba(0,0,0,0.3);
  margin-bottom: 18px;
  animation: ${float} 4s ease-in-out infinite;
`;

const AvatarInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: #fff;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 6px;
  }
`;

const Username = styled(motion.p)`
  color: #ffffff;
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-top: 4px;
  letter-spacing: 0.5px;
`;

const Bio = styled(motion.p)`
  color: rgba(255,255,255,0.9);
  font-size: 18px;
  font-weight: 800;
  text-align: center;
  margin-top: 6px;
  letter-spacing: 1px;
`;

const Divider = styled(motion.div)`
  width: 48px;
  height: 3px;
  border-radius: 99px;
  background: linear-gradient(90deg, #c2622d, #e8855a);
  margin: 12px auto 0;
`;

const SocialsRow = styled(motion.div)`
  display: flex;
  gap: 14px;
  margin: 30px 0 0;
`;

const Content = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 0px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const SectionLabel = styled(motion.p)`
  color: rgba(255,255,255,0.45);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  align-self: flex-start;
  margin-bottom: 12px;
`;

const LinksWrap = styled.div`
  width: 100%;
`;

export default function App() {
  const [showShare, setShowShare] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Page>
        {/* decorative blobs */}
        <Blob style={{ width: 220, height: 220, top: -60, right: -60 }} />
        <Blob style={{ width: 160, height: 160, bottom: 100, left: -40 }} />

        <ShareBtn
          onClick={() => setShowShare(true)}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 160 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
        >
          <Share2 size={18} />
        </ShareBtn>

        {showShare && <ShareModal onClose={() => setShowShare(false)} />}

        <Hero>
          <AvatarRing
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 160, damping: 14 }}
          >
            <AvatarInner>
              <img src={profile.avatar} alt="Market VRY" />
            </AvatarInner>
          </AvatarRing>

          <Username
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
          >
            {profile.username}
          </Username>

          <Bio
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48 }}
          >
            {profile.bio}
          </Bio>

          <Divider
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.52 }}
          />

          <SocialsRow
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58 }}
          >
            {socials.map((s, i) => (
              <SocialIcon key={i} {...s} />
            ))}
          </SocialsRow>
        </Hero>

        <Content>
          <SectionLabel
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Quick Links
          </SectionLabel>
          <LinksWrap>
            {links.map((link, i) => (
              <LinkButton key={link.id} {...link} index={i} />
            ))}
          </LinksWrap>
        </Content>
      </Page>
    </>
  );
}
