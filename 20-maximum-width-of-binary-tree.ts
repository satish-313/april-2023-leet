class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

let a1 = new TreeNode(1);
let a2 = new TreeNode(3);
let a3 = new TreeNode(2);
let a4 = new TreeNode(5);
let a5 = new TreeNode(6);
let a6 = new TreeNode(9);
let a7 = new TreeNode(7);

a1.left = a2;
a1.right = a3;
a2.left = a4;
// a2.right = a5;
a3.right = a6;
a4.left = a5;
a6.left = a7;

function widthOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0;

    let maxWidth: bigint = 1n;
    let level: [node: TreeNode, idx: bigint][] = [[root, 0n]];

    while (level.length > 0) {
        let newLevel: [node: TreeNode, idx: bigint][] = [];

        for (let [node, i] of level) {
            if (node.left) newLevel.push([node.left, 2n * i]);

            if (node.right) newLevel.push([node.right, 2n * i + 1n]);
        }

        let first = level[0][1];
        let last = level[level.length - 1][1];
        if (maxWidth < last - first + 1n) maxWidth = last - first + 1n;
        level = newLevel;
    }

    return Number(maxWidth);
}

console.log(widthOfBinaryTree(a1));
