import * as echarts from 'echarts';

const usePie = (element) => {
    // 1. 初始化init
    const pieChart = echarts.init(element);

    // 2. 設置option
    const setOption = data => {
        const option = {
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    type: 'pie',
                    radius: ['60%', '90%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    color: data.color,
                    data: data.value,
                }
            ]
        }
        return pieChart.setOption(option)
    }

    // 3. 設置resize
    const resize = () => pieChart.resize();

    // 4. return方法
    return { setOption, resize }
}

export default usePie;