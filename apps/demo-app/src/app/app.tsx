import React, { useState } from 'react';
import { Button, Card, Input, Modal } from '@multiple-packages/common';
import { formatDate, daysBetween, addToDate, isDateInRange } from '@multiple-packages/utils';

export function App() {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 使用utils包中的日期工具函数
  const today = new Date();
  const formattedDate = formatDate(today, 'YYYY年MM月DD日');
  const nextWeek = addToDate(today, 7, 'day');
  const formattedNextWeek = formatDate(nextWeek, 'YYYY年MM月DD日');
  const daysDiff = daysBetween(today, nextWeek);
  
  // 检查日期是否在范围内
  const dateInRange = isDateInRange(
    addToDate(today, 3, 'day'),
    today,
    nextWeek
  );

  return (
    <div className="container">
      <div className="header">
        <h1>多仓库组件演示</h1>
        <p>本应用使用了子项目中的组件和工具函数</p>
      </div>

      <div className="content">
        <section className="section">
          <h2 className="section-title">日期工具函数演示</h2>
          <div className="component-demo">
            <p>今天是: {formattedDate}</p>
            <p>一周后是: {formattedNextWeek}</p>
            <p>相差天数: {daysDiff}天</p>
            <p>3天后是否在今天和下周之间: {dateInRange ? '是' : '否'}</p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Button 组件演示</h2>
          <div className="component-demo">
            <Button onClick={() => alert('默认按钮点击')}>默认按钮</Button>
            <Button variant="primary" onClick={() => alert('主要按钮点击')}>主要按钮</Button>
            <Button variant="secondary" onClick={() => alert('次要按钮点击')}>次要按钮</Button>
            <Button variant="danger" onClick={() => alert('危险按钮点击')}>危险按钮</Button>
            <Button size="small" onClick={() => alert('小按钮点击')}>小按钮</Button>
            <Button size="large" onClick={() => alert('大按钮点击')}>大按钮</Button>
            <Button disabled onClick={() => alert('禁用按钮点击')}>禁用按钮</Button>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Card 组件演示</h2>
          <div className="component-demo">
            <Card title="基础卡片" footer="卡片底部">
              <p>这是一个基础卡片的内容</p>
              <p>可以包含任意的React元素</p>
            </Card>
            
            <Card>
              <p>这是一个没有标题和底部的卡片</p>
            </Card>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Input 组件演示</h2>
          <div className="component-demo">
            <Input 
              placeholder="请输入内容" 
              value={inputValue} 
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Input 
              placeholder="禁用状态" 
              disabled
            />
            <Input 
              placeholder="错误状态" 
              status="error"
            />
            <Input 
              placeholder="成功状态" 
              status="success"
            />
            <Input 
              placeholder="小尺寸输入框" 
              size="small"
            />
            <Input 
              placeholder="大尺寸输入框" 
              size="large"
            />
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Modal 组件演示</h2>
          <div className="component-demo">
            <Button onClick={() => setShowModal(true)}>打开模态框</Button>
            <Modal
              title="模态框标题"
              visible={showModal}
              onClose={() => setShowModal(false)}
              footer={
                <>
                  <Button onClick={() => setShowModal(false)}>取消</Button>
                  <Button variant="primary" onClick={() => {
                    alert('确认操作');
                    setShowModal(false);
                  }}>确认</Button>
                </>
              }
            >
              <p>这是模态框的内容</p>
              <p>您可以在这里放置任何React元素</p>
            </Modal>
          </div>
        </section>
      </div>
    </div>
  );
}
