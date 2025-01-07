export type TreeNode = {
    left?: TreeNode;
    right?: TreeNode;
    value: number;
}

/**
 * Solution: Level Order Traversal (null marker)
 * 
 * Summary:
 * Perform a breadth-first traversal (keepin levels in mind) of a tree, to print out all values in order,
 * with each level on a new line.
 * 
 * Notes:
 * This approach uses a queue to iterate through the tree nodes level by level. A null marker is appended 
 * to the queue to identify when a level is complete. Each level's nodes are collected in `currentLine` and 
 * logged once the level ends.
 * 
 * Complexity:
 * Space: O(n)
 * Time: O(n)
 */
export function levelOrderTraversalWithNullMarker(root: TreeNode): void {
    let queue = [root, null];

    let currentLine = [];

    while (queue.length > 0) {
        const currentNode = queue.shift();

        const isEndOfLine = currentNode === null;
        if (isEndOfLine) {
            console.log(currentLine.join(' '));

            currentLine = [];

            if (queue.length > 0) {
                queue.push(null);
            }
        }
        else {
            if (currentNode?.left) {
                queue.push(currentNode.left);
            }
    
            if (currentNode?.right) {
                queue.push(currentNode.right);
            }

            currentLine.push(currentNode.value);
        }

    }
}

/**
 * Solution: Level Order Traversal with Line Length
 * 
 * Summary:
 * This is similar to the other approach, but instead of using a null marker, we track the current length of
 * queue as line lenght, and sub-iterate based on that.
 *
 * Complexity:
 * Space: O(n)
 * Time: O(n)
 */
export function levelOrderTraversalWithLineLength(root: TreeNode): void {
    const queue = [root]

    let currentLine = [];

    while (queue.length > 0) {
        const lineLength = queue.length;

        for (let i = 0; i < lineLength; i++) {
            const currentNode = queue.shift();

            currentLine.push(currentNode.value);

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);

        }

        console.log(currentLine.join(' '));
        currentLine = [];
    }
}

/**
 * Note, if you don't want to track and join an array you could just do something like
 * process.stdout.write(current)
 * process.stdout.write(current + ' ')
 * process.stdout.write('\n')
 */