/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const result = []
    const backtrack = (str, left, right) => {

        if (str.length === 2 * n) {
            result.push(str)
            return
        }

        if (left < n) {
      backtrack(str + '(', left + 1, right)
        }
        if (right < left) {
        backtrack(str + ')', left, right + 1)
        }

    }
    backtrack("", 0, 0)
    return result
};