
export const R = {
  ok: (data) => {
    return {
      code: 0,
      data: data || '',
      msg: '执行成功'
    }
  },
  fail: (msg) => {
    return {
      code: -1,
      data: null,
      msg: msg || '执行失败'
    }
  }
}

export function customEvent(event, params) {
  params = params || {
    bubbles: false,
    cancelable: false,
    detail: undefined
  };
  const evt = document.createEvent('CustomEvent')
  evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail)
  return evt
}