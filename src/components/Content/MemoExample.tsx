import React, {
    useMemo,
    useState,
    useEffect
} from 'react';

type Sidebar = { id: string; name: string }[];

export default function App() {
  const [state, setState] = useState<Sidebar>([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://run.mocky.io/v3/b3bcb9d2-d8e9-43c5-bfb7-0062c85be6f9"
        )
      ).json();

      setState(data);
    };

    dataFetch();
  }, []);

  return (
    <ul>
      {state.map((val) => (
        <li>{val.name}</li>
      ))}
    </ul>
  );
}