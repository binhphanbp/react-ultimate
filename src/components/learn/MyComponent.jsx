// JSX: 1 parent element
// Fragment <></> tránh render HTML thừa thãi
import './style.css';

const MyComponent = () => {
  // const binhPhan = 'Bình Phan'; // string
  // const binhPhan = 21; // number
  // const binhPhan = true; // boolean
  // const binhPhan = undefined; // undefined
  // const binhPhan = null; // null
  // const binhPhan = [1, 2, 3];
  const binhPhan = {
    name: 'Bình Phan',
    age: 21,
  };

  return (
    <>
      <div>{JSON.stringify(binhPhan)} & First Component</div>
      <div>{console.log('Bình Phan console.log')}</div>
      <div className="child" style={{ borderRadius: '10px' }}>
        Child
      </div>
    </>
  );
};

export default MyComponent;
