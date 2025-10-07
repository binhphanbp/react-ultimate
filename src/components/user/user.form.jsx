import { Input } from 'antd';
import { Button } from 'antd';
import { useState } from 'react';

const UserForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  // console.log('>>> Check:', fullName, email, password, phone);

  const handleClickBtn = () => {
    console.log('Check State', { fullName, email, password, phone });
  };

  return (
    <div className="user-form" style={{ margin: '20px 0' }}>
      <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
        <div>
          <span>Fullname:</span>
          <Input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div>
          <span>Email:</span>
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <span>Password:</span>
          <Input.Password
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <span>Phone number:</span>
          <Input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
      </div>
      <div style={{ marginTop: '15px' }}>
        <Button
          type="primary"
          // onClick={handleClick}
          onClick={() => handleClickBtn()}
        >
          Create User
        </Button>
      </div>
    </div>
  );
};

export default UserForm;
