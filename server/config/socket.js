

module.exports = function (app, io) {
  io.on('connection', (socket) => {
    socket.on('click', (message) => {
      console.log('message:', message);
      io.emit('action', {
        type: 'NEW_MESSAGE',
        payload: { message },
      });
    });
    socket.on('disconnect', () => {
      process.stdout.write('disconnect');
    });
  });

  app.use((req, res, next) => {
    req.io = io;
    next();
  });
};
