export function loadMore(element: any, callback: any) {
  let timer: any;
  element.addEventListener("scroll", function() {
    timer && clearTimeout(timer);
    timer = setTimeout(function() {
      let clientHeight = element.clientHeight;
      let scrollTop = element.scrollTop;
      let scrollHeight = element.scrollHeight;
      if (clientHeight + scrollTo + 10 >= scrollHeight) {
        callback();
      }
    }, 300);
  });
}
export function downRefresh(element: any, callback: any) {
  let startY: number;
  let distance: number;
  let originalTop = element.offsetTop;
  element.addEventListener("touchstart", function(event: any) {
    if (element.offsetTop == originalTop && element.scrollTop == 0) {
      startY = event.touches[0].pageY;
      element.addEventListener("touchmove", touchMove);
      element.addEventListener("touchend", touchEnd);
    }
  });
  function touchMove(event: any) {
    let pageY = event.touches[0].pageY;
    if (pageY > startY) {
      distance = pageY - startY;
      element.style.top = originalTop + distance + "px";
    } else {
      element.removeEventListener("touchmove", touchMove);
      element.removeEventListener("touchend", touchEnd);
    }
  }
  function touchEnd(event: any) {
    element.removeEventListener("touchmove", touchMove);
    element.removeEventListener("touchend", touchEnd);
    let timer = setInterval(function() {
      if (distance < 1) {
        element.style.top = originalTop + "PX";
        clearInterval(timer);
      } else {
        element.style.top = originalTop + --distance + "px";
      }
    }, 13);
    if (distance > 10) {
      callback();
    }
  }
}
// 封装了一个方法，用来网sessionStorage存值和取值
export const store = {
  set(key: string, val: string) {
    sessionStorage.setItem(key, val);
  },
  get(key: string) {
    return sessionStorage.getItem(key);
  }
};
