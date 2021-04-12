self.onmessage = function (event) {
  const { data } = event;

  if (typeof data !== 'number') {
    throw new Error('data must be a number');
  }

  let maxCount = data;

  let timer = setInterval(function () {
    if (maxCount <= 5) {
      self.close();
      return;
    }

    if (maxCount <= 0) {
      clearInterval(timer);
      return;
    }

    maxCount--;
    self.postMessage(maxCount);
  }, 300);
};
