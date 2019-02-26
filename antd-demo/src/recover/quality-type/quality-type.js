import React from 'react';
import {
    Table, Button, Modal, Form, Select, InputNumber, Switch, Radio,
    Slider, Upload, Icon, Rate, Checkbox, Input,
    Row, Col,
} from 'antd';

const data = [];
for (let i = 0; i < Math.ceil(Math.random() * 10); i++) {
    data.push({
        key: i,
        icon: 'https://img.alicdn.com/imgextra/i3/1675080898/TB2u22Sb6DpK1RjSZFrXXa78VXa_!!1675080898.jpg',
        sort: Math.ceil(Math.random() * 10),
        name: '小件干垃圾1',
        top: '是',
        state: '禁用',
    });
}
const { Option } = Select;
class Demo extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item
                    {...formItemLayout}
                    label="类型名称"
                >
                    {getFieldDecorator('input-number', { initialValue: 3 })(
                        <Input />
                    )}
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="状态"
                    hasFeedback
                >
                    {getFieldDecorator('select', {
                        initialValue:1,
                        rules: [
                            { required: true, message: '请选择状态！' },
                        ],
                    })(
                        <Select>
                            <Option value="1">启用</Option>
                            <Option value="0">禁用</Option>
                        </Select>
                    )}
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="排序"
                >
                    {getFieldDecorator('input-number', { initialValue: 3 })(
                        <InputNumber min={1} max={10} />
                    )}
                    <span className="ant-form-text">数值越大越靠前</span>
                </Form.Item>

                <Form.Item
                    {...formItemLayout}
                    label="分类图标"
                >
                    {getFieldDecorator('upload', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button type="primary">
                                <Icon type="upload" />点我上传
                </Button>
                            <span className="ant-form-text">请上传100*100尺寸的图片，格式为jpg、png</span>
                        </Upload>
                    )}

                </Form.Item>

                <Form.Item
                    wrapperCol={{ span: 12, offset: 6 }}
                >
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>

            </Form>
        );
    }
}

const WrappedDemo = Form.create({ name: 'validate_other' })(Demo);

class ModalConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    };
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div>
                <Modal
                    title="添加类型"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div>
                        <WrappedDemo />
                    </div>
                </Modal>
            </div>
        );
    }
}

class page extends React.Component {
    state = {
        filteredInfo: null,
        sortedInfo: null,
    };

    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        });
    }

    edit(key) {
        this.setState({ editingKey: key });
    }
    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const columns = [{
            title: '图标',
            dataIndex: 'icon',
            key: 'icon',
            width: '10%',
            render: (icon) => {
                return (<img style={{ width: '100px' }} src={icon} />)
            }
        }, {
            title: '类型名称',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '排序',
            dataIndex: 'sort',
            key: 'sort',
            sorter: (a, b) => a.sort.length - b.sort.length,
            sortOrder: sortedInfo.columnKey === 'sort' && sortedInfo.order,
        }, {
            title: '是否置顶',
            dataIndex: 'top',
            key: 'top',
        }, {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
        }, {
            title: '操作',
            dataIndex: '',
            key: '',
            render: (text, record) => {
                return (
                    <div>
                        <a href="#" onClick={() => this.edit(record.key)}>编辑</a>
                        &nbsp;&nbsp;&nbsp;
                    <a href="#" onClick={() => this.edit(record.key)}>删除</a>
                    </div>
                )
            }
        }];
        return (
            <div>
                <div>
                    <Button style={{ color: '#bbbbbb', marginBottom: '16px', }} icon="plus">添加类型</Button>
                    <ModalConfirm />
                </div>
                <Table columns={columns} dataSource={data} onChange={this.handleChange} />
            </div>
        );
    }
}

export default page