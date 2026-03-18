import { motion } from 'framer-motion';
import styled from 'styled-components';

const Btn = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 15px 18px;
  margin-bottom: 12px;
  background: rgba(255, 255, 255, 0.92);
  color: #1a1a1a;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  border-radius: 16px;
  cursor: pointer;
  box-sizing: border-box;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.18),
    0 1px 4px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255,255,255,0.8);
  border: 1px solid rgba(255,255,255,0.6);
  backdrop-filter: blur(8px);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(14,116,144,0.08), transparent);
    opacity: 0;
    transition: opacity 0.25s;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const IconWrap = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg, #0e7490, #1a8a8a);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(14,116,144,0.35);
`;

const Label = styled.span`
  flex: 1;
`;

const Arrow = styled.span`
  color: #0e7490;
  font-size: 20px;
  font-weight: 700;
`;

export default function LinkButton({ label, url, icon: Icon, target, index }) {
  return (
    <Btn
      href={url}
      target={target || '_self'}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55 + index * 0.08, type: 'spring', stiffness: 120 }}
      whileHover={{ scale: 1.025, y: -3, boxShadow: '0 8px 28px rgba(0,0,0,0.22)' }}
      whileTap={{ scale: 0.97 }}
    >
      {Icon && <IconWrap><Icon /></IconWrap>}
      <Label>{label}</Label>
      <Arrow>›</Arrow>
    </Btn>
  );
}
