import { useState } from 'react';
import { motion } from 'framer-motion';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Share2 } from 'lucide-react';
import { profile, links, socials } from './data/links';
import LinkButton from './components/LinkButton';
import SocialIcon from './components/SocialIcon';
import ShareModal from './components/ShareModal';
import LightRays from './components/LightRays';

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
  height: 100vh;
  width: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  position: relative;
  overflow: hidden;
`;

/* Top hero section — teal to slightly lighter teal */
const Hero = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px 10px;
  position: relative;
  z-index: 1;
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
  background: rgba(0,0,0,0.1);
  border: 2px solid rgba(0,0,0,0.3);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
  backdrop-filter: blur(8px);
`;

const AvatarRing = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, #c2622d, #e8855a);
  box-shadow: 0 0 0 4px rgba(194,98,45,0.25), 0 8px 24px rgba(0,0,0,0.3);
  margin-bottom: 10px;
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
  color: #000000;
  font-size: 1.6rem;
  font-weight: 800;
  text-align: center;
  margin-top: 2px;
  letter-spacing: 0.5px;
`;

const Bio = styled(motion.p)`
  color: rgba(0,0,0,0.8);
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  margin-top: 4px;
  letter-spacing: 1px;
`;

const Divider = styled(motion.div)`
  width: 48px;
  height: 3px;
  border-radius: 99px;
  background: linear-gradient(90deg, #c2622d, #e8855a);
  margin: 8px auto 0;
`;

const SocialsRow = styled(motion.div)`
  display: flex;
  gap: 12px;
  margin: 10px 0 0;
`;

const Content = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 12px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const SectionLabel = styled(motion.p)`
  color: rgba(0,0,0,0.5);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  align-self: flex-start;
  margin-bottom: 8px;
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
        <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
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
