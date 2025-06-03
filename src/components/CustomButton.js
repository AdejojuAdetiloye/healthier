export default function CustomButton({ text, onclick }) {
  return (
    <div className="button-div">
      <button className="button" onClick={onclick}>{text}</button>
    </div>
  );
}
