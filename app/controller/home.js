'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index.html', {
      title: '我是title111'
    });
  }

  async user() {
    const { ctx } = this;
    const result = await ctx.service.home.user();
    ctx.body = result;
  }

  async add(){
    const {ctx} = this;
    const {title} = ctx.request.body;
    ctx.body = {
      title
    };
  }
}

module.exports = HomeController;
