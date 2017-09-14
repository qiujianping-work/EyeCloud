import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import style from './ManagePage.css';


class ManagePage extends React.Component {
  state = {
    current: 'userManage',
  }
  handleClick = (e) =>{
    console.log('click',e);
    this.setState({
      current: e.key,
    })
  }
  render(){
    return(
      <Layout className={style["oos-wrap"]}>
        <Header  className="header" style={{ background: '#354045' }}>
          <div className={style["oos-logoWrap"]}>
            <i className={style["oos-logoWrap-logo"]}></i>
            <span className={style["oos-logoWrap-text"]}>慧眼云OOS管理系统</span>
          </div>
          <div className={style["oos-wellcome"]}>欢迎你，管理员！</div>
        </Header>
        <Layout>
          <Sider width={280} style={{ background: '#24262b' }}>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['userManage']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%',backgroundColor:'#24262b', borderRight: 0, fontSize: 16 }}
              onClick = {this.handleClick}
            >
              <SubMenu key="sub1" title={<span style={{ fontSize: 16 }}><Icon style={{ fontSize: 16 }} type="user" />用户管理</span>}>
                <Menu.Item key="userManage" style={{ fontSize: 16 }}>用户管理</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span style={{ fontSize: 16 }}><Icon style={{ fontSize: 16 }} type="laptop" />subnav 2</span>}>
                <Menu.Item key="5" style={{ fontSize: 16 }}>option5</Menu.Item>
                <Menu.Item key="6" style={{ fontSize: 16 }}>option6</Menu.Item>
                <Menu.Item key="7" style={{ fontSize: 16 }}>option7</Menu.Item>
                <Menu.Item key="8" style={{ fontSize: 16 }}>option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span style={{ fontSize: 16 }}><Icon style={{ fontSize: 16 }} type="notification" />subnav 3</span>}>
                <Menu.Item key="9" style={{ fontSize: 16 }} >option9</Menu.Item>
                <Menu.Item key="10" style={{ fontSize: 16 }} >option10</Menu.Item>
                <Menu.Item key="11" style={{ fontSize: 16 }} >option11</Menu.Item>
                <Menu.Item key="12" style={{ fontSize: 16 }} >option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 40px 24px' }}>
            <Breadcrumb style={{ margin: '12px 0',fontSize: 18,color: '#2077ee' }}>
              <Breadcrumb.Item>用户管理</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
  
}

export default ManagePage;