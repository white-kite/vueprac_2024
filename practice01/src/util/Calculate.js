export const factorial = (n) => {
    try {
        if (n < 0) throw new Error();
        let result = 1;
        while (n > 1) {
            result *= n;
            n--;
        }
        return result;
    } catch (e) {
      console.error("@@@")
      return null;
    }
  }