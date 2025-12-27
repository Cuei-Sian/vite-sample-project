import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Modal } from "bootstrap"; //加入Bootstrap function
//前面放載入外部資源，後面放內部的
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  //設定使用Bootstrap function
  const modalRef = useRef(null);
  const customModal = useRef(null);

  //初始化
  useEffect(() => {
    (async () => {
      const res = await axios.get("https://randomuser.me/api/");
      console.log(res);
      //也可以設定在初始化後打開
      openModal();
      //也可以設定打開之後過兩秒自動關閉：
      setTimeout(() => {
        closeModal();
      }, 2000);
    })();
  }, []);

  useEffect(() => {
    // console.log(modalRef.current); //測試看有沒有選取到要的元素
    customModal.current = new Modal(modalRef.current); //要展開按鈕的方法
    // customModal.current.show(); //1.直接展開視窗的方法
  }, []);

  // 2.使用原本按鈕後觸發視窗的方法
  const openModal = () => {
    customModal.current.show();
  };
  // 3.設定一個自動關閉方法
  const closeModal = () => {
    customModal.current.hide();
  };

  // 2.使用原本按鈕後觸發視窗的方法+onClick={() => openModal()}
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => openModal()}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        ref={modalRef}
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React AAA</h1>
      <div className="card">
        <button
          className="btn btn-primary"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
