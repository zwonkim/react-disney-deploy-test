import { useEffect } from "react";

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      //모달창 안을 클릭했다면 return으로 끝내고
      console.log("ref.current", ref.current);
      console.log("event.target", event.target);
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      //아니라면 handler 함수 호출
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
