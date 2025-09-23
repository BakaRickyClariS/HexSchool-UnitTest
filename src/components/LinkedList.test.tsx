import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LinkedList from "./LinkedList";

describe("LinkedList", () => {
  it("adds node when pressing Enter", () => {
    render(<LinkedList />);

    const input = screen.getByPlaceholderText(
      "Enter node name..."
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "node1" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("node1")).toBeInTheDocument();
    expect(input.value).toBe("");
    expect(screen.getAllByRole("listitem").length).toBe(1);
  });

  it("deletes node when clicking Delete button", () => {
    render(<LinkedList />);

    const input = screen.getByPlaceholderText(
      "Enter node name..."
    ) as HTMLInputElement;

    // 先新增一個節點
    fireEvent.change(input, { target: { value: "node1" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("node1")).toBeInTheDocument();

    // 點擊刪除按鈕
    fireEvent.click(screen.getByText("Delete"));

    // 確認節點不在畫面上
    expect(screen.queryByText("node1")).not.toBeInTheDocument();
  });

  it("searches node correctly", () => {
    render(<LinkedList />);

    const input = screen.getByPlaceholderText(
      "Enter node name..."
    ) as HTMLInputElement;

    // 新增兩個節點
    fireEvent.change(input, { target: { value: "node1" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    fireEvent.change(input, { target: { value: "node2" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getAllByRole("listitem").length).toBe(2);

    // 搜尋 node1
    fireEvent.change(input, { target: { value: "node1" } });
    fireEvent.click(screen.getByText("Search"));

    // 只剩 node1 顯示
    expect(screen.getByText("node1")).toBeInTheDocument();
    expect(screen.queryByText("node2")).not.toBeInTheDocument();

    // 清空搜尋 → 應該恢復完整列表
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(screen.getByText("Search"));

    expect(screen.getAllByRole("listitem").length).toBe(2);
  });
});
