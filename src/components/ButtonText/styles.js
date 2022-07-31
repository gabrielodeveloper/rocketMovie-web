import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.violet};
  margin-top: 4rem;
`