import './Products.css'
import { SimpleCard } from './SimpleCard/SimpleCard'
import { DetailedCard } from './DetailedCard/DetailedCard'
import { Button, Modal } from 'antd'
import React, { useState } from 'react'


export const Products = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <div>
            <h2 className="products-title">Каталог товаров</h2>
            <SimpleCard />
            <DetailedCard />
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}