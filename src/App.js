import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import Minter from './components/Minter.js'

const items = [
  {
    label: 'Minter a new Life NFT',
    key: 'minter',
    icon: <MailOutlined />,
  },
  {
    label: 'My NFTs',
    key: 'my',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'All NFTs',
    key: 'all',
    icon: <AppstoreOutlined />,
  },
];
const App = () => {
  const [current, setCurrent] = useState('minter');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      {current == 'minter' && <Minter />}
      {current == 'my' && <div>My NFTs</div>}
      {current == 'all' && <div>All NFTs</div>}
    </div>
  );
};
export default App;