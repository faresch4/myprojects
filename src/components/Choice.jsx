function Choice({ isX, setIsX, setToX, setToO, setChoice}) {
  return (
    <div className="choice">
      <div>Choose with what you wanna play?</div>
      <div><button className='btnX'onClick={setToX}>X</button>
      <button className='btnO'onClick={setToO}>O</button></div>
      
    </div>
  );
}

export default Choice;
