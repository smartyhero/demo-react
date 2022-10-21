/**
 * 组件放入单独的js文件中
 * 1. 导入react
 * 2. 创建组件
 * 3. 导出组件
 * 
 * 函数组件，类组件都可以导出
 */
import React from 'react';

class ClassHello extends React.Component {
    render() {
        return (
            <div>
                <span>这是个类组件。</span>
            </div>
        )
    }
}

export default ClassHello