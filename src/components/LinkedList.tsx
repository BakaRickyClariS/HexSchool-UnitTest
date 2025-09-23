import { useState, type JSX } from "react";

type NodeProps = {
  node: string;
  index: number;
  removeNode: (value: string) => void;
};

const Node = ({ node, index, removeNode }: NodeProps) => {
  return (
    <li
      key={index}
      className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg flex justify-between items-center"
    >
      <span className="text-gray-700">{node}</span>
      <button
        onClick={() => removeNode(node)}
        className="text-sm text-red-500 hover:underline"
      >
        Delete
      </button>
    </li>
  );
};

const LinkedList = () => {
  const [content, setContent] = useState<string>("");
  const [nodes, setNodes] = useState<string[]>([]);
  const [filteredNodes, setFilteredNodes] = useState<string[]>([]);

  const addNode = (value: string) => {
    if (value.trim() === "") return;
    setNodes([...nodes, value]);
    setContent("");
    setFilteredNodes([]);
  };

  const filterNode = (value: string) => {
    if (value.trim() === "") return;
    // setFilteredNodes(nodes.filter((node) => node == value));
    setFilteredNodes(
      nodes.reduce<string[]>((acc, node) => {
        if (node === value) acc.push(node);
        return acc;
      }, [])
    );
  };
  const removeNode = (value: string) => {
    if (value.trim() === "") return;
    // setNodes(nodes.filter((node) => node != value));
    // setFilteredNodes(filteredNodes.filter((node) => node != value));
    setNodes(
      nodes.reduce<string[]>((acc, node) => {
        if (node !== value) acc.push(node);
        return acc;
      }, [])
    );
    setFilteredNodes(
      filteredNodes.reduce<string[]>((acc, node) => {
        if (node !== value) acc.push(node);
        return acc;
      }, [])
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Linked List
        </h2>

        {/* Input + Buttons */}
        <div className="flex gap-2 mb-4">
          <input
            id="insert"
            type="text"
            value={content}
            onChange={(e) => {
              const val = e.target.value;
              setContent(val);

              if (val.trim() === "") {
                setFilteredNodes([]); // 自動恢復完整列表
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addNode(content);
              }
            }}
            placeholder="Enter node name..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => addNode(content)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
          <button
            onClick={() => filterNode(content)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Search
          </button>
        </div>

        {/* Node List */}
        <ul className="space-y-2">
          {/* {filteredNodes.length > 0
            ? filteredNodes.map((node, index) => (
                <Node
                  key={index}
                  node={node}
                  index={index}
                  removeNode={removeNode}
                />
              ))
            : nodes.map((node, index) => (
                <Node
                  key={index}
                  node={node}
                  index={index}
                  removeNode={removeNode}
                />
              ))} */}
          {filteredNodes.length > 0
            ? filteredNodes.reduce<JSX.Element[]>((acc, node, index) => {
                acc.push(
                  <Node
                    key={index}
                    node={node}
                    index={index}
                    removeNode={removeNode}
                  />
                );
                return acc;
              }, [])
            : nodes.reduce<JSX.Element[]>((acc, node, index) => {
                acc.push(
                  <Node
                    key={index}
                    node={node}
                    index={index}
                    removeNode={removeNode}
                  />
                );
                return acc;
              }, [])}
        </ul>
      </div>
    </div>
  );
};

export default LinkedList;
