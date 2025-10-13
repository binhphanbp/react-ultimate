import { useEffect, useState } from 'react';
import UserForm from '../components/user/user.form';
import UserTable from '../components/user/user.table';
import { fetchAllUserAPI } from '../services/api.service';

const UsersPage = () => {
  // Lift-up State
  const [dataUsers, setDataUsers] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    console.log('>>>> Run load user', res);
    setDataUsers(res.data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <UserForm loadUser={loadUser} />
      <UserTable dataUsers={dataUsers} />
    </div>
  );
};

export default UsersPage;
