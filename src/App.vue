<template>
  <div id="app">
    <div class="pb48 underline">
      <h2>基础组件：Button</h2>
      <p>1.基础样式：type</p>
      <el-button>default</el-button>
      <el-button type="primary">primary</el-button>
      <el-button type="success">success</el-button>
      <el-button type="info">info</el-button>
      <el-button type="warning">warning</el-button>
      <el-button type="danger">danger</el-button>
      <p>2.按钮大小：size</p>
      <el-button>default</el-button>
      <el-button type="primary" size="large">large</el-button>
      <el-button type="primary" size="medium">medium</el-button>
      <el-button type="primary" size="small">small</el-button>
      <p>3.按钮形状：shape</p>
      <el-button>default</el-button>
      <el-button shape="circle" type="info">circle</el-button>
      <el-button shape="rectangle" type="info">rectangle</el-button>
      <p>4.禁用按钮：disabled</p>
      <el-button disabled>default</el-button>
      <el-button type="primary" disabled>primary</el-button>
      <el-button type="success" disabled>success</el-button>
      <el-button type="info" disabled>info</el-button>
      <el-button type="warning" disabled>warning</el-button>
      <el-button type="danger" disabled>danger</el-button>
      <p>5.按钮组：</p>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">
          下一页
          <i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </el-button-group>
      <p>6.加载中:</p>
      <el-button type="primary" :loading="true">加载中</el-button>
      <p>7.文字按钮：</p>
      <el-button type="text">文字按钮</el-button>
      <el-button type="text" disabled>文字按钮</el-button>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：roadio单选框</h2>
      <p>1.基础样式</p>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
      <p>2.禁用样式</p>
      <el-radio disabled v-model="radio" label="2">备选项</el-radio>
      <el-radio disabled v-model="radio" label="1">备选项</el-radio>
      <P>3.按钮样式:基础状态</P>
      <el-radio-group v-model="radio1">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
      <p>4.按钮样式:禁用状态</p>
      <el-radio-group v-model="radio1" disabled>
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：checkbox多选框</h2>
      <p>1.基础样式</p>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        <el-checkbox label="复选框 B"></el-checkbox>
        <el-checkbox label="复选框 C"></el-checkbox>
        <el-checkbox label="禁用" disabled></el-checkbox>
        <el-checkbox label="选中且禁用" disabled></el-checkbox>
      </el-checkbox-group>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：input输入框</h2>
      <p>1.基础样式</p>
      <el-input v-model="input" placeholder="请输入内容" style="width:300px;"></el-input>
      <p>2.禁用状态</p>
      <el-input v-model="input" placeholder="请输入内容" style="width:300px;" disabled></el-input>
      <p>3.带icon的输入框</p>
      <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input" style="width:300px;"></el-input>
      <br />
      <br />
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input"
        style="width:300px;"
      ></el-input>
      <br />
      <br />
      <el-input placeholder="请输入内容" v-model="input" style="width:300px;">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <br />
      <br />
      <el-input placeholder="请选择日期" v-model="input" style="width:300px;">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </el-input>
      <p>4.文本域</p>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea"
        style="width:300px;"
        maxlength="100"
      ></el-input>
      <p>5.不同尺寸</p>
      <el-input placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input" style="width:300px;"></el-input>
      <br />
      <br />
      <el-input
        size="medium"
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input"
        style="width:300px;"
      ></el-input>
      <br />
      <br />
      <el-input
        size="small"
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input"
        style="width:300px;"
      ></el-input>
      <br />
      <br />
      <el-input
        size="mini"
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input"
        style="width:300px;"
        maxlength="10"
      ></el-input>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：select选择器</h2>
      <p>1.基础用法</p>
      <el-select v-model="selectValue" placeholder="请选择">
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        ></el-option>
      </el-select>
      <p>2.禁用状态</p>
      <el-select v-model="selectValue" placeholder="请选择" disabled>
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        ></el-option>
      </el-select>
      <p>3.自定义模块</p>
      <el-select v-model="cusSelectValue" placeholder="请选择">
        <el-option
          v-for="item in selectCities"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <span>{{ item.label }}</span>
          <span>{{ item.value }}</span>
        </el-option>
      </el-select>
      <p>4.分组</p>
      <el-select v-model="selectGroupValue" placeholder="请选择">
        <el-option-group
          v-for="group in selectGroupOptions"
          :key="group.label"
          :label="group.label"
        >
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-option-group>
      </el-select>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：TIMEPICKER时间选择器</h2>
      <p>1.固定时间点</p>
      <el-time-select
        v-model="fixedTimeValue"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }"
        placeholder="选择时间"
      ></el-time-select>
      <p>2.时间范围选择</p>
      <el-time-picker
        is-range
        v-model="timeRangeValue"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
      ></el-time-picker>
      <p>3.任意时间点选择</p>
      <el-time-picker
        v-model="anyTimeValue"
        :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
        }"
        placeholder="任意时间点"
      ></el-time-picker>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：DATEPICKER日期选择器</h2>
      <p>1.基础用法</p>
      <el-date-picker v-model="dateValue" type="date" placeholder="选择日期"></el-date-picker>
      <p>2.带快捷选项</p>
      <el-date-picker
        v-model="dateValue"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions"
      ></el-date-picker>
      <p>3.带范围选择</p>
      <el-date-picker
        v-model="dateRangeValue"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
      <p>3.选择多个日期</p>
      <el-date-picker type="dates" v-model="multipleTimeValue" placeholder="选择一个或多个日期"></el-date-picker>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：DateTimePicker 日期时间选择器</h2>
      <p>1.基础用法</p>
      <el-date-picker v-model="dateTimeValue" type="datetime" placeholder="选择日期时间"></el-date-picker>
      <p>2.带快捷选项</p>
      <el-date-picker
        v-model="dateTimeValue"
        type="datetime"
        placeholder="选择日期时间"
        align="right"
        :picker-options="pickerOptions"
      ></el-date-picker>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：SLIDER滑块</h2>
      <p>1.基础用法</p>
      <el-slider v-model="sliderValue" style="width:300px;margin:0 auto;"></el-slider>
      <p>2.隐藏Tooltip</p>
      <el-slider v-model="sliderValue" :show-tooltip="false" style="width:300px;margin:0 auto;"></el-slider>
      <p>3.格式化Tooltip</p>
      <el-slider
        v-model="sliderValue"
        :format-tooltip="formatTooltip"
        style="width:300px;margin:0 auto;"
      ></el-slider>
      <p>4.禁用</p>
      <el-slider v-model="sliderValue" disabled style="width:300px;margin:0 auto;"></el-slider>
      <p>5.竖向</p>
      <el-slider v-model="sliderValue" vertical height="200px" class="cusSilder"></el-slider>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：Switch开关</h2>
      <p>1.基础用法</p>
      <el-switch v-model="switchOpen"></el-switch>
      <el-switch v-model="switchClose"></el-switch>
      <p>2.禁用状态</p>
      <el-switch v-model="switchOpen" disabled></el-switch>
      <el-switch v-model="switchClose" disabled></el-switch>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：Badge标记</h2>
      <p>1.基础用法</p>
      <el-badge :value="12" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <el-badge :value="3" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <el-badge :value="1" class="item" type="primary">
        <el-button size="small">评论</el-button>
      </el-badge>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <el-badge :value="2" class="item" type="warning">
        <el-button size="small">回复</el-button>
      </el-badge>
      <p>2.自定义内容</p>
      <el-badge value="new" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <p>3.最大值</p>
      <el-badge :value="200" :max="99" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：Table表格</h2>
      <p>1.基础用法</p>
      <el-table :data="testTableData" style="width: 100%">
        <el-table-column align="center" prop="date" label="日期" width="180"></el-table-column>
        <el-table-column align="center" prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column align="center" prop="address" label="地址"></el-table-column>
      </el-table>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：Tag标签</h2>
      <p>1.基础用法</p>
      <el-tag
        v-for="tag in tags"
        :key="tag.name"
        closable
        :type="tag.type"
        style="margin-right:16px;"
      >{{tag.name}}</el-tag>
      <p>2.不同尺寸</p>
      <el-tag style="margin-right:16px;" closable>默认标签</el-tag>
      <el-tag style="margin-right:16px;" size="medium" closable>中等标签</el-tag>
      <el-tag style="margin-right:16px;" size="small" closable>小型标签</el-tag>
      <el-tag style="margin-right:16px;" size="mini" closable>超小标签</el-tag>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：BREADCRUMB面包屑</h2>
      <p>1.基础用法</p>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">活动管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <p>2.图标分隔符</p>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：分页</h2>
      <p>1.基础样式</p>
      <pagination :total="200" @getPageData="getPageData"></pagination>
      <p>2.带有背景色的分页</p>
      <pagination :total="200" @getPageData="getPageData" :background="true"></pagination>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：Tree树形控件</h2>
      <p>1.基础样式</p>
      <el-tree
        :data="treeData"
        :props="defaultProps"
        @node-click="handleNodeClick"
        style="width:300px;margin:0 auto 16px;"
      ></el-tree>
      <p>2.可选择</p>
      <el-tree
        :data="treeData"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]"
        style="width:300px;margin:0 auto;"
      ></el-tree>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：InfiniteScroll 无限滚动</h2>
      <p>1.基础样式</p>
      <ul
        class="infinite-list"
        v-infinite-scroll="loadDate"
        style="overflow:auto;height:300px;width:300px;margin:0 auto;"
      >
        <li v-for="i in count" class="infinite-list-item" :key="i">{{ i }}</li>
      </ul>
    </div>

    <div class="pb48 underline">
      <h2>基础组件：Message 消息提示</h2>
      <p>1.基础样式</p>
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="closeDialog">
      <p>这是一段信息</p>
      <p>这是一段信息</p>
      <p>这是一段信息</p>
      <p>这是一段信息</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>

    <div class="pb48 underline">
      <h2>基础组件：Message 消息提示</h2>
      <p>1.指令方式</p>
      <el-button
        type="primary"
        @click="openFullScreen1"
        v-loading.fullscreen.lock="fullscreenLoading"
      >指令方式</el-button>
      <p>2.服务方式</p>
      <el-button type="primary" @click="openFullScreen2">服务方式</el-button>
    </div>

    <div class="pb48 underline">
      <h2>自定义组件：按条件搜索</h2>
      <p>1.按关键字搜索</p>
      <keyWordSreach :hintStr="hintStr" @sendKeyWord="sendKeyWord" />
      <p>2.选择车辆</p>
      <selectCar
        class="selectCar select-width"
        @sendChooseCar="getCarName"
        :chooseType="chooseType"
        :showLabel="false"
      />
    </div>

    <div class="pb48 underline">
      <h2>自定义组件：导入导出</h2>
      <p>1.上传升级包</p>
      <uploadAndDelFile
        ref="uploadAndDelFile"
        name="添加升级包"
        url="/devUpgrade/upload"
        :disabled="false"
        @uploadSuccess="uploadSuccess"
      ></uploadAndDelFile>
      <p>2.上传excel文件</p>
      <uploadFile style="margin-left:10px" url="/pilotInfo/import"></uploadFile>
    </div>
    <div class="pb48 underline">
      <h2>自定义组件：下拉菜单</h2>
      <p>1.树形下拉菜单</p>
      <treeSelect :valueName="valueName" :value="value" @getValue="getGroupId" @getName="getName"></treeSelect>
      <p>2.多选树形下拉菜单</p>
      <companySelectForSearch
        ref="companySelectMultiple"
        :clearable="false"
        :multiple="true"
        @getValue="getGroupId"
      ></companySelectForSearch>
    </div>
    <div class="pb48 underline">
      <h2>自定义组件：echarts</h2>
      <p>1.柱状图</p>
      <div style="display: flex">
        <charts style="width: 32%" :option="lineOption1" :id="'line1'" />
        <charts style="width: 32%" :option="lineOption2" :id="'line2'" />
        <charts style="width: 32%" :option="lineOption3" :id="'line3'" />
      </div>
      <p>2.饼状图</p>
      <div style="display: flex">
        <charts style="width: 24%" :option="pieOption1" :id="'pie1'" />
        <charts style="width: 24%" :option="pieOption2" :id="'pie2'" />
        <charts style="width: 24%" :option="pieOption3" :id="'pie3'" />
        <charts style="width: 24%" :option="pieOption4" :id="'pie4'" />
      </div>
      <p>3.折线图</p>
      <div style="display: flex">
        <charts style="width: 32%" :option="lineChartOption1" :id="'ineChart1'" />
        <charts style="width: 32%" :option="lineChartOption2" :id="'ineChart2'" />
        <charts style="width: 32%" :option="lineChartOption3" :id="'ineChart3'" />
      </div>
    </div>
    <div class="pt48">
      <h2>自定义组件：表格</h2>
      <p>1.传表头表内容的表格</p>
      <reportTable
        ref="pagination"
        :total="total"
        @sendInfo="getPageData"
        :dataArr="tableData"
        :headerObj="tableHeader"
      />
    </div>
  </div>
</template>

<script>
import keyWordSreach from "./components/keyWordSreach.vue";
import selectCar from "./components/selectCar/selectCar.vue";
import treeSelect from "./components/treeSelect/treeSelect.vue";
import companySelectForSearch from "./components/treeSelect/companySelectForSearch.vue";
import uploadAndDelFile from "./components/uploadFile/uploadAndDelFile.vue";
import uploadFile from "./components/uploadFile/uploadFile.vue";
import charts from "./components/charts.vue";
import reportTable from "./components/reportTable.vue";
import pagination from "./components/pagination.vue";
import echarts from "echarts";
export default {
  name: "app",
  components: {
    keyWordSreach,
    selectCar,
    treeSelect,
    companySelectForSearch,
    uploadAndDelFile,
    uploadFile,
    charts,
    reportTable,
    pagination
  },
  data() {
    return {
      fullscreenLoading: false,
      dialogVisible: false,
      count: 0,
      treeData: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      tags: [
        { name: "标签一", type: "" },
        { name: "标签二", type: "success" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "warning" },
        { name: "标签五", type: "danger" }
      ],
      testTableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      switchOpen: true,
      switchClose: false,
      sliderValue: 66,
      dateTimeValue: "",
      multipleTimeValue: "",
      dateRangeValue: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      dateValue: "",
      anyTimeValue: "",
      timeRangeValue: [
        new Date(2016, 9, 10, 8, 40),
        new Date(2016, 9, 10, 9, 40)
      ],
      fixedTimeValue: "",
      selectGroupOptions: [
        {
          label: "热门城市",
          options: [
            {
              value: "Shanghai",
              label: "上海"
            },
            {
              value: "Beijing",
              label: "北京"
            }
          ]
        },
        {
          label: "城市名",
          options: [
            {
              value: "Chengdu",
              label: "成都"
            },
            {
              value: "Shenzhen",
              label: "深圳"
            },
            {
              value: "Guangzhou",
              label: "广州"
            },
            {
              value: "Dalian",
              label: "大连"
            }
          ]
        }
      ],
      selectGroupValue: "",
      selectCities: [
        {
          value: "Beijing",
          label: "北京"
        },
        {
          value: "Shanghai",
          label: "上海"
        },
        {
          value: "Nanjing",
          label: "南京"
        },
        {
          value: "Chengdu",
          label: "成都"
        },
        {
          value: "Shenzhen",
          label: "深圳"
        },
        {
          value: "Guangzhou",
          label: "广州"
        }
      ],
      cusSelectValue: "",
      selectOptions: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      selectValue: "",
      textarea: "",
      input: "",
      checkList: ["选中且禁用", "复选框 A"],
      radio1: "上海",
      radio: 1,
      hintStr: "按关键字搜索",
      chooseType: 1,
      total: 10,
      value: null,
      valueName: null,
      form: {
        currentPage: 1,
        pageSize: 10
      },
      tableData: [
        {
          terminalPhoneNo: "19958048950",
          licensePlateNumber: "GY33333",
          licensePlateColor: "黄色",
          alarmTotal: 1841
        },
        {
          terminalPhoneNo: "91019024835",
          licensePlateNumber: "川H22091",
          licensePlateColor: "黄色",
          alarmTotal: 332
        },
        {
          terminalPhoneNo: "91019024828",
          licensePlateNumber: "川H22084",
          licensePlateColor: "黄色",
          alarmTotal: 301
        },
        {
          terminalPhoneNo: "13300594427",
          licensePlateNumber: "川H28166",
          licensePlateColor: "蓝色",
          alarmTotal: 82
        },
        {
          terminalPhoneNo: "13302529709",
          licensePlateNumber: "00003",
          licensePlateColor: "黄色",
          alarmTotal: 56
        }
      ],
      tableHeader: {
        licensePlateNumber: "车牌号",
        licensePlateColor: "车牌颜色",
        alarmTotal: "报警总数"
      },
      tableDataFields: {
        司机名: "DriverName",
        报警总数: "count"
      },
      /* 柱状图 */
      lineOption1: {
        grid: {
          top: "10%",
          left: "8%",
          right: "6%",
          bottom: "10%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(1,173,255,1)"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 10,
            interval: 0,
            textStyle: {
              color: "#ABB7C2",
              fontSize: 12
            }
          },
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: "rgba(1,173,255,0.1)"
            }
          },
          max: 30,
          axisLabel: {
            margin: 10,
            textStyle: {
              color: "#ABB7C2",
              fontSize: 12
            }
          }
        },
        series: [
          {
            name: "销量",
            type: "bar",
            barMaxWidth: "8",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true,
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#1ADEFF" },
                  { offset: 1, color: "#1BA8FF" }
                ]),
                barBorderRadius: [4, 4, 0, 0]
              }
            },
            data: [20, 15, 24, 20, 10, 8, 12, 19, 15, 13, 20, 25]
          }
        ]
      },
      lineOption2: {
        grid: {
          top: "10%",
          left: "8%",
          right: "6%",
          bottom: "28%"
        },
        legend: {
          bottom: "0",
          itemWidth: 9,
          itemHeight: 11,
          itemGap: 50,
          textStyle: {
            color: "#ABB7C2",
            lineHeight: 12,
            fontSize: 12
          },
          data: ["收入", "支出"]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(1,173,255,1)"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 10,
            interval: 0,
            textStyle: {
              color: "#ABB7C2",
              fontSize: 12
            }
          },
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: "rgba(1,173,255,0.1)"
            }
          },
          max: 30,
          axisLabel: {
            margin: 10,
            textStyle: {
              color: "#ABB7C2",
              fontSize: 12
            }
          }
        },
        series: [
          {
            name: "支出",
            type: "bar",
            stack: "总量",
            barMaxWidth: "8",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true,
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#1ADEFF" },
                  { offset: 1, color: "#1BA8FF" }
                ]),
                barBorderRadius: [4, 4, 0, 0]
              }
            },
            data: [20, 15, 24, 20, 10, 8, 12, 19, 15, 13, 20, 25]
          },
          {
            name: "收入",
            type: "bar",
            stack: "总量",
            barMaxWidth: "8",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true,
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                color: "#212E40",
                barBorderRadius: [4, 4, 0, 0]
              }
            },
            data: [10, 2, 4, 12, 9, 5, 10, 10, 8, 5, 5, 10]
          }
        ]
      },
      lineOption3: {
        grid: {
          top: "10%",
          left: "8%",
          right: "6%",
          bottom: "28%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          bottom: "0",
          itemWidth: 9,
          itemHeight: 11,
          itemGap: 50,
          textStyle: {
            color: "#ABB7C2",
            lineHeight: 12,
            fontSize: 12
          },
          data: ["收入", "支出"]
        },
        xAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(1,173,255,1)"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 10,
            interval: 0,
            textStyle: {
              color: "#ABB7C2",
              fontSize: 12
            }
          },
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: "rgba(1,173,255,0.1)"
            }
          },
          max: 30,
          axisLabel: {
            margin: 10,
            textStyle: {
              color: "#ABB7C2",
              fontSize: 12
            }
          }
        },
        series: [
          {
            name: "收入",
            type: "bar",
            barMaxWidth: "8",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true,
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#19FFAA" },
                  { offset: 1, color: "#13C37F" }
                ]),
                barBorderRadius: [4, 4, 0, 0]
              }
            },
            data: [10, 12, 24, 12, 19, 15, 20, 10, 8, 13, 10, 10]
          },
          {
            name: "支出",
            type: "bar",
            barMaxWidth: "8",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true,
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#1ADEFF" },
                  { offset: 1, color: "#1BA8FF" }
                ]),
                barBorderRadius: [4, 4, 0, 0]
              }
            },
            data: [20, 15, 24, 20, 10, 8, 12, 19, 15, 13, 20, 25]
          }
        ]
      },
      /* 饼状图 */
      pieOption1: {
        title: {
          text: "总负债（万元）",
          subtext: "350",
          x: "center",
          y: "center",
          textStyle: {
            color: "#fff",
            fontSize: 12,
            fontWeight: "bold"
          },
          subtextStyle: {
            color: "#fff",
            fontSize: 12,
            fontWeight: "bold"
          }
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["货币资金", "应收账款", "其他资产"],
          icon: "circle",
          textStyle: {
            color: "#ABB7C2",
            fontSize: 12
          },
          top: "center"
        },
        label: {
          show: false,
          position: "center",
          formatter: params => {
            return (
              "{top| " +
              params.name +
              "}\n" +
              "{bottom| " +
              params.percent +
              "%}"
            );
          },
          rich: {
            top: {
              fontSize: 12,
              color: "#ffffff",
              fontWeight: "bold"
            },
            bottom: {
              fontSize: 12,
              color: "#ffffff",
              fontWeight: "bold"
            }
          }
        },
        series: [
          {
            name: "半径模式",
            type: "pie",
            radius: [55, 75],
            // center: ["50%", "50%"],
            roseType: "radius",
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              {
                value: 10,
                name: "货币资金",
                itemStyle: {
                  color: {
                    r: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#04EEF2" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#17E598" // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                }
              },
              {
                value: 5,
                name: "应收账款",
                itemStyle: {
                  color: {
                    r: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#198DE0" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#19E0FF" // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                }
              },
              {
                value: 15,
                name: "其他资产",
                itemStyle: {
                  color: {
                    r: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#18C8F3" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#133A52" // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                }
              }
            ]
          }
        ]
      },
      pieOption2: {
        title: {
          text: "总负债（万元）",
          subtext: "350",
          x: "center",
          y: "center",
          textStyle: {
            color: "#fff",
            fontSize: 12,
            fontWeight: "bold"
          },
          subtextStyle: {
            color: "#fff",
            fontSize: 12,
            fontWeight: "bold"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}<br/> {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "right",
          data: ["货币资金", "应收账款", "其他资产"],
          icon: "circle",
          textStyle: {
            color: "#ABB7C2",
            fontSize: 12
          },
          top: "center"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["55", "70"],
            avoidLabelOverlap: false,
            // emphasis: {
            //   label: {
            //     show: false
            //   }
            // },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 12,
                name: "货币资金",
                // highlight: true,
                itemStyle: {
                  color: {
                    r: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#04EEF2" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#17E598" // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                }
              },
              {
                value: 20,
                name: "应收账款",
                itemStyle: {
                  color: {
                    r: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#198DE0" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#19E0FF" // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                }
              },
              {
                value: 10,
                name: "其他资产",
                itemStyle: {
                  color: {
                    r: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#18C8F3" // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#133A52" // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                }
              }
            ]
          }
        ]
      },
      pieOption3: {
        title: {
          text: "75%",
          x: "center",
          y: "center",
          textStyle: {
            color: "#fff",
            fontSize: "20"
          }
        },
        color: "rgba(255,255,255,.3)",
        series: [
          {
            type: "pie",
            clockWise: true,
            radius: ["60%", "70%"],
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            },
            hoverAnimation: false,
            data: [
              {
                value: 81,
                itemStyle: {
                  normal: {
                    color: {
                      // 完成的圆环的颜色
                      colorStops: [
                        {
                          offset: 0,
                          color: "#1BA5FF" // 0% 处的颜色
                        },
                        {
                          offset: 1,
                          color: "#1AD6FF" // 100% 处的颜色
                        }
                      ]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              },
              {
                value: 19
              }
            ]
          }
        ]
      },
      pieOption4: {
        backgroundColor: "#000000",
        series: [
          {
            type: "gauge",
            center: ["50%", "55%"], // 默认全局居中
            radius: "60%",
            splitNumber: 4, //刻度数量
            min: 0,
            max: 100,
            axisLine: {
              show: true,
              lineStyle: {
                width: 2,
                shadowBlur: 0,
                color: [[1, "#42E5FB"]]
              }
            },
            axisTick: {
              show: true,
              lineStyle: {
                color: "#42E5FB",
                width: 1
              },
              length: 8,
              splitNumber: 10
            },
            splitLine: {
              // 分隔线(长线)
              length: 8, // 属性length控制线长
              lineStyle: {
                color: "#42E5FB"
              }
            },
            axisLabel: {
              // 刻度标签
              show: true,
              color: "#42E4FB",
              fontSize: 12
            },
            detail: {
              show: false
            },
            title: {
              show: false
            }
          },
          {
            type: "gauge",
            center: ["50%", "55%"], // 默认全局居中
            radius: "75%",
            min: 0,
            max: 100,
            splitNumber: 0,
            axisLine: {
              // 坐标轴线
              lineStyle: {
                color: [
                  [0.4, "#03B7EC"], // 激活部分颜色
                  [1, "#16425F"] // 背景条颜色
                ], // 属性lineStyle控制线条样式
                width: 12
              }
            },
            title: {
              show: false
            },

            axisLabel: {
              // 坐标轴小标记
              textStyle: {
                // 属性lineStyle控制线条样式
                fontWeight: "bolder",
                fontSize: 16,
                color: "rgba(30,144,255,0)"
              }
            },
            splitLine: {
              // 分隔线
              length: 5, // 属性length控制线长
              lineStyle: {
                // 属性lineStyle（详见lineStyle）控制线条样式
                width: 0,
                color: "#444"
              }
            },
            pointer: {
              // 仪表盘指针
              show: true,
              length: "60%",
              width: 2
            },
            itemStyle: {
              // 仪表盘指针样式
              color: {
                r: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#000000" // 0% 处的颜色
                  },
                  {
                    offset: 0.3,
                    color: "#021132" // 20% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#3488DB" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            },
            detail: {
              textStyle: {
                fontWeight: "bold",
                color: "#fff",
                fontSize: 16
              },
              formatter: function(value) {
                return `${value}%`;
              },
              offsetCenter: [0, "80%"]
            },
            data: [
              {
                value: 40,
                name: "km/h"
              }
            ]
          }
        ]
      },
      // 折线图
      lineChartOption1: {
        grid: {
          top: "10%",
          left: "8%",
          right: "6%",
          bottom: "28%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          show: false,
          bottom: "0",
          itemWidth: 9,
          itemHeight: 11,
          itemGap: 50,
          textStyle: {
            color: "#ABB7C2",
            lineHeight: 12,
            fontSize: 12
          },
          data: ["收入", "支出"]
        },
        xAxis: {
          type: "category",
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(1,173,255,1)"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 10,
            interval: 0,
            textStyle: {
              color: "#ABB7C2",
              fontSize: 12
            }
          },
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(1,173,255,1)"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: "rgba(1,173,255,0.1)"
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              color: "#ABB7C2",
              fontSize: 12
            }
          }
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            name: "收入",
            type: "line",
            barMaxWidth: "8",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true,
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#19FFAA" },
                  { offset: 1, color: "#13C37F" }
                ]),
                barBorderRadius: [4, 4, 0, 0]
              }
            },
            smooth: true
          },
          {
            data: [600, 425, 200, 452, 425, 453, 1250],
            type: "line",
            name: "支出",
            barMaxWidth: "8",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true,
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#1ADEFF" },
                  { offset: 1, color: "#1BA8FF" }
                ]),
                barBorderRadius: [4, 4, 0, 0]
              }
            },
            smooth: true
          }
        ]
      },
      lineChartOption2: {
        grid: {
          top: "10%",
          left: "8%",
          right: "6%",
          bottom: "28%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            shadowStyle: {}
          }
        },
        legend: {
          show: true,
          bottom: "0",
          itemWidth: 9,
          itemHeight: 11,
          itemGap: 50,
          textStyle: {
            color: "#ABB7C2",
            lineHeight: 12,
            fontSize: 12
          },
          data: ["收入", "支出"]
        },
        xAxis: {
          type: "category",
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(1,173,255,1)"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 10,
            interval: 0,
            textStyle: {
              color: "#ABB7C2",
              fontSize: 12
            }
          },
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(1,173,255,1)"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: "rgba(1,173,255,0.1)"
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              color: "#ABB7C2",
              fontSize: 12
            }
          }
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            name: "收入",
            type: "line",
            barMaxWidth: "8",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true,
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#19FFAA" },
                  { offset: 1, color: "#13C37F" }
                ]),
                barBorderRadius: [4, 4, 0, 0]
              }
            },
            smooth: true
          },
          {
            data: [600, 425, 200, 452, 425, 453, 1250],
            type: "line",
            name: "支出",
            barMaxWidth: "8",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true,
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#1ADEFF" },
                  { offset: 1, color: "#1BA8FF" }
                ]),
                barBorderRadius: [4, 4, 0, 0]
              }
            },
            smooth: true,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(23,121,195,0.8)" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(26,214,255,0)" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          }
        ]
      },
      lineChartOption3: {
        grid: {
          top: "10%",
          left: "8%",
          right: "6%",
          bottom: "28%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            shadowStyle: {}
          }
        },
        legend: {
          show: false,
          bottom: "0",
          itemWidth: 9,
          itemHeight: 11,
          itemGap: 50,
          textStyle: {
            color: "#ABB7C2",
            lineHeight: 12,
            fontSize: 12
          },
          data: ["收入", "支出"]
        },
        xAxis: {
          type: "category",
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(1,173,255,1)"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 10,
            interval: 0,
            textStyle: {
              color: "#ABB7C2",
              fontSize: 12
            }
          },
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(1,173,255,1)"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: "rgba(1,173,255,0.1)"
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              color: "#ABB7C2",
              fontSize: 12
            }
          }
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            name: "收入",
            type: "line",
            barMaxWidth: "8",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true,
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#19FFAA" },
                  { offset: 1, color: "#13C37F" }
                ]),
                barBorderRadius: [4, 4, 0, 0]
              }
            }
          }
        ]
      }
    };
  },
  methods: {
    //按条件搜索
    sendKeyWord(v) {
      this.keyword = v;
    },
    //获取车辆名称
    getCarName(v) {
      if (v) {
        this.isId = true;
        this.form = getCarName(v, this.form);
      } else {
        this.isId = false;
      }
    },
    //获取树形下拉菜单id
    getGroupId(v) {},
    //获取树形下拉菜单名称
    getName(v) {},
    //上传文件成功返回
    uploadSuccess(data) {},
    //分页搜索
    getPageData(val) {
      this.form.currentPage = val.currentPage;
      this.form.pageSize = val.pageSize;
    },
    formatTooltip(val) {
      return val / 100;
    },
    handleNodeClick(data) {
      console.log(data);
    },
    loadDate() {
      this.count += 2;
    },
    closeDialog(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-bottom: 200px;
  background-color: #000000;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
.pt48,
.py48 {
  padding-top: 48px;
}
.pb48,
py48 {
  padding-bottom: 48px;
}
.underline {
  border-bottom: 1px solid #ccc;
}
.cusSilder .el-slider__runway {
  margin: 0 auto !important;
}
</style>

