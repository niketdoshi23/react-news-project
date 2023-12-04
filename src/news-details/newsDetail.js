import { Modal, Card } from "antd"

const NewsDetail = (props) => {

    /* Ok button click event */
    const handleOkClick = () => {
        props.setOpenNewsModal(false);
        props.setIsViewClicked(false);
    }

    /* Cancel button click event */
    const handleCancelClick = () => {
        props.setOpenNewsModal(false);
        props.setIsViewClicked(false);
    }

    return (
        <>
            <Modal open={props.openNewsModal} onOk={handleOkClick} onCancel={handleCancelClick} title="View News Details">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Card>
                        <div style={{ marginBottom: "10px", width: "100%" }}>
                            <p style={{ fontWeight: 700 }}>Name: <span style={{ fontWeight: 400 }}>{props.newsDetails?.name}</span></p>
                        </div>
                        <div style={{ marginBottom: "10px", width: "100%" }}>
                            <p style={{ fontWeight: 700 }}>Description: <span style={{ fontWeight: 400 }}>{props.newsDetails?.description}</span></p>
                        </div>
                        <div style={{ marginBottom: "10px", width: "100%" }}>
                            <p style={{ fontWeight: 700 }}>Category: <span style={{ fontWeight: 400 }}>{props.newsDetails?.category}</span></p>
                        </div>
                        <div style={{ marginBottom: "10px", width: "100%" }}>
                            <p style={{ fontWeight: 700 }}>Country: <span style={{ fontWeight: 400 }}>{props.newsDetails?.country}</span></p>
                        </div>
                        <div style={{ marginBottom: "10px", width: "100%" }}>
                            <p style={{ fontWeight: 700 }}>Language: <span style={{ fontWeight: 400 }}>{props.newsDetails?.language}</span></p>
                        </div>
                        <div style={{ marginBottom: "10px", width: "100%" }}>
                            <p style={{ fontWeight: 700 }}>URL: <span style={{ fontWeight: 400 }}>{props.newsDetails?.url}</span></p>
                        </div>
                    </Card>
                </div>
            </Modal>
        </>
    )
}

export default NewsDetail