import { Input, Button, notification } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';

const UserForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  // console.log('>>> Check:', fullName, email, password, phone);

  const handleClickBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data && res.data.data) {
      notification.success({
        message: 'Create user successfully',
        description:
          'Successfully create user with email: ' + res.data.data.email,
      });
    }

    // console.log('Check res:', res.data);
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
