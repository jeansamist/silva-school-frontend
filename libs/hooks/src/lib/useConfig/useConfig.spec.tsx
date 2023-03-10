import { act, renderHook } from "@testing-library/react";
import * as React from "react";

import useConfig from "./useConfig";

describe("useConfig", () => {
  it("should render successfully", () => {
    const { result } = renderHook(() => useConfig());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
