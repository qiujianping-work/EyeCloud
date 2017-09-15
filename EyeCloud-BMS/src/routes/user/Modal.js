import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, InputNumber, Radio, Modal, Cascader } from 'antd'
import city from '../../utils/city'

const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}

const modal = ({
  item = {},
  onOk,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
  ...modalProps
}) => {
  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        // key: item.key,
      }
      console.log("data==",data);
      onOk(data)
    })
  }

  const modalOpts = {
    ...modalProps,
    onOk: handleOk,
  }

  return (
    <Modal {...modalOpts}>
      <Form layout="horizontal">
        <FormItem label="名称" hasFeedback {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: item.name,
            rules: [
              {
                required: true,
                message: '请输入名称!'
              },
            ],
          })(<Input placeholder="请输入名称" />)}
        </FormItem>
        <FormItem label="登录账号" hasFeedback {...formItemLayout}>
          {getFieldDecorator('account', {
            initialValue: item.account,
            rules: [
              {
                required: true,
                message: '请输入账号!'
              },
            ],
          })(<Input placeholder="请输入账号" />)}
        </FormItem>
        <FormItem label="密码" hasFeedback {...formItemLayout}>
          {getFieldDecorator('password', {
            initialValue: item.password,
            rules: [
              {
                required: true,
                message: '请输入密码!'
              },
            ],
          })(
            <Input type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem label="确认密码" hasFeedback {...formItemLayout}>
          {getFieldDecorator('passwordAgain', {
            initialValue: item.password,
            rules: [
              {
                required: true,
                message: '再次输入密码!'
              }
            ],
          })(<Input type="password" placeholder="密码" />)}
        </FormItem>
        <FormItem label="联系方式" hasFeedback {...formItemLayout}>
          {getFieldDecorator('phone', {
            initialValue: item.phone,
            rules: [
              {
                required: true,
                pattern: /^1[34578]\d{9}$/,
                message: '请输入联系方式!',
              },
            ],
          })(<Input placeholder="请输入联系方式" />)}
        </FormItem>
        <FormItem label="E-mail" hasFeedback {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: item.email,
            rules: [
              {
                required: true,
                pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                message: '请输入邮箱!',
              },
            ],
          })(<Input placeholder="请输入邮箱" />)}
        </FormItem>
        <FormItem label="备注" hasFeedback {...formItemLayout}>
          {getFieldDecorator('remarks', {
            initialValue: item.remarks,
            rules: [
              {
                required: true,
                message: '请输入备注!',
              },
            ],
          })(<Input type="textarea" placeholder="写点什么吧？" />)}
        </FormItem>
      </Form>
    </Modal>
  )
}

modal.propTypes = {
  form: PropTypes.object.isRequired,
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default Form.create()(modal)
