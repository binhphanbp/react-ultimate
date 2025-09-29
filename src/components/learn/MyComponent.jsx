// JSX: 1 parent element
// Fragment <></> tránh render HTML thừa thãi
import './style.css';

const MyComponent = () => {
  return (
    <>
      <div>BinhPhan's First Component</div>
      <div className="child">Child</div>
    </>
  );
};

export default MyComponent;
