import {Button} from "antd";
import {useAppStore} from "Frontend/store/app.store";
import {useEffect, useState} from "react";

export default function HomeView() {
  const setPage = useAppStore((state) => state.setPage);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    setPage('Home');
  }, []);

  return (
    <div>
      <Button type="primary" onClick={() => setCounter(counter + 1)}>Click me</Button>
      <section>{counter}</section>
    </div>
  );
}

