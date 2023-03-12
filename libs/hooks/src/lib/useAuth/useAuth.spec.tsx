import { act, renderHook } from "@testing-library/react";
import * as React from "react";

import useAuth from "./useAuth";

describe("useAuth", () => {
  it("should render successfully", () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
