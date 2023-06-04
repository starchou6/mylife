import { Card, List } from 'antd';

const { Meta } = Card;

export const AllNFTList = ({ data }) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <List
            grid={{
                gutter: 16,
                column: 4,
            }}
            dataSource={data}
            renderItem={(item) => (
                // 渲染每个列表项的内容
                <List.Item>
                    <Card
                        hoverable
                        style={{ width: '100%', maxWidth: 360 }}
                        cover={<img alt="example" src="/images/img1.jpg" style={{ height: 240 }} />}
                        actions={[
                            <a href="#">查看</a>
                        ]}
                    >
                        <Meta title={item.title} description={item.description} />
                    </Card>
                </List.Item>
            )}
        />
    </div>
);

export const MyNFTList = ({ data }) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <List
            grid={{
                gutter: 16,
                column: 4,
            }}
            dataSource={data}
            renderItem={(item) => (
                // 渲染每个列表项的内容
                <List.Item>
                    <Card
                        hoverable
                        style={{ width: '100%', maxWidth: 360 }}
                        cover={<img alt="example" src="/images/img1.jpg" style={{ height: 240 }} />}
                        actions={[
                            <a href="#">查看</a>,
                            <a href="#">编辑</a>,
                            <a href="#" style={{ color: 'red' }}>删除</a>
                        ]}
                    >
                        <Meta title={item.title} description={item.description} />
                    </Card>
                </List.Item>
            )}
        />
    </div>
);

