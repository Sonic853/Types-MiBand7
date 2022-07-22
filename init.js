// 注意！此区域的代码不应打包进表盘里！仅用于VSCode的自动提示！
// 注意！此区域的代码不应打包进表盘里！仅用于VSCode的自动提示！
// 注意！此区域的代码不应打包进表盘里！仅用于VSCode的自动提示！
// 警告结束
/**
 * 华米UI
 */
const hmUI = new class HMUI {
  /** 部件 */
  widgets = []
  /** 控件显示级别 */
  show_level = new class {
    /**
     * 只在正常模式显示
     * @type {"只在正常模式显示"}
     */
    ONLY_NORMAL = "0001"
    /**
     * 只在息屏模式显示
     * @type {"只在息屏模式显示"}
     */
    ONAL_AOD = "0010"
    /**
     * 只在编辑模式显示
     * @type {"只在编辑模式显示"}
     */
    ONLY_EDIT = "0100"
  }
  /** 数据类型 */
  data_type = new class {
    /** 电量 */
    BATTERY = "电量"
    /** 步数 */
    STEP = "步数"
    /** 心率 */
    HEART = "心率"
    /** 湿度 */
    HUMIDITY = "湿度"
    CAL = "CAL"
    CAL_TARGET = "CAL_TARGET"
    /** 一周的PAI */
    PAI_WEEKLY = "一周的PAI"
    /** 一天的PAI */
    PAI_DAILY = "一天的PAI"
    /** 站立 */
    STAND = "站立"
    STAND_TARGET = "STAND_TARGET"
    WEATHER_CURRENT = "WEATHER_CURRENT"
    WEATHER_LOW = "WEATHER_LOW"
    WEATHER_HIGH = "WEATHER_HIGH"
    UVI = "UVI"
    AQI = "AQI"
    ACTIVITY = "ACTIVITY"
    ACTIVITY_TARGET = "ACTIVITY_TARGET"
    FAT_BURNING = "FAT_BURNING"
    FAT_BURNING_TARGET = "FAT_BURNING_TARGET"
    SUN_CURRENT = "SUN_CURRENT"
    SUN_RISE = "SUN_RISE"
    SUN_SET = "SUN_SET"
    WIND = "WIND"
    STRESS = "STRESS"
    SPO2 = "SPO2"
    ALTIMETER = "ALTIMETER"
    MOON = "MOON"
    FLOOR = "FLOOR"
    ALARM_CLOCK = "ALARM_CLOCK"
    COUNT_DOWN = "COUNT_DOWN"
    STOP_WATCH = "STOP_WATCH"
    SLEEP = "SLEEP"
  }
  /** 对齐方式 */
  align = new class {
    /**
     * 左对齐
     * @type {"左对齐"}
     */
    LEFT = "左对齐"
    /**
     * 水平居中
     * @type {"水平居中"}
     */
    CENTER_H = "水平居中"
    /**
     * 右对齐
     * @type {"右对齐"}
     */
    RIGHT = "右对齐"
    /**
     * 顶部对齐
     * @type {"顶部对齐"}
     */
    TOP = "顶部对齐"
    /**
     * 底部对齐
     * @type {"底部对齐"}
     */
    BOTTOM = "底部对齐"
    /**
     * 垂直居中
     * @type {"垂直居中"}
     */
    CENTER_V = "垂直居中"
  }
  /** 可编辑 Widget */
  edit_type = new class {
    CAL = "CAL"
    HEART = "HEART"
    HUMIDITY = "HUMIDITY"
    STAND = "STAND"
    STEP = "STEP"
    PAI_WEEKLY = "PAI_WEEKLY"
    STRESS = "STRESS"
    WEATHER = "WEATHER"
    BATTERY = "BATTERY"
    PAI = "PAI"
    DISTANCE = "DISTANCE"
    AQI = "AQI"
    UVI = "UVI"
    WIND = "WIND"
    ALARM_CLOCK = "ALARM_CLOCK"
    SPO2 = "SPO2"
    FAT_BURN = "FAT_BURN"
    TEMPERATURE = "TEMPERATURE"
    ALTIMETER = "ALTIMETER"
  }
  /** 系统状态 */
  system_status = new class {
    /** 蓝牙断连 */
    DISCONNECT = "DISCONNECT"
    /** 勿扰开启 */
    DISTURB = "DISTURB"
    /** 闹钟开启 */
    CLOCK = "CLOCK"
    /** 锁屏开启 */
    LOCK = "LOCK"
  }
  /** 动画状态 */
  anim_status = new class {
    /** 开始 */
    START = "START"
    /** 暂停 */
    PAUSE = "PAUSE"
    /** 继续 */
    RESUME = "RESUME"
    /** 停止 */
    STOP = "STOP"
  }
  widget = new class {
    /** 图片 */
    IMG = "IMG"
    /** 图片的方式显示文本 */
    TEXT_IMG = "TEXT_IMG"
    /** 圆弧进度控件绘制圆弧进度 */
    ARC_PROGRESS = "ARC_PROGRESS"
    /** 根据给定的顺序依次展示图片 */
    IMG_PROGRESS = "IMG_PROGRESS"
    /** 通过给定一个图片数组，根据进度（level 属性）去显示对应的图片 */
    IMG_LEVEL = "IMG_LEVEL"
    /** 按照设置的帧率播放预先给定的图片，形成动画效果 */
    IMG_ANIM = "IMG_ANIM"
    /** 基于 IMG 图片控件的指针控件 */
    IMG_POINTER = "IMG_POINTER"
    /** 系统状态 */
    IMG_STATUS = "IMG_STATUS"
    /** 数字时间 图片 */
    IMG_TIME = "IMG_TIME"
    /** 指针时钟 */
    TIME_POINTER = "TIME_POINTER"
    /** 日期文字 图片 */
    IMG_DATE = "IMG_DATE"
    /** 星期 */
    IMG_WEEK = "IMG_WEEK"
    /** 日期指针 */
    DATE_POINTER = "DATE_POINTER"
    /** 跳转 */
    IMG_CLICK = "IMG_CLICK"
    /** 折线图 */
    GRADKIENT_POLYLINE = "GRADKIENT_POLYLINE"
    /** 文本 */
    TEXT = "TEXT"
    /** 组 */
    GROUP = "GROUP"
  }
  event = new class {
    /** 滑动 */
    MOVE = "MOVE"
    /** 按下 */
    CLICK_DOWN = "CLICK_DOWN"
    /** 抬起 */
    CLICK_UP = "CLICK_UP"
    /** 划入 */
    MOVE_IN = "MOVE_IN"
    /** 划出 */
    MOVE_OUT = "MOVE_OUT"
  }
  /** 
   * 创建 UI 控件
   * @param {string} widgetId 待创建控件类型
   * @param {{
   *  x: number,
   *  y: number,
   *  type: string,
   *  src: string,
   *  show_level: string,
   * }} option 参数
   */
  createWidget(widgetId, option) {
    var c = createWidget(hmUI, widgetId, option)
    c.createWidget = function (_param, _widget) {
      _param = createWidget(c, _param, _widget)
      _param.id = hmUI.widgetId++
      hmUI.widgets.push(_param)
      return _param
    }
    c.id = this.widgetId++
    hmUI.widgets.push(c)
    return c
  }
  /**
   * 删除 UI 控件
   * @param {*} widget 
   */
  deleteWidget(widget) {
    for (var a = 0; a < hmUI.widgets.length; a++)
      if (widget == hmUI.widgets[a]) {
        hmUI.widgets.splice(a, 1)
        break
      }
  }
  /**
   * 显示 Toast，支持 \n 文本换行。
   * @param {{text:string}} option 
   */
  showToast(option) {
    console.log("showToast: " + option.text)
  }
  /**
   * 计算出目标文本布局完成之后的高度和宽度，并不会实际进行渲染，只进行布局计算
   * @param {string} text_string 待计算布局的文本内容
   * @param {{
   * text_size: number,
   * text_width: number,
   * wrapped: number
   * }} options 支持传入的选项参数
   * @returns 
   */
  getTextLayout(text_string, options) {
    return 50 > text_string.length ? {
      width: 0,
      height: 0
    } : {
      width: 600,
      height: 600
    }
  }
  /**
   * 创建 Dialog 对话框
   * @param {{
   * title: string
   * show?: boolean
   * click_linster: ((key: number) => void)
   * auto_hide?: boolean
   * }} option
   * @returns {{show(isShow: boolean): void}}
   */
  createDialog(option) {
    var a = confirm(option.title)
    option.click_linster(a)
  }
}
const DeviceRuntimeCore = new class DeviceRuntimeCore {
  WidgetFactory = class{
    constructor(e, o){}
  }
  HmDomApi = class{
    constructor(e, o){}
  }
  HmLogger = new class {
    getLogger() { }
  }
  Page(a) {
    return a
  }
  WatchFace(a) {
    return a
  }
}
const __$$hmAppManager$$__ = new class HmAppManager {
  /**
   * @type {{
   *  current: {
   *   module: string
   * },
   * app: {
   *  __globals__: {}
   * }
   * }}
   */
  currentApp = {
    current: {
      module: ""
    },
    app: {
      __globals__: {}
    }
  }
}
const Logger = new class {
  getLogger() {
    return {}
  }
}