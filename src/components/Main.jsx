import { useState } from 'react';

function Main() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <main>
      <h2>Main section here...</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat commodi sunt officia numquam, voluptas adipisci vitae soluta iusto et cumque aliquid iste voluptatum velit dolore perferendis aspernatur deleniti doloribus alias!</p>
      <h3>Counter: {count}</h3>
      <button onClick={handleClick}>
        Click Me!
      </button>
    </main>
  )
}

export default Main;