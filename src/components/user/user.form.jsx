import { Input, Button, notification, Modal } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';

const UserForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  // console.log('>>> Check:', fullName, email, password, phone);

  const handleSubmitBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data) {
      notification.success({
        message: 'Create user',
        description:
          'Successfully create user with email: ' + res.data.data.email,
      });
      setIsModalOpen(false);
    } else {
      notification.error({
        message: 'Create user failed',
        description: JSON.stringify(res.error) || 'Some thing went wrong',
      });
    }
  };

  return (
    <div className="user-form" style={{ margin: '10px 0' }}>
      <div
        style={{
          marginTop: '15px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3>Table Users</h3>
        <Button
          type="primary"
          // onClick={handleClick}
          onClick={() => setIsModalOpen(true)}
        >
          Create User
        </Button>
      </div>

      <Modal
        title="Create New User"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={() => handleSubmitBtn()}
        onCancel={() => setIsModalOpen(false)}
        maskClosable={false}
        okText={'Create'}
      >
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
      </Modal>
    </div>
  );
};

export default UserForm;
