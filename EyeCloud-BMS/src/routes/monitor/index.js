import React from 'react'
import { Card, Button ,Select } from 'antd'
import styles from './index.less'

const Option = Select.Option;

const PersonList = (data)=>{
  const { srcList } = data;
  const liStr = srcList.map(src=>(<li className={styles.item}><img src={src} /></li>));
  return(
    <ul className={styles.clearx}>{liStr}</ul>
    );
}

let faceData=[];
for(let i=0; i<50;i++){
  faceData.push("icon/a1.jpg");
}
const monitor = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  return(
  <div className='content-inner'>
    <div className={styles.header}>已录入信息</div>
    <div className={styles.body}>
      <div className={styles.choose}>
        <span className={styles.title}>选择店铺</span>
        <Select size="large" defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
          <Option value="中山店1">中山店1</Option>
          <Option value="中山店2">中山店2</Option>
          <Option value="中山店3" disabled>中山店3</Option>
          <Option value="中山店4">中山店4</Option>
        </Select>
      </div>
      <div className={styles.personnel}>
        <PersonList srcList = {faceData} />
      </div>
      <div></div>
    </div>
  </div>)
}

export default monitor