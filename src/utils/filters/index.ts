/**
 * 千分位格式化
 * 1234567 -> 1,234,567
 * @param {String|Number} value
 */
export const thousands = (value, fractionDigits = 0) => {
  const regexp = /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g;
  return (Number(value).toFixed(fractionDigits) + '').replace(regexp, '$&,');
};

/**
 * 现金数字转大写
 * 1234.567 -> 壹仟贰佰叁拾肆元伍角陆分柒厘
 * @param {String|Number} value
 */
export const upDigit = (value) => {
  const digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  const fraction = ['角', '分', '厘'];
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟'],
  ];
  let s = '';
  const head = value < 0 ? '欠' : '';
  value = Math.abs(value);

  for (let i = 0; i < fraction.length; i++) {
    s += // eslint-disable-next-line no-restricted-properties
      (
        digit[Math.floor(value * 10 * Math.pow(10, i)) % 10] + fraction[i]
      ).replace(/零./, '');
  }

  s = s || '整';
  value = Math.floor(value);

  for (let i = 0; i < unit[0].length && value > 0; i++) {
    let p = '';
    for (let j = 0; j < unit[1].length && value > 0; j++) {
      p = digit[value % 10] + unit[1][j] + p;
      value = Math.floor(value / 10);
    }
    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
  }

  return (
    head +
    s
      .replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整')
  );
};

/**
 * 日期时间格式化
 * {{ Date() | formatDate }} -> 2020-09-28 15:54:52
 * {{ '2020/10/01 12:30:45' | formatDate('yyyy-MM-dd hh:mm:ss w') }} -> 2020-10-01 12:30:45 星期四
 * @param {Date} value 可以被 new Date(value) 解析的时间格式，如 Date()、2020/10/01、2020-10-01 12:00 等
 * @param {String} fmt 格式化模版
 */
export const formatDate = (value, fmt = 'yyyy-MM-dd hh:mm:ss') => {
  const date = new Date(value);
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'w+': date.getDay(), // 星期
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds(), // 毫秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const k in o) {
    if (k === 'w+') {
      if (o[k] === 0) {
        fmt = fmt.replace('w', '星期日');
      } else if (o[k] === 1) {
        fmt = fmt.replace('w', '星期一');
      } else if (o[k] === 2) {
        fmt = fmt.replace('w', '星期二');
      } else if (o[k] === 3) {
        fmt = fmt.replace('w', '星期三');
      } else if (o[k] === 4) {
        fmt = fmt.replace('w', '星期四');
      } else if (o[k] === 5) {
        fmt = fmt.replace('w', '星期五');
      } else if (o[k] === 6) {
        fmt = fmt.replace('w', '星期六');
      }
    } else if (new RegExp(`(${k})`).test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
    }
  }

  return fmt;
};
/**
 * 手机号隐私保护
 * 13866668888 -> 138****8888
 * @param {String|Number} value
 */
export const secretPhone = (value) =>
  value.toString().replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3');

/**
 * 格式化手机号
 * 13866668888 -> "138-6666-8888"
 * @param {*} value
 */
export const formatPhone = (value) =>
  value.toString().replace(/(^\d{3}|\d{4}\B)/g, '$1-');