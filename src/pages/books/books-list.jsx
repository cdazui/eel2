import React, { Component } from 'react'

import { Table, Tag ,Button,Pagination, Modal, message } from 'antd';
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./connect.js"
import { DetailContainer } from "./styled"
import ModalContainer from "@components/modelContainer"

@connect(mapStateToProps, mapDispatchToProps)
class BooksList extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            limit: 10,
            visible: false,
            modifyData:{}
        }
        this.columns = [
            {
                title: "书籍ID",
                dataIndex: "key",
                key: "key",
                width: 80,
                align: "center"

            },
            {
                title: '书籍名称',
                dataIndex: 'booksName',
                key: "booksName",
                width: 160,
                align: "center"
            },
            {
                title: '书籍作者',
                dataIndex: 'authName',
                key: 'authName',
                width: 100,
                align: "center"
            },
            {
                title: "书籍封面",
                dataIndex: "booksImage",
                key: "booksImage",
                render: url => <img src={url} />
            },
            {
                title: "书籍详情",
                dataIndex: "booksDes",
                key: "booksDes",
                width: 280,
                align: "center",
                render: text => <DetailContainer>{text}</DetailContainer>
            },
            {
                title: "是否付费",
                dataIndex: "isPay",
                align: "center",
                render: flag => <p>{flag ? '付费' : "免费"}</p>
            },
            {
                title: "标签",
                dataIndex: "tags",
                key: "tags",
                width: 200,
                align: "center",
                render: tags => (
                    <span>
                        {tags.map(tag => {
                            return (
                                <Tag key={tag}>
                                    {tag}
                                </Tag>
                            );
                        })}
                    </span>
                ),
            },
            {
                title: "操作",
                align: "center",
                render: (data) => {
                    return (
                        <div>
                            <Button type="link" onClick={this.showModal.bind(this, data)}>查看</Button>
                            <Button type="link" onClick={this.handleDel.bind(this, data)}>删除</Button>
                        </div>
                    )
                }
            }

        ]
    }
    render() {
        return (
            <div>
                <Table columns={this.columns} dataSource={this.props.booksList} pagination={false} />
                <Pagination total={this.props.count} onChange={this.onChange.bind(this)} />
                <ModalContainer visible={this.state.visible} hideModal={this.hideModal.bind(this)} modifyData={this.state.modifyData}></ModalContainer>
            </div>
        )
    }
    componentDidMount() {
        this.props.handleGetList(this.state.page, this.state.limit);
    }
    showModal(data){
        this.setState({
            visible:true,
            modifyData:data
        })
    }
    handleDel(data){
        Modal.confirm({
            title:"删除",
        okText:"删除",
        cancelText:"取消",
        content:`您确定要删除<<${data.booksName}>>这本书吗？`,
        onOk:()=>{
            message.success({
                content:"删除成功",
                duration:1
            })
        }
        })
    }
    // 分页
    onChange(page,limit){
        this.props.handleGetList(page, limit);
    }
    hideModal(){
        this.setState({
            visible:false
        })
    }
}

export default BooksList;