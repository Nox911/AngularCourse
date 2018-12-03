export function StringGeneratorFactory(stringLength: number) {
  return function () {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < stringLength; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  };
}


