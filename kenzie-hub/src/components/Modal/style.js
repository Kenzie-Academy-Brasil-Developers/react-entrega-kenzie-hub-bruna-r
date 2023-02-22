import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(18, 18, 20, 0.5);
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .HeaderForm {
    width: 100%;
    line-height: 48px;
    padding: 0 22px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--color-grey-2);
  }

  .ContainerButtonForm {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
`;
