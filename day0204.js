/*
There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  const total = nums1.length + nums2.length;
  const limit = Math.floor(total / 2) + 1;
  let i = 0,
    j = 0,
    prev,
    last;

  while (i + j < limit) {
    if (last !== undefined) {
      prev = last;
    }
    if (nums1[i] < nums2[j] || j === nums2.length) {
      last = nums1[i++];
    } else {
      last = nums2[j++];
    }
  }

  return total % 2 === 0 ? (prev + last) / 2 : last;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) return s;

  const checkedSubstrings = new Array(s.length)
    .fill(false)
    .map(_ => new Array(s.length).fill(false));

  let result = s[0];

  for (let currLength = 1; currLength <= s.length; currLength++) {
    for (let startIndex = 0; startIndex < s.length; startIndex++) {
      let endIndex = startIndex + currLength - 1;
      if (currLength === 1) {
        checkedSubstrings[startIndex][endIndex] = true;
        continue;
      }
      if (s[startIndex] === s[endIndex]) {
        if (currLength === 2) {
          checkedSubstrings[startIndex][endIndex] = true;
          if (currLength > result.length)
            result = s.substring(startIndex, endIndex + 1);
        } else if (checkedSubstrings[startIndex + 1][endIndex - 1]) {
          checkedSubstrings[startIndex][endIndex] = true;
          if (currLength > result.length)
            result = s.substring(startIndex, endIndex + 1);
        }
      }
    }
  }
  return result;
};
