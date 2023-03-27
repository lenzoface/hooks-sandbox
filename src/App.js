import UseRefExample1 from "./components/UseRefExample1";
import UseRefExample2 from "./components/UseRefExample2";
// import UseRefExample3 from "./components/UseRefExample3";
import UseMemoExample from "./components/UseMemoExample";
import UseCallbackExample from "./components/UseCallbackExample";
import CustomHookExample1 from "./components/CustomHookExample1";
import CustomHookExample2 from "./components/CustomHookExample2";


function App() {
  return (
    <div className="App">
      <UseRefExample1 />
      <br/>
      <hr/>
      <br/>
      <UseRefExample2 />
      <br/>
      <hr/>
      <br/>
      {/* <UseRefExample3 /> */}
      {/* <UseMemoExample /> */}
      <br/>
      <hr/>
      <br/>
      {/* <UseCallbackExample /> */}
      <br/>
      <hr/>
      <br/>
      {/* <CustomHookExample1 /> */}
      <br/>
      <hr/>
      <br/>
      <CustomHookExample2 />
      <br/>
      <hr/>
      <br/>
    </div>
  );
}

export default App;