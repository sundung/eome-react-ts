// flattenArray.test.js
/**
 * @vitest-environment jsdom
 */
import { expect, test } from 'vitest'
import flattenArray from "@/utils/flattenArray.js"


test('flattens a nested array', () => {
    const nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8, [9]]];
    const flattenedArray = flattenArray(nestedArray);
    expect(flattenedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('handles empty array', () => {
    const emptyArray = [];
    const flattenedArray = flattenArray(emptyArray);
    expect(flattenedArray).toEqual([]);
});

test('handles deeply nested array', () => {
    const deeplyNestedArray = [1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]];
    const flattenedArray = flattenArray(deeplyNestedArray);
    expect(flattenedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
