import React from 'react';
import G6 from "@antv/g6";

class G6Test extends React.Component {
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
        // const data = {
        //     nodes: [
        //         {
        //             id: "node1",
        //             label: "1",
        //             size: "50",
        //             x: Math.floor(Math.random() * 800),
        //             y: Math.floor(Math.random() * 500)
        //         },
        //         {
        //             id: "node2",
        //             size: "50",
        //             label: "2",
        //             x: Math.floor(Math.random() * 800),
        //             y: Math.floor(Math.random() * 500)
        //         },
        //         {
        //             id: "node3",
        //             size: "50",
        //             label: "3",
        //             x: Math.floor(Math.random() * 800),
        //             y: Math.floor(Math.random() * 500)

        //         }
        //     ],
        //     edges: [
        //         {
        //             source: "node1",
        //             target: "node2"
        //         },
        //         {
        //             source: "node2",
        //             target: "node3"
        //         },
        //         {
        //             source: "node3",
        //             target: "node1"
        //         }

        //     ]
        // }
        const data = {}



        const descriptionDiv = document.createElement('div');
        descriptionDiv.innerHTML =
            'Dagre layout, rank seperation: 1, node seperation in same level: 1, layout direction: Top->Bottom, alignment of nodes: DL';
        const container = document.getElementById('g6Mount');
        container.appendChild(descriptionDiv);

        // const width = container.scrollWidth;
        // const height = (container.scrollHeight || 500) - 30;
        const width = 2000;
        const height = 2000;
        const graph = new G6.Graph({
            container: 'g6Mount',
            width,
            height,
            controlPoints: false,
            modes: {
                default: ['drag-canvas', 'drag-node'],
            },
            layout: {
                type: 'dagre',
                // type: 'dendrogram',
                nodesepFunc: (d) => {
                    if (d.id === '3') {
                        return 50;
                    }
                    return 50;
                },
                ranksep: 70,
                controlPoints: true,
            },
            animate: true,
            defaultNode: {
                size: [40, 20],
                type: 'rect',
                style: {
                    lineWidth: 2,
                    stroke: '#5B8FF9',
                    fill: '#C6E5FF',
                },
            },
            defaultEdge: {
                size: 1,
                color: '#e2e2e2',
                style: {
                    endArrow: {
                        path: 'M 0,0 L 8,4 L 8,-4 Z',
                        fill: '#33FF86',
                    },
                },
            },
        });
        graph.data(data);
        graph.render();

        if (typeof window !== 'undefined')
            window.onresize = () => {
                if (!graph || graph.get('destroyed')) return;
                if (!container || !container.scrollWidth || !container.scrollHeight) return;
                graph.changeSize(container.scrollWidth, container.scrollHeight - 30);
            };
        // layoutConfigTranslation();

        function layoutConfigTranslation() {
            setTimeout(function () {
                descriptionDiv.innerHTML =
                    'Dagre layout, rank seperation: 10, node seperation in same level: 1, layout direction: Top->Bottom, alignment of nodes: DL';
                graph.updateLayout({
                    ranksep: 10,
                });
            }, 1000);

            setTimeout(function () {
                descriptionDiv.innerHTML =
                    'Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: DL';
                graph.updateLayout({
                    nodesep: 5,
                });
            }, 2500);

            setTimeout(function () {
                descriptionDiv.innerHTML =
                    'Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: UL';
                graph.updateLayout({
                    align: 'UL',
                });
            }, 4000);

            setTimeout(function () {
                descriptionDiv.innerHTML =
                    'Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: UR';
                graph.updateLayout({
                    align: 'UR',
                });
            }, 5500);

            setTimeout(function () {
                descriptionDiv.innerHTML =
                    'Dagre layout, rank seperation: 10, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: Down Right, alignment of nodes: DL';
                graph.updateLayout({
                    rankdir: 'LR',
                    align: 'DL',
                });
            }, 7000);

            setTimeout(function () {
                descriptionDiv.innerHTML =
                    'Dagre layout, rank seperation: 30, node seperation in same level: 5, layout direction: Left->Right, alignment of nodes: Down Right, alignment of nodes: DL';
                graph.updateLayout({
                    ranksep: 30,
                });
            }, 8500);
        }
    }
    render() {

        return (
            <div>
                <h1>Learn G6 </h1>
                <div>
                    {this.state.data["nodes"][0]["id"]}
                </div>
                <div id="g6Mount">
                </div>
            </div >
        )
    }
}

export default G6Test
