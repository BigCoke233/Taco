/**
 * 打乱数组
 * @param {array} 需要打乱的数组
 * @returns array
 */

export default function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}