/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

const removeNode = (ele: Node) => {
    const parent = ele.parentNode;
    if (parent) {
        parent.removeChild(ele);
    }
};

const replaceNode = (replacementNode: Node, node: Node) => {
    removeNode(replacementNode);
    const parent = node.parentNode;
    if (parent) {
        parent.insertBefore(replacementNode, node);
    }
    removeNode(node);
};

const unwrap = (ele: Node) => {
    const parent = ele.parentNode;
    if (!parent) {
        return;
    }

    const range = document.createRange();
    range.selectNodeContents(ele);

    replaceNode(range.extractContents(), ele);

    // Merge the text nodes
    parent.normalize();
};

export default unwrap;