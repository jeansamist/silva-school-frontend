import { act, renderHook } from "@testing-library/react";
import * as React from "react";

import useApi from "./useApi";

describe("useApi", () => {
  it("should render successfully", () => {
    const { result } = renderHook(() => useApi());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
