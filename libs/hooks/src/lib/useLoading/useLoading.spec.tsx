import { act, renderHook } from "@testing-library/react";
import * as React from "react";

import useLoading from "./useLoading";

describe("useLoading", () => {
  it("should render successfully", () => {
    const { result } = renderHook(() => useLoading());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
