# JS-SDK说明文档

## JSSDK使用步骤

### 步骤一：引入JS文件

浏览器直接引用

```html
<script src="https://cdn.jsdelivr.net/npm/sapp-js-sdk/src/dist/sapp-js-sdk-min.js"></script>
```

npm 包管理工具引用

```javascript
// 控制台
npm install sapp-js-sdk
// import
import sapp from 'sapp-js-sdk/src/lib/sdk'
```



### 步骤二：通过ready接口来调用

```javascript
sapp.ready(() => {
  // 调用sapp.util的方法
})
```

### 接口调用说明

所有接口通过sapp对象来调用，参数是一个对象，除了每个接口本身需要的参数以外，还有以下通用参数：

1.success：调用成功时执行的回调函数。

2.fail：调用失败时执行的回调函数。

## 基础接口

### 获取token

```javascript
sapp.util.getAuthorization({
  success: () => {
    // 获取成功
  },
  fail: () => {
    // 获取失败
  }
})
```

### 登出，返回登录页面

```javascript
sapp.util.logOut()
```

### 检测App版本

```javascript
sapp.util.checkVersion()
```

### 刷新重新载入

```javascript
sapp.util.refresh()
```



## 设备相关接口

### 获取设备信息

```javascript
sapp.util.getSystemInfo({
  success: (res) => {
    const info = res.data // 获取成功
  },
  fail: (error) => {
    // 获取失败
  }
})
```

## 存储相关接口

### 保存数据

```javascript
sapp.util.cacheSetItem({
  key: '', // 保存时的key
  value: '', // 保存的值
  option: {
    time: 10, //存储的时间 当time等于0时表示永久
    type: 'M' //存储时间类型可选 'M' 'S' 'ms'
  },
  success: () => {
    // 保存成功
  },
  fail: (error) => {
    // 保存失败
  }
})
```

### 取出数据

```javascript
sapp.util.cacheGetItem({
  key: '', // key
  success: (res) => {
    const data = res.data // 获取成功
  },
  fail: (error) => {
    // 获取失败
  }
})
```

### 清空数据

```javascript
sapp.util.cacheClear({
  success: () => {
    // 清空完成
  },
  fail: (error) => {
    // 清空失败
  }
})
```



## 位置接口

### 获取地理位置

```javascript
sapp.util.getLocation({
  success: (res) => {
    const address = res.data // 获取成功
  },
  fail: (error) => {
    // 获取失败
  }
})
```

## 图像接口

### 拍照或从手机相册中选图片

```javascript
sapp.util.chooseImage({
  count: 9, // 最多选择数量
  sourceType: 'album', // 可以指定来源是相册还是相机（album，camera），默认相册
  success: (res) => {
    const files = res.data // 返回选定照片的url
  },
  fail: (error) => {
    // 获取失败
  }
})
```

## 窗口接口

### 设置状态栏样式

```javascript
sapp.util.setStatusBarStyle({ style: 'light' }) // "light" 时状态栏字体为白色，"dark" 则为黑色
```

### 设置状态栏背景色

```javascript
sapp.util.setStatusBarBackground({ color: '#F5F5F5' }) // color 为#RRGGBB值
```

### 显示安全区域

安全区域表示iPhoneX以上手机的底部会有留白

```javascript
sapp.util.showSafearea({ backgroundColor: '#F5F5F5' }) // backgroundColor 为#RRGGBB值
```

### 隐藏安全区域

```javascript
sapp.util.hideSafearea()
```

### 获取状态栏高度

```javascript
sapp.util.getStatusbarHeight({
  success: (res) => {
    const height = res.data // 获取成功
  },
  fail: (error) => {
    // 获取失败
  }
})
```

### 获取安全区域高度

```javascript
sapp.util.getSafeAreaHeight({
  success: (res) => {
    const height = res.data // 获取成功
  },
  fail: (error) => {
    // 获取失败
  }
})
```

