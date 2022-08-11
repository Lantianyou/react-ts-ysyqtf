import * as React from 'react';
import { Select } from 'antd';
import './style.css';

export default function App() {
  return (
    <Select
      option={[{ label: 'abc', value: 'abc' }]}
      style={{
        width: 500,
      }}
      onChange={(_, option) => {
        console.log(option.label);
      }}
    />
  );
}
