"use client";

import { useState, type FunctionComponent } from "react";
// import { Button } from '@/components/atoms/button/component';

export const DemoForm: FunctionComponent = () => {
  const [state, setState] = useState<"default" | "loading" | "success">(
    "default"
  );

  const handleSubmit = async () => {
    setState("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setState("success");
    setTimeout(() => setState("default"), 2000);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {/* <Button
        variant="primary"
        state={state}
        onClick={handleSubmit}
        disabled={state === 'loading'}
      >
        Submit
      </Button> */}
    </form>
  );
};
