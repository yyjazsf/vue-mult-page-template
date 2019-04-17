/**
 *
 */

const glob = require('glob');
const path = require('path');
const fs = require('fs');

const options = require('./pages');

module.exports = {
  /**
   * 生成多页面应用的 pages 参数
   * @param {String} appFile 用于glob获取页面入口js路径
   */
  generatePages(appFile) {
    let tmp;
    let chunk;
    const pages = {};
    glob.sync(appFile).forEach((src) => {
      tmp = src.split('/');
      tmp.pop();
      chunk = tmp.slice(-1)[0].toLocaleLowerCase();

      const mayExistTeamplate = `${tmp.join('/')}/index.html`;
      const template = fs.existsSync(mayExistTeamplate) ? mayExistTeamplate : 'public/index.html';

      if (typeof options[chunk] === 'string') {
        pages[chunk] = {
          entry: src,
          template,
          title: options[chunk],
        };
      } else {
        pages[chunk] = {
          entry: src,
          template,
          ...options[chunk],
        };
      }

      tmp = null;
      chunk = null;
    });
    return pages;
  },
};
