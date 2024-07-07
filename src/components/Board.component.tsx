import { FC } from "react";
import { calculateWinner } from "../utils/app.methods";
import Square from "./Square";

interface IBoardProps {
  xIsNext: boolean;
  squares: any[];
  onPlay: any;
}

const Board: FC<IBoardProps> = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  const renderRow = (rowIndex: number) => (
    <div className="board-row" key={rowIndex}>
      {Array.from({ length: 3 }, (_, colIndex) => (
        <Square
          key={colIndex}
          value={squares[rowIndex * 3 + colIndex]}
          onSquareClick={() => handleClick(rowIndex * 3 + colIndex)}
        />
      ))}
    </div>
  );

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      {Array.from({ length: 3 }, (_, rowIndex) => renderRow(rowIndex))}
    </>
  );
};

export default Board;
