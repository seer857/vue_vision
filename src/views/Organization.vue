<template>
<<<<<<< HEAD
  <div id="tree" ref="tree"></div>
=======
      <div id=''>
        <h1> 我是组织架构页</h1>
        <TreeChart :json="treeData" />
      </div>
>>>>>>> 8728666ce0bb316c155baffc276a1a50b30cee49
</template>
<script>
<<<<<<< HEAD
import OrgChart from '@balkangraph/orgchart.js'
export default {
  name: 'tree',
  data() {
    return {
      nodes: [
        {
          id: 1,
          name: '经营管理委员会',
          tags: ['level 0'],
        },
        {
          id: 2,
          pid: 1,
          stpit: 1,
          name: '罗庆一',
          title: '总裁助理',
        },

        {
          id: 3,
          pid: 1,
          name: '胡宇鹏',
          title: '高级战略总监',
        },
        {
          id: 4,
          pid: 1,
          name: '罗庆一（兼）',
          title: '首席人才官',
        },
        {
          id: 5,
          pid: 1,
          name: '郑慧',
          title: '高级财务总监',
        },
        {
          id: 6,
          pid: 1,
          name: '郝鸿',
          title: '高级投资总监',
        },
        {
          id: 7,
          pid: 1,
          name: '莫炫',
          title: '高级品牌总监',
        },
        {
          id: 8,
          pid: 1,
          name: '业务中心',
          tags: ['level 4'],
        },

        {
          id: 901,
          pid: 8,
          name: '高辉',
          title: '爱玛科技国内有限公司',
        },
        {
          id: 1001,
          pid: 901,
          name: '杨俊伟',
          title: '国内事业部研发',
        },
        {
          id: 1100,
          pid: 1001,
          name: '王春磊',
          title: '研发办公室',
          tags: ['assistant'],
        },
        {
          id: 1101,
          pid: 1001,
          name: '项目管理部',
        },
        {
          id: 1102,
          pid: 1001,
          name: '平台开发部',
        },
        {
          id: 1103,
          pid: 1001,
          name: '造型设计部',
        },
        {
          id: 1104,
          pid: 1001,
          name: '部品设计部',
        },
        {
          id: 1105,
          pid: 1001,
          name: '电装设计部',
        },
        {
          id: 1106,
          pid: 1001,
          name: '工艺部',
        },
        {
          id: 1107,
          pid: 1001,
          name: '试验开发部',
        },
        {
          id: 1108,
          pid: 1001,
          name: '竞品分析及性能部',
        },
        {
          id: 1109,
          pid: 1001,
          name: '研发质量部',
        },
        {
          id: 1110,
          pid: 1001,
          name: '标准法规部',
        },
=======
import TreeChart from "vue-tree-chart";
export default {
   components:{TreeChart},
   data() {
      return {
treeData: {
            name: 'root',
            image_url: "https://static.refined-x.com/avat.jpg",
            class: ["rootNode"],
            children: [
               {
               name: 'children1',
               image_url: "https://static.refined-x.com/avat1.jpg"
               },
               {
               name: 'children2',
               image_url: "https://static.refined-x.com/avat2.jpg",
               mate: [{
                  name: 'mate',
                  image_url: "https://static.refined-x.com/avat3.jpg"
               }],
               children: [
                  {
                     name: 'grandchild',
                     image_url: "https://static.refined-x.com/avat.jpg"
                  },
                  {
                     name: 'grandchild2',
                     image_url: "https://static.refined-x.com/avat1.jpg"
                  },
                  {
                     name: 'grandchild3',
                     image_url: "https://static.refined-x.com/avat2.jpg"
                  }
               ]
               },
               {
               name: 'children3',
               image_url: "https://static.refined-x.com/avat.jpg"
               }
            ]
         
      }
       };
    },
   methods: {
>>>>>>> 8728666ce0bb316c155baffc276a1a50b30cee49

        {
          id: 1002,
          pid: 901,
          name: '杨武',
          title: '国内事业部营销',
        },
        {
          id: 1200,
          pid: 1002,
          name: '韩强英',
          title: '营销办公室',
          tags: ['assistant'],
        },
        {
          id: 1201,
          pid: 1002,
          name: '市场部',
        },
        {
          id: 1202,
          pid: 1002,
          name: '营销设计部',
        },
        {
          id: 1203,
          pid: 1002,
          name: '渠道经营部',
        },
        {
          id: 1204,
          pid: 1002,
          name: '两轮战区',
        },
        {
          id: 1205,
          pid: 1002,
          name: '特通战区',
        },
        {
          id: 1003,
          pid: 901,
          name: '齐国新（兼）',
          title: '国内事业部制造',
        },
        {
          id: 1006,
          pid: 901,
          name: '小玛科技',
          tags: ['level 2'],
        },
        {
          id: 1301,
          pid: 1003,
          title: '天津工厂',
          name: '宋现明',
          tags: ['level 1'],
        },
        {
          id: 1302,
          pid: 1003,
          title: '江苏工厂',
          name: '王海具',
          tags: ['level 1'],
        },
        {
          id: 1303,
          pid: 1003,
          title: '浙江工厂',
          name: '刘云峰',
          tags: ['level 1'],
        },
        {
          id: 1304,
          pid: 1003,
          title: '广东工厂',
          name: '黄学艺',
          tags: ['level 1'],
        },
        {
          id: 1305,
          pid: 1003,
          title: '广西工厂',
          name: '方关民',
          tags: ['level 1'],
        },
        {
          id: 1306,
          pid: 1003,
          title: '河南工厂',
          name: '马法旺',
          tags: ['level 1'],
        },
        {
          id: 1004,
          pid: 901,
          name: '高辉（兼）',
          title: '产品企划中心',
          tags: ['assistant'],
        },
        {
          id: 1005,
          pid: 901,
          name: '刘珍',
          title: '运营管理中心',
          tags: ['assistant'],
        },
        {
          id: 902,
          pid: 8,
          name: '苏宇航',
          title: '国际事业部（天津爱玛运动用品有限公司）',
        },
        {
          id: 7000,
          pid: 902,
          name: '苏宇航（兼）',
          title: '运营管理部',
          tags: ['assistant'],
        },
        {
          id: 7001,
          pid: 902,
          name: '苏宇航（兼）',
          title: '国际研发中心',
          tags: ['level 2'],
        },
        {
          id: 7002,
          pid: 902,
          name: '孙硕',
          title: '国际营销中心',
          tags: ['level 2'],
        },
        {
          id: 7003,
          pid: 902,
          name: '闫海建（代理）',
          title: '天运工厂',
          tags: ['level 2'],
        },
        {
          id: 903,
          pid: 8,
          name: '任勇（兼）',
          title: '创投事业部',
        },
        {
          id: 5000,
          pid: 903,
          name: '狄丽娜（代理）',
          title: '运营管理部',
          tags: ['assistant'],
        },
        {
          id: 5001,
          pid: 903,
          name: '彭伟',
          title: '采购中心',
          tags: ['level 2'],
        },
        {
          id: 5002,
          pid: 903,
          name: '陶峰',
          title: '天津天锂',
          tags: ['level 2'],
        },
        {
          id: 5003,
          pid: 903,
          name: '朱昱',
          title: '爱玛共享',
          tags: ['level 2'],
        },
        {
          id: 5004,
          pid: 903,
          name: '侯向东',
          title: '小帕电动',
          tags: ['level 2'],
        },
        {
          id: 5005,
          pid: 903,
          name: '张格格',
          title: '岁万万文化',
          tags: ['level 2'],
        },
        {
          id: 5006,
          pid: 903,
          name: '周瑞',
          title: '金戈设计',
          tags: ['level 2'],
        },
        {
          id: 5007,
          pid: 903,
          name: '黄帅桥',
          title: '卓悦设计',
          tags: ['level 2'],
        },
        {
          id: 5008,
          pid: 903,
          name: '侯向东',
          title: '恰空设计',
          tags: ['level 2'],
        },
        {
          id: 5009,
          pid: 903,
          name: '张讯',
          title: '捷马电动',
          tags: ['level 2'],
        },
        {
          id: 5010,
          pid: 903,
          name: '杜祥迪',
          title: '今日阳光',
          tags: ['level 2'],
        },

        {
          id: 9,
          pid: 1,
          name: '肖辉枚',
          title: '首席信息官',
        },
        {
          id: 10,
          pid: 1,
          name: '李玉宝',
          title: '首席采购官',
        },
        {
          id: 11,
          pid: 1,
          name: '杨万里',
          title: '首席技术官',
        },
        {
          id: 12,
          pid: 1,
          name: '齐国新',
          title: '首席制造官',
        },
        {
          id: 101,
          pid: 1,
          name: '袁毅',
          title: '服务公司',
          tags: ['level 5'],
        },
        {
          id: 102,
          pid: 1,
          name: '王平',
          title: '电商公司',
          tags: ['level 5'],
        },
        {
          id: 210,
          pid: 2,
          name: '冯准',
          title: '总裁办',
        },
        {
          id: 211,
          pid: 2,
          name: '罗庆一（兼）',
          title: '法务与内控中心',
        },
        {
          id: 212,
          pid: 3,
          name: '胡宇鹏（兼）',
          title: '战略智库中心',
        },
        {
          id: 213,
          pid: 3,
          name: '王志颂',
          title: '爱玛大学',
        },
        {
          id: 214,
          pid: 4,
          name: '李娜',
          title: '人才运营中心',
        },
        {
          id: 215,
          pid: 5,
          name: '郑慧（兼）',
          title: '财务管理中心',
        },
        {
          id: 216,
          pid: 5,
          name: '梁红梅',
          title: '财务共享中心',
        },
        {
          id: 217,
          pid: 6,
          name: '郝鸿（兼）',
          title: '投资管理中心',
        },
        {
          id: 218,
          pid: 7,
          name: '莫炫（兼）',
          title: '用户洞察与运营中心',
        },
        {
          id: 219,
          pid: 7,
          name: '莫炫（兼）',
          title: '品牌策略与管理中心',
        },
        {
          id: 220,
          pid: 9,
          name: '卢会北',
          title: '信息中心',
        },
        {
          id: 221,
          pid: 9,
          name: '肖辉枚（兼）',
          title: '智能化中心',
        },
        {
          id: 222,
          pid: 10,
          name: '李鹏',
          title: '采购中心',
        },
        {
          id: 223,
          pid: 10,
          name: '孙有权',
          title: 'SQE管理中心',
        },
        {
          id: 224,
          pid: 11,
          name: '肖冰',
          title: '中央研究院',
        },
        {
          id: 225,
          pid: 11,
          name: '陈凯建',
          title: '品质管理中心',
        },
        {
          id: 226,
          pid: 12,
          name: '齐国新（兼）',
          title: '制造中心',
        },
      ],
    }
  },

  methods: {
    oc: function (domEl, x) {
      this.chart = new OrgChart(domEl, {
        nodes: x,
        //orientation: OrgChart.orientation.left,
        //mouseScrool:OrgChart.action.none,
        enableDragDrop: true,
        //enableTouch:"true",
        enableSearch: false,
        template: 'olivia',
        nodeMenu: {
          edit: { text: '编辑' },
          add: { text: '新增' },
          remove: { text: '删除' },
        },
        nodeBinding: {
          field_0: 'name',
          field_1: 'title',
        },
        //   linkBinding: {
        //     link_field_0: 'createdAt',
        //   },
        toolbar: {
          layout: true,
          zoom: true,
          fit: true,
          expandAll: false,
        },
        nodeMouseClick: OrgChart.action.edit,
        tags: {
          assistant: {
            template: 'ula',
          },
          'level 0': {
            subLevels: 0,
          },
          'level 1': {
            subLevels: 1,
          },
          'level 2': {
            subLevels: 2,
          },
          'level 3': {
            subLevels: 3,
          },
          'level 4': {
            subLevels: 4,
          },
          'level 5': {
            subLevels: 5,
          },
          'level 6': {
            subLevels: 6,
          },
          'level 7': {
            subLevels: 7,
          },
          partnerTemplate: {
            template: 'partnerTemplate',
          },
        },
        //levelSeparation:150,
        //   dragDropMenu: {
        //     addInGroup: { text: 'Add in group' },
        //     addAsChild: { text: 'Add as child' },
        //   },
        //   clinks: [
        //     { from: 4, to: 0, label: 'text' },
        //     { from: 4, to: 5, template: 'blue', label: '4 reports to 5' },
        //     { from: 2, to: 6, template: 'yellow', label: 'lorem ipsum' },
        //   ],
      })
    },
  },

  mounted() {
    this.oc(this.$refs.tree, this.nodes)
  },
}
</script>

<style scoped>
</style>