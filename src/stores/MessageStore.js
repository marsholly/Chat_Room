import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';


const _allMessages = [];

class MessageStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register((action) => {
      switch (action.type) {
        case 'NEW_MESSAGE': {
          const message = action.payload.message;
          _allMessages.push(message);
          console.log('allMessages:', _allMessages)
          this.emit('CHANGE');
        }
          break;
        default:
          break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getAllMessages() {
    return _allMessages;
  }
}

export default new MessageStore();
