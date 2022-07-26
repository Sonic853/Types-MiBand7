// 注意！此区域的代码不应打包进表盘里！仅用于VSCode的自动提示！
// 注意！此区域的代码不应打包进表盘里！仅用于VSCode的自动提示！
// 注意！此区域的代码不应打包进表盘里！仅用于VSCode的自动提示！
// 警告结束
/** 显示级别 */
interface ShowLevel {
  /**
   * 只在正常模式显示
   */
  ONLY_NORMAL,
  /**
   * 只在息屏模式显示
   */
  ONLY_AOD,
  /**
   * 只在编辑模式显示
   */
  ONLY_EDIT
}
/** 数据类型 */
interface DataType {
  /** 电量 */
  BATTERY,
  /** 步数 */
  STEP,
  /** 心率 */
  HEART,
  /** 湿度 */
  HUMIDITY,
  CAL,
  CAL_TARGET,
  /** 一周的PAI */
  PAI_WEEKLY,
  /** 一天的PAI */
  PAI_DAILY,
  /** 站立 */
  STAND,
  STAND_TARGET,
  WEATHER_CURRENT,
  WEATHER_LOW,
  WEATHER_HIGH,
  UVI,
  AQI,
  ACTIVITY,
  ACTIVITY_TARGET,
  FAT_BURNING,
  FAT_BURNING_TARGET,
  SUN_CURRENT,
  SUN_RISE,
  SUN_SET,
  WIND,
  STRESS,
  SPO2,
  ALTIMETER,
  MOON,
  FLOOR,
  ALARM_CLOCK,
  COUNT_DOWN,
  STOP_WATCH,
  SLEEP
}
/** 对齐方式 */
interface Align {
  /** 左对齐 */
  LEFT,
  /** 水平居中 */
  CENTER_H,
  /** 右对齐 */
  RIGHT,
  /** 顶部对齐 */
  TOP,
  /** 底部对齐 */
  BOTTOM,
  /** 垂直居中 */
  CENTER_V
}
/** 可编辑 Widget */
interface EditType {
  CAL,
  HEART,
  HUMIDITY,
  STAND,
  STEP,
  PAI_WEEKLY,
  STRESS,
  WEATHER,
  BATTERY,
  PAI,
  DISTANCE,
  AQI,
  UVI,
  WIND,
  ALARM_CLOCK,
  SPO2,
  FAT_BURN,
  TEMPERATURE,
  ALTIMETER
}
/** 系统状态 */
interface SystemStatus {
  /** 蓝牙断连 */
  DISCONNECT,
  /** 勿扰开启 */
  DISTURB,
  /** 闹钟开启 */
  CLOCK,
  /** 锁屏开启 */
  LOCK
}
/** 动画状态 */
interface AnimStatus {
  /** 开始 */
  START,
  /** 暂停 */
  PAUSE,
  /** 继续 */
  RESUME,
  /** 停止 */
  STOP
}
/** 部件 */
interface WIDGET_ID {
  /** 图片 */
  IMG,
  /** 图片的方式显示文本 */
  TEXT_IMG,
  /** 圆弧进度控件绘制圆弧进度 */
  ARC_PROGRESS,
  /** 根据给定的顺序依次展示图片 */
  IMG_PROGRESS,
  /** 通过给定一个图片数组，根据进度（level 属性）去显示对应的图片 */
  IMG_LEVEL,
  /** 按照设置的帧率播放预先给定的图片，形成动画效果 */
  IMG_ANIM,
  /** 基于 IMG 图片控件的指针控件 */
  IMG_POINTER,
  /** 系统状态 */
  IMG_STATUS,
  /** 数字时间 图片 */
  IMG_TIME,
  /** 指针时钟 */
  TIME_POINTER,
  /** 日期文字 图片 */
  IMG_DATE,
  /** 星期 */
  IMG_WEEK,
  /** 日期指针 */
  DATE_POINTER,
  /** 跳转 */
  IMG_CLICK,
  /** 折线图 */
  GRADKIENT_POLYLINE,
  /** 文本 */
  TEXT,
  /** 组 */
  GROUP,
  /** 可编辑组 */
  WATCHFACE_EDIT_GROUP
}
/** 部件 */
interface WIDGET {
  /**
   * 创建 UI 控件
   * @param widgetId 待创建控件类型
   * @param option 参数
   */
  createWidget(widgetId: WIDGET_ID, options: createWidgetOptions): HmUIWidget
  addEventListener(eventId: HmUIEvent, callback: (event) => void): void
  // getProperty(propType: HmUIProp)
}
interface HmUIProp {
  CURRENT_TYPE
}
interface HmUIEvent {
  /** 滑动 */
  MOVE
  /** 按下 */
  CLICK_DOWN
  /** 抬起 */
  CLICK_UP
  /** 划入 */
  MOVE_IN
  /** 划出 */
  MOVE_OUT
}
/** 参数 */
interface getTextLayoutOptions {
  /** 文字大小 */
  text_size: number
  /** 单行文本的宽度，如果设置 wrapped：0，text_width 需要传 0 */
  text_width: number
  /** 文本是否换行，0：不换行；1: 换行 */
  wrapped?: number
}
/** 参数 */
interface showToastOptions {
  /** 文本内容 */
  text: string
}
/** 参数 */
interface createWidgetOptions {
  x: number,
  y: number,
  w: number,
  h: number,
  type: SystemStatus,
  src: string,
  show_level: ShowLevel
}
/** 参数 */
interface WatchFaceOptions {
  init_view(): void
  onInit(): void
  onReady(): void
  onShow(): void
  onHide(): void
  onDestory(): void
}
/** 参数 */
interface createDialogOptions {
  /** 标题 */
  title: string,
  /** 显示 */
  show?: boolean,
  /** 回调函数，key: 0 点击取消、key: 1 点击确认 */
  click_linster: ((key: number) => void)
  /** 弹窗是否在点击「确认」或者「取消」按钮之后消失，默认 true */
  auto_hide?: boolean
}
interface dialog {
  show(isShow: boolean): void
}
/** 华米UI */
interface HMUI {
  /** 部件 */
  widgets: any[]
  /** 控件显示级别 */
  show_level: ShowLevel
  /** 数据类型 */
  data_type: DataType
  /** 对齐方式 */
  align: Align
  /** 可编辑 Widget */
  edit_type: EditType
  /** 系统状态 */
  system_status: SystemStatus
  /** 动画状态 */
  anim_status: AnimStatus
  /** 部件 */
  widget: WIDGET_ID
  /** 触发类型 */
  event: HmUIEvent
  /**
   * 创建 UI 控件
   * @param widgetId 待创建控件类型
   * @param option 参数
   */
  createWidget(widgetId: WIDGET_ID, option?: createWidgetOptions): WIDGET
  /**
   * 删除 UI 控件
   * @param widget 控件对象，由 hmUI.createWidget 返回
   */
  deleteWidget(widget: WIDGET): void
  /** 显示 Toast，支持 \n 文本换行。 */
  showToast(option: showToastOptions): void
  /**
   * 计算出目标文本布局完成之后的高度和宽度，并不会实际进行渲染，只进行布局计算
   * @param text_string 待计算布局的文本内容
   * @param options 支持传入的选项参数
   */
  getTextLayout(text_string: string, options: getTextLayoutOptions): {
    /** 宽度像素值 */
    width: number,
    /** 高度像素值 */
    height: number
  }
  /**
   * 创建 Dialog 对话框
   * @param option 参数
   */
  createDialog(option: createDialogOptions): dialog
}
interface HmAppManager {
  currentApp: {
    current: {
      module: string
    }
    app: {
      __globals__: { px }
    }
  }
}
interface _Logger {
  getLogger(): {}
}
declare const hmUI: HMUI
declare const __$$hmAppManager$$__: HmAppManager
declare const Logger: _Logger
declare namespace DeviceRuntimeCore {
  class WidgetFactory {
    px: any
    constructor(...e)
  }
  class HmDomApi {
    constructor(...e)
  }
  const HmLogger: _Logger
  function Page(a: any): a
  function WatchFace(options: WatchFaceOptions): WatchFaceOptions
}