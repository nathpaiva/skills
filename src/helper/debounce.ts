export function debounce(time: number, callback: (param?: any) => void) {
  let timeoutInterval: NodeJS.Timeout | null = null;

  return (param: any) => {
    timeoutInterval && clearTimeout(timeoutInterval);

    timeoutInterval = setTimeout(() => {
      callback(param);
    }, time);
  };
}
