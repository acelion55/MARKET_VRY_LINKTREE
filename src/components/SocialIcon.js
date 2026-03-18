import { motion } from 'framer-motion';
import styled from 'styled-components';

const Circle = styled(motion.a)`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: ${({ $color }) => $color || '#fff'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  font-size: 26px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0,0,0,0.2);
`;

export default function SocialIcon({ icon: Icon, url, color }) {
  return (
    <Circle
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      $color={color}
      whileHover={{ scale: 1.15, y: -3 }}
      whileTap={{ scale: 0.92 }}
    >
      <Icon />
    </Circle>
  );
}
