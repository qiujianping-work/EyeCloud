import React from 'react'
import { Card, Button } from 'antd'
import styles from './index.less'

const accountMsg = () => (
  <div className="content-inner">
    <Card className={styles.card} bodyStyle={{padding:0}}>
      <div><span>登录账号：</span><span>intellif</span></div>
      <div><span>注册时间：</span><span>2017-08-16</span></div>
      <div><span>注册邮箱：</span><span>abcc@intellif.com</span></div>
      <div><span>联系方式：</span><span>13912312312</span></div>
    </Card>
  </div>)

export default accountMsg