import { useEffect, useState } from "react";
import { API } from "../api";
import { Table, Space, Button } from "antd"
import { useNavigate } from "react-router";
import NewsDetail from "./newsDetail";
const NewsList = () => {
    const [newsList, setNewsList] = useState([]);
    const [newsDetails, setNewsDetails] = useState(null);
    const [openNewsModal, setOpenNewsModal] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [filteredResult, setFilteredResult] = useState([]);
    const [isViewClicked, setIsViewClicked] = useState(false);
    const navigate = useNavigate();
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id"
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description"
        },
        {
            title: "Country",
            dataIndex: "country",
            key: "country"
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category"
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            render: (_, record) => (
                <Space>
                    <Button onClick={() => handleViewDataClick(record)}>View</Button>
                </Space>
            )
        },
    ]
    //function to store data of news
    const handleNewsList = async () => {
        try {
            const response = await API.getHeadlines();
            if (response) {
                const temp = response.sources.slice(0, 100);
                const temp2 = response.sources.slice(100);
                const finalArray = [...temp, ...temp2];
                setNewsList(finalArray)
            }
        } catch (error) {
            console.log(error);
        }

    }
    //function ends

    useEffect(() => {
        handleNewsList();
    }, []);

    const handleViewDataClick = (record) => {
        setNewsDetails(record);
        setOpenNewsModal(true);
        setIsViewClicked(true);
    }

    const handleFilterChange = (e) => {
        setUserInput(e?.target?.value);
    }

    //function to filter news data
    const handleFilterClick = async () => {
        const response = await API.getFilteredHeadlines(userInput);
        setFilteredResult(response?.sources);
    }
    //function ends

    const handleClearFilter = async () => {
        navigate(0);
    }
    return (
        <>
            <br />
            <div style={{ marginLeft: "10px" }}>
                <input style={{ borderRadius: "16px", padding: "8px", width: "40%" }} placeholder="filter by country" onChange={handleFilterChange} />
                <Button style={{ marginLeft: "10px" }} onClick={handleFilterClick} type="primary">Filter</Button>
                <Button style={{ marginLeft: "10px" }} onClick={handleClearFilter}>Clear filter</Button>

            </div>
            <Table columns={columns}
                dataSource={filteredResult.length === 0 ? newsList : filteredResult}
            />
            {
                isViewClicked && <NewsDetail setIsViewClicked={setIsViewClicked} openNewsModal={openNewsModal} setOpenNewsModal={setOpenNewsModal} newsDetails={newsDetails} />
            }
        </>
    )
}

export default NewsList;