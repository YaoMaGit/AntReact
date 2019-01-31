import React from 'react';
import {
    Table, Input, InputNumber, Form,
} from 'antd';

let data = [];

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber />;
        }
        return <Input />;
    };

    render() {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            ...restProps
        } = this.props;
        return (
            <EditableContext.Consumer>
                {(form) => {
                    const { getFieldDecorator } = form;
                    return (
                        <td {...restProps}>
                            {editing ? (
                                <FormItem style={{ margin: 0 }}>
                                    {getFieldDecorator(dataIndex, {
                                        rules: [{
                                            required: true,
                                            message: `Please Input ${title}!`,
                                        }],
                                        initialValue: record[dataIndex],
                                    })(this.getInput())}
                                </FormItem>
                            ) : restProps.children}
                        </td>
                    );
                }}
            </EditableContext.Consumer>
        );
    }
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data, editingKey: '', tab: 0 };
        this.columns = [
            {
                title: '回收单编号',
                dataIndex: 'id',
                width: '9%',
                editable: true,
            },
            {
                title: '已选择种类',
                dataIndex: 'class',
                width: '9%',
                editable: true,
            },
            {
                title: '联系人',
                dataIndex: 'person',
                width: '5%',
                editable: true,
            },
            {
                title: '联系电话',
                dataIndex: 'telphone',
                width: '7%',
                editable: true,
            },
            {
                title: '收货地址',
                dataIndex: 'address',
                width: '12%',
                editable: true,
            },
            {
                title: '预约时间',
                dataIndex: 'time1',
                width: '9%',
                editable: true,
            },
            {
                title: '下单时间',
                dataIndex: 'time2',
                width: '9%',
                editable: true,
            },
            {
                title: '状态',
                dataIndex: 'stuts',
                width: '5%',
                editable: true,
            },
            {
                title: '收货员姓名',
                dataIndex: 'severname',
                width: '5%',
                editable: true,
            },
            {
                title: '收货员手机',
                dataIndex: 'severtelphone',
                width: '7%',
                editable: true,
            }, {
                title: '回收总额',
                dataIndex: 'recovercunt',
                width: '5%',
                editable: true,
            }, {
                title: '整体评价',
                dataIndex: 'comments',
                width: '9%',
                editable: true,
            },
            {
                title: '操作',
                dataIndex: 'op',
                width: '5%',
                render: (text, record) => {
                    const editable = this.isEditing(record);
                    return (
                        <div>
                            <a onClick={() => this.edit(record.key)}>详情</a>
                        </div>
                    );
                },
            },
        ];
    }
    isEditing = record => record.key === this.state.editingKey;

    cancel = () => {
        this.setState({ editingKey: '' });
    };

    edit(key) {
        this.setState({ editingKey: key });
    }
    componentWillReceiveProps(nextProps) {
        data = []
        console.log(this.props.PropsType)
        for (let i = 0; i < Math.floor(Math.random()*10)*2; i++) {
            data.push({
                key: i.toString(),
                id: `2018011081107-${i}`,
                class: `纸皮`,
                person: `王五`,
                telphone: `15890600009`,
                address: '福州市台江区万达公寓东区1栋1单元101室',
                time1: '2018-05-20 11:00',
                time2: '2018-05-20 11:00',
                stuts: `待派单`,
                severname: `李大牛`,
                severtelphone: `18890600252`,
                recovercunt: '-',
                comments: `-`,
                op: '1',
            });
        }

        this.setState({
            data:data
        })
    }
    render() {
        const components = {
            body: {
                row: EditableFormRow,
                cell: EditableCell,
            },
        };

        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    inputType: col.dataIndex === 'age' ? 'number' : 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });

        return (
            <Table
                components={components}
                bordered
                dataSource={this.state.data}
                columns={columns}
                rowClassName="editable-row"
                className="tbCss"
                size="middle"

            />

        );
    }
}

export default EditableTable