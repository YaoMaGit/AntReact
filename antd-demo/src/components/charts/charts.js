import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

 class EchartsTest extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        window.addEventListener("resize", () => {
            myChart.resize();
          });
        const option = {
            title : {
                text: '报量：',
                left: 'left',
                subtext: ''
            },
            grid: {
                left: '0%',
                right: '10%',
                bottom: '3%',
                containLabel: true,
            },
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                // data:['蒸发量','降水量']
            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisLine: {
                        lineStyle: {
                            color: 'rgb(65, 63, 63)'
                        }
                    },
                    splitLine:{
                        show:false,
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLine: {
                        lineStyle: {
                            color: 'rgb(65, 63, 63)'
                        }
                    },
                    splitLine:{
                        show:false,
                    }
                }
            ],
            series : [
                {
                    // name:'蒸发量',
                    type:'bar',
                    itemStyle:{
                        color:'#00ccff',
                    },
                    data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    // name:'降水量',
                    type:'bar',
                    itemStyle:{
                        color:'#00ccff',
                    },
                    data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    markPoint : {
                        data : [
                            {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                            {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                        ]
                    },
                }
            ]
        };
                            
                            
        myChart.setOption(option);
    }
    render() {
        return (
            <div id="main" style={{ width: '80%', height: 250 ,margin:'auto',marginTop:'20px'}}></div>
        );
    }
}

export default EchartsTest;
