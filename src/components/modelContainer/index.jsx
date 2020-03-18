import React, { Component } from 'react'
import { Modal, Form, Input, Switch, Checkbox, Button, Upload, message } from "antd"
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}


export default class ModalContainer extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            plainOptions: ["玄幻", "修仙", "动作", "爱情", "都市"],
            loading: false,
            imageUrl:""
        }
    }
    handleChange = info => {
        console.log(info)
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    render() {
        if(!this.state.imageUrl){
            this.state.imageUrl=this.props.modifyData.booksImage;
        }
        let { visible, modifyData } = this.props
        let { plainOptions,imageUrl } = this.state


        const uploadButton = (
            <div>
              {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div className="ant-upload-text">上传</div>
            </div>
          );

        return (
            <Modal
                title="书籍信息修改"
                visible={visible}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}

            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    onFinish={this.handleSubmit.bind(this)}
                >
                    <Form.Item
                        label="书籍名称"
                        name="booksName"
                    >
                        <Input type="text" defaultValue={modifyData.booksName} />
                    </Form.Item>
                    <Form.Item
                        label="书籍作者"
                        name="authName"
                    >
                        <Input type="text" defaultValue={modifyData.authName} />
                    </Form.Item>
                    <Form.Item
                        label="书籍详情"
                        name="booksDes"
                    >
                        <Input type="text" defaultValue={modifyData.booksDes} />
                    </Form.Item>
                    <Form.Item
                        label="是否付费"
                        name="isPay"
                    >
                        <Switch checkedChildren="付费" unCheckedChildren="免费" checked={modifyData.isPay} />
                    </Form.Item>
                    <Form.Item
                        label="类型"
                        name="tags"
                    >
                        <Checkbox.Group options={plainOptions} defaultValue={[modifyData.tags]} />
                    </Form.Item>
                    
                    <Form.Item
                        label="书籍封面"
                    >
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>

                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">修改</Button>
                    </Form.Item>
                </Form>

            </Modal>
        )
    }
    handleOk() {
        this.props.hideModal();
    }
    handleCancel() {
        this.props.hideModal();
    }
    handleSubmit(value) {
        console.log(value)
    }
}
