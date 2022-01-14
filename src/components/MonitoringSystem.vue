<template>
  <div class="hello" style="height: 100%;width: 100%;">
    <!--    <div>{{ drawer }}</div>-->
    <div class="show-equipmentMessage flex-column" @click="drawer = true" v-show="!drawer">
      <span class="el-icon-arrow-right" style="margin-right: 3px"></span></div>
    <el-drawer
        title="设备信息"
        :visible.sync="drawer"
        :direction="direction"
        :with-header="true">
      <div class="flex-row" style="justify-content: space-around">
        <el-select v-model="value" size="mini" style="width: 140px" placeholder="请选择">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <el-button size="mini" @click="switchingEquipment()">切换</el-button>
      </div>
      <div style="border-bottom: 1px #d0d1d1 dashed;margin-top: 3px"></div>
      <div style="border-bottom: 1px #d0d1d1 dashed;margin-top: 2px"></div>
      <div class="flex-row">
        <div v-show="machineInfo.MIXINGMACHINENAME!=null&&machineInfo.MIXINGMACHINENAME !=''">
          <div class="machine-message">所属项目：{{ machineInfo.ITEMNAME }}</div>
          <div class="machine-message">所属标段：{{ machineInfo.SECTIONPROJECTNAME }}</div>
          <div class="machine-message">所属区域：{{ machineInfo.MECHANISMNAME }}</div>
          <div class="machine-message">设备名称：{{ machineInfo.MIXINGMACHINENAME }}</div>
          <div class="machine-message">设备编号：{{ machineInfo.VALUE }}</div>
        </div>
      </div>
    </el-drawer>
    <div class="flex-row"
         style="justify-content: space-between;padding-left: 40px;padding-right:20px;align-items: center;height: 50px;">
      <span style="font-size: 19px;color: #33d9ed">2021广东深汕西改扩建工程项目xx搅拌站监控系统</span>
      <span style="font-size: 13px;color: aliceblue">{{ dataTime }} &nbsp;&nbsp;&nbsp;{{ low }}~{{ high }}</span>
    </div>
    <div class="flex-row" style="justify-content: center;align-items: center;width: 100%;height: 100%">
      <div class="flex-row" style="justify-content: center;align-items: center;margin-top: 20px">
        <!--      左侧-->
        <div class="" style="margin-left: 60px;margin-right: -70px;margin-top: -100px">
          <div class="flex-row">
            <img draggable="false" style="margin-left: 2px" src="../assets/powder.png" alt="">
            <img draggable="false" style="margin-left: 10px" src="../assets/powder.png" alt="">
          </div>
          <div class="left-body flex-row">
            <div class="left-message flex-row">
              <span style="color: red;font-size: 12px">{{ dataInfo.CONSTRUCTKPOWDER }} kg</span>
            </div>
          </div>
          <div class="left-pipeline" style="z-index: 999"></div>
        </div>
        <div>
          <!--        头部-->
          <div class="flex-row">
            <div class="body-blender flex-column">
              <div class="flex-row" style="margin-top: 20px">
                <div style="margin-left: 8px;position:relative;">
                  <div class="div-show">{{ dataInfo.CONSTRUCTSAND1 }}</div>
                  <img class="div-img" draggable="false" src="../assets/blender_rectangle.png" alt="">
                </div>
                <div style="margin-left: 6px;position:relative;">
                  <div class="div-show">
                    {{ dataInfo.CONSTRUCTSAND2 }}
                  </div>
                  <img class="div-img" draggable="false" src="../assets/blender_rectangle.png" alt="">
                </div>
                <div style="margin-left: 6px;position:relative;">
                  <div class="div-show">
                    {{ dataInfo.CONSTRUCTGRAVEL1 }}
                  </div>
                  <img class="div-img" draggable="false" src="../assets/blender_rectangle.png" alt="">
                </div>
                <div style="margin-left: 6px;position:relative;">
                  <div class="div-show">
                    {{ dataInfo.CONSTRUCTGRAVEL2 }}
                  </div>
                  <img class="div-img" draggable="false" src="../assets/blender_rectangle.png" alt="">
                </div>
                <div style="margin-left: 6px;position:relative;">
                  <div class="div-show">
                    {{ dataInfo.CONSTRUCTGRAVEL3 }}
                  </div>
                  <img class="div-img" draggable="false" src="../assets/blender_rectangle.png" alt="">
                </div>
                <div style="margin-left: 6px;position:relative;">
                  <div class="div-show">
                    {{ dataInfo.CONSTRUCTGRAVEL4 }}
                  </div>
                  <img class="div-img" draggable="false" style="width: 30px;height: 67px;"
                       src="../assets/blender_rectangle.png" alt="">
                </div>
              </div>
              <div class="body-message flex-row">
                <span style="color: red;font-size: 12px">{{ dataInfo.CONSTRUCTW }} kg</span>
              </div>
            </div>
            <!--          右侧-->
            <div class="flex-column">
              <img draggable="false" src="../assets/20220111-145638.gif"
                   style="width: 272px;height: 191px;margin-left: 60px;margin-top: 30px;margin-bottom: -60px" alt="">
              <img src="../assets/cartridge_heater.png" style="width: 149px;height: 68px;" alt="">
            </div>
          </div>

          <div class="flex-row" style="margin-top: -20px">
            <!--          下方搅拌装置-->
            <div style="width: 330px;height: 200px;position:relative;margin-left: -60px;">
              <div class="body-message2 flex-row" style="">
                <span style="color: red;font-size: 12px">{{ dataInfo.TEMPERATURE }} ℃</span>
              </div>
              <img draggable="false" src="../assets/20220111-143308.gif" style="width: 330px;height: 200px;"
                   alt="">
            </div>
            <!--          右侧-->
            <div>
              <img draggable="false" src="../assets/pipeline2.png"
                   style="width: 240px;height: 90px;margin-top: -20px;margin-left: -140px" alt="">
              <div class="flex-column" style="margin-top: -70px;margin-left: 50px">
                <div>
                  <div class="right-body flex-row">
                    <div class="right-message flex-row">
                      <span style="color: red;font-size: 12px">{{ dataInfo.CONSTRUCTKPOWDER }} kg</span>
                    </div>
                  </div>
                </div>
                <div class="flex-column" style="margin-top: 10px">
                  <img src="../assets/asphalt_tank.png" style="width: 147px;height: 44px" alt="">
                  <img src="../assets/asphalt_tank.png"
                       style="width: 147px;height: 44px; margin-top: -15px;margin-left: 20px" alt="">
                  <img src="../assets/asphalt_tank.png"
                       style="width: 147px;height: 44px;margin-top: -15px;margin-left: 40px" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

const height = window.innerHeight;
export default {
  name: 'HelloWorld',
  /* eslint-disable */
  data() {
    return {
      windowHeight: height,
      drawer: false,
      direction: 'ltr',
      itemId: '425c3af0-f8aa-4206-bfff-df9903f0602d',
      equipmentTypeId: '2',
      options: [],
      intervalId: '',
      value: '',
      dataInfo: {
        //出料温度
        TEMPERATURE: '',
        //沥青
        CONSTRUCTPITCH: '',
        CONSTRUCTSAND1: '',
        CONSTRUCTSAND2: '',
        CONSTRUCTGRAVEL1: '',
        CONSTRUCTGRAVEL2: '',
        CONSTRUCTGRAVEL3: '',
        CONSTRUCTGRAVEL4: '',
        //矿粉
        CONSTRUCTKPOWDER: '',
        //骨料总重
        CONSTRUCTW: ''
      },
      machineInfo: {
        ITEMNAME: "",
        MECHANISMNAME: "",
        MIXINGMACHINENAME: "",
        SECTIONPROJECTNAME: "",
        VALUE: ""
      },
      dischargingtime: this.formatDate(new Date(new Date().getTime() - 24 * 60 * 60 * 1000)) + " - " + this.formatDate(new Date()),
      //  天气
      high: '',
      low: '',
      dataTime: ''
    }
  },
  created() {
    this.findmachinelist();
    this.RTData();
    this.weatherInfo()
    this.intervalId = setInterval(() => {
      this.RTData();
    }, 1000 * 5)
  },
  methods: {
    switchingEquipment() {
      clearInterval(this.intervalId)
      this.findMachineInfo(this.value);
      this.RTData();

      this.intervalId = setInterval(() => {
        this.RTData();
      }, 1000 * 5)
    },
    findmachinelist() {
      let param = new URLSearchParams();
      param.append('ITEMID', this.itemId);
      param.append('EQUIPMENTTYPEID', this.equipmentTypeId)
      this.$axios.post('http://47.98.39.16:8988/mix/mixingmachineconfiguration/mixingmachineconfiguration!findmachinelist.do', param).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          this.options.push({
            value: res.data[i].EQUIPMENTCODE + '',
            label: res.data[i].MIXINGMACHINENAME + ''
          })
        }
      })
    },
    weatherInfo() {
      axios.get('http://t.weather.itboy.net/api/weather/city/101280101').then(res => {
        let list = res.data.data.forecast[0];
        this.high = list.high.split(' ', 2)[list.high.split(' ', 2).length - 1]
        this.low = list.low.split(' ', 2)[list.low.split(' ', 2).length - 1]
        this.dataTime = this.formatDate(new Date()).split(' ', 1)[0]
      })
    },
    findMachineInfo(code) {
      let param = new URLSearchParams();
      param.append('equipmentCode', code);
      this.$axios.post('http://47.98.39.16:8988/mix/mixingmachineconfiguration/mixingmachineconfiguration!findMachineofItem.do', param).then(res => {
        this.machineInfo = res.data[0];
        this.machineInfo.VALUE = code;
      })
    },
    RTData() {
      console.log("show-message")
      if (this.value == '') {
        this.findMachineInfo('GKJ0901')
      }
      let valueInfo = this.value == '' ? 'GKJ0901' : this.value;
      let param = new URLSearchParams()
      param.append('pageNumber', '1')
      param.append('pageSize', '10')
      param.append('itemID', '')
      param.append('SectionProjectID', '')
      param.append('MechanismCode', valueInfo)
      param.append('ProjectName', '')
      param.append('PouringPosition', '')
      param.append('RATIONAME', '')
      param.append('USEPOSITION', '')
      param.append('DischargingTime', this.dischargingtime)
      param.append('equipmenttypeid', '')
      param.append('scale', '')
      param.append('datanum', '')
      this.$axios({
        method: 'POST',
        url: 'http://47.98.39.16:8988//mix/datacollection/datacollection!findDateCollectionlq.do',
        responseType: 'json',
        data: param
      }).then(res => {
        this.dataInfo.CONSTRUCTGRAVEL1 = res.data.rows[0].CONSTRUCTGRAVEL1;
        this.dataInfo.CONSTRUCTGRAVEL2 = res.data.rows[0].CONSTRUCTGRAVEL2;
        this.dataInfo.CONSTRUCTGRAVEL3 = res.data.rows[0].CONSTRUCTGRAVEL3;
        this.dataInfo.CONSTRUCTGRAVEL4 = res.data.rows[0].CONSTRUCTGRAVEL4;
        this.dataInfo.CONSTRUCTSAND1 = res.data.rows[0].CONSTRUCTSAND1;
        this.dataInfo.CONSTRUCTSAND2 = res.data.rows[0].CONSTRUCTSAND2;
        this.dataInfo.TEMPERATURE = res.data.rows[0].TEMPERATURE;
        this.dataInfo.CONSTRUCTPITCH = res.data.rows[0].CONSTRUCTPITCH;
        this.dataInfo.CONSTRUCTKPOWDER = res.data.rows[0].CONSTRUCTKPOWDER;
        this.dataInfo.CONSTRUCTW = Number(res.data.rows[0].CONSTRUCTGRAVEL1)
            + Number(res.data.rows[0].CONSTRUCTGRAVEL2)
            + Number(res.data.rows[0].CONSTRUCTGRAVEL3)
            + Number(res.data.rows[0].CONSTRUCTGRAVEL4)
            + Number(res.data.rows[0].CONSTRUCTSAND1)
            + Number(res.data.rows[0].CONSTRUCTSAND2);
      })
    },
    formatDate(datetime) {
      var date = new Date(datetime); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var year = date.getFullYear(),
          month = ("0" + (date.getMonth() + 1)).slice(-2),
          sdate = ("0" + date.getDate()).slice(-2),
          hour = ("0" + date.getHours()).slice(-2),
          minute = ("0" + date.getMinutes()).slice(-2),
          second = ("0" + date.getSeconds()).slice(-2);
      // 拼接
      var result = year + "-" + month + "-" + sdate + " " + hour + ":" + minute + ":" + second + '';
      // 返回
      return result;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  -webkit-user-drag: none;
}

.show-equipmentMessage {
  margin-top: 10px;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background: aliceblue;
  position: fixed;
  justify-content: center;
  align-items: flex-end;
  margin-left: -20px;
  border: 0;
}

.machine-message {
  width: 220px;
  height: 22px;
  font-size: 13px;
  margin-top: 5px;
  margin-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.left-body {
  width: 84px;
  height: 48px;
  background: url("../assets/body_l.png");
  background-size: 100% 100%;
  justify-content: center;
}

.left-message {
  width: 70px;
  height: 22px;
  background: url("../assets/show_message.png");
  background-size: 100% 100%;
  margin-top: 6px;
  justify-content: center;
}

.body-message {
  width: 100px;
  height: 22px;
  background: url("../assets/show_message.png");
  background-size: 100% 100%;
  margin-top: 30px;
  margin-left: 61px;
  justify-content: center;
}

.left-pipeline {
  width: 170px;
  height: 70px;
  background: url("../assets/pipeline1.png");
  background-size: 100% 100%;
  margin-top: -8px;
  margin-left: 20px;
}

.body-blender {
  width: 276px;
  height: 280px;
  background: url("../assets/blender.png");
  background-size: 100% 100%;
  justify-content: center;
  min-width: 276px;
}

.div-show {
  width: 28px;
  height: 67px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  bottom: 20px;
  font-size: 11px;
}

.div-img {
  width: 28px;
  height: 67px;
}

.body-message2 {
  width: 100px;
  height: 22px;
  background: url("../assets/show_message.png");
  background-size: 100% 100%;
  position: absolute;
  left: 35%;
  top: 35%;
  justify-content: center;
}

.right-body {
  width: 84px;
  height: 48px;
  background: url("../assets/body_l.png");
  background-size: 100% 100%;
  justify-content: center;
}

.right-message {
  width: 70px;
  height: 22px;
  background: url("../assets/show_message.png");
  background-size: 100% 100%;
  margin-top: 6px;
  justify-content: center;
}
</style>
