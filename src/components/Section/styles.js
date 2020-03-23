import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  border: #000 dashed 2px;
  padding: 10px;

  margin: 10px 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const Title = styled.span`
  font-size: 16px;
  color: #000;
`;

export const Size = styled.span`
  font-size: 14px;
  color: #000;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;

  flex-wrap: wrap;
`;

export const Item = styled.li`
  background-color: #ccc;
  width: 150px;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 15px;

  background: ${props => props.color};

  -webkit-transform: rotate(2deg);
  -moz-transform: rotate(2deg);
  -o-transform: rotate(2deg);
  -ms-transform: rotate(2deg);

  transform: rotate(2deg);

  color: #333;

  padding: 20px;

  font-family: Satisfy;

  font-size: 15px;

  box-shadow: 0 10px 10px 2px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #f5cf00;

    cursor: pointer;
  }
`;
export const Pin = styled.i`
  background-color: #aaa;
  display: block;
  height: 32px;
  width: 2px;

  position: absolute;
  left: 50%;
  top: -16px;
  z-index: 1;
  &:after {
    background-color: #a31;
    background-image: radial-gradient(
      25% 25%,
      circle,
      hsla(0, 0%, 100%, 0.3),
      hsla(0, 0%, 0%, 0.3)
    );
    border-radius: 50%;

    content: "";
    height: 12px;
    left: -5px;
    position: absolute;
    top: -10px;
    width: 12px;
  }
`;
