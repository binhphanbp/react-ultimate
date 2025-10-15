import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import UpdateUserModal from './update.user.modal';

const UserTable = (props) => {
  const { dataUsers } = props;

  const columns = [
    {
      title: 'Id',
      dataIndex: '_id',
      render: (_, record) => {
        return <a href="#">{record._id}</a>;
      },
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        return (
          <div
            style={{
              display: 'flex',
              gap: '20px',
            }}
          >
            <EditOutlined style={{ cursor: 'pointer', color: 'orange' }} />
            <DeleteOutlined style={{ cursor: 'pointer', color: 'red' }} />
          </div>
        );
      },
    },
  ];

  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sydney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ];

  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={'_id'} />
      <UpdateUserModal />
    </>
  );
};

export default UserTable;
