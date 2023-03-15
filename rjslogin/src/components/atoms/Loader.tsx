import styled, { keyframes } from "styled-components";

interface Props {
  props: {
    delay: string;
  };
}

export const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: 1rem;
  }

  100% { 
    margin-bottom: 0;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const Dot = styled.div`
  background-color: blue;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${({ props }: Props) => props.delay};
`;


const Loader = () => {
  return (
    <LoadingWrapper>
      <h3>Loading</h3>
      <Dot props={{ delay: "0s" }}/>
      <Dot props={{ delay: "0.1" }}/>
      <Dot props={{ delay: "0.2s" }}/>
    </LoadingWrapper>
  );
};

export default Loader;
