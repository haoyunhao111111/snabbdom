// snabbdom基本使用
import {h,init} from "snabbdom"
console.log(h,init)
/**
 * init第一个参数是数组，是一个模块
 * init是一个高阶函数，返回的patch是snabbdom的核心函数
 * 作用是对比两个虚拟dom(vNode)，将两个vNode的差别把差异更新到真实dom上
 * */
let patch = init([]);
/**
 * h函数返回值是一个vnode
 * 有两个参数
 * 第一个参数   标签+选择器
 * 第二个参数  
 *    如果是字符串的话就是标签的内容
 *    如果是数组的话就是子元素
 *
 * */
let vnode = h("div#container.cls",'Hello Word');
/**
 * patch 返回值是一个vnode
 * 参数有两个
 *  第一个可以是dom元素，也可以是vnode  (如果是dom元素，patch会将dom元素转化为vnode)
 *  第二个是vnode
 * */
let app = document.getElementById('app')
let oldVnode = patch(app, vnode)

let childnodenewnode = h("div#new-vnode","hello snabbdom")



let childnode = h("div#child-node",[
  h("p","我是子元素1"),
  h("p","我是子元素2"),
  h("p","我是子元素3"),
])
patch(oldVnode,childnode)
