import styled from "styled-components";

export const StyledHeaderPage = styled.header`
  width: 90%;
  max-width: 370px;
  margin: 0 auto;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  button,
  a {
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 700;
  }
`;
