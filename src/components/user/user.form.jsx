import { Input } from 'antd';
import { Button } from 'antd';

const UserForm = () => {
  return (
    <div className="user-form" style={{ margin: '20px 0' }}>
      <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
        <div>
          <span>Fullname:</span>
          <Input />
        </div>
        <div>
          <span>Email:</span>
          <Input />
        </div>
        <div>
          <span>Password:</span>
          <Input.Password />
        </div>
        <div>
          <span>Phone number:</span>
          <Input />
        </div>
      </div>
      <div style={{ marginTop: '15px' }}>
        <Button type="primary">Create User</Button>
      </div>
    </div>
  );
};

export default UserForm;
