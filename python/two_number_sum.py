'''
Solution 1:

Summary:
Using a set to store numbers we've seen, computing expected matches

Notes:
I decided to use a set instead of a dict (numbers_seen[number] = True)
because they have similar lookup times and we don't need the booleans.

Complexity:
Space: O(n) (worst case)
Time: O(n) (worst case)
'''
def two_number_sum_with_set(array, target_sum):
    numbers_seen = set()

    for number in array:
        match = target_sum - number

        if match in numbers_seen:
            return [number, match]

        numbers_seen.add(number)

    return []

'''
Solution 2

Summary:
Sort the array and use left-right pointers to find the matching values

Notes:
We're basically bound to the time/space of the sort that is used. This uses
Timsort (n log n time, constant space)

Slower than hash / set approach but uses less memory.

Complexity:
Space: O(1)
Time: O(n log n)
'''
def two_number_sum_with_pointers(array, target_sum):
    array.sort()

    leftIdx, rightIdx = 0, len(array) - 1

    while leftIdx < rightIdx:
        left = array[leftIdx]
        right = array[rightIdx]

        curr_sum = left + right

        if curr_sum == target_sum:
            return [left, right]
        elif curr_sum > target_sum:
            rightIdx -= 1
        else:
            leftIdx += 1

    return []