import {Button, Flex, Radio, Space} from "antd";

export default function HomeView() {
  const options = [
    {label: 'Apple', value: 'Apple'},
    {label: 'Pear', value: 'Pear'},
    {label: 'Orange', value: 'Orange'},
  ];

  return (
      <Space style={{padding: '20px'}}>
        <Flex vertical gap="middle">
          <Radio.Group block options={options} defaultValue="Pear" optionType="button"/>
        </Flex>
        <Button type="primary" htmlType="submit">Test</Button>
      </Space>
  );
}

