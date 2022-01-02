import Vue from 'vue'
import Main from './main.vue'
const SnackBarConstructor = Vue.extend(Main)

let instance
let instances = []
let seed = 1

const SnackBar = function (options) {
  if (Vue.prototype.$isServer) return
  options = options || {}
  const userOnClose = options.onClose
  const id = 'snackbar_' + seed++
  const position = options.position || 'top-right'

  options.onClose = function () {
    SnackBar.close(id, userOnClose)
  }

  instance = new SnackBarConstructor({
    data: options
  })
  instance.id = id
  instance.$mount()
  document.body.appendChild(instance.$el)
  instance.visible = true
  instance.dom = instance.$el

  let verticalOffset = options.offset || 0
  instances.filter(item => item.position === position).forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset
  instances.push(instance)
  return instance
}
SnackBar.close = function (id, userOnClose) {
  let index = -1
  const len = instances.length
  const instance = instances.filter((instance, i) => {
    if (instance.id === id) {
      index = i
      return true
    }
    return false
  })[0]
  if (!instance) return

  if (typeof userOnClose === 'function') {
    userOnClose(instance)
  }
  instances.splice(index, 1)

  if (len <= 1) return
  const position = instance.position
  const removedHeight = instance.dom.offsetHeight
  for (let i = index; i < len - 1; i++) {
    if (instances[i].position === position) {
      instances[i].dom.style[instance.verticalProperty] =
        parseInt(instances[i].dom.style[instance.verticalProperty], 10) - removedHeight - 16 + 'px'
    }
  }
}

SnackBar.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

Vue.prototype.$snackbar = SnackBar
