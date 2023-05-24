import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  border-radius: 10px;
  background-color: #4831d4;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const TextContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 80%;
  height: 100%;
  padding: 16px;
`;

export const ImageContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 24px;
  width: 20%;
  height: 100%;
  padding: 16px;
`;

export const Image = styled.img`
  width: 105px;
  height: 105px;
  object-fit: cover;
  border-radius: 10px;
`;

export const RowGrid = styled.section`
  display: flex;
  height: auto;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Text = styled.p`
  color: white;
  opacity: 0.9;
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

export const References = styled.p`
  color: white;
  opacity: 0.9;
  font-size: 1.5rem;
`;
