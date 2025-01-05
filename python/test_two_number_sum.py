import pytest
from two_number_sum import two_number_sum_with_set, two_number_sum_with_pointers


test_data = [
    # Positive numbers
    ([3, 5, -4, 8, 11, 1, -1, 6], 10, [11, -1]),
    # Negative numbers
    ([-5, -3, -1, 0, 1, 3, 5], -8, [-5, -3]),
    # Mixed Numbers
    ([-21, 301, 12, 4, 65, 56, 210, 151, -1], 163, [12, 151]),
    # Zeroes
    ([0, 0, 2, 4], 0, [0, 0]),
    # No Solution
    ([1, 2, 3, 4, 5], 100, []),
    # Single Element
    ([5], 5, [])
]


@pytest.mark.parametrize("array, target_sum, expected", test_data)
def test_two_sum_with_set(array, target_sum, expected):
    result = two_number_sum_with_set(array, target_sum)
    assert set(result) == set(expected), f"Failed for array: {array} and target_sum: {target_sum}"


@pytest.mark.parametrize("array, target_sum, expected", test_data)
def test_two_sum_with_pointers(array, target_sum, expected):
    result = two_number_sum_with_pointers(array, target_sum)
    assert set(result) == set(expected), f"Failed for array: {array} and target_sum: {target_sum}"
