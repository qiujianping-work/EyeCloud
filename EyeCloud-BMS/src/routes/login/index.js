import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Icon, Row, Form, Input, Checkbox } from 'antd'
import { config } from 'utils'
import styles from './index.less'

const FormItem = Form.Item

const Login = ({
  loading,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) => {
  function handleOk () {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/login', payload: values })
    })
  }

  return (
    <div className={styles['oos-wrap']}>
      <div className={styles['oos-loginWrap']}>
        <div className={styles['oos-title']}>慧眼云BMS管理系统</div>
        <div className={styles['oos-bg']}></div>
        <div id="loginModule" className={styles['oos-login']}>
          <h2 className={styles['oos-login-title']}>系统登录</h2>
          <Form className={styles["oos-login-form"]}>
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input style={{ height: 42 }} prefix={<Icon type="user" style={{ fontSize: 16 }} />} placeholder="用户名"  onPressEnter={handleOk} />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入登录密码!' }],
              })(
                <Input style={{ height: 42 }} prefix={<Icon type="lock" style={{ fontSize: 16 }} />} type="password" placeholder="密码"  onPressEnter={handleOk} />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>下次自动登录</Checkbox>
              )}
              <Button style={{ height: 42 }} type="primary" className={styles['oos-login-form-button']} onClick={handleOk} loading={loading.effects.login}>
                登 录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
      <p className={styles['oos-copyright']}>&copy; 2017 intellif.com 版权所有</p>
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default connect(({ loading }) => ({ loading }))(Form.create()(Login))
