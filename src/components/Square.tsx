import { FC } from "react";

interface ISquareProps {
  value: any;
  onSquareClick: any;
}
const Square: FC<ISquareProps> = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
