import React from 'react'
const locale = (text,...rest) => text

const TOOLTIP_DATE = (
  <>
    <p>{locale('使用格式', 'ZKGJ031252')}： DATE(year, month, day)</p>
    <p>{locale('说明: 通过三个数值类型参数，返回一个指定日期。')}</p>
    <p>
      {locale('示例', 'ZKGJ004757')}: DATE(2013, 5, 21) {locale('返回', 'ZKGJ009996')}: 2013-05-21
    </p>
  </>
)

const TOOLTIP_DATESUBDATE = (
  <>
    <p>{locale('使用格式', 'ZKGJ031252')}： DATESUBDATE(date, deltadays)</p>
    <p>{locale('说明: 返回date后deltadays天的日期，deltadays可为正数、负数、零。')}</p>
    <p>
      {locale('示例', 'ZKGJ004757')}: DATESUBDATE('2018-08-08',10) {locale('返回', 'ZKGJ009996')}:
      2018-08-18
    </p>
    <p>DATESUBDATE('2018-08-08',-10) {locale('返回', 'ZKGJ009996')}: 2018-07-29</p>
  </>
)

const TOOLTIP_DATEDIF = (
  <>
    <p>{'使用格式: DATEDIF(start_date,end_date,unit)'}</p>
    <p>{locale('说明: 返回指定两个日期间的天数、月数或年数，deltadays可为正数、负数、零。')}</p>
    <p>示例: DATESUBDATE('2018-08-08',10) 返回: 2018-08-18；</p>
    <p>DATESUBDATE('2018-08-08',-10) 返回: 2018-07-29</p>
  </>
)

const TOOLTIP_DATETONUMBER = (
  <>
    <p>{'使用格式：DATETONUMBER(date)'}</p>
    <p>{locale('说明：返回自1970年1月1日00:00:00 GMT 经过的毫秒数，即时间戳。')}</p>
    <p>示例：DATETONUMBER('2018-08-08') 返回：1218124800000</p>
  </>
)

const TOOLTIP_NOW = (
  <>
    <p>{'使用格式：NOW()'}</p>
    <p>{locale('说明：获取当前时间。')}</p>
    <p>示例：如果系统当前时间是2018年8月8日15点18分18秒,NOW()返回：2018-08-08 15:18:18</p>
  </>
)

const TOOLTIP_TODAY = (
  <>
    <p>{'使用格式：TODAY()'}</p>
    <p>{locale('说明：获取当前日期。')}</p>
    <p>示例：如果系统当前时间是2018年8月8日,TODAY()返回：2018-08-08</p>
  </>
)

const TOOLTIP_DAY = (
  <>
    <p>{'使用格式：DAY(date)'}</p>
    <p>{locale('说明：获取日期/日期时间中的日期值。')}</p>
    <p>示例：DAY(2018-08-07) 返回：7；</p>
    <p>DAY(2018-08-07 15:18:20) 返回：7</p>
  </>
)

const TOOLTIP_HOUR = (
  <>
    <p>{'使用格式：HOUR(date)'}</p>
    <p>{locale('说明：获取日期/日期时间中的日期值。')}</p>
    <p>示例：DAY(2018-08-07) 返回：7；</p>
    <p>DAY(2018-08-07 15:18:20) 返回：7</p>
  </>
)

const TOOLTIP_MINUTE = (
  <>
    <p>{'使用格式：MINUTE(date)'}</p>
    <p>{locale('说明：获取时间/日期时间中的分钟值。')}</p>
    <p>示例：MINUTE(15:18:20) 返回：18；</p>
    <p>MINUTE(2018-08-07 15:18:20) 返回：18</p>
  </>
)

const TOOLTIP_SECOND = (
  <>
    <p>{'使用格式：MINUTE(date)'}</p>
    <p>{locale('说明：获取时间/日期时间中的秒数值。')}</p>
    <p>示例：SECOND(15:18:20) 返回：20；</p>
    <p>SECOND(2018-08-07 15:18:20) 返回：20</p>
  </>
)

const TOOLTIP_MONTH = (
  <>
    <p>{'使用格式：MONTH(date)'}</p>
    <p>{locale('说明：获取日期/日期时间中的月份值。')}</p>
    <p>示例：MONTH(2018-08-07) 返回：8；</p>
    <p>MONTH(2018-08-07 15:18:20) 返回：8</p>
  </>
)

const TOOLTIP_YEAR = (
  <>
    <p>{'使用格式：YEAR(date)'}</p>
    <p>{locale('说明：获取日期/日期时间中的年份值。')}</p>
    <p>示例：YEAR(2018-08-07) 返回：2018；</p>
    <p>YEAR(2018-08-07 15:18:20) 返回：2018</p>
  </>
)

const TOOLTIP_WEEK = (
  <>
    <p>{'使用格式：WEEK(date)'}</p>
    <p>{locale('说明：返回日期参数所代表一年中的第几周。')}</p>
    <p>示例：YEAR(1998-02-20) 返回：7；</p>
  </>
)

const TOOLTIP_WEEKDAY = (
  <>
    <p>{'使用格式：WEEK(date)'}</p>
    <p>{locale('说明：返回日期参数所在的星期数，0-6分别代表星期一-星期日。')}</p>
    <p>示例：WEEK(2005-09-10) 返回：5；</p>
  </>
)

const TOOLTIP_MONTHDELTA = (
  <>
    <p>{'使用格式: MONTHDELTA(date,deltamonths)'}</p>
    <p>{locale('说明: 返回date后deltamonths个月的日期，deltamonths可为正数、负数、零。')}</p>
    <p>示例: MONTHDELTA('2018-08-08',3) 返回: 2018-11-08</p>
    <p>MONTHDELTA('2018-08-08',-3) 返回: 2018-05-08</p>
  </>
)

const TOOLTIP_YEARDELTA = (
  <>
    <p>{'使用格式: YEARDELTA(date,deltayears)'}</p>
    <p>{locale('说明: 返回date后deltayears年的日期，deltayears可为正数、负数、零。')}</p>
    <p>示例: YEARDELTA('2018-08-08',3) 返回: 20121-08-08</p>
    <p>YEARDELTA('2018-08-08',-3) 返回: 2015-08-08</p>
  </>
)

const TOOLTIP_DAYSOFYEAR = (
  <>
    <p>{'使用格式: DAYSOFYEAR(year)'}</p>
    <p>{locale('说明: 通过一个字符串类型的参数，创建一个日期类型的值。')}</p>
    <p>示例: DATEVALUE('2013-05-21') 返回: 2013-05-21</p>
  </>
)

const TOOLTIP_DATEVALUE = (
  <>
    <p>{'使用格式: DATEVALUE(string)'}</p>
    <p>{locale('说明: 通过一个字符串类型的参数，创建一个日期类型的值。')}</p>
    <p>示例: DATEVALUE('2013-05-21') 返回: 2013-05-21</p>
  </>
)

const TOOLTIP_DATETIMEVALUE = (
  <>
    <p>{'使用格式: DATETIMEVALUE(string)'}</p>
    <p>{locale('说明: 通过一个字符串类型参数，返回日期时间字段中的日期时间。')}</p>
    <p>示例: DATETIMEVALUE('2013-05-21 13:14:25') 返回: 2013-05-21 13:14:25</p>
  </>
)

const TOOLTIP_DATETIMETOTIME = (
  <>
    <p>{'使用格式: DATETIMETOTIME(date_time)'}</p>
    <p>{locale('说明: 通过一个日期时间类型参数，返回日期时间字段中的时间。')}</p>
    <p>示例: DATETIMETOTIME(DATETIMEVALUE('2013-05-21 13:14:25')) 返回: 13:14:25</p>
  </>
)

const TOOLTIP_DATETIMETODATE = (
  <>
    <p>{'使用格式: DATETIMETODATE(date_time)'}</p>
    <p>{locale('说明: 通过一个日期时间类型参数，返回日期时间字段中的日期。')}</p>
    <p>示例: DATETIMETODATE(DATETIMEVALUE('2013-05-21 13:14:25')) 返回: 2013-05-21</p>
  </>
)

const TOOLTIP_AND = (
  <>
    <p>{'使用格式: AND(boolean1,boolean2,boolean3,...)'}</p>
    <p>
      {locale('说明: 逻辑与，当所有参数的值为真时，返回true；当任意参数的值为假时，返回false。')}
    </p>
    <p>{'示例: AND(5>2,8>3,9>5) 返回: true'}</p>
    <p>{'AND(1+7=8,5+7=17) 返回：false'}</p>
  </>
)

const TOOLTIP_OR = (
  <>
    <p>{'使用格式: OR(boolean1,boolean2,boolean3,...)'}</p>
    <p>{'说明: 逻辑或，当任意参数的值为真时，返回true；当所有参数的值为假时，返回false。'}</p>
    <p>{'示例: OR(5<2,8<3,9>5) 返回: true'}</p>
    <p>{'OR(5<2,8<3,9<5)  返回：false'}</p>
  </>
)

const TOOLTIP_IF = (
  <>
    <p>{'使用格式: IF(boolean, value_if_true, value_if_false)'}</p>
    <p>
      {
        '说明: 判断条件是否为true，如果为true，则返回value_if_true，否则返回value_if_false；其中，value_if_true和value_if_false必须为同一数据类型。'
      }
    </p>
    <p>{'示例: IF(30<67, 30, 67) 返回: 30'}</p>
  </>
)

const TOOLTIP_NOT = (
  <>
    <p>{'使用格式: NOT(boolean)'}</p>
    <p>{'说明: 若条件为false，则结果为true，反之，结果为false'}</p>
    <p>{'示例: NOT(9<4) 返回: true'}</p>
  </>
)

const TOOLTIP_ISNULL = (
  <>
    <p>{'使用格式: ISNULL(expression)'}</p>
    <p>{'说明: 判断表达式结果是否为空，如果为空，返回true，反之为false'}</p>
    <p>{'示例: ISNULL(6) 返回: false'}</p>
  </>
)

const TOOLTIP_CASE = (
  <>
    <p>{'使用格式: CASE(expression, value1, result1, value2, result2,...,else_result)'}</p>
    <p>
      {
        '说明: 根据满足不同的条件，返回满足条件的值。其中expression的值与value(n)进行比较，value(x)与expression的值一致，则返回对应的result(n)，如果都不一致，则返回else_result；其中，result(n)和else_result必须为同一种类型，返回值类型也为该类型'
      }
    </p>
    <p>{'示例: CASE(3, 2, 2, 3, 33, 6) 返回: 33'}</p>
  </>
)

const TOOLTIP_MIN = (
  <>
    <p>{'使用格式:MIN(number1,number2,...)'}</p>
    <p>{'说明: 返回参数列表中最小值。'}</p>
    <p>{'示例: MIN(20,76,44,13,65) 返回: 13'}</p>
  </>
)

const TOOLTIP_MAX = (
  <>
    <p>{'使用格式:MAX(number1,number2,...)'}</p>
    <p>{'说明: 返回参数列表中最大值。'}</p>
    <p>{'示例: MAX(20,76,44,13,65) 返回: 76'}</p>
  </>
)

const TOOLTIP_AVG = (
  <>
    <p>{'使用格式:AVG(number1,number2,...)'}</p>
    <p>{'说明: 返回参数列表的平均值。'}</p>
    <p>{'示例: AVG(20,76,44,13,65) 返回: 43.6'}</p>
  </>
)

const TOOLTIP_MOD = (
  <>
    <p>{'使用格式:MOD(number1,number2)'}</p>
    <p>{'说明: 返回两数相除的余数。'}</p>
    <p>{'示例: MOD(6,4) 返回: 2'}</p>
  </>
)

const TOOLTIP_ROUND = (
  <>
    <p>{'使用格式:ROUND(number,num_digits)'}</p>
    <p>
      {
        '说明: 返回某个数字按指定位数四舍五入后的数字。number为需要进行四舍五入的数字，num_digits为指定的位数，按此位数进行舍入。如果num_digits大于0，则舍入到指定的小数位，如果num_digits等于0，则舍入到整数，如果num_digits小于0，则在小数点左侧进行舍入。'
      }
    </p>
    <p>{'示例: ROUND(2.149,2) 返回: 2.15'}</p>
    <p>{'ROUND(2.149,0) 返回: 2'}</p>
    <p>{'ROUND(21.49,-1) 返回: 20'}</p>
  </>
)

const TOOLTIP_FLOOR = (
  <>
    <p>{'使用格式:FLOOR(number,num_digits)'}</p>
    <p>
      {
        '说明: 返回某个数字按指定位数向下舍入后的数字。number为需要进行向下舍入的数字，num_digits为指定的位数，按此位数进行舍入。如果num_digits大于0，则舍入到指定的小数位，如果num_digits等于0，则舍入到整数，如果num_digits小于0，则在小数点左侧进行舍入。'
      }
    </p>
    <p>{'示例: FLOOR(2.149,2) 返回: 2.14'}</p>
    <p>{'FLOOR(2.149,0) 返回: 2'}</p>
    <p>{'FLOOR(21.49,-1) 返回: 20'}</p>
  </>
)

const TOOLTIP_CEILING = (
  <>
    <p>{'使用格式:CEILING(number,num_digits)'}</p>
    <p>
      {
        '说明: 返回某个数字按指定位数向上舍入后的数字。number为需要进行向上舍入的数字，num_digits为指定的位数，按此位数进行舍入。如果num_digits大于0，则舍入到指定的小数位，如果num_digits等于0，则舍入到整数，如果num_digits小于0，则在小数点左侧进行舍入。'
      }
    </p>
    <p>{'示例: CEILING(2.142,2) 返回: 2.15'}</p>
    <p>{'CEILING(2.149,0) 返回: 3'}</p>
    <p>{'CEILING(216.49,-2) 返回: 220'}</p>
  </>
)

const TOOLTIP_STARTWITH = (
  <>
    <p>{'使用格式:STARTWITH(string1, string2)'}</p>
    <p>{'说明: 判断字符串参数1是否以字符串参数2开始。'}</p>
    <p>示例: STARTWITH('apple','ap') 返回: true</p>
  </>
)

const TOOLTIP_ENDWITH = (
  <>
    <p>{'使用格式:ENDWITH(string1, string2)'}</p>
    <p>{'说明: 判断字符串参数1是否以字符串参数2结束。'}</p>
    <p>示例: ENDWITH('apple','le') 返回: true</p>
  </>
)

const TOOLTIP_EQUALS = (
  <>
    <p>{'使用格式:EQUALS(string1, string2)'}</p>
    <p>{'说明: 判断两个字符串参数是否相等（区分大小写）。'}</p>
    <p>示例: EQUALS('apple','apple') 返回: true</p>
  </>
)

const TOOLTIP_LEN = (
  <>
    <p>{'使用格式:LEN(string)'}</p>
    <p>{'说明: 判断字符串的长度。'}</p>
    <p>示例: LEN('apple') 返回: 5</p>
  </>
)

const TOOLTIP_CONTAINS = (
  <>
    <p>{'使用格式:CONTAINS(string1, string2)'}</p>
    <p>{'说明: 判断字符串参数1中是否包含字符串参数2。'}</p>
    <p>示例: CONTAINS('apple','pp') 返回: true</p>
  </>
)

const TOOLTIP_CONCATENATE = (
  <>
    <p>{'使用格式:CONCATENATE(string1, string2,...)'}</p>
    <p>{'说明: 将多个字符串合并成一个字符串。'}</p>
    <p>示例: CONCATENATE('apple ','price') 返回:'apple price'</p>
  </>
)

const TOOLTIP_VALUE = (
  <>
    <p>{'使用格式: VALUE(string)'}</p>
    <p>{'说明: 将文本形式的数字转化成数字格式，支持负数和小数，如果转化不成功，返回空'}</p>
    <p>示例: VALUE('-23.04') 返回: -23.04</p>
  </>
)

const TOOLTIP_NUMBERSTRING = (
  <>
    <p>{'使用格式: NUMBERSTRING(number)'}</p>
    <p>{'说明: 将数字转化成中文大写数字展示'}</p>
    <p>示例: NUMBERSTRING(201314.521) 返回: 贰拾万零壹仟叁佰壹拾肆点伍贰壹</p>
  </>
)

const TOOLTIP_NUMBERSTRINGRMB = (
  <>
    <p>{'使用格式: NUMBERSTRINGRMB(number)'}</p>
    <p>{'说明: 将数字转化成中文大写金额展示，最多支持到分'}</p>
    <p>示例: NNUMBERSTRINGRMB(201314.521) 返回: 贰拾万零壹仟叁佰壹拾肆元伍角贰分</p>
  </>
)

const TOOLTIP_TRIM = (
  <>
    <p>{'使用格式: TRIM(string)'}</p>
    <p>{'说明: 删除字符串前后的空白字符'}</p>
    <p>示例: TRIM(' apple ') 返回: apple</p>
  </>
)

const TEXT_FUNC = [
  {
    key: 'STARTWITH',
    expression: 'STARTWITH(string1, string2)',
    title: TOOLTIP_STARTWITH
  },
  {
    key: 'ENDWITH',
    expression: 'ENDWITH(string1, string2)',
    title: TOOLTIP_ENDWITH
  },
  {
    key: 'EQUALS',
    expression: 'EQUALS(string1, string2)',
    title: TOOLTIP_EQUALS
  },
  {
    key: 'LEN',
    expression: 'LEN(string)',
    title: TOOLTIP_LEN
  },
  {
    key: 'CONTAINS',
    expression: 'CONTAINS(string1, string2)',
    title: TOOLTIP_CONTAINS
  },
  {
    key: 'CONCATENATE',
    expression: 'CONCATENATE(string1, string2,...)',
    title: TOOLTIP_CONCATENATE
  },
  {
    key: 'VALUE',
    expression: 'VALUE(string)',
    title: TOOLTIP_VALUE
  },
  {
    key: 'NUMBERSTRING',
    expression: 'NUMBERSTRING(number)',
    title: TOOLTIP_NUMBERSTRING
  },
  {
    key: 'NUMBERSTRINGRMB',
    expression: 'NUMBERSTRINGRMB(number)',
    title: TOOLTIP_NUMBERSTRINGRMB
  },
  {
    key: 'TRIM',
    expression: 'TRIM(string)',
    title: TOOLTIP_TRIM
  }
]

const CALCULATION_FUNC = [
  {
    key: 'MIN',
    expression: 'MIN(number1,number2,...)',
    title: TOOLTIP_MIN
  },
  {
    key: 'MAX',
    expression: 'MAX(number1,number2,...)',
    title: TOOLTIP_MAX
  },
  {
    key: 'AVG',
    expression: 'AVG(number1,number2,...)',
    title: TOOLTIP_AVG
  },
  {
    key: 'MOD',
    expression: 'MOD(number1,number2)',
    title: TOOLTIP_MOD
  },
  {
    key: 'ROUND',
    expression: 'ROUND(number,num_digits)',
    title: TOOLTIP_ROUND
  },
  {
    key: 'FLOOR',
    expression: 'FLOOR(number,num_digits)',
    title: TOOLTIP_FLOOR
  },
  {
    key: 'CEILING',
    expression: 'CEILING(number,num_digits)',
    title: TOOLTIP_CEILING
  }
]

const LOGICAL_FUNC = [
  {
    key: 'AND',
    expression: 'AND(boolean1,boolean2,boolean3,...)',
    title: TOOLTIP_AND
  },
  {
    key: 'OR',
    expression: 'OR(boolean1,boolean2,boolean3,...)',
    title: TOOLTIP_OR
  },
  {
    key: 'IF',
    expression: 'IF(boolean, value_if_true, value_if_false)',
    title: TOOLTIP_IF
  },
  {
    key: 'NOT',
    expression: 'NOT(boolean)',
    title: TOOLTIP_NOT
  },
  {
    key: 'ISNULL',
    expression: 'ISNULL(expression)',
    title: TOOLTIP_ISNULL
  },
  {
    key: 'CASE',
    expression: 'CASE(expression, value1, result1, value2, result2,...,else_result)',
    title: TOOLTIP_CASE
  }
]

const TIME_FUNC = [
  {
    key: 'DATE',
    expression: 'DATE(year,month,day)',
    title: TOOLTIP_DATE
  },
  {
    key: 'DATESUBDATE',
    expression: 'DATESUBDATE(date,deltadays)',
    title: TOOLTIP_DATESUBDATE
  },
  {
    key: 'DATEDIF',
    expression: 'DATEDIF(start_date,end_date,unit)',
    title: TOOLTIP_DATEDIF
  },
  {
    key: 'DATETONUMBER',
    expression: 'DATETONUMBER(date)',
    title: TOOLTIP_DATETONUMBER
  },
  {
    key: 'NOW',
    expression: 'NOW()',
    title: TOOLTIP_NOW
  },
  {
    key: 'TODAY',
    expression: 'TODAY()',
    title: TOOLTIP_TODAY
  },
  {
    key: 'DAY',
    expression: 'DAY(date)',
    title: TOOLTIP_DAY
  },
  {
    key: 'HOUR',
    expression: 'HOUR(date)',
    title: TOOLTIP_HOUR
  },
  {
    key: 'MINUTE',
    expression: 'MINUTE(date)',
    title: TOOLTIP_MINUTE
  },
  {
    key: 'SECOND',
    expression: 'MINUTE(date)',
    title: TOOLTIP_SECOND
  },
  {
    key: 'MONTH',
    expression: 'MONTH(date)',
    title: TOOLTIP_MONTH
  },
  {
    key: 'YEAR',
    expression: 'YEAR(date)',
    title: TOOLTIP_YEAR
  },
  {
    key: 'WEEK',
    expression: 'WEEK(date)',
    title: TOOLTIP_WEEK
  },
  {
    key: 'WEEKDAY',
    expression: 'WEEK(date)',
    title: TOOLTIP_WEEKDAY
  },
  {
    key: 'MONTHDELTA',
    expression: 'MONTHDELTA(date,deltamonths)',
    title: TOOLTIP_MONTHDELTA
  },
  {
    key: 'YEARDELTA',
    expression: 'YEARDELTA(date,deltayears)',
    title: TOOLTIP_YEARDELTA
  },
  {
    key: 'DAYSOFYEAR',
    expression: 'DAYSOFYEAR(year)',
    title: TOOLTIP_DAYSOFYEAR
  },
  {
    key: 'DATEVALUE',
    expression: 'DATEVALUE(string)',
    title: TOOLTIP_DATEVALUE
  },
  {
    key: 'DATETIMEVALUE',
    expression: 'DATETIMEVALUE(string)',
    title: TOOLTIP_DATETIMEVALUE
  },
  {
    key: 'DATETIMETOTIME',
    expression: 'DATETIMETOTIME(date_time)',
    title: TOOLTIP_DATETIMETOTIME
  },
  {
    key: 'DATETIMETODATE',
    expression: 'DATETIMETODATE(date_time)',
    title: TOOLTIP_DATETIMETODATE
  }
]

export const INSERT_FUNCTION_MENU = [
  {
    title: '时间函数',
    data: TIME_FUNC
  },
  {
    title: '逻辑函数',
    data: LOGICAL_FUNC
  },
  {
    title: '计算函数',
    data: CALCULATION_FUNC
  },
  {
    title: '文本函数',
    data: TEXT_FUNC
  }
]

export const INSERT_OPERATOR_MENU = [
  {
    key: '+',
    label: '加'
  },
  {
    key: '-',
    label: '减'
  },
  {
    key: '*',
    label: '乘'
  },
  {
    key: '/',
    label: '除'
  },
  {
    key: '()',
    label: '括号'
  },
  {
    key: '>',
    label: '大于'
  },
  {
    key: '<',
    label: '小于'
  },
  {
    key: '>=',
    label: '大于等于'
  },
  {
    key: '<=',
    label: '小于等于'
  },
  {
    key: '==',
    label: '等于'
  }
]

export function getBrowserType() {
  let ua = navigator.userAgent.toLocaleLowerCase(); 
  let browserType = ''; 
  if (ua.match(/msie/) != null || ua.match(/trident/) != null) { 
      browserType = "IE"; 
      // browserVersion = ua.match(/msie ([\d.]+)/) != null ? ua.match(/msie ([\d.]+)/)[1] : ua.match(/rv:([\d.]+)/)[1]; 
  } else if (ua.match(/firefox/) != null) { 
      browserType = "Firefox"; 
  }else if (ua.match(/ubrowser/) != null) { 
      browserType = "UC"; 
  }else if (ua.match(/opera/) != null) { 
      browserType = "Opera"; 
  } else if (ua.match(/bidubrowser/) != null) { 
      browserType = "Baidu"; 
  }else if (ua.match(/metasr/) != null) { 
      browserType = "Sogou"; 
  }else if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) { 
      browserType = "QQ"; 
  }else if (ua.match(/maxthon/) != null) { 
      browserType = "Maxthon"; 
  }else if (ua.match(/chrome/) != null) { 
    let is360 = _mime("type", "application/vnd.chromium.remoting-viewer"); 
    function _mime(option, value) { 
      let mimeTypes = navigator.mimeTypes; 
      for (let mt in mimeTypes) { 
        if (mimeTypes[mt][option] === value) { 
          return true; 
        } 
      } 
      return false; 
    } 
    if(is360){ 
      browserType = '360'; 
    }
  } else if (ua.match(/safari/) != null) { 
    browserType = "Safari"; 
  } 
  return browserType;
}