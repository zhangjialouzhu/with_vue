<template>
    <div>
      <Table :columns="columns7" :data="data6"></Table>
    </div>
</template>

<script>
    export default {
        name: "ad",
      data(){
        return{

            columns7: [
              {
                title: '公司',
                key: 'name',
                render: (h, params) => {
                  return h('div', [
                    h('Icon', {
                      props: {
                        type: 'person'
                      }
                    }),
                    h('strong', params.row.name)
                  ]);
                }
              },
              {
                title: '广告位',
                key: 'age'
              },
              {
                title: '图片路径',
                key: 'age'
              },
              {
                title: '开始时间',
                key: 'address'
              },
              {
                title: '结束时间',
                key: 'address'
              },
              {
                title: '广告费用',
                key: 'address'
              },
              {
                title: '操作',
                key: 'action',
                width: 180,
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('Button', {
                      props: {
                        type: 'primary',
                        size: 'small'
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          this.show(params.index)
                        }
                      }
                    }, '查看'),
                    h('Button', {
                      props: {
                        type: 'primary',
                        size: 'small'
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          this.modify(params.index)
                        }
                      }
                    }, '修改'),
                    h('Button', {
                      props: {
                        type: 'error',
                        size: 'small'
                      },
                      on: {
                        click: () => {
                          this.remove(params.index)
                        }
                      }
                    }, '删除')
                  ]);
                }
              }
            ],
            data6: [
              {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park'
              },
              {
                name: 'Jim Green',
                age: 24,
                address: 'London No. 1 Lake Park'
              },
              {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park'
              },
              {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park'
              }
            ],

        }

      },
      methods: {
        show (index) {
          this.$Modal.info({
            title: 'User Info',
            content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
          })
        },
        modify(index){
          this.$Modal.info({
            title: 'User Info',
            content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
          })
        },

        remove (index) {
          this.data6.splice(index, 1);
        }
      }
    }

</script>

<style scoped>

</style>
