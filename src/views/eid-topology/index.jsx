import React from 'react';
import G6 from "@antv/g6";

class EidTopology extends React.Component {
    constructor() {
        super()
        this.state = {
            data: {
                nodes: [
                    {
                        id: "node1",
                        label: "Circle1",
                        x: 150,
                        y: 150
                    },
                    {
                        id: "node2",
                        label: "Circle2",
                        x: 400,
                        y: 150
                    }
                ],
                edges: [
                    {
                        source: "node1",
                        target: "node2"
                    }
                ]
            }
        }
    }
    componentDidMount() {
        const data = {}
        const graph = new G6.TreeGraph({
            container: 'topologyMount',
            width: 4000,
            height: 4000,
            linkCenter: true,
            modes: {
                default: [
                    {
                        type: 'collapse-expand',
                        onChange: function onChange(item, collapsed) {
                            const data = item.getModel();
                            data.collapsed = collapsed;
                            return true;
                        },
                    },
                    'drag-canvas',
                    'zoom-canvas',
                ],
            },
            defaultNode: {
                size: 26,
                anchorPoints: [
                    [0, 0.5],
                    [1, 0.5],
                ],
            },
            defaultEdge: {
                type: 'cubic-vertical',
            },
            layout: {
                type: 'compactBox',
                direction: 'TB',
                getId: function getId(d) {
                    return d.id;
                },
                getHeight: function getHeight() {
                    return 16;
                },
                getWidth: function getWidth() {
                    return 16;
                },
                getVGap: function getVGap() {
                    return 80;
                },
                getHGap: function getHGap() {
                    return 20;
                },
            }
        });
        graph.node(function (node) {
            let position = 'right';
            let rotate = 0;
            if (!node.children) {
                position = 'bottom';
                rotate = Math.PI / 2;
            }
            return {
                label: node.id,
                labelCfg: {
                    position,
                    offset: 5,
                    style: {
                        rotate,
                        textAlign: 'start',
                    },
                },
            };
        });
        graph.data(data)
        graph.render()
    }
    render() {

        return (
            <div>
                {/* <h1>Learn G6 </h1> */}
                <div id="topologyMount"></div>
            </div >
        )
    }
}

export default EidTopology
