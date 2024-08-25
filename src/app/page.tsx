import StatusExmpl, { Status } from './components/statusExmpl';
import StatusWithClxs from './components/statusWithClxs';
export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p className="text-xl">Welcome to the home page.</p>
      <StatusExmpl status={Status.NotActive}>Not Active</StatusExmpl>
      <StatusExmpl status={Status.Active}>Active</StatusExmpl>
      <div>
        <StatusWithClxs status={Status.NotActive} disabled>
          Disabled
        </StatusWithClxs>
        <StatusWithClxs status={Status.Active}>Active</StatusWithClxs>
      </div>
    </main>
  );
}
