import json

from channels.generic.websocket import WebsocketConsumer


class socketConsumer(WebsocketConsumer):
  
  def connect(self):
    self.accept()
    self.send(text_data=json.dumps({
      'type': 'connection_established',
      'message': 'Estas conectado al servidor Websocket!'
    }))