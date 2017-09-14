import react from 'react';
import {context, browserHistory } from 'dva';
import style from './LoginPage.css';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let that = this;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values,that);
        browserHistory.push(path);
        // that.context.router.push('/Indexpage');
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className={style["oos-login-form"]}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input style={{ height: 42 }} prefix={<Icon type="user" style={{ fontSize: 16 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入登录密码!' }],
          })(
            <Input style={{ height: 42 }} prefix={<Icon type="lock" style={{ fontSize: 16 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>下次自动登录</Checkbox>
          )}
          <Button style={{ height: 42 }} type="primary" htmlType="submit" className={style['oos-login-form-button']}>
            登 录
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

const LoginPage = (props) =>{
	return(
		<div className={style['oos-wrap']}>
			<div className={style['oos-loginWrap']}>
				<div className={style['oos-title']}>慧眼云OOS管理系统</div>
				<div className={style['oos-bg']}></div>
				<div id="loginModule" className={style['oos-login']}>
					<h2 className={style['oos-login-title']}>系统登录</h2>
					<WrappedNormalLoginForm />
				</div>
			</div>
			<p className={style['oos-copyright']}>&copy; 2017 intellif.com 版权所有</p>
		</div>
	);
}

export default LoginPage;