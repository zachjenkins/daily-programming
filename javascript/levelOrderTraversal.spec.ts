import { beforeEach, describe, expect, it, MockInstance, vi } from "vitest";
import { levelOrderTraversalWithLineLength, levelOrderTraversalWithNullMarker, TreeNode } from "./levelOrderTraversal";

const tree: TreeNode = {
    left: {
        left: {
            value: 4,
        },
        right: {
            value: 5,
        },
        value: 2
    },
    right: {
        left: {
            value: 6,
        },
        right: {
            value: 7
        },
        value: 3
    },
    value: 1
}

describe('levelOrderTraversal', () => {
    let logSpy: MockInstance;

    beforeEach(() => {
        logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    })

    it('withNullMarker', () => {
        levelOrderTraversalWithNullMarker(tree);

        const calls = logSpy.mock.calls;

        expect(calls[0][0]).toBe('1');
        expect(calls[1][0]).toBe('2 3');
        expect(calls[2][0]).toBe('4 5 6 7');
    });

    it('withLineLength', () => {
        levelOrderTraversalWithLineLength(tree);

        const calls = logSpy.mock.calls;

        expect(calls[0][0]).toBe('1');
        expect(calls[1][0]).toBe('2 3');
        expect(calls[2][0]).toBe('4 5 6 7');
    });
});
