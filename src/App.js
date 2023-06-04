import { AppstoreOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import Minter from './components/Minter.js';
import { AllNFTList, MyNFTList } from './components/NFTList.js';

const allNFTData = [
  {
      title: 'AllNFT 1',
      description: 'AllNFT description 1',
  },
  {
      title: 'AllNFT 2',
      description: 'AllNFT description 2',
  },
  {
      title: 'AllNFT 3',
      description: ' AllNFTdescription 3',
  },
  {
      title: 'AllNFT 4',
      description: 'AllNFT description 4',
  },
];

const myNFTData = [
  {
      title: 'MyNFT 1',
      description: 'MyNFT description 1',
  },
  {
      title: 'MyNFT 2',
      description: 'MyNFT description 2',
  },
  {
      title: 'MyNFT 3',
      description: 'MyNFT description 3',
  },
  {
      title: 'MyNFT 4',
      description: 'MyNFT description 4',
  },
];

const items = [
  {
    label: 'Minter a new Life NFT',
    key: 'minter',
    icon: <PlusSquareOutlined />,
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
  const [NFTData, setNFTData] = useState('');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    if(e.key == "my"){
      setNFTData(myNFTData);
    }else if(e.key == "all"){
      setNFTData(allNFTData);
    }

  };
  return (
    <div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      {current == 'minter' && <Minter />}
      {current == 'my' && <MyNFTList data = { NFTData }/>}
      {current == 'all' && <AllNFTList data = { NFTData }/>}
    </div>
  );
};
export default App;