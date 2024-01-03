function Choice({ isX, setIsX, setToX, setToO, setChoice}) {
  return (
    <div className="choice">
      <div>Choose with what you wanna play?</div>
      <button onClick={setToX}>X</button>
      <button onClick={setToO}>O</button>
    </div>
  );
}

export default Choice;
