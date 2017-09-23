import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Card, Table, Modal } from 'antd'
import { DropOption } from 'components'
import styles from './index.less'
import Error from '../../error'

const confirm = Modal.confirm

const Detail = ({ storeDetail }) => {
  const { data } = storeDetail
  console.log("data--",data);
  if(JSON.stringify(data) == "{}"){
    return(<Error />)
  }
  const dataDetail = data.data;

  const handleMenuClick = (record, e) => {
    if (e.key === '1') {
      // onReadItem(record.id)
    }else if (e.key === '2') {
      // onEditItem(record)
    } else if (e.key === '3') {
      confirm({
        title: '您是否要删除该店铺吗?',
        onOk () {
          onDeleteItem(record.id)
        },
      })
    }
  }

  const columns = [
    {
      title: '序号',
      dataIndex: 'numId',
      key: 'numId',
    }, {
      title: '设备ID',
      dataIndex: 'equipmentId',
      key: 'equipmentId',
    }, {
      title: '位置',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '状态',
      dataIndex: 'state',
      key: 'state',
    }, {
      title: '操作',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return <DropOption onMenuClick={e => handleMenuClick(record, e)} menuOptions={[{ key: '3', name: '删除' }]} />
      },
    },
  ]

  const storeData = [];
  for (let i = 0; i < 46; i++) {
    storeData.push({
      numId: i+1,
      store: `中山店 ${i}`,
      equipmentId: `${i}ads32${i}`,
      address: `London, Park Lane no. ${i}`,
      state: '在线',
    });
  }

  return (<div className="content-inner">
    <div className={styles.personalInfo}>
      <Card className={styles.card}>
        <div className={styles.item}>
          <p><span>店铺名称：</span><span>{dataDetail.areaName}</span></p>
        </div>
        <div className={styles.item}>
          <p><span>店铺地址：</span><span>{dataDetail.geoString}</span></p>
        </div>
        <div className={styles.item}>
          <p><span>备注：</span><span>{dataDetail.remark}</span></p>
        </div>
      </Card>
      <Card className={styles.card}>
        <div className={styles.item}>
          <p><span>已开通服务：</span><span>人员布控</span></p>
        </div>
        <div className={styles.item}>
          <p><span>设备数目：</span><span>{dataDetail.count}</span></p>
        </div>
      </Card>
    </div>
    <div className={styles.storeTable}>
      <Table
        bordered
        scroll={{ x: 1250 }}
        columns={columns}
        simple
        rowKey={storeData.numId}
        dataSource={storeData}
      />
    </div>
  </div>)
}

Detail.propTypes = {
  storeDetail: PropTypes.object,
}

export default connect(({ storeDetail, loading }) => ({ storeDetail, loading: loading.models.storeDetail }))(Detail)
