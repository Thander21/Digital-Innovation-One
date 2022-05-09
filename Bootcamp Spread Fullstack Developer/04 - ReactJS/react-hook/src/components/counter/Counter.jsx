export function Counter() {
  let number = 1;

  function Increment() {
    number += 1;
    //document.getElementById('showNumber').innerHTML = number;
    document.getElementsByClassName('showNumber')[0].textContent = number;
  }

  return (
    <>
      <h2 className='showNumber'>{number}</h2>
      <button onClick={Increment}>Aumentar</button>
    </>
  );
}
