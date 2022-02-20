const vue = new Vue({
  el: '#app',
  delimiters: ["{$", "$}"],
  data: {
    var1: "Variable 1 de vue",
    var2: "Variable 2 de vue"
  },
  methods: {
    alertMethod (value){
      this.var2 = `Variable 2 actualizada desde vue method con: ${value}`
    }
  },
})

const activateSocket = () => {
  let url = `ws://${window.location.host}/ws/socket-server/`
  const socket = new WebSocket(url)
  
  socket.onmessage = (e)=> {
    const data = JSON.parse(e.data);
    vue.$data.var1 = `Variable 1 actualizada desde websocket con: ${data.type}`;
    vue.alertMethod(data.message);
  }
}
